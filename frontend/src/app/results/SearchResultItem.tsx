import React from "react";
import Link from "next/link";
import { SearchResult } from "../../types/SearchResult";

type SearchResultItemProps = {
  result: SearchResult;
};

export default function SearchResultItem({ result }: SearchResultItemProps) {
  const poster = result.Poster !== "N/A" ? result.Poster : "/fallback-image.png"; // Add fallback image

  return (
    <Link href={`/movie/${result.imdbID}`} className="block w-full">
      <div className="flex bg-white shadow-lg rounded-lg p-4 cursor-pointer">
        <img src={poster} alt={result.Title} className="w-32 h-48 object-cover rounded" />
        <div className="ml-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold">{result.Title}</h2>
            <p className="text-gray-500">{result.Year}</p>
            <p className="text-sm text-gray-700 mt-2">{result.Type}</p>
            <p className="text-sm text-gray-700 mt-2">{result.Plot}</p>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-yellow-500 font-bold">{result.imdbRating || "N/A"}</span>
            <span className="ml-2 text-gray-500">({result.imdbVotes || "N/A"})</span>
            <span className="ml-4 text-green-500">{result.Metascore || "N/A"} Metascore</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
