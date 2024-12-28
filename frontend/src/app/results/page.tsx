"use client";
import React, { Suspense, useRef } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchResults from "./SearchResults";
import { SearchResult } from "../../types/SearchResult";
import SearchBox from "../components/SearchBox"; // Import SearchBox
import { fetchSearchResults, fetchMovieDetails } from "../../services/apiService"; // Import the service functions

export default function ResultsPage() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const lastQuery = useRef<string | null>(null);
  const lastPage = useRef<number>(1);

  useEffect(() => {
    if (query) {
      setResults([]); // Reset results when query changes
      setPage(1); // Reset page to 1 when query changes
    }
  }, [query]);

  useEffect(() => {
    if (query && (query !== lastQuery.current || page !== lastPage.current)) {
      setLoading(true);
      lastQuery.current = query;
      lastPage.current = page;
      fetchSearchResults(query, page)
        .then((data) => {
          if (data.Response === "True") {
            const newResults = data.Search.map((result: SearchResult, index: number) => ({
              ...result,
              imdbRating: "",
              imdbVotes: "",
              Metascore: "",
              Plot: "",
              Genre: "",
              key: `${result.imdbID}-${index}-${page}`, // Ensure unique key
              loading: true, // Add loading flag
            }));
            setResults((prevResults) => [...prevResults, ...newResults]);
            // Fetch movie details independently
            interface MovieDetails {
              imdbRating: string;
              imdbVotes: string;
              Metascore: string;
              Plot: string;
              Genre: string;
            }

            newResults.forEach((result: SearchResult) => {
              fetchMovieDetails(result.imdbID)
                .then((details: MovieDetails) => {
                  setResults((prevResults) =>
                    prevResults.map((r) =>
                      r.imdbID === result.imdbID
                        ? {
                            ...r,
                            imdbRating: details.imdbRating,
                            imdbVotes: details.imdbVotes,
                            Metascore: details.Metascore,
                            Plot: details.Plot,
                            Genre: details.Genre, // Add genre information
                            loading: false, // Remove loading flag
                            isDetailLoaded: true,
                          }
                        : r
                    )
                  );
                })
                .catch((error: Error) => {
                  console.error("Error fetching movie details:", error);
                });
            });
            setTotalResults(parseInt(data.totalResults, 10));
            setLoading(false);
          } else {
            setResults([]);
            setLoading(false);
          }
        })
        .catch((error) => {
          if (error.name !== "AbortError") {
            console.error("Error fetching search results:", error);
            setResults([]);
            setLoading(false);
          }
        });
    }
  }, [query, page]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container max-w-4xl mx-auto py-8 space-y-6">
        <div className="w-full flex">
          <SearchBox />
        </div>
        <h1 className="text-3xl font-bold mb-4">Search Results for &quot;{query}&quot;</h1>
        <SearchResults totalResults={totalResults} results={results} loading={loading} />
        {!loading && page < totalPages && results.length > 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </Suspense>
  );
}

