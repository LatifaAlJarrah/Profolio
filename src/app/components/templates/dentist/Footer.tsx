"use client";
// import React from "react";

// import DentistLogo from "./DentistLogo";
// import NavbarList from "./NavbarList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import { Urbanist } from "next/font/google";
// const urbanist = Urbanist({
//     weight: "400",
//     subsets: ["latin"],
// })

// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="w-full text-center px-16 bg-blue-50">
//       <div className="flex items-center justify-between">
//         <DentistLogo />
//         <NavbarList />
//         <div className="flex justify-between items-center text-center space-x-3">
//           <Link
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faFacebook}
//               className="w-6 h-6 text-blue-600"
//             />
//           </Link>
//           <Link
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faInstagram}
//               className="w-6 h-6 text-red-300"
//             />
//           </Link>
//           <Link
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faPhone}
//               className="w-6 h-6 text-charcoalGray"
//             />
//           </Link>
//           <Link
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faEnvelope}
//               className="w-6 h-6 text-charcoalGray"
//             />
//           </Link>
//         </div>
//       </div>

//       <div className="border border-[#55555580] opacity-50 my-4"></div>
//       <p className={`${urbanist.className} mt-4 text-2xl text-[#989898]`}>
//         &copy; 2025 Dentelle. All Rights Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect, useRef } from "react";
import NavbarList from "./NavbarList";
import DentistLogo from "./DentistLogo";

import Link from "next/link";

interface NavbarProps {
  type?: string;
  className?: string;
}

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-between items-center text-center space-x-3">
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-blue-600" />
      </Link>
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-red-300" />
      </Link>
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-charcoalGray" />
      </Link>
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="w-6 h-6 text-charcoalGray"
        />
      </Link>
    </div>
  );
};
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
        <SocialMediaIcons />
        {/* <div className="border border-[#55555580] opacity-50 my-4"></div>
        <p className={`${urbanist.className} mt-4 text-2xl text-[#989898]`}>
          &copy; 2025 Dentelle. All Rights Reserved.
        </p> */}
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
        <SocialMediaIcons />
      </div>
    </nav>
  );
}
