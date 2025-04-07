import React from "react";
import SignInForm from "../form/SignInForm";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return <SignInForm type="signin" isOpen={isOpen} onClose={onClose} />;
}
