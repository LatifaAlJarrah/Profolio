import React from "react";
import Logo from "./Logo";

import Link from "next/link";

const navbarLinks = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

interface NavbarProps {
  className?: string;
  onClick?: () => void;
}

const Navbar = ({className, onClick}: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between py-3">
      <Logo />
      <ul
        className={`text-white text-2xl flex justify-between items-center gap-8 ${className}`}
      >
        {navbarLinks.map((item, index) => (
          <Link href={item.link} key={index} onClick={onClick}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
