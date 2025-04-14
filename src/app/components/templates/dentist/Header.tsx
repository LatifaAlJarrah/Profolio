import React from "react";
import Image from "next/image";
// import { BackgroundDentelle } from "@/app/assets/images";

import ContactUs from "./ContactUs";

interface HeaderProps {
  backgroundColor: string;
  source: string;
  headline?: string;
  subheading?: string;
  contactCta?: string;
}

const Header = ({backgroundColor, source, headline, subheading, contactCta}: HeaderProps) => {
  return (
    <header
      className={`font-namdhinggo relative min-h-screen flex flex-col items-start justify-center text-center px-8 lg:pl-16 w-full sm:h-auto ${backgroundColor}`}
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent -z-10"></div>
      <Image
        src={source}
        alt="Hero"
        fill
        priority
        className="absolute top-0 left-0 -z-10 object-[70%_center] object-cover"
      />
      <div className="lg:w-1/2 md:text-justify">
        <p className="text-5xl text-white mb-4">
          {headline ||
            `Because Every Smile Tells A Story, We're Here To Help Yours Shine Brighter Than Ever With Expert Personalized`}
        </p>
        <p className="text-6xl text-sky-600 mb-4">
          {subheading || "Dental care!"}
        </p>
        <p className="text-xl text-[#828282]">
          {contactCta ||
            "Contact us now to book your appointment and experience our premium service."}
        </p>
      </div>
      <ContactUs />
    </header>
  );
};

export default Header;
