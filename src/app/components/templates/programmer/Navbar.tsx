"use client";
import React, { useState } from "react";

import { usePathname } from "next/navigation";

import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Logo from "./Logo";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface NavbarProps {
  navbarColor?: string;
  logoName?: string;
  logoColor?: string;
  navigationLinks?: Array<{ name: string; link: string }>;
  navigationLinksColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  navbarColor = "#121212",
  logoName = "LOGO",
  logoColor,
  navigationLinks = [],
  navigationLinksColor = "#ffffff",
}) => {
  const pathname = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const isControlPage = pathname === "/controltemplate";

  return (
    <nav
      className={`${
        isControlPage ? "" : "fixed top-0 left-0 right-0"
      } border border-[#33353F] z-10 bg-[#121212] bg-opacity-100 px-20`}
      style={{ backgroundColor: navbarColor }}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between">
        <Logo logoColor={logoColor} logoName={logoName} />
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.link}
                  title={link.name}
                  navigationLinksColor={navigationLinksColor}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navigationLinks} /> : null}
    </nav>
  );
};

export default Navbar;
