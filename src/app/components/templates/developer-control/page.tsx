"use client";
import React from "react";
import Header from "../developer/Header";
import HomePage from "@/app/templates/developer/page";
import WorkPage from "@/app/templates/developer/work/page";
import ServicesPage from "@/app/templates/developer/services/page";
import ResumePage from "@/app/templates/developer/resume/page";
import ContactPage from "@/app/templates/developer/contact/page";
import { defaultTemplateDeveloperData } from "@/app/components/data/defaultTemplateDeveloperData";

const TemplatePreview = () => {

  return (
    <div className="bg-primarydev text-white font-jetBrainsMono leading-loose px-20 py-12">
      <div className="mb-12">
        <Header
          logoName={defaultTemplateDeveloperData.logoName}
          logoColor={defaultTemplateDeveloperData.logoColor}
          navigationLinks={defaultTemplateDeveloperData.navigationLinks}
          navigationLinksColor={
            defaultTemplateDeveloperData.navigationLinksColor
          }
          navbarColor={defaultTemplateDeveloperData.navbarColor}
          hireMeButton={defaultTemplateDeveloperData.hireMeButton}
        />
      </div>

      <div className="mb-12">
        <HomePage />
      </div>

      <div className="mb-12">
        <WorkPage />
      </div>

      <div className="mb-12">
        <ServicesPage />
      </div>

      <div className="mb-12">
        <ResumePage />
      </div>

      <div className="mb-12">
        <ContactPage />
      </div>
    </div>
  );
};

export default function DeveloperControlPage() {
  return <TemplatePreview />;
}