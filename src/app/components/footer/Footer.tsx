import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../logo/Logo";
import NavbarList from "../list/NavbarList";

import Link from "next/link";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "flex-row space-x-10" }: FooterProps) => {
  return (
    <footer className="bg-primary text-white justify-between py-4 px-12 text-center">
      <div className="flex justify-between">
        <div className="flex justify-between w-1/2 items-center">
          <Logo />
          <NavbarList type="footer" className={className} />
        </div>
        <div className="flex gap-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-6 h-6 text-blue-600 hover:text-blue-800"
            />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-6 text-pink-500 hover:text-pink-700"
            />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="w-6 h-6 text-lightGray hover:text-charcoalGray"
            />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGoogle}
              className="w-6 h-6 text-lightGray hover:text-charcoalGray"
            />
          </Link>
        </div>
      </div>
      <div className="border border-white my-4"></div>
      <p className="mt-4 text-sm">&copy; 2025 Profolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
