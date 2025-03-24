"use client";
import React, { useState } from "react";

import LoginModal from "./LogInModal";

interface LogInButtonProps {
  className?: string;
  onClick?: () => void;
}
export default function LogInButton({ className, onClick }: LogInButtonProps) {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <button
        className={`bg-primary w-[159px] h-[45px] text-white px-4 py-2 rounded-lg text-xl ${className}`}
        onClick={onClick}
      >
        Log In
      </button>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </>
  );
}
