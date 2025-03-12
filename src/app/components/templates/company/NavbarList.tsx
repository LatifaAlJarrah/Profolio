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
    <ul
      className={`grid grid-cols-1 lg:grid-cols-8 gap-0 lg:gap-12 text-black text-lg items-start ${className}`}
    >
      {/* {navbarList.map((item, index) => (
        <Link key={index} href={item.link}>
          <li className="hover:text-navyBlue" onClick={onClick}>
            {item.name}
          </li>
        </Link>
      ))} */}
      {navbarList.map((item, index) => (
        <Link key={index} href={item.link}>
          <li className="hover:text-navyBlue" onClick={onClick}>
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavbarList;
