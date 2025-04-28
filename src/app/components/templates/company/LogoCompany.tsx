import React from "react";
import Image from "next/image";
// import { CompanyLogo } from "@/app/assets/icons";

interface CompanyLogoProps {
  logoName?: string;
  logoColor?: string;
  logoIcon?: string;
}

const LogoCompany = ({ logoName, logoColor, logoIcon } : CompanyLogoProps) => {
  const name = logoName || "Nexora";
  const firstPart = name.substring(0, 1);
  const secondPart = name.substring(1);

  return (
    <div className="flex items-center">
      <Image
        src={logoIcon ? logoIcon : "/assets/icons/company/companyLogo.png"}
        alt="Company Logo"
        width={82}
        height={82}
      />
      <p className="font-inter text-3xl">
        <span style={{ color: logoColor || "#27445D" }}>{firstPart}</span>
        <span style={{ color: "#000000" }}>{secondPart}</span>
      </p>
    </div>
  );
};

export default LogoCompany;