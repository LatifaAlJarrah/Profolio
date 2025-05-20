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
    <nav className="flex flex-col items-center justify-between py-2 px-4 sm:px-8 bg-gray-100 sticky top-0 z-10 sm:flex-row">
      <div className="flex items-center w-full sm:w-3/4 my-2 sm:my-0">
        <Link href="/templates">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="w-5 h-5 sm:w-6 sm:h-6 text-black"
          />
        </Link>
        <button
          onClick={onPreview}
          className="flex items-center justify-center mx-auto space-x-1 sm:space-x-2 text-white bg-primary w-[100px] sm:w-[123px] h-[30px] sm:h-[35px] rounded-lg text-base sm:text-lg border-none hover:bg-primary/60 transition-colors duration-300"
        >
          <FontAwesomeIcon
            icon={showSidebar ? faEye : faEdit}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <span>{showSidebar ? "Preview" : "Edit"}</span>
        </button>
      </div>
      <p className="text-[#9A9A9A] p-2 w-full sm:w-1/4 border-[2px] rounded-md text-sm sm:text-base text-center truncate">
        {projectName}
      </p>
    </nav>
  );
};

export default Navbar;