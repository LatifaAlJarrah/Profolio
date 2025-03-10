"use client";
import React from "react";
import Link from "next/link";

import DentistLogo from "./DentistLogo";
import NavbarList from "./NavbarList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

interface footerProps {
  className?: string;
}

const Footer = ({ className = "flex-col md:flex-row space-x-0 md:space-x-16 space-y-0 md:space-y-2" }: footerProps) => {
  return (
    <footer className="w-full text-center px-16 bg-blue-50 mt-12">
      <div className="flex">
        <div className="w-3/4 md:w-1/3">
          <DentistLogo />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-start text-start md:text-center w-1/3 md:w-2/3 space-y-6">
          <NavbarList className={className} />
          <div className="flex justify-between items-center text-center space-x-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-6 h-6 text-blue-600"
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6 text-red-300"
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="w-6 h-6 text-charcoalGray"
              />
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
        </div>
      </div>

      <div className="border border-[#55555580] opacity-50 my-4"></div>
      <p className={`${urbanist.className} mt-4 text-2xl text-[#989898]`}>
        &copy; 2025 Dentelle. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
