import React from "react";
import LogoCompany from "./LogoCompany";

const Footer = ({
  logoName,
  logoIcon,
  logoColor,
}: {
  logoName?: string;
  logoIcon?: string;
  logoColor?: string;
  }) => {


  return (
    <footer className="items-center grid grid-cols-11 bg-[#F3F3EE] px-20">
      <div className="col-span-3">
        <LogoCompany logoName={logoName} logoIcon={logoIcon} logoColor={logoColor}/>
      </div>
      <p
        className={`font-urbanist mt-4 text-2xl text-[#989898] col-span-8 text-end`}
      >
        <span className="text-[#555555] w-20 h-20">&copy;</span> 2025 Nexora.
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
