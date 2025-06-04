"use client";
import React from "react";

<<<<<<< HEAD
=======
import LoginModal from "./LogInModal";
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
import Link from "next/link";

interface LogInButtonProps {
  className?: string;
  onClick?: () => void;
}
<<<<<<< HEAD
=======

export default function LogInButton({
  className,
}: // onClick
LogInButtonProps) {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393

export default function LogInButton({ className }: LogInButtonProps) {
  return (
    <>
      <Link
        href="/auth/signin"
        className={`bg-primary w-[159px] h-[45px] text-white px-4 py-2 rounded-lg text-xl text-center ${className}`}
<<<<<<< HEAD
      >
        Log In
      </Link>
=======
        // onClick={onClick}
      >
        Log In
      </Link>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
    </>
  );
}
