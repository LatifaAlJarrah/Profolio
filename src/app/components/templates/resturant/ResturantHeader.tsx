// import React from "react";
// import Image from "next/image";
// import ResturantHero from "@assets/images/resturantHero.png";

// export default function ResturantHeader() {
//   return (
//     <header
//       className="w-full h-screen relative flex items-center justify-center"
//       id="home"
//     >
//       <div className="absolute inset-0">
//         {" "}
//         {/* استخدم absolute inset-0 لتغطية العنصر بالكامل */}
//         <Image
//           src={ResturantHero}
//           fill
//           alt="Hero background"
//           className="-z-10 object-cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
//         {/* طبقة شفافة */}
//       </div>
//       <div className="flex flex-col items-center justify-center text-center z-10 text-white">
//         <h1 className={`font-sedan text-6xl`}>
//           Where Every <span className="text-yellow">Meal</span> Tells a Story
//         </h1>
//         <p className={`font-roboto mt-4 text-xl`}>
//           A Culinary Experience Crafted with Passion and Fresh Ingredients
//         </p>
//       </div>
//     </header>
//   );
// }
import React from "react";
import Image from "next/image";
import ResturantHero from "@assets/images/resturantHero.png";
import { TemplateData } from "@/app/types/templateData";

interface ResturantHeaderProps extends TemplateData {
  headerTitle?: string;
  headerSubtitle?: string;
  headerTagline?: string;
  headerImage?: string;
  titleTextColor?: string;
}

const ResturantHeader: React.FC<ResturantHeaderProps> = ({
  headerTitle,
  headerSubtitle,
  headerTagline,
  headerImage,
  titleTextColor,
}) => {
  return (
    <header
      className="w-full h-screen relative flex items-center justify-center"
      id="home"
    >
      <div className="absolute inset-0">
        <Image
          src={headerImage || ResturantHero}
          fill
          alt="Hero background"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex flex-col items-center justify-center text-center z-10">
        <h1
          className={`font-sedan text-6xl`}
          style={{ color: titleTextColor || "#ffffff" }}
        >
          {headerTitle || "Where Every "}{" "}
          <span className="text-yellow">{headerSubtitle || "Meal"}</span>{" "}
          {headerTitle ? "" : "Tells a Story"}
        </h1>
        <p
          className={`font-roboto mt-4 text-xl`}
          style={{ color: titleTextColor || "#ffffff" }}
        >
          {headerTagline ||
            "A Culinary Experience Crafted with Passion and Fresh Ingredients"}
        </p>
      </div>
    </header>
  );
};

export default ResturantHeader;