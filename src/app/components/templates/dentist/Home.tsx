import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import ContactUs from "./ContactUs";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Footer from "./Footer";

import Image from "next/image";
import { BackgroundDentelle } from "@/app/assets/images";

const Home = () => {
  return (
    <div className="relative h-[690px]">
      <Image
        src={BackgroundDentelle}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10"
      />
      <Navbar />
      <section id="home">
        <Header />
      </section>
      <ContactUs />
      <section id="about">
        <AboutMe />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="blog">
        <Blog />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
