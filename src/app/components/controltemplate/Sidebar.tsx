import { useState } from "react";
import { TemplateData } from "@/app/types/templateData";

import GeneralStylesSection from "./sidebar/GeneralStylesSection";
import NavbarSection from "./sidebar/NavbarSection";
import HeaderSection from "./sidebar/HeaderSection";
import ContactUsSection from "./sidebar/ContactUsSection";
import AboutMeSection from "./sidebar/AboutMeSection";
import ServicesSection from "./sidebar/ServicesSection";
import PortfolioSection from "./sidebar/PortfolioSection";
import TestimonialsSection from "./sidebar/TestimonialsSection";
import BlogSection from "./sidebar/BlogSection";

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
}

const BreakLine = () => {
  return <div className="border border-lightGrayShade2 my-4"></div>;
};

const Sidebar = ({
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
}: SidebarProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of components in display order
  const sections = [
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
      {/* Render the current section */}
      {sections[currentIndex]}

      <BreakLine />

      {/* Navigation Buttons */}
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

      {/* Save, Load, and Reset Buttons (only on last section) */}
      {isLastSection && (
        <>
          <BreakLine />
          <div className="flex flex-col justify-between mb-4 gap-4 font-mono">
            <button
              onClick={onSave}
              className="text-white bg-green-600 w-1/3 md:w-full p-2 rounded-lg text-center font-bold"
            >
              Save
            </button>
            <button
              onClick={onLoad}
              className="text-white bg-blue-500 w-1/3 md:w-full p-2 rounded-lg text-center font-bold"
            >
              Load saved data
            </button>
            <button
              onClick={onReset}
              className="text-white bg-red-600 w-1/3 md:w-full p-2 rounded-lg text-center font-bold"
            >
              Reset
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;