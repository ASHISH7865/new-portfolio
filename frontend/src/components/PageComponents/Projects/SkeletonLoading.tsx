import React from "react";

const SkeletonLoading = () => {
  return (
    <div className=" p-4 rounded-2xl shadow-border skeleton-loading">
      <div className="animate-pulse">
        <div className="rounded-2xl bg-gray-300 dark:bg-gray-700 w-full h-[300px] sm:min-h-[300px]" />
        <div className="mt-4">
          <div className="text-md sm:text-xl bg-gray-300 dark:bg-gray-700 h-6 w-3/4 mb-2 rounded" />
          <div className="text-sm sm:text-md bg-gray-300 dark:bg-gray-700 h-4 w-1/2 rounded" />
          <div className="mt-2 min-h-[40px] bg-gray-300 dark:bg-gray-700 h-4 w-full rounded" />
        </div>
        <div className="mt-4 min-h-[100px]">
          <p className="text-xs sm:text-sm bg-gray-300 dark:bg-gray-700 h-4 w-1/4 mb-2 rounded" />
          <div className="flex flex-wrap mt-2 gap-4">
            <div className="bg-gray-300 dark:bg-gray-700 h-4 w-1/4 rounded" />
            <div className="bg-gray-300 dark:bg-gray-700 h-4 w-1/4 rounded" />
            <div className="bg-gray-300 dark:bg-gray-700 h-4 w-1/4 rounded" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs sm:text-sm bg-gray-300 dark:bg-gray-700 h-4 w-1/4 mb-2 rounded" />
          <div className="flex flex-wrap mt-2 gap-4">
            <div className="bg-gray-300 dark:bg-gray-700 h-4 w-1/4 rounded" />
            <div className="bg-gray-300 dark:bg-gray-700 h-4 w-1/4 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
