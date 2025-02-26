"use client";
import React, { useState } from "react";

import SignupModal from "./SignUpModal";

export default function SignUpButton() {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  return (
    <>
      <button
        className="w-[159px] h-[45px] border border-primary text-primary px-4 py-2 rounded-lg text-xl"
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
