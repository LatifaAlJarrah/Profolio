import React from "react";
import Image from "next/image";
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
          src={headerImage || "/assets/images/resturantHero.png"}
          fill
          alt="Hero background"
          className="z-20 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-30"></div>
      </div>
      <div className="flex flex-col items-center justify-center text-center z-20">
        <h1
          className={`font-sedan text-6xl`}
          style={{ color: titleTextColor || "#ffffff" }}
        >
          {headerTitle?.split(" ").slice(0, 2).join(" ") || "Where Every"}{" "}
          <span className="text-yellow">{headerSubtitle || "Meal"}</span>{" "}
          {headerTitle?.split(" ").slice(2).join(" ") || "Tells a Story"}
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