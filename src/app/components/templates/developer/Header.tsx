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
  hireMeButton?: Array<{ text: string; path: string; color: string }>;
}

const defaultNavigationLinks = [
  { name: "home", link: "/" },
  { name: "work", link: "/work" },
  { name: "services", link: "/services" },
  { name: "resume", link: "/resume" },
  { name: "contact", link: "/contact" },
];

const Header = ({
  logoName,
  logoColor,
  navigationLinks,
  navigationLinksColor,
  navbarColor,
  hireMeButton,
}: HeaderProps) => {
  return (
    <header
      className="py-8 xl:py-12 text-white px-20"
      style={{ backgroundColor: navbarColor }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold" style={{ color: logoColor }}>
            {logoName || "Luke"} <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-4">
          <Nav
            navigationLinks={navigationLinks || defaultNavigationLinks}
            navigationLinksColor={navigationLinksColor}
          />
          {(hireMeButton || []).map((button, index) => (
            <Link key={index} href={button.path}>
              <Button style={{ backgroundColor: button.color }}>
                {button.text}
              </Button>
            </Link>
          ))}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;