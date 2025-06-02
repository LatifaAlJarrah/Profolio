"use client";
import React from "react";

import Link from "next/link";

interface SignUpButtonProps {
  className?: string;
  onClick?: () => void;
}
export default function SignUpButton({ className }: SignUpButtonProps) {
  return (
    <>
      <Link
        href="/auth/signup"
        className={`w-[159px] h-[45px] border border-primary text-primary px-4 py-2 rounded-lg text-xl text-center ${className}`}
      >
        Sign Up
      </Link>
    </>
  );
}
