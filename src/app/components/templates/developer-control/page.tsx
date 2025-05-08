"use client";
import * as React from "react";
import Header from "../developer/Header";
import Home from "@/app/templates/developer/page";
import Work from "@/app/templates/developer/work/page";
import Services from "@/app/templates/developer/services/page";
import Resume from "@/app/templates/developer/resume/page";
import Contact from "@/app/templates/developer/contact/page";
import { TemplateData } from "@/app/types/templateData";

interface TemplatePreviewProps extends TemplateData {
  backgroundColor?: string;
  logoName?: string;
  logoColor?: string;
  navigationLinks?: Array<{ name: string; link: string }>;
  navigationLinksColor?: string;
  navbarColor?: string;
  hireMeButton?: { text: string; path: string; color: string };
  developerHeaderRole?: string;
  developerHeadertitle?: string;
  developerHeadername?: string;
  developerHeaderdescription?: string;
  developerHeaderImage?: string;
  developerHeaderServicesButtonColor?: string;
  developerHeaderServicesButtonText?: string;
  developerInstagramLink?: string;
  developerLinkedinLink?: string;
  developerTwitterLink?: string;
  ourAchievements?: Array<{
    number?: number;
    text?: string;
  }>;
  developerProjects?: Array<{
    num: string;
    category: string;
    title: string;
    description: string;
    stack: Array<{ name: string }>;
    image: string;
    live: string;
    github: string;
  }>;
}

const TemplatePreview = ({
  backgroundColor,
  logoName,
  logoColor,
  navigationLinks,
  navigationLinksColor,
  navbarColor,
  hireMeButton,
  developerHeaderRole,
  developerHeadertitle,
  developerHeadername,
  developerHeaderdescription,
  developerHeaderImage,
  developerHeaderServicesButtonText,
  developerHeaderServicesButtonColor,
  developerInstagramLink,
  developerLinkedinLink,
  developerTwitterLink,
  ourAchievements,
  developerProjects,
}: TemplatePreviewProps) => {
  return (
    <div className="bg-primarydev text-white font-jetBrainsMono leading-loose px-20 py-12">
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
        <Home
          backgroundColor={backgroundColor}
          developerHeaderRole={developerHeaderRole}
          developerHeadertitle={developerHeadertitle}
          developerHeadername={developerHeadername}
          developerHeaderdescription={developerHeaderdescription}
          developerHeaderImage={developerHeaderImage}
          developerHeaderServicesButtonText={
            developerHeaderServicesButtonText
          }
          developerHeaderServicesButtonColor={
            developerHeaderServicesButtonColor
          }
          developerInstagramLink={developerInstagramLink}
          developerLinkedinLink={developerLinkedinLink}
          developerTwitterLink={developerTwitterLink}
          ourAchievements={ourAchievements}
        />
      </div>

      <div className="mb-12">
        <Work developerProjects={developerProjects} />
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
