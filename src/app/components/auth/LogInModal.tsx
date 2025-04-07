import React from "react";
import Modal from "./Modal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        buttonName="Log In"
        description="log in to view your own projects "
        type="login"
      />
    </>
  );
}
