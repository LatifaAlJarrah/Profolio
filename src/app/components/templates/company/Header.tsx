import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { Company } from "@/app/assets/images";

import { TemplateData } from "@/app/types/templateData";

interface HeaderProps extends TemplateData {
  navbarColor?: string;
  logoName?: string;
  logoColor?: string;
  logoIcon?: string;
  headerTitle?: string;
  headerTagline?: string;
  headerImage?: string;
  titleTextColor?: string;
  descriptionTextColor?: string;
}
const Header: React.FC<HeaderProps> = ({
  navbarColor,
  logoName,
  logoColor,
  logoIcon,
  navigationLinks,
  navigationLinksColor,
  buttonColor,
  headerTitle,
  headerTagline,
  headerImage,
  titleTextColor,
  descriptionTextColor,
}) => {
  return (
    <section
      className="relative min-h-screen text-white grid grid-cols-12 text-center"
      id="home"
    >
      <Image
        src={headerImage || Company}
        alt="company"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="absolute top-0 left-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 bg-black -z-10 opacity-60"></div>

      <div className="col-span-12">
        <Navbar
          navbarColor={navbarColor}
          logoName={logoName}
          logoColor={logoColor}
          logoIcon={logoIcon}
          navigationLinks={navigationLinks}
          navigationLinksColor={navigationLinksColor}
        />
      </div>

      <div
        className={`font-roboto col-span-10 col-start-2 flex flex-col items-center text-center`}
      >
        <h1
          className="text-5xl font-bold max-w-4xl"
          style={{ color: titleTextColor || "#ffffff" }}
        >
          {headerTitle}
        </h1>
        <p
          className="text-3xl my-10 max-w-3xl"
          style={{ color: descriptionTextColor || "#ffffff" }}
        >
          {headerTagline}
        </p>
        <a
          href="#services"
          role="button"
          className="font-semibold transition-all duration-300 shadow-md hover:shadow-lg mt-12 rounded-lg w-1/2 text-3xl text-center py-2 px-6 border-2 hover:bg-white hover:text-navyBlue"
          style={{
            borderColor: buttonColor || "#ffcc00",
          }}
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Header;
