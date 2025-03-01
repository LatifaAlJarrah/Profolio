import React from "react";
import Link from "next/link";

interface NavbarListProps {
  type: string;
  className?: string;
}

const NavbarList: React.FC<NavbarListProps> = ({ type, className}) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Template", path: "/templates" },
    { name: "Your Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <ul className={`flex ${className}`}>
      {navLinks.map((link, index) => (
        <li
          key={index}
          className={`cursor-pointer ${
            type === "nav" ? "hover:text-primary" : "hover:text-black"
          }`}
        >
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;