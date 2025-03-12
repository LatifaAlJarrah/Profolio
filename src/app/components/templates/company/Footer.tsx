import React from "react";
import LogoCompany from "./LogoCompany";

import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="items-center grid grid-cols-11 bg-[#F3F3EE] px-8">
      <div className="col-span-3">
        <LogoCompany />
      </div>
      <p
        className={`${urbanist.className} mt-4 text-2xl text-[#989898] col-span-8 text-end`}
      >
        <span className="text-[#555555] w-20 h-20">&copy;</span> 2025 Nexora. All
        Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
