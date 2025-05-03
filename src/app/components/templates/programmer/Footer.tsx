"use client";
import React from "react";
import Logo from "./Logo";

interface FooterProps {
  logoName?: string;
  logoColor?: string;
}

const Footer: React.FC<FooterProps> = ({ logoName, logoColor }) => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Logo logoColor={logoColor} logoName={logoName} />

        <p className="text-[#555555] text-2xl">
          &copy; 2025 . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
