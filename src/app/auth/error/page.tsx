// src/app/auth/error/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold text-red-600">
          Authentication Error
        </h2>
        <p className="text-gray-700 text-center">
          {error || "An unexpected error occurred."}
        </p>
        <a href="/auth/signin" className="mt-4 block text-center text-blue-500">
          Back to Sign In
        </a>
      </div>
    </div>
  );
}
