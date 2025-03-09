// import React from "react";

// import NavbarList from "./NavbarList";
// import DentistLogo from "./DentistLogo";

// export default function Nabvbar() {
//   return (
//     <nav
//       className="w-full bg-white flex items-center z-50 shadow-lg px-16"
//     >
//       <DentistLogo />
//       <NavbarList />
//     </nav>
//   );
// }
"use client";
import React, { useState, useEffect, useRef } from "react";
import NavbarList from "./NavbarList";
import DentistLogo from "./DentistLogo";

interface NavbarProps {
  type?: string;
  className?: string;
}

export default function Navbar({
  className = "flex-row space-x-10",
}: NavbarProps) {
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
    <nav className="flex justify-between py-4 relative w-full bg-white items-center z-50 shadow-lg px-16">
      <DentistLogo />

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden text-primary focus:outline-none"
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

      {/* Desktop Navbar */}
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-4/5">
        <NavbarList className={className} />
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
          className="flex-col space-y-6 mt-12 text-lg"
          // onClick={() => setIsSidebarOpen(false)}
        />
      </div>
    </nav>
  );
}
