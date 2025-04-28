// import React from "react";
// import Image from "next/image";
// import { CompanyLogo } from "@/app/assets/icons";

// import { TemplateData } from "@/app/types/templateData";

// interface CompanyLogoProps extends TemplateData {
//   logoName?: string;
//   logoColor?: string;
// }
// const LogoCompany: React.FC<CompanyLogoProps> = ({ logoName, logoColor }) => {
//    const name = logoName || "Nexora";
//    const firstPart = name.substring(0, 1);
//    const secondPart = name.substring(1);
//   return (
//     <div className="flex items-center">
//       <Image src={CompanyLogo} alt="Company Logo" width={82} height={82} />
//       <p className={`font-inter text-black text-3xl`}>
//         {/* <span className="text-navyBlue">N</span>exora */}
//         <span style={{ color: logoColor || "#27445D" }}>{firstPart}</span>
//         <span style={{ color: "#000000" }}>{secondPart}</span>
//       </p>
//     </div>
//   );
// };

// export default LogoCompany;
import React from "react";
import Image from "next/image";
import { CompanyLogo } from "@/app/assets/icons";
import { TemplateData } from "@/app/types/templateData";

interface CompanyLogoProps extends TemplateData {
  logoName?: string;
  logoColor?: string;
}

const LogoCompany: React.FC<CompanyLogoProps> = ({ logoName, logoColor }) => {
  const name = logoName || "Nexora";
  const firstPart = name.substring(0, 1);
  const secondPart = name.substring(1);

  return (
    <div className="flex items-center">
      <Image src={CompanyLogo} alt="Company Logo" width={82} height={82} />
      <p className="font-inter text-3xl">
        <span style={{ color: logoColor || "#27445D" }}>{firstPart}</span>
        <span style={{ color: "#000000" }}>{secondPart}</span>
      </p>
    </div>
  );
};

export default LogoCompany;