"use client";
import React, { useState } from "react";

import LoginModal from "./LogInModal";

interface LogInButtonProps {
  className?: string;

}
export default function LogInButton({className}: LogInButtonProps) {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <button
        className={`bg-primary w-[159px] h-[45px] text-white px-4 py-2 rounded-lg text-xl ${className}`}
        onClick={() => setLoginModalOpen(true)}
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
