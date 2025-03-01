import Modal from "./Modal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonName?: string;
  description?: string;
}

export default function LoginModal({
  isOpen,
  onClose,
  buttonName = "Log In",
  description = "log in to view your own projects ",
}: LoginModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      buttonName={buttonName}
      description={description}
    />
  );
}import React from "react";
