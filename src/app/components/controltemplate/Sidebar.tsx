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
import CompanyHeaderSection from "./sidebar/company/HeaderSection";
import AboutCompanySection from "./sidebar/company/AboutSection";
import ServicesSectionCompany from "./sidebar/company/ServicesSection";
import ProjectsSection from "./sidebar/company/ProjectsSection";
import TeamSectionSettings from "./sidebar/company/TeamSection";
import ContactSectionSettings from "./sidebar/company/ContactSectionSettings";

import ProgrammerNavbarSection from "./sidebar/programmer/ProgrammerNavbarSection";
import ProgrammerHeaderSection from "./sidebar/programmer/ProgrammerHeaderSection";
import ProgrammerAchievementsSection from "./sidebar/programmer/ProgrammerAchievementsSection";
import ProgrammerAboutSection from "./sidebar/programmer/ProgrammerAboutSection";
import ProgrammerProjectsSection from "./sidebar/programmer/ProgrammerProjectsSection";
import ProgrammerEmailSection from "./sidebar/programmer/ProgrammerEmailSection";

import DeveloperNavbarSection from "./sidebar/developer/NavbarSection";
import DeveloperHeaderSection from "./sidebar/developer/HeaderSection";
import DeveloperAchievementsSection from "./sidebar/developer/AchievementsSection";

