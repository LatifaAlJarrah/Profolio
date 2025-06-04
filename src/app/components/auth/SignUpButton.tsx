"use client";
import React from "react";

<<<<<<< HEAD
=======
import SignupModal from "./SignUpModal";
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
import Link from "next/link";

interface SignUpButtonProps {
  className?: string;
  onClick?: () => void;
}
<<<<<<< HEAD
export default function SignUpButton({ className }: SignUpButtonProps) {
=======
export default function SignUpButton({
  className,
}: // onClick,
SignUpButtonProps) {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
  return (
    <>
      <Link
        href="/auth/signup"
        className={`w-[159px] h-[45px] border border-primary text-primary px-4 py-2 rounded-lg text-xl text-center ${className}`}
<<<<<<< HEAD
      >
        Sign Up
      </Link>
=======
        // onClick={onClick}
      >
        Sign Up
      </Link>

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setSignupModalOpen(false)}
      />
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
    </>
  );
}
