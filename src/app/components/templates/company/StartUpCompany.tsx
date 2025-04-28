import React from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Projects from "./Projects";
import TeamSection from "./TeamSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

import { TemplateData } from "@/app/types/templateData";

interface StartUpCompanyProps extends TemplateData {
  fontFamilyClass?: string;
}
const StartUpCompany: React.FC<StartUpCompanyProps> = ({
  fontFamilyClass,
  navbarColor,
  fontFamily,
  logoName,
  logoColor,
  navigationLinks,
  navigationLinksColor,
  titleTextColor,
  buttonColor,
}) => {
  return (
    <main className={`grid grid-cols-12 ${fontFamilyClass}`}>
      <div className="col-span-12 ">
        <Header
          navbarColor={navbarColor}
          fontFamily={navbarColor}
          logoName={navbarColor}
          logoColor={navbarColor}
          navigationLinks={navbarColor}
          navigationLinksColor={navbarColor}
          titleTextColor={navbarColor}
          buttonColor={navbarColor}
        />
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
