import React from "react";

import Image from "next/image";
import { DentistLogoo } from "@/app/assets/images";

const DentistLogo = () => {
  return (
    <div className="flex items-center w-1/4">
      <Image src={DentistLogoo} alt="dentist logo" width={70} height={70} />
      <div className={`font-agbalumo text-3xl`}>
        Dent
        <span className="text-sky-400">elle</span>
      </div>
    </div>
  );
};

export default DentistLogo;
