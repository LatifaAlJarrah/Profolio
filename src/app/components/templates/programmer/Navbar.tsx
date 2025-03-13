// import React from "react";
// import Logo from "./Logo";

// import Link from "next/link";

// const navbarLinks = [
//   { name: "About", link: "#about" },
//   { name: "Projects", link: "#projects" },
//   { name: "Contact", link: "#contact" },
// ];

// interface NavbarProps {
//   className?: string;
//   onClick?: () => void;
// }

// const Navbar = ({className, onClick}: NavbarProps) => {
//   return (
//     <nav className="flex items-center justify-between py-3">
//       <Logo />
//       <ul
//         className={`text-white text-2xl flex justify-between items-center gap-8 ${className}`}
//       >
//         {navbarLinks.map((item, index) => (
//           <Link href={item.link} key={index} onClick={onClick}>
//             <li>{item.name}</li>
//           </Link>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
// import { Righteous } from "next/font/google";

// const righteous = Righteous({
//   weight: "400",
//   subsets: ["latin"],
// });

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 px-20">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between">
        <Link
          href={"/"}
          className={`font-righteous
 md:text-5xl font-semibold text-5xl bg-gradient-to-r from-[#497D74] to-[#2F4F4F] text-transparent bg-clip-text`}
        >
          LOGO
        </Link>
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
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
