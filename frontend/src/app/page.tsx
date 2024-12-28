"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/results?query=${searchTerm}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 sm:p-12">
      <div className="w-full sm:w-1/2 flex">
        <input
          type="text"
          placeholder="Search IMDb"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 rounded-l-md p-4 w-full outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-500 text-black px-4 py-2 rounded-r-md font-bold hover:bg-yellow-600"
        >
          Search
        </button>
      </div>
    </div>
  );
}
