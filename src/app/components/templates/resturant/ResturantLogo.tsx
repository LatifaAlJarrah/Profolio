// import React from 'react'

// const ResturantLogo = () => {
//   return (
//     <div className="text-3xl font-normal text-yellow font-showcard">
//       Ép
//       <span className="text-white">icure</span>
//     </div>
//   );
// }

// export default ResturantLogo

import React from "react";
import { TemplateData } from "@/app/types/templateData";

interface ResturantLogoProps extends TemplateData {
  logoName?: string;
  logoColor?: string;
}

const ResturantLogo: React.FC<ResturantLogoProps> = ({
  logoName,
  logoColor,
}) => {
  const name = logoName || "Épicure";
  const firstPart = name.substring(0, 2);
  const secondPart = name.substring(2);

  return (
    <div className="text-3xl font-normal font-showcard">
      <span style={{ color: logoColor || "#ffcc00" }}>{firstPart}</span>
      <span style={{ color: "#ffffff" }}>{secondPart}</span>
    </div>
  );
};

export default ResturantLogo;
