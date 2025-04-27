// import React from "react";

// import ResturantLogo from "./ResturantLogo";

// const Footer = () => {

//   return (
//     <footer className="bg-black text-white py-4 px-12 text-center">
//       <div className="flex items-center gap-x-3">
//         <div className="flex flex-col sm:w-1/2 md:w-1/3 text-start space-y-2">
//           <ResturantLogo />
//           <p>
//             upscale restaurant in Los Angeles offering distinctive French dishes
//             that blend traditional and modern flavors to provide an exceptional
//             dining experience.
//           </p>
//         </div>
       
//       </div>

//       <div className="border border-white my-4"></div>
//       <p className="mt-4 text-sm">&copy; 2025 Épicure. All Rights Reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import ResturantLogo from "./ResturantLogo";
import { TemplateData } from "@/app/types/templateData";

interface FooterProps extends TemplateData {
  footerDescription?: string;
  footerName?: string;
  titleTextColor?: string;
}

const Footer: React.FC<FooterProps> = ({
  footerDescription,
  footerName,
  titleTextColor,
}) => {
  return (
    <footer className="bg-black py-4 px-12 text-center">
      <div className="flex items-center gap-x-3">
        <div className="flex flex-col sm:w-1/2 md:w-1/3 text-start space-y-2">
          <ResturantLogo />
          <p style={{ color: titleTextColor || "#ffffff" }}>
            {footerDescription ||
              "upscale restaurant in Los Angeles offering distinctive French dishes that blend traditional and modern flavors to provide an exceptional dining experience."}
          </p>
        </div>
      </div>

      <div className="border border-white my-4"></div>
      <p
        className="mt-4 text-sm"
        style={{ color: titleTextColor || "#ffffff" }}
      >
        © 2025 {footerName || "Épicure"}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;