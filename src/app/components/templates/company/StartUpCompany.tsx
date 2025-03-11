import React from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Projects from "./Projects";
import TeamSection from "./TeamSection";

const StartUpCompany = () => {
  return (
    <div className="grid grid-cols-12 ">
      {/* النافبار يأخذ 9 أعمدة من أصل 12 ومتمركز */}
      <div className="col-span-12 mx-auto px-20">
        <Header />
        <AboutUs />
      </div>
      <div className="col-span-12">
        <Services />
        <Projects />
        <TeamSection />
      </div>
    </div>
  );
};

export default StartUpCompany;
