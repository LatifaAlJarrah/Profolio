// src/app/components/templates/developer/Nav.jsx
"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  navigationLinks?: Array<{ name: string; link: string }>;
  navigationLinksColor?: string;
}

const Nav = ({navigationLinks, navigationLinksColor}: NavProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {navigationLinks?.map((link, index) => {
        return (
          <Link
            href={link.link}
            key={index}
            className={`${
              link.link === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
            style={{ color: navigationLinksColor }} // تطبيق اللون على الـ ul
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
