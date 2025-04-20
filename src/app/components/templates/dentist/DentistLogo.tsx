import React from "react";
import Image from "next/image";

const DentistLogo = ({
  name = "Dentelle",
  logoIcon,
  logoColor,
}: {
  name?: string;
  logoIcon?: string;
  logoColor?: string;
}) => {
  return (
    <div className="flex items-center w-1/4 gap-2">
      <div className="relative w-16 h-16">
        <Image
          src={logoIcon ? logoIcon : "/assets/images/dentist/logo.png"}
          alt="dentist logo"
          fill
          className="rounded-full"
        />
      </div>
      <div
        className="text-2xl md:text-3xl leading-none"
        style={{ color: logoColor }}
      >
        {name}
      </div>
    </div>
  );
};

export default DentistLogo;
