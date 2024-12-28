import SearchResultItem from "./SearchResultItem";
import { SearchResult } from "../../types/SearchResult";

type SearchResultsProps = {
  results: SearchResult[];
  loading: boolean;
};

export default function SearchResults({ results, loading }: SearchResultsProps) {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-6">
      {loading ? (
        <div className="animate-pulse">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex bg-white shadow-lg rounded-lg p-4 mb-4">
              <div className="w-32 h-48 bg-gray-300 rounded"></div>
              <div className="ml-4 flex flex-col justify-between w-full">
                <div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
                <div className="flex items-center mt-4">
                  <div className="h-4 bg-gray-300 rounded w-1/6"></div>
                  <div className="ml-2 h-4 bg-gray-300 rounded w-1/12"></div>
                  <div className="ml-4 h-4 bg-gray-300 rounded w-1/6"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        results.map((result) => <SearchResultItem key={result.key} result={result} />)
      )}
    </div>
  );
}