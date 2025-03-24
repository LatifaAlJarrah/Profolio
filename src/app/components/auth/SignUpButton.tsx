"use client";
import React, { useState } from "react";

import SignupModal from "./SignUpModal";

interface SignUpButtonProps {
  className?: string;
  onClick?: () => void;
}
export default function SignUpButton({
  className,
  onClick,
}: SignUpButtonProps) {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  return (
    <>
      <button
        className={`w-[159px] h-[45px] border border-primary text-primary px-4 py-2 rounded-lg text-xl ${className}`}
        onClick={onClick}
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
