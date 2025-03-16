"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/templates/developer",
  },
  {
    name: "services",
    path: "/templates/developer/services",
  },
  {
    name: "resume",
    path: "/templates/developer/resume",
  },
  {
    name: "work",
    path: "/templates/developer/work",
  },
  {
    name: "contact",
    path: "/templates/developer/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  );
};

export default Nav;
