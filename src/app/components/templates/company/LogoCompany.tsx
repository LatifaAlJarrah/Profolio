import React from "react";
import Image from "next/image";

const LogoCompany = ({
  logoName,
  logoIcon,
  logoColor,
}: {
  logoName?: string;
  logoIcon?: string;
  logoColor?: string;
}) => {
  const name = logoName || "Nexora";
  const firstPart = name.substring(0, 1);
  const secondPart = name.substring(1);

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-16 h-16">
        <Image
          src={logoIcon ? logoIcon : "/assets/icons/company/companyLogo.png"}
          alt="Company Logo"
          fill
          className="rounded-full"
        />
      </div>
      <p className="font-inter text-3xl">
        <span style={{ color: logoColor || "#27445D" }}>{firstPart}</span>
        <span style={{ color: "#000000" }}>{secondPart}</span>
      </p>
    </div>
  );
};

export default LogoCompany;