import React from "react";

import Image from "next/image";
import { DentistLogoo } from "@/app/assets/images";

import { Agbalumo } from "next/font/google";
const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400",
});

const DentistLogo = () => {
  return (
    <div className="flex items-center w-1/4">
      <Image src={DentistLogoo} alt="dentist logo" width={70} height={70} />
      <div className={`${agbalumo.className} text-3xl`}>
        Dent
        <span className="text-sky-400">elle</span>
      </div>
    </div>
  );
};

export default DentistLogo;
