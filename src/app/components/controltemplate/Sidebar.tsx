// src/components/controltemplate/Sidebar.tsx
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
  onNavLinkChange: (index: number, field: string, value: string) => void; // إضافة دالة لتعديل الروابط
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
  return (
    <aside className="p-4 bg-lightGray">
      {/* General Styles Section */}
      <GeneralStylesSection templateData={templateData} onChange={onChange} />

      <BreakLine />

      {/* Navbar Content Section */}
      <NavbarSection
        templateData={templateData}
        onChange={onChange}
        onNavLinkChange={onNavLinkChange} // تمرير الدالة لتعديل الروابط
        onImageChange={onImageChange}
      />

      <BreakLine />

      {/* Header Section */}
      <HeaderSection
        templateData={templateData}
        onChange={onChange}
        onImageChange={onImageChange}
      />

      <BreakLine />

      {/* Contact Us Section */}
      <ContactUsSection templateData={templateData} onChange={onChange} />

      <BreakLine />

      {/* About Me Section */}
      <AboutMeSection
        templateData={templateData}
        onChange={onChange}
        onImageChange={onImageChange}
      />

      <BreakLine />

      {/* Services Section */}
      <ServicesSection
        templateData={templateData}
        onServiceChange={onServiceChange}
      />

      <BreakLine />

      {/* Portfolio Section */}
      <PortfolioSection
        templateData={templateData}
        onChange={onChange}
        onPortfolioSlideChange={onPortfolioSlideChange}
      />

      <BreakLine />

      {/* Testimonials Section */}
      <TestimonialsSection
        templateData={templateData}
        onTestimonialChange={onTestimonialChange}
      />

      <BreakLine />

      {/* Blog Section */}
      <BlogSection
        templateData={templateData}
        onChange={onChange}
        onBlogImageChange={onBlogImageChange}
      />

      <BreakLine />

      {/* Save, Load, and Reset Buttons */}
      <div className="flex flex-wrap justify-between mb-4 gap-2">
        <button
          onClick={onSave}
          className="text-white bg-green-600 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
        >
          Save
        </button>
        <button
          onClick={onLoad}
          className="text-white bg-blue-600 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
        >
          Load Saved Data
        </button>
        <button
          onClick={onReset}
          className="text-white bg-orange-600 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
        >
          Reset
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

