"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 10, 500)); // Increment by 20, but ensure it doesn't exceed 100
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen  ">
      <h2 className="text-xl  mb-4">Loading...</h2>
      <Progress value={progress} className="w-[50%]  rounded-full " />
    </div>
  );
};

export default Loading;
