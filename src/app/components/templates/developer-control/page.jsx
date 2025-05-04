"use client";
import * as React from "react";

import Header from "@/app/components/templates/developer/Header";
import Home from "@/app/templates/developer/page";
import Work from "@/app/templates/developer/work/page";
import Services from "@/app/templates/developer/services/page";
import Resume from "@/app/templates/developer/resume/page";
import Contact from "@/app/templates/developer/contact/page";

const TemplatePreview = ({ templateName }) => {
  return (
    <div className="bg-primarydev text-white font-jetBrainsMono leading-loose px-20 y-12">
      <div className="mb-12">
        <Header />
      </div>

      <div className="mb-12">
        <Home />
      </div>

      <div className="mb-12">
        <Work />
      </div>

      <div className="mb-12">
        <Services />
      </div>

      <div className="mb-12">
        <Resume />
      </div>

      <div className="mb-12">
        <Contact />
      </div>
    </div>
  );
};
export default TemplatePreview;
