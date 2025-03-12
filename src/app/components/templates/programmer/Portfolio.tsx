import React from "react";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactSection from "./ContactSection";

const Portfolio = () => {
  return (
    <main className="bg-black px-20">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <ContactSection />
    </main>
  );
};

export default Portfolio;
