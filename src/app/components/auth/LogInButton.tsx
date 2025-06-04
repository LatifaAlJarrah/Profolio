"use client";
import React from "react";

import Link from "next/link";

interface LogInButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function LogInButton({ className }: LogInButtonProps) {
  return (
    <>
      <Link
        href="/auth/signin"
        className={`bg-primary w-[159px] h-[45px] text-white px-4 py-2 rounded-lg text-xl text-center ${className}`}
      >
        Log In
      </Link>
    </>
  );
}
