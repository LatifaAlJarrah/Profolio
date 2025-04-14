import React from "react";

import Image from "next/image";
import { DentistLogoo } from "@/app/assets/images";

const DentistLogo = ({ name = "Dentelle" }: { name?: string }) => {
  return (
    <div className="flex items-center w-1/4">
      <Image src={DentistLogoo} alt="dentist logo" width={70} height={70} />
      <div className={`font-agbalumo text-3xl`}>
        {name.slice(0, 4)}
        <span className="text-sky-400">{name.slice(4)}</span>
      </div>
    </div>
  );
};

export default DentistLogo;
