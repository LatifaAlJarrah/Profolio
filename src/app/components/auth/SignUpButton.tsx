"use client";
import React, { useState } from "react";

import SignupModal from "./SignUpModal";

interface SignUpButtonProps {
  className?: string;
}
export default function SignUpButton({ className }: SignUpButtonProps) {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  return (
    <>
      <button
        className={`w-[159px] h-[45px] border border-primary text-primary px-4 py-2 rounded-lg text-xl ${className}`}
        onClick={() => setSignupModalOpen(true)}
      >
        Sign Up
      </button>

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setSignupModalOpen(false)}
      />
    </>
  );
}