import GeneralStylesSection from "./shared/GeneralStylesSection";
import BreakLine from "./shared/BreakLine";
import ButtonsSection from "./shared/ButtonsSection";
import {
  FaCog,
  FaBars,
  FaHeading,
  FaInfoCircle,
  FaServicestack,
  FaFolder,
  FaUsers,
  FaUtensils,
  FaPhone,
  FaRandom,
  FaTrophy,
  FaEnvelope,
} from "react-icons/fa";

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
  onAchievementsChange: (
    index: number,
    field: string,
    value: string | number
  ) => void;
  onProjectChange: (
    index: number,
    field: string,
    value: string | string[]
  ) => void;
  onProjectImageChange: (index: number, file: File | null) => void;
  onTeamMemberChange: (index: number, field: string, value: string) => void;
  onTeamMemberImageChange: (index: number, file: File | null) => void;
  onAddTeamMember: () => void;
  onRemoveTeamMember: (index: number) => void;
  onArrayChange?: (key: string, value: string[]) => void;
  onAddAchievement?: () => void;
  onRemoveAchievement?: (index: number) => void;
  onAddSkill?: () => void;
  onRemoveSkill?: (index: number) => void;
  onAddEducation?: () => void;
  onRemoveEducation?: (index: number) => void;
  onAddCertification?: () => void;
  onRemoveCertification?: (index: number) => void;
  onAddProject?: () => void;
  onRemoveProject?: (index: number) => void;
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
  onAchievementsChange,
  onProjectChange,
  onProjectImageChange,
  onTeamMemberChange,
  onTeamMemberImageChange,
  onAddTeamMember,
  onRemoveTeamMember,
  onArrayChange,
  onAddAchievement,
  onRemoveAchievement,
  onAddSkill,
  onRemoveSkill,
  onAddEducation,
  onRemoveEducation,
  onAddCertification,
  onRemoveCertification,
  onAddProject,
  onRemoveProject,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections =
    templateName === "restaurant"
      ? [
          {
            component: (
              <GeneralStylesSection
                key="general"
                templateData={templateData}
                onChange={onChange}
              />
            ),
            title: "General Styles",
            icon: <FaCog />,
          },
          {
            component: (
              <ResturantNavbarSection
                key="navbar"
                templateData={templateData}
                onChange={onChange}
                onNavLinkChange={onNavLinkChange}
              />
            ),
            title: "Navbar",
            icon: <FaBars />,
          },
          {
            component: (
              <ResturantHeaderSection
                key="header"
                templateData={templateData}
                onChange={onChange}
                onImageChange={onImageChange}
              />
            ),
            title: "Header",
            icon: <FaHeading />,
          },
          {
            component: (
              <AboutResturantSection
                key="about"
                templateData={templateData}
                onChange={onChange}
                onImageChange={onImageChange}
              />
            ),
            title: "About Us",
            icon: <FaInfoCircle />,
          },
          {
            component: (
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
              />
            ),
            title: "Our Menu",
            icon: <FaUtensils />,
          },
          {
            component: (
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
              />
            ),
            title: "Chef Specials",
            icon: <FaRandom />,
          },
          {
            component: (
              <ResturantContactUsSection
                key="contact"
                templateData={templateData}
                onChange={onChange}
              />
            ),
            title: "Contact Us",
            icon: <FaPhone />,
          },
          {
            component: (
              <FooterSection
                key="footer"
                templateData={templateData}
                onChange={onChange}
              />
            ),
            title: "Footer",
            icon: <FaInfoCircle />,
          },
        ]
      : templateName === "company"
      ? [
          {
            component: (
              <GeneralStylesSection
                key="general"
                templateData={templateData}
                onChange={onChange}
              />
            ),
            title: "General Styles",
            icon: <FaCog />,
          },
          {
            component: (
              <NavbarCompany
                key="navbar"
                templateData={templateData}
                onChange={onChange}
                onNavLinkChange={onNavLinkChange}
                onImageChange={onImageChange}
              />
            ),
            title: "Navbar",
            icon: <FaBars />,
          },
          {
            component: (
              <CompanyHeaderSection
                key="header"
                templateData={templateData}
                onChange={onChange}
                onImageChange={onImageChange}
              />
            ),
            title: "Header",
            icon: <FaHeading />,
          },
          {
            component: (
              <AboutCompanySection
                key="about"
                templateData={templateData}
                onChange={onChange}
                onImageChange={onImageChange}
                onAchievementsChange={onAchievementsChange}
              />
            ),
            title: "About Us",
            icon: <FaInfoCircle />,
          },
          {
            component: (
              <ServicesSectionCompany
                key="services"
                templateData={templateData}
                onServiceChange={onServiceChange}
              />
            ),
            title: "Services",
            icon: <FaServicestack />,
          },
          {
            component: (
              <ProjectsSection
                key="projects"
                templateData={templateData}
                onProjectChange={(category, index, field, value) =>
                  onProjectChange(index, field, value)
                }
                onProjectImageChange={(category, index, file) =>
                  onProjectImageChange(index, file)
                }
              />
            ),
            title: "Projects",
            icon: <FaFolder />,
          },
          {
            component: (
              <TeamSectionSettings
                key="team"
                templateData={templateData}
                onTeamMemberChange={onTeamMemberChange}
                onTeamMemberImageChange={onTeamMemberImageChange}
                onAddTeamMember={onAddTeamMember}
                onRemoveTeamMember={onRemoveTeamMember}
              />
            ),
            title: "Team Section",
            icon: <FaUsers />,
          },
          {
            component: (
              <ContactSectionSettings
                key="contact"
                templateData={templateData}
                onChange={onChange}
              />
            ),
            title: "Contact Section",
            icon: <FaPhone />,
          },
        ]
      : templateName === "programmer"
      ? [
          {
            component: (
              <GeneralStylesSection
                key="general"
                templateData={templateData}
                onChange={onChange}
              />
            ),
            title: "General Styles",
            icon: <FaCog />,
          },
          {
            component: (
              <ProgrammerNavbarSection
                key="navbar"
                templateData={templateData}
                onChange={onChange}
                onNavLinkChange={onNavLinkChange}
              />
            ),
            title: "Navbar",
            icon: <FaBars />,
          },
          {
            component: (
              <ProgrammerHeaderSection
                key="header"
                templateData={templateData}
                onChange={onChange}
                onImageChange={onImageChange}
                onArrayChange={onArrayChange}
              />
            ),
            title: "Header",
            icon: <FaHeading />,
          },
          {
            component: (
              <ProgrammerAchievementsSection
                key="achievements"
                templateData={templateData}
                onAchievementsChange={onAchievementsChange}
                onAddAchievement={onAddAchievement ?? (() => {})}
                onRemoveAchievement={onRemoveAchievement ?? (() => {})}
              />
            ),
            title: "Achievements",
            icon: <FaTrophy />,
          },
          {
            component: (
              <ProgrammerAboutSection
                key="about"
                templateData={templateData}
                onChange={onChange}
                onImageChange={onImageChange}
                onArrayChange={onArrayChange}
                onAddSkill={onAddSkill}
                onRemoveSkill={onRemoveSkill}
                onAddEducation={onAddEducation}
                onRemoveEducation={onRemoveEducation}
                onAddCertification={onAddCertification}
                onRemoveCertification={onRemoveCertification}
              />
            ),
            title: "About",
            icon: <FaInfoCircle />,
          },
          {
            component: (
              <ProgrammerProjectsSection
                key="projects"
                templateData={templateData}
                onChange={onChange}
                onProjectChange={onProjectChange}
                onProjectImageChange={onProjectImageChange}
                onAddProject={onAddProject ?? (() => {})}
                onRemoveProject={onRemoveProject ?? (() => {})}
              />
            ),
            title: "Projects",
            icon: <FaFolder />,
          },
          {
            component: (
              <ProgrammerEmailSection
                key="email"
                templateData={templateData}
                onChange={onChange}
              />
            ),
            title: "Email",
            icon: <FaEnvelope />,
          },
        ]
      : templateName === "developer"
      ? [
          {
            component: (
              <GeneralStylesSection
                key="general"
                templateData={templateData}
                onChange={onChange}
              />
            ),
            title: "General Styles",
            icon: <FaCog />,
          },
          {
            component: (
              <DeveloperNavbarSection
                key="navbar"
                templateData={templateData}
                onChange={onChange}
                onNavLinkChange={onNavLinkChange}
              />
            ),
            title: "Navbar",
            icon: <FaBars />,
          },
          {
            component: (
              <DeveloperHeaderSection
                key="header"
                templateData={templateData}
                onChange={onChange}
                onImageChange={onImageChange}
              />
            ),
            title: "Header",
            icon: <FaHeading />,
          },
          {
            component: (
              <DeveloperAchievementsSection
                key="achievements"
                templateData={templateData}
                onAchievementsChange={onAchievementsChange}
                onAddAchievement={onAddAchievement ?? (() => {})}
                onRemoveAchievement={onRemoveAchievement ?? (() => {})}
              />
            ),
            title: "Achievements",
            icon: <FaTrophy />,
          },
        ]
      : [
          {
            component: (
              <GeneralStylesSection
                key="general"
                templateData={templateData}
                onChange={onChange}
              />
            ),
            title: "General Styles",
            icon: <FaCog />,
          },
          {
            component: (
              <NavbarSection
                key="navbar"
                templateData={templateData}
                onChange={onChange}
                onNavLinkChange={onNavLinkChange}
                onImageChange={onImageChange}
              />
            ),
            title: "Navbar",
            icon: <FaBars />,
          },
          {
            component: (
              <HeaderSection
                key="header"
                templateData={templateData}
                onChange={onChange}
                onImageChange={onImageChange}
              />
            ),
            title: "Header",
            icon: <FaHeading />,
          },
          {
            component: (
              <ContactUsSection
                key="contact"
                templateData={templateData}
                onChange={onChange}
              />
            ),
            title: "Contact Us",
            icon: <FaPhone />,
          },
          {
            component: (
              <AboutMeSection
                key="about"
                templateData={templateData}
                onChange={onChange}
                onImageChange={onImageChange}
              />
            ),
            title: "About Me",
            icon: <FaInfoCircle />,
          },
          {
            component: (
              <ServicesSection
                key="services"
                templateData={templateData}
                onServiceChange={onServiceChange}
              />
            ),
            title: "Services",
            icon: <FaServicestack />,
          },
          {
            component: (
              <PortfolioSection
                key="portfolio"
                templateData={templateData}
                onChange={onChange}
                onPortfolioSlideChange={onPortfolioSlideChange}
              />
            ),
            title: "Portfolio",
            icon: <FaFolder />,
          },
          {
            component: (
              <TestimonialsSection
                key="testimonials"
                templateData={templateData}
                onTestimonialChange={onTestimonialChange}
              />
            ),
            title: "Testimonials",
            icon: <FaUsers />,
          },
          {
            component: (
              <BlogSection
                key="blog"
                templateData={templateData}
                onChange={onChange}
                onBlogImageChange={onBlogImageChange}
              />
            ),
            title: "Blog",
            icon: <FaInfoCircle />,
          },
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
    <aside className="p-4 bg-lightGray flex flex-col h-full">
      {/* قائمة التنقل */}
      <nav className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Sections</h3>
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={index}>
              <button
                onClick={() => setCurrentIndex(index)}
                className={`w-full flex items-center space-x-2 p-2 rounded-md text-left transition-colors duration-200 ${
                  currentIndex === index
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span>{section.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* محتوى القسم */}
      <div className="flex-1 transition-opacity duration-300 ease-in-out">
        {sections[currentIndex].component}
      </div>

      <BreakLine />

      <div className="flex flex-wrap justify-between mb-4 gap-2 font-mono">
        {!isFirstSection && (
          <button
            onClick={handlePrevious}
            className="text-white bg-charcoalGray w-full sm:w-1/3 p-2 rounded-lg text-center font-bold hover:bg-gray-600 transition-colors duration-200"
          >
            Previous
          </button>
        )}
        {!isLastSection && (
          <button
            onClick={handleNext}
            className="text-white bg-blue-500 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold hover:bg-blue-600 transition-colors duration-200"
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
