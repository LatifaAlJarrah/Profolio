"use client";
import React, { useState, useEffect, useRef } from "react";
import LogoCompany from "./LogoCompany";
import NavbarList from "./NavbarList";

interface NavbarProps {
  navbarColor?: string;
  logoName?: string;
  logoColor?: string;
  logoIcon?: string;
  navigationLinks?: Array<{ name: string; link: string }>;
  navigationLinksColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  navbarColor,
  logoName,
  logoColor,
  logoIcon,

  navigationLinks,
  navigationLinksColor,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // إخفاء السايدبار عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="items-center grid grid-cols-11 bg-[#F3F3EE] px-8 rounded-full shadow-md mt-8"
      style={{ backgroundColor: navbarColor }}
    >
      <div className="col-span-3">
        <LogoCompany
          logoName={logoName}
          logoColor={logoColor}
          logoIcon={logoIcon}
        />
      </div>
      <div className="col-span-8 flex justify-end lg:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden text-navyBlue focus:outline-none justify-end"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex col-span-8">
        <NavbarList
          navigationLinks={navigationLinks}
          navigationLinksColor={navigationLinksColor}
        />
      </div>

      {/* Overlay عند فتح القائمة */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {/* Drawer Menu (Sidebar) */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform z-50 flex flex-col justify-between px-6 py-6 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 text-gray-600"
        >
          ✖
        </button>

        <NavbarList
          className="flex-col space-y-6 mt-12 text-lg text-left"
          onClick={() => setIsSidebarOpen(false)}
          navigationLinks={navigationLinks}
          navigationLinksColor={navigationLinksColor}
        />
      </div>
    </nav>
  );
};

export default Navbar;
