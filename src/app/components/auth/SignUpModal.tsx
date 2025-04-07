// import Modal from "./Modal";
import SignUpForm from "../form/SignUpForm";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  return (
    <>
      {/* <Modal
        isOpen={isOpen}
        onClose={onClose}
        buttonName="Sign Up"
        description="sign up to make your own projects "
        type="signup"
      /> */}
      <SignUpForm
        isOpen={isOpen}
        onClose={onClose}
        description="sign up to make your own projects "
      />
    </>
  );
}
