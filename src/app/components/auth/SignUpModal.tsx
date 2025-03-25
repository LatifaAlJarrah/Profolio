import Modal from "./Modal";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      buttonName="Sign Up"
      description="sign up to make your own projects "
      type="signup"
    />
  );
}
