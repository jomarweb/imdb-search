import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchResult } from "../../types/SearchResult";

type SearchResultItemProps = {
  result: SearchResult;
  isDetailLoaded: boolean;
};

export default function SearchResultItem({ isDetailLoaded ,result }: SearchResultItemProps) {
  const poster = result.Poster !== "N/A" ? result.Poster : "/fallback-image.png"; // Add fallback image

  return (
    <Link href={`/movie/${result.imdbID}`} className="block w-full border default-border-color rounded-lg overflow-hidden">
      <div className="flex  shadow-lg rounded-lg p-4 cursor-pointer">
        <Image src={poster} alt={result.Title} width={300} height={445} className="w-32 h-48 object-cover rounded" />
        <div className="ml-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold">{result.Title}</h2>
            <p className="text-gray-500">{result.Year}</p>
            <p className="text-sm text-gray-400 mt-2">{result.Genre}</p>


            {(!isDetailLoaded)&& (
                  <div className="animate-pulse">
         
                  <div className="h-4 bg-gray-300 rounded  mb-2 w-1/4"></div>
  
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  </div>
              )}



         

            <p className="text-sm  mt-2">{result.Plot}</p>
          </div>

          {(isDetailLoaded)&& (
                    <div className="flex items-center mt-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500 font-bold">{result.imdbRating || "N/A"}</span>
                      <span className="ml-2 text-gray-500">IMDb Rating</span>
                    </div>
                    <div className="flex items-center ml-4">
                      <span className="text-gray-500">{result.imdbVotes || "N/A"}</span>
                      <span className="ml-2 text-gray-500">Votes</span>
                    </div>
                    <div className="flex items-center ml-4">
                      <span className="text-green-500">{result.Metascore || "N/A"}</span>
                      <span className="ml-2 text-gray-500">Metascore</span>
                    </div>
                  </div>
              )}

       
        </div>
      </div>
    </Link>
  );
}
