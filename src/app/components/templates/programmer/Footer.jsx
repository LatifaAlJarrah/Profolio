import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link
          href={"/"}
          className={`font-righteous
         md:text-5xl font-semibold text-5xl bg-gradient-to-r from-[#497D74] to-[#2F4F4F] text-transparent bg-clip-text`}
        >
          LOGO
        </Link>
        <p className="text-[#555555] text-2xl">
          &copy; 2025 . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
