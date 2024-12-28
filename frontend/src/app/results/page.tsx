"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchResults from "./SearchResults";
import { SearchResult } from "../../types/SearchResult";
import SearchBox from "../components/SearchBox"; // Import SearchBox

export default function ResultsPage() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      setResults([]); // Reset results when query changes
      setPage(1); // Reset page to 1 when query changes
    }
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (query) {
      setLoading(true);
      fetch(`http://localhost:5200/api/movies/search?title=${query}&page=${page}`, { signal })
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            const fetchDetails = data.Search.map((result: SearchResult, index: number) =>
              fetch(`http://localhost:5200/api/movies/${result.imdbID}`, { signal })
                .then((response) => response.json())
                .then((details) => ({
                  ...result,
                  imdbRating: details.imdbRating,
                  imdbVotes: details.imdbVotes,
                  Metascore: details.Metascore,
                  Plot: details.Plot,
                  Genre: details.Genre, // Add genre information
                  key: `${result.imdbID}-${index}`
                }))
            );
            Promise.all(fetchDetails).then((detailedResults) => {
              setResults((prevResults) => [...prevResults, ...detailedResults]);
              setTotalResults(parseInt(data.totalResults, 10));
              setLoading(false);
            });
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

    return () => {
      controller.abort();
    };
  }, [query, page]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="container max-w-4xl mx-auto py-8 space-y-6">
      <div className="w-full flex">
        <SearchBox />
      </div>
      <h1 className="text-3xl font-bold mb-4">Search Results for &quot;{query}&quot;</h1>
      <SearchResults results={results} loading={loading} />
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
  );
}
