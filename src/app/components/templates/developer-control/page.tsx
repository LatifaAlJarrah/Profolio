"use client";

import React from "react";
import Header from "../developer/Header";
import Home from "@/app/templates/developer/page";
import Work from "@/app/templates/developer/work/page";
import Services from "@/app/templates/developer/services/page";
import Resume from "@/app/templates/developer/resume/page";
import Contact from "@/app/templates/developer/contact/page";
import { TemplateData } from "@/app/types/templateData";
import { IconType } from "react-icons/lib";

interface InfoItem {
  icon: IconType;
  title?: string;
  description?: string;
}

interface DeveloperContact {
  title?: string;
  description?: string;
}

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
    icon?: string | undefined;
    value?: string | undefined;
    label?: string | undefined;
    uploadedIcon?: undefined;
    number?: number | undefined;
    text?: string | undefined;
  }>;
  developerProjects?: Array<{
    num: string;
    category: string;
    description: string;
    stack: Array<{ name: string }>;
    image: string;
    live: string;
    github: string;
  }>;
  developerServices?: Array<{
    num?: string;
    title?: string;
    description?: string;
    href?: string;
  }>;
  developerResume?: {
    about?: {
      title?: string;
      description?: string;
      info?: Array<{
        fieldName?: string;
        fieldValue?: string;
      }>;
    };
    experience?: {
      icon?: string;
      title?: string;
      description?: string;
      items?: Array<{
        company?: string;
        position?: string;
        duration?: string;
      }>;
    };
    education?: {
      icon?: string;
      title?: string;
      description?: string;
      items?: Array<{
        institution?: string;
        degree?: string;
        duration?: string;
      }>;
    };
    skills?: {
      title?: string;
      description?: string;
      skillList?: Array<{
        name?: string;
        iconType?: "component" | "image";
        icon?: React.ReactNode;
        imageUrl?: string;
      }>;
    };
  };
  developerInfo?: InfoItem[];
  developerContact?: DeveloperContact;
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
  developerServices,
  developerResume,
  developerInfo,
  developerContact,
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
          developerHeaderServicesButtonText={developerHeaderServicesButtonText}
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
        <Services developerServices={developerServices} />
      </div>

      <div className="mb-12">
        <Resume developerResume={developerResume} />
      </div>

      <div className="mb-12">
        <Contact
          developerInfo={developerInfo}
          developerContact={developerContact}
        />
      </div>
    </div>
  );
};

export default TemplatePreview;