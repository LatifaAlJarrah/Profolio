"use client";
import React from "react";

import Header from "./developer/Header";
import HomePage from "@/app/templates/developer/Home";
import WorkPage from "@/app/templates/developer/work/Work";
import ServicesPage from "@/app/templates/developer/services/Services";
import ResumePage from "@/app/templates/developer/resume/Resume";
import Contact from "@/app/templates/developer/contact/Contact";
import { TemplateData } from "@/app/types/templateData";

import { IconType } from "react-icons/lib";

interface TemplatePreviewProps extends TemplateData {
  logoName?: string;
  logoColor?: string;
  backgroundColor?: string;
  navbarColor?: string;
  fontFamily?: string;
  navigationLinks?: Array<{ name: string; link: string }>;
  navigationLinksColor?: string;
  hireMeButton?: Array<{ text: string; path: string; color: string }>;
  developerHeaderRole?: string;
  developerHeadertitle?: string;
  developerHeadername?: string;
  developerHeaderdescription?: string;
  developerHeaderImage?: string;
  developerHeaderServicesButtonText?: string;
  developerHeaderServicesButtonColor?: string;
  developerInstagramLink?: string;
  developerLinkedinLink?: string;
  developerTwitterLink?: string;
  developerSocialIconsColor?: string;
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
  developerInfo?: Array<{
    icon: IconType;
    title?: string;
    description?: string;
  }>;
  userData?: {
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
  };
  developerContact?: {
    title?: string;
    description?: string;
  };
}

const TemplatePreview = ({
  logoName,
  logoColor,
  navigationLinks,
  navigationLinksColor,
  navbarColor,
  hireMeButton,
  backgroundColor,
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
    <div className="bg-primarydev text-white font-jetBrainsMono leading-loose py-12">
        <Header
          logoName={logoName}
          logoColor={logoColor}
          navigationLinks={navigationLinks}
          navigationLinksColor={navigationLinksColor}
          navbarColor={navbarColor}
          hireMeButton={hireMeButton}
        />

      <section id="#home">
        <HomePage
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
      </section>
      <section id="work">
        <WorkPage developerProjects={developerProjects} />
      </section>
      <section id="services">
        <ServicesPage developerServices={developerServices} />
      </section>

      <section id="resume">
        <ResumePage developerResume={developerResume} />
      </section>
      <section id="contact">
        <Contact
          developerInfo={developerInfo}
          developerContact={developerContact}
        />
      </section>
    </div>
  );
};

export default TemplatePreview;
