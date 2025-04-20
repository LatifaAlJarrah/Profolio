"use client";
import React from "react";
import Link from "next/link";
import DentistLogo from "./DentistLogo";
import NavbarList from "./NavbarList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface FooterProps {
  className?: string;
  navigationLinks?: Array<{ name: string; link: string }>;
  fontFamily?: string;
  fontFamilyClass?: string;
  navigationLinksColor?: string;
  backgroundColor?: string;
  logoName?: string;
  logoColor?: string;
}

const Footer = ({
  className,
  navigationLinks = [],
  fontFamily,
  fontFamilyClass,
  navigationLinksColor,
  backgroundColor,
  logoName,
  logoColor,
}: FooterProps) => {
  return (
    <footer
      className={`w-full text-center px-16 ${fontFamilyClass}`}
      style={{ backgroundColor, fontFamily }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-4/5 lg:w-1/5">
          <DentistLogo name={logoName} logoColor={logoColor} />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-4/5 gap-6 lg:gap-12">
          <NavbarList
            className={className}
            links={navigationLinks}
            textColor={navigationLinksColor}
          />
          <div className="flex gap-12 lg:gap-4">
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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6 text-red-300"
              />
            </Link>
            <Link
              href="tel:+123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="w-6 h-6 text-charcoalGray"
              />
            </Link>
            <Link
              href="mailto:example@example.com"
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
      <p className={`font-urbanist mt-4 text-2xl text-[#989898]`}>
        © 2025 <span>{logoName}</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;