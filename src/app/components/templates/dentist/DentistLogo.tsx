import React from "react";
import Image from "next/image";
import { DentistLogoo } from "@/app/assets/images";

const DentistLogo = ({
  name = "Dentelle",
  logoIcon,
  logoColor,
  className,
}: {
  name?: string;
  logoIcon?: string;
  logoColor?: string;
  className?: string;
}) => {
  return (
    <div className="flex items-center w-1/4">
      <Image
        src={logoIcon ? logoIcon : DentistLogoo}
        alt="dentist logo"
        width={70}
        height={70}
      />
      <div
        className={`text-3xl ${className ? className : "font-agbalumo"} ${
          logoColor ? logoColor : "text-black"
        } `}
      >
        {name.slice(0, 4)}
        <span className={`${logoColor ? logoColor : "text-sky-400"}`}>
          {name.slice(4)}
        </span>
      </div>
    </div>
  );
};

export default DentistLogo;
