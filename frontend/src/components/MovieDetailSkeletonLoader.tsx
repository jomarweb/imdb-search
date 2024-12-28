import React from "react";

const SkeletonElement = ({ className }: { className: string }) => (
  <div className={`bg-gray-300 rounded ${className}`}></div>
);

const MovieDetailSkeletonLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full mx-auto rounded-lg p-6 default-border-color border animate-pulse">
      <div className="flex flex-col sm:flex-row">
        <SkeletonElement className="w-full sm:w-48 h-72" />
        <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between w-full">
          <div>
            <SkeletonElement className="h-8 w-3/4 mb-2" />
            <SkeletonElement className="h-6 w-1/2 mb-2" />
            <SkeletonElement className="h-4 w-1/4 mb-2" />
            <SkeletonElement className="h-4 w-full mb-2" />
            <SkeletonElement className="h-4 w-3/4 mb-2" />
            <SkeletonElement className="h-4 w-1/2 mb-2" />
            <SkeletonElement className="h-4 w-1/4 mb-2" />
            <SkeletonElement className="h-4 w-full mb-2" />
            <SkeletonElement className="h-4 w-3/4 mb-2" />
            <SkeletonElement className="h-4 w-1/2 mb-2" />
            <SkeletonElement className="h-4 w-1/4 mb-2" />
            <SkeletonElement className="h-4 w-full mb-2" />
            <SkeletonElement className="h-4 w-3/4 mb-2" />
            <SkeletonElement className="h-4 w-1/2 mb-2" />
          </div>
          <div className="flex items-center mt-4">
            <SkeletonElement className="h-6 w-12" />
            <SkeletonElement className="ml-2 h-6 w-8" />
            <SkeletonElement className="ml-4 h-6 w-16" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetailSkeletonLoader;
