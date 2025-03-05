import React from "react";
import Link from "next/link";

interface NavbarListProps {
  className?: string;
}

const NavbarList = ({ className }: NavbarListProps) => {
  return (
    <ul className={`${className} flex space-x-6 text-white text-xl`}>
      <li>
        <Link href="#" className="hover:text-yellow">
          Home
        </Link>
      </li>
      <li>
        <Link href="#" className="hover:text-yellow">
          About Us
        </Link>
      </li>
      <li>
        <Link href="#" className="hover:text-yellow">
          Menu
        </Link>
      </li>
      <li>
        <Link href="#" className="hover:text-yellow">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavbarList;
