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
    <main className="grid grid-cols-12 ">
      <div className="col-span-12 ">
        <Header />
        <AboutUs />
        <Services />
        <Projects />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default StartUpCompany;
