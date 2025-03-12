import React from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Projects from "./Projects";
import TeamSection from "./TeamSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const StartUpCompany = () => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-12 mx-auto px-20">
        <div id="home">
          <Header />
        </div>
        <div id="about">
          <AboutUs />
        </div>
      </div>
      <div className="col-span-12">
        <div id="services">
          <Services />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default StartUpCompany;
