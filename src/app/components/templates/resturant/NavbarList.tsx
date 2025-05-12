import React from "react";
import Link from "next/link";
import { TemplateData } from "@/app/types/templateData";

interface NavbarListProps extends TemplateData {
  className?: string;
  onClick?: () => void;
  navigationLinks?: Array<{
    name: string;
    link: string;
  }>;
  navigationLinksColor?: string;
}

const NavbarList: React.FC<NavbarListProps> = ({
  className,
  onClick,
  navigationLinks,
  navigationLinksColor,
}) => {
  return (
    <nav>
      <ul
        className={`${className} flex space-x-6 text-xl`}
        style={{ color: navigationLinksColor || "#ffffff" }}
      >
        {navigationLinks?.map((item, index) => (
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