import React from "react";

import ResturantNavbar from "./ResturantNavbar";
import AboutResturant from "./AboutResturant";
import ResturantHeader from "./ResturantHeader";
import OurMenu from "./OurMenu";
import RandomlyChef from "./RandomlyChef";
import ContactUs from "./ContactUs";

import Image from "next/image";
import { ResturantBg } from "@/app/assets/images";
import Footer from "./Footer";

const Resturant = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        src={ResturantBg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10"
      />
      <ResturantNavbar />
      <ResturantHeader />
      <AboutResturant />
      <OurMenu />
      <RandomlyChef />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Resturant;
