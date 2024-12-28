import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/results?query=${query}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleKeyDown}
        placeholder="Search IMDb"
        className="border border-gray-300 text-gray-700 rounded-l-md p-4 w-full outline-none"
        autoFocus
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-500 text-black px-4 py-2 rounded-r-md font-bold hover:bg-yellow-600"
      >
        Search
      </button>
    </>
  );
}
