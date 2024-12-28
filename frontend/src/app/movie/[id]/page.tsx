"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { fetchMovieDetails } from "../../../services/apiService"; // Import the service
import { MovieDetail } from "../../../types/MovieDetail"; // Import the MovieDetail type
import MovieDetailSkeletonLoader from "../../../components/MovieDetailSkeletonLoader"; // Import the MovieDetailSkeletonLoader component

export default function MovieDetailPage() {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams() as { id: string };
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetchMovieDetails(id)
        .then((data) => {
          data.Poster = data.Poster !== "N/A" ? data.Poster : "/images/fallback-image.png"; // Add fallback image
          setMovie(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <MovieDetailSkeletonLoader />;
  }

  if (!movie) {
    return <div className="min-h-screen flex items-center justify-center">Movie not found</div>;
  }

  return (
    <div className="min-h-screen p-0 sm:p-12">
      <button onClick={() => router.back()} className="text-gray-500 underline mb-5">Back</button>
      <div className="max-w-4xl mx-auto rounded-lg p-6 default-border-color border">
        <div className="flex flex-col sm:flex-row">
          <Image src={movie.Poster} alt={movie.Title} width={300} height={445} className="w-full sm:w-48 sm:h-72 object-cover rounded" />
          <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold">{movie.Title}</h1>
              <p className="text-gray-500">{movie.Year}</p>
              <p className="text-sm mt-2">{movie.Plot}</p>
              <p className="text-sm mt-2"><strong>Genre:</strong> {movie.Genre}</p>
              <p className="text-sm mt-2"><strong>Director:</strong> {movie.Director}</p>
              <p className="text-sm mt-2"><strong>Writer:</strong> {movie.Writer}</p>
              <p className="text-sm mt-2"><strong>Actors:</strong> {movie.Actors}</p>
              <p className="text-sm mt-2"><strong>Language:</strong> {movie.Language}</p>
              <p className="text-sm mt-2"><strong>Country:</strong> {movie.Country}</p>
              <p className="text-sm mt-2"><strong>Awards:</strong> {movie.Awards}</p>
              <p className="text-sm mt-2"><strong>Box Office:</strong> {movie.BoxOffice}</p>
              <p className="text-sm mt-2"><strong>Production:</strong> {movie.Production}</p>
              <p className="text-sm mt-2"><strong>Released:</strong> {movie.Released}</p>
              <p className="text-sm mt-2"><strong>Runtime:</strong> {movie.Runtime}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4">
              <span className="text-yellow-500 font-bold">{movie.imdbRating || "N/A"}</span>
              <span className="ml-2 text-gray-500">({movie.imdbVotes || "N/A"})</span>
              <span className="mt-2 sm:mt-0 sm:ml-4 text-green-500">{movie.Metascore || "N/A"} Metascore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
