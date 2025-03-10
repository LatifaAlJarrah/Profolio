import React from "react";
import { Namdhinggo } from "next/font/google";
import Image from "next/image";
import { BackgroundDentelle } from "@/app/assets/images";

import ContactUs from "./ContactUs";

const namdhinggo = Namdhinggo({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div
      className={`${namdhinggo.className} relative min-h-screen flex flex-col items-start justify-center text-center px-8 lg:pl-16 w-full sm:h-auto`}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent -z-10"></div>
      <Image
        src={BackgroundDentelle}
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute top-0 left-0 -z-10 object-[70%_center]"
      />
      <div className="lg:w-1/2 md:text-justify">
        <p className="text-5xl text-white mb-4">
          Because Every Smile Tells A Story, We&apos;re Here To Help Yours Shine
          Brighter Than Ever With Expert Personalized
        </p>
        <p className="text-6xl text-sky-600 mb-4">Dental care!</p>
        <p className="text-xl text-[#828282]">
          Contact us now to book your appointment and experience our premium
          service.
        </p>
      </div>
      <ContactUs />
    </div>
  );
};

export default Header;
