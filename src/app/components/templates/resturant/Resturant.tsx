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

interface resturantProps {
  descriptionTextSize?: string;
}

const Resturant = ({descriptionTextSize = "A Culinary Experience Crafted with Passion and Fresh Ingredients"}: resturantProps) => {
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
      <section id="home">
        <ResturantHeader descriptionTextSize={descriptionTextSize} />
      </section>
      <section id="about">
        <AboutResturant />
      </section>
      <section id="menu">
        <OurMenu />
      </section>
      <RandomlyChef />
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
};

export default Resturant;
