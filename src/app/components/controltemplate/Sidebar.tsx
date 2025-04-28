"use client";
import { useState } from "react";
import { TemplateData } from "@/app/types/templateData";
import NavbarSection from "./sidebar/dentist/NavbarSection";
import HeaderSection from "./sidebar/dentist/HeaderSection";
import ContactUsSection from "./sidebar/dentist/ContactUsSection";
import AboutMeSection from "./sidebar/dentist/AboutMeSection";
import ServicesSection from "./sidebar/dentist/ServicesSection";
import PortfolioSection from "./sidebar/dentist/PortfolioSection";
import TestimonialsSection from "./sidebar/dentist/TestimonialsSection";
import BlogSection from "./sidebar/dentist/BlogSection";

import ResturantNavbarSection from "./sidebar/restaurant/ResturantNavbarSection";
import ResturantHeaderSection from "./sidebar/restaurant/ResturantHeaderSection";
import AboutResturantSection from "./sidebar/restaurant/AboutResturantSection";
import OurMenuSection from "./sidebar/restaurant/OurMenuSection";
import ResturantContactUsSection from "./sidebar/restaurant/ContactUsSection";
import RandomlyChefSection from "./sidebar/restaurant/RandomlyChefSection";
import FooterSection from "./sidebar/restaurant/FooterSection";

import NavbarCompany from "./sidebar/company/NavbarCompany";

import GeneralStylesSection from "./shared/GeneralStylesSection";
import BreakLine from "./shared/BreakLine";
import ButtonsSection from "./shared/ButtonsSection";

interface SidebarProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
  onServiceChange: (index: number, field: string, value: string) => void;
  onPortfolioSlideChange: (index: number, field: string, value: string) => void;
  onTestimonialChange: (index: number, field: string, value: string) => void;
  onBlogImageChange: (index: number, file: File | null) => void;
  onNavLinkChange: (index: number, field: string, value: string) => void;
  onSave: () => void;
  onLoad: () => void;
  onReset: () => void;
  templateName?: string;
  onMenuItemChange?: (
    category: string,
    index: number,
    field: string,
    value: string
  ) => void;
  onMenuItemImageChange?: (
    category: string,
    index: number,
    file: File | null
  ) => void;
  onChefSpecialChange?: (index: number, field: string, value: string) => void;
  onChefSpecialImageChange?: (index: number, file: File | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  templateData,
  onChange,
  onImageChange,
  onServiceChange,
  onPortfolioSlideChange,
  onTestimonialChange,
  onBlogImageChange,
  onNavLinkChange,
  onSave,
  onLoad,
  onReset,
  templateName,
  onMenuItemChange,
  onMenuItemImageChange,
  onChefSpecialChange,
  onChefSpecialImageChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections =
    templateName === "restaurant"
      ? [
          <GeneralStylesSection
            key="general"
            templateData={templateData}
            onChange={onChange}
          />,
          <ResturantNavbarSection
            key="navbar"
            templateData={templateData}
            onChange={onChange}
            onNavLinkChange={onNavLinkChange}
          />,
          <ResturantHeaderSection
            key="header"
            templateData={templateData}
            onChange={onChange}
            onImageChange={onImageChange}
          />,
          <AboutResturantSection
            key="about"
            templateData={templateData}
            onChange={onChange}
            onImageChange={onImageChange}
          />,
          <OurMenuSection
            key="menu"
            templateData={templateData}
            onChange={onChange}
            onMenuItemChange={(category, index, field, value) =>
              onMenuItemChange?.(category, index, field, value)
            }
            onMenuItemImageChange={(category, index, file) =>
              onMenuItemImageChange?.(category, index, file)
            }
          />,
          <RandomlyChefSection
            key="chef"
            templateData={templateData}
            onChange={onChange}
            onChefSpecialChange={(index, field, value) =>
              onChefSpecialChange?.(index, field, value)
            }
            onChefSpecialImageChange={(index, file) =>
              onChefSpecialImageChange?.(index, file)
            }
          />,
          <ResturantContactUsSection
            key="contact"
            templateData={templateData}
            onChange={onChange}
          />,
          <FooterSection
            key="footer"
            templateData={templateData}
            onChange={onChange}
          />,
        ]
      : templateName === "company"
      ? [
          <GeneralStylesSection
            key="general"
            templateData={templateData}
            onChange={onChange}
          />,
          <NavbarCompany
            key="navbar"
            templateData={templateData}
            onChange={onChange}
            onNavLinkChange={onNavLinkChange}
            onImageChange={onImageChange}
          />,
        ]
      : [
          <GeneralStylesSection
            key="general"
            templateData={templateData}
            onChange={onChange}
          />,
          <NavbarSection
            key="navbar"
            templateData={templateData}
            onChange={onChange}
            onNavLinkChange={onNavLinkChange}
            onImageChange={onImageChange}
          />,
          <HeaderSection
            key="header"
            templateData={templateData}
            onChange={onChange}
            onImageChange={onImageChange}
          />,
          <ContactUsSection
            key="contact"
            templateData={templateData}
            onChange={onChange}
          />,
          <AboutMeSection
            key="about"
            templateData={templateData}
            onChange={onChange}
            onImageChange={onImageChange}
          />,
          <ServicesSection
            key="services"
            templateData={templateData}
            onServiceChange={onServiceChange}
          />,
          <PortfolioSection
            key="portfolio"
            templateData={templateData}
            onChange={onChange}
            onPortfolioSlideChange={onPortfolioSlideChange}
          />,
          <TestimonialsSection
            key="testimonials"
            templateData={templateData}
            onTestimonialChange={onTestimonialChange}
          />,
          <BlogSection
            key="blog"
            templateData={templateData}
            onChange={onChange}
            onBlogImageChange={onBlogImageChange}
          />,
        ];

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isLastSection = currentIndex === sections.length - 1;
  const isFirstSection = currentIndex === 0;

  return (
    <aside className="p-4 bg-lightGray">
      {sections[currentIndex]}

      <BreakLine />

      <div className="flex flex-wrap justify-between mb-4 gap-2 font-mono">
        {!isFirstSection && (
          <button
            onClick={handlePrevious}
            className="text-white bg-charcoalGray w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
          >
            Previous
          </button>
        )}
        {!isLastSection && (
          <button
            onClick={handleNext}
            className="text-white bg-blue-500 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
          >
            Next
          </button>
        )}
      </div>

      {isLastSection && (
        <>
          <BreakLine />
          <ButtonsSection onSave={onSave} onLoad={onLoad} onReset={onReset} />
        </>
      )}
    </aside>
  );
};

export default Sidebar;
