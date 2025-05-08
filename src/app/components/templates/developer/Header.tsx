// src/app/components/templates/developer/Header.jsx
import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import Nav from "./Nav";
import MobileNav from "@/components/ui/MobileNav";

interface HeaderProps {
  logoName?: string;
  logoColor?: string;
  navigationLinks?: Array<{ name: string; link: string }>;
  navigationLinksColor?: string;
  navbarColor?: string;
  hireMeButton?: { text: string; path: string; color: string };
}

const defaultNavigationLinks = [
    { name: "home", link: "/" },
    { name: "work", link: "/work" },
    { name: "services", link: "/services" },
    { name: "resume", link: "/resume" },
    { name: "contact", link: "/contact" },
];

const Header = ({logoName, logoColor, navigationLinks, navigationLinksColor, navbarColor, hireMeButton}: HeaderProps) => {
  return (
    <header
      className="py-8 xl:py-12 text-white"
      style={{ backgroundColor: navbarColor }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold" style={{ color: logoColor }}>
            {logoName || "Luke"} <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav
            navigationLinks={navigationLinks || defaultNavigationLinks}
            navigationLinksColor={navigationLinksColor}
          />
          <Link href={hireMeButton?.path || "#contact"} className={`${hireMeButton?.color}`}>
            <Button>{ hireMeButton?.text || "Hire Me"}</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav
            // navigationLinks={navigationLinks}
            // navigationLinksColor={navigationLinksColor}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
