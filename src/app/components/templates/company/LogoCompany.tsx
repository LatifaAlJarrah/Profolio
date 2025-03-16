import React from "react";
import Image from "next/image";
import { CompanyLogo } from "@/app/assets/icons";

const LogoCompany = () => {
  return (
    <div className="flex items-center">
      <Image src={CompanyLogo} alt="Company Logo" width={82} height={82} />
      <p className={`font-inter text-black text-3xl`}>
        <span className="text-navyBlue">N</span>exora
      </p>
    </div>
  );
};

export default LogoCompany;
