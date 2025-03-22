"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavbarList from "./NavbarList";
import ResturantLogo from "./ResturantLogo";

export default function ResturantNavbar() {
  const pathname = usePathname();
  const isControlPage = pathname === "/controltemplate";
  return (
    <nav
      className={`w-full bg-black bg-opacity-20 py-4 px-6 flex justify-between items-center z-50
        ${isControlPage ? "" : "fixed top-0 left-0 right-0"}`}
    >
      <ResturantLogo />
      <NavbarList />
    </nav>
  );
}
