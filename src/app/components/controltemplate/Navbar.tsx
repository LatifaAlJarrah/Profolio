import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface NavbarProps {
  projectName: string;
  onPreview: () => void;
  showSidebar: boolean;
}

const Navbar = ({ projectName, onPreview, showSidebar }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between py-2 px-8 bg-gray-100 sticky top-0 z-10">
      <Link href="/templates">
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6 text-black" />
      </Link>
      <button
        onClick={onPreview}
        className="flex items-center justify-center space-x-2 text-white bg-primary w-[123px] h-[35px] rounded-lg text-lg border-none hover:bg-primary/60"
      >
        <FontAwesomeIcon
          icon={showSidebar ? faEye : faEdit}
          className="w-5 h-5"
        />
        <span>{showSidebar ? "Preview" : "Edit"}</span>
      </button>
      <p className="text-[#9A9A9A] p-2 w-56 border-[2px] rounded-md">
        {projectName}
      </p>
    </nav>
  );
};

export default Navbar;
