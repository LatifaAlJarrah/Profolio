import React from "react";
import Link from "next/link";

interface NavbarListProps {
  type: string;
}

const NavbarList: React.FC<NavbarListProps> = ({type}) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Template", path: "/templates" },
    { name: "Your Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <ul className="flex space-x-10 w-[541px] h-[23px] text-center">
      {navLinks.map((link, index) => (
        <li
          key={index}
          // className="flex hover:text-primary cursor-pointer"
          className={`flex ${type == "nav" ? "hover:text-primary" : "hover:text-black"} cursor-pointer`}
        >
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarList;
