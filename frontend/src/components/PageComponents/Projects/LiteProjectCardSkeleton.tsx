import React from "react";

const LiteProjectCardSkeleton = () => {
  return (
    <div className="dark:bg-transparent bg-[#e9e9e9] px-10 py-6 rounded-md shadow-border animate-pulse">
      <div className="mt-4 flex justify-between items-center">
        <div>
          {/* Skeleton for folder icon */}
          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
        <div className="flex flex-wrap mt-2 gap-4 items-center">
          {/* Skeleton for link icons */}
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          {/* Skeleton for project click icon */}
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between">
        <div>
          {/* Skeleton for project title */}
          <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-600 mb-2"></div>
          {/* Skeleton for project description */}
          <div className="w-full h-4 bg-gray-300 dark:bg-gray-600 mb-2"></div>
          <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-600"></div>
        </div>
        <div className="mt-10 items-end">
          <div className="flex flex-wrap mt-2 gap-4">
            {/* Skeleton for tech stack items */}
            <div className="w-10 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="w-10 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="w-10 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteProjectCardSkeleton;
