import Modal from "./Modal";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonName?: string;
  description?: string;
}

export default function SignupModal({
  isOpen,
  onClose,
  buttonName = "Sign Up",
  description = "sign up to make your own projects ",
}: SignupModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      buttonName={buttonName}
      description={description}
    />
  );
}

