import React from "react";
import Link from "next/link";

const navbarList = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Team", link: "#team" },
  { name: "Contact", link: "#contact" },
];

interface NavbarListProps {
  className?: string;
  onClick?: () => void;
}

const NavbarList = ({ className, onClick }: NavbarListProps) => {
  return (
    <ul className={`grid grid-cols-8 gap-12 text-black text-lg ${className}`}>
      {navbarList.map((item, index) => (
        <li key={index} className="hover:text-navyBlue">
          <Link href={item.link} onClick={onClick}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
