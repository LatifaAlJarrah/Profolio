"use client";
import * as React from "react";

import Header from "../developer/Header";
import Home from "@/app/templates/developer/page";
import Work from "@/app/templates/developer/work/page";
import Services from "@/app/templates/developer/services/page";
import Resume from "@/app/templates/developer/resume/page";
import Contact from "@/app/templates/developer/contact/page";

interface TemplatePreviewProps {
  logoName?: string;
  logoColor?: string;
  navigationLinks?: Array<{ name: string; link: string }>;
  navigationLinksColor?: string;
  navbarColor?: string;
  hireMeButton?: { text: string; path: string; color: string };
  developerHeader?: Array<{
    role: string;
    title: string;
    name: string;
    description: string;
    developerImage: string;
    dounloadCVButtonText: string;
    dounloadCVButtonPath: string;
    dounloadCVButtonColor: string;
    socialIconsPath: string;
    socialIconsColor: string;
  }>;
}
const TemplatePreview = ({
  logoName,
  logoColor,
  navigationLinks,
  navigationLinksColor,
  navbarColor,
  hireMeButton,
  developerHeader,
}: TemplatePreviewProps) => {
  return (
    <div className="bg-primarydev text-white font-jetBrainsMono leading-loose px-20 y-12">
      <div className="mb-12">
        <Header
          logoName={logoName}
          logoColor={logoColor}
          navigationLinks={navigationLinks}
          navigationLinksColor={navigationLinksColor}
          navbarColor={navbarColor}
          hireMeButton={hireMeButton}
        />
      </div>

      <div className="mb-12">
        <Home data={developerHeader} />
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
