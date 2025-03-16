import React from "react";

import ResturantNavbar from "./ResturantNavbar";
import AboutResturant from "./AboutResturant";
import ResturantHeader from "./ResturantHeader";
import OurMenu from "./OurMenu";
import RandomlyChef from "./RandomlyChef";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

import Image from "next/image";
import { ResturantBg } from "@/app/assets/images";

const Resturant = () => {
  return (
    <main className="relative min-h-screen">
      <Image
        src={ResturantBg}
        alt="Background"
        fill
        className="absolute top-0 left-0 -z-10 object-cover"
      />
      <ResturantNavbar />
      <ResturantHeader />
      <AboutResturant />
      <OurMenu />
      <RandomlyChef />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Resturant;
