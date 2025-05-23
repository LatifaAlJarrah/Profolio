// src/app/components/FacebookSignInButton.tsx
import { FC, ReactNode } from "react";
import { Button } from "./ui/button";

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
    </svg>
  );
}

interface FacebookSignInButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const FacebookSignInButton: FC<FacebookSignInButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="w-full p-2 rounded shadow-[0_4px_4px_#D8D8D8] my-2 text-white px-6 py-3 flex items-center gap-2 font-mono"
    >
      <FacebookIcon />
      {children}
    </Button>
  );
};

export default FacebookSignInButton;