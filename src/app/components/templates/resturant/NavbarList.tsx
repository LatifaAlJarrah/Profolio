import React from "react";
import Link from "next/link";

const navbarList = [
  { name: "Home", link: "#home" },
  { name: "About Us", link: "#about" },
  { name: "Menu", link: "#menu" },
  { name: "Contact", link: "#contact" },
];
interface NavbarListProps {
  className?: string;
  onClick?: () => void;
}

const NavbarList = ({ className, onClick }: NavbarListProps) => {
  return (
    <nav>
      <ul className={`${className} flex space-x-6 text-white text-xl`}>
        {navbarList.map((item, index) => (
          <Link key={index} href={item.link}>
            <li className="hover:text-yellow" onClick={onClick}>
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarList;
