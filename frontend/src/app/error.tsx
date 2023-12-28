'use client';
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    const router = useRouter();
    const handleback = () => {
        router.back();
    }
    const handleRefresh = () => {
        router.refresh();
    }
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops, something went wrong.</h1>
        <h2>{error.message}</h2>
        <p className="text-lg mb-4">
          We are sorry for the inconvenience. Please try to{" "}
          <button onClick={handleRefresh} className="text-blue-500">refresh the page</button> or <button onClick={handleback} className="text-blue-500">go back</button> to the previous page.
        </p>
        <p className="text-lg mb-8">
          If the issue persists, contact our support team at{" "}
          <Link href="mailto:support@example.com">
            {/* <a className="text-blue-500" target="_blank" rel="noopener noreferrer"> */}
              support@example.com
            {/* </a> */}
          </Link>
        </p>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300" onClick={reset}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
