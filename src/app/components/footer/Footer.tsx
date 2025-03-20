"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../logo/Logo";
import NavbarList from "../list/NavbarList";
import Link from "next/link";

export default function Footer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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
    <footer className="bg-primary text-white py-6 px-12 relative">
      <div className="flex justify-between items-center flex-wrap">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavbarList type="footer" className="flex-row space-x-10" />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Link href="https://facebook.com" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-6 h-6 text-white hover:text-blue-500"
            />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-6 text-white hover:text-pink-500"
            />
          </Link>
          <Link href="https://github.com" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-6 h-6 text-white hover:text-gray-500"
            />
          </Link>
          <Link href="https://google.com" target="_blank">
            <FontAwesomeIcon
              icon={faGoogle}
              className="w-6 h-6 text-white hover:text-red-500"
            />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white my-4"></div>

      {/* Copyright Section */}
      <p className="text-center text-sm">
        &copy; 2025 Profolio. All Rights Reserved.
      </p>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden absolute top-4 right-4 text-white focus:outline-none text-2xl mt-2"
      >
        ☰
      </button>

      {/* Sidebar Menu for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-primary p-6 transition-transform transform z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-2 right-4 text-white"
        >
          ✖
        </button>
        <NavbarList
          type="footer"
          className="flex-col space-y-4 text-center"
          onClick={() => setIsSidebarOpen(false)}
        />

        <div className="flex flex-col mt-10 gap-4">
          <Link href="https://facebook.com" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-6 h-6 text-white hover:text-blue-500"
            />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-6 text-white hover:text-pink-500"
            />
          </Link>
          <Link href="https://github.com" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-6 h-6 text-white hover:text-gray-500"
            />
          </Link>
          <Link href="https://google.com" target="_blank">
            <FontAwesomeIcon
              icon={faGoogle}
              className="w-6 h-6 text-white hover:text-red-500"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
