import React from "react";
import Image from "next/image";
import { CompanyLogo } from "@/app/assets/icons";

import { Inter } from "next/font/google";
const inter = Inter({
  weight: "700",
  subsets: ["latin"],
});

const LogoCompany = () => {
  return (
    <div className="flex items-center">
      <Image src={CompanyLogo} alt="Company Logo" width={82} height={82} />
      <p className={`${inter.className} text-black text-3xl`}>
        <span className="text-navyBlue">N</span>exora
      </p>
    </div>
  );
};

export default LogoCompany;
