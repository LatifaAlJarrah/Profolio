"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Roboto,
  Poppins,
  Montserrat,
  Palanquin_Dark,
  JetBrains_Mono,
} from "next/font/google";

import Sidebar from "./Sidebar";
import MainEditor from "./MainEditor";
import Navbar from "./Navbar";
import ConfirmationModal from "./shared/ConfirmationModal";

import { templates } from "../data/templates";
import { defaultTemplateData } from "../data/defaultTemplateDentistData";
import { defaultTemplateRestaurantData } from "../data/defaultTemplateRestaurantData";
import { defaultTemplateCompanyData } from "../data/defaultTemplateCompanyData";
import { defaultTemplateProgrammerData } from "../data/defaultTemplateProgrammerData";
import { defaultTemplateDeveloperData } from "../data/defaultTemplateDeveloperData";
import { TemplateData } from "@/app/types/templateData";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const palanquinDark = Palanquin_Dark({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const jetBrains_Mono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const ControlTemplate = () => {
  const searchParams = useSearchParams();
  const templateName = searchParams.get("template")?.toLowerCase();

  const initialTemplateData =
    templateName === "restaurant"
      ? defaultTemplateRestaurantData
      : templateName === "company"
      ? defaultTemplateCompanyData
      : templateName === "programmer"
      ? defaultTemplateProgrammerData
      : templateName === "developer"
      ? defaultTemplateDeveloperData
      : defaultTemplateData;

  const [templateData, setTemplateData] = useState(initialTemplateData);
  const [showSidebar, setShowSidebar] = useState(true);

  // Modal state
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
    confirmText?: string;
    cancelText?: string;
  }>({
    isOpen: false,
    message: "",
    onConfirm: () => {},
    confirmText: "Yes, I'm sure",
    cancelText: "No, cancel",
  });

  const openModal = (
    message: string,
    onConfirm: () => void,
    confirmText?: string,
    cancelText?: string
  ) => {
    setModalState({
      isOpen: true,
      message,
      onConfirm,
      confirmText,
      cancelText,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const selectedTemplate = templates.find(
    (t) => t.name.toLowerCase() === templateName
  );

  if (!selectedTemplate) {
    return (
      <p>Template not found. Please check the template name in the URL.</p>
    );
  }

  const handleChange = (
    key: string,
    value:
      | string
      | TemplateData["developerProjects"]
      | TemplateData["developerServices"]
      | TemplateData["developerResume"]
      | TemplateData["developerInfo"]
      | TemplateData["developerContact"]
      | TemplateData["hireMeButton"]
  ) => {
    setTemplateData((prev) => ({ ...prev, [key]: value }));
  };

  const handleArrayChange = (key: string, value: string[]) => {
    setTemplateData((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageChange = (key: string, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => ({ ...prev, [key]: imageUrl }));
    }
  };

  const handleServiceChange = (index: number, field: string, value: string) => {
    setTemplateData((prev) => {
      const updatedServices = prev.services ? [...prev.services] : [];
      updatedServices[index] = { ...updatedServices[index], [field]: value };
      return { ...prev, services: updatedServices };
    });
  };

  const handleAchievementsChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    setTemplateData((prev) => {
      const updatedAchievements = prev.ourAchievements
        ? [...prev.ourAchievements]
        : [];
      updatedAchievements[index] = {
        ...updatedAchievements[index],
        [field]: value,
      };
      return { ...prev, ourAchievements: updatedAchievements };
    });
  };

  const handleAddAchievement = () => {
    setTemplateData((prev) => {
      const updatedAchievements = prev.ourAchievements
        ? [...prev.ourAchievements]
        : [];
      updatedAchievements.push({ number: 0, text: "New Achievement" });
      return { ...prev, ourAchievements: updatedAchievements };
    });
  };

  const handleRemoveAchievement = (index: number) => {
    setTemplateData((prev) => {
      const updatedAchievements = prev.ourAchievements
        ? [...prev.ourAchievements]
        : [];
      updatedAchievements.splice(index, 1);
      return { ...prev, ourAchievements: updatedAchievements };
    });
  };

  const handleAddSkill = () => {
    setTemplateData((prev) => {
      const updatedSkills = prev.programmerSkills
        ? [...prev.programmerSkills]
        : [];
      updatedSkills.push("New Skill");
      return { ...prev, programmerSkills: updatedSkills };
    });
  };

  const handleRemoveSkill = (index: number) => {
    setTemplateData((prev) => {
      const updatedSkills = prev.programmerSkills
        ? [...prev.programmerSkills]
        : [];
      updatedSkills.splice(index, 1);
      return { ...prev, programmerSkills: updatedSkills };
    });
  };

  const handleAddEducation = () => {
    setTemplateData((prev) => {
      const updatedEducation = prev.programmerEducation
        ? [...prev.programmerEducation]
        : [];
      updatedEducation.push("New Education");
      return { ...prev, programmerEducation: updatedEducation };
    });
  };

  const handleRemoveEducation = (index: number) => {
    setTemplateData((prev) => {
      const updatedEducation = prev.programmerEducation
        ? [...prev.programmerEducation]
        : [];
      updatedEducation.splice(index, 1);
      return { ...prev, programmerEducation: updatedEducation };
    });
  };

  const handleAddCertification = () => {
    setTemplateData((prev) => {
      const updatedCertifications = prev.programmerCertifications
        ? [...prev.programmerCertifications]
        : [];
      updatedCertifications.push("New Certification");
      return { ...prev, programmerCertifications: updatedCertifications };
    });
  };

  const handleRemoveCertification = (index: number) => {
    setTemplateData((prev) => {
      const updatedCertifications = prev.programmerCertifications
        ? [...prev.programmerCertifications]
        : [];
      updatedCertifications.splice(index, 1);
      return { ...prev, programmerCertifications: updatedCertifications };
    });
  };

  const handleProjectChange = (
    index: number,
    field: string,
    value: string | string[]
  ) => {
    setTemplateData((prev) => {
      const updatedProjects = prev.programmerProjects
        ? [...prev.programmerProjects]
        : [];
      updatedProjects[index] = {
        ...updatedProjects[index],
        [field]: value,
      };
      return { ...prev, programmerProjects: updatedProjects };
    });
  };

  const handleProjectImageChange = (index: number, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => {
        const updatedProjects = prev.programmerProjects
          ? [...prev.programmerProjects]
          : [];
        updatedProjects[index] = {
          ...updatedProjects[index],
          image: imageUrl,
        };
        return { ...prev, programmerProjects: updatedProjects };
      });
    }
  };

  const handleAddProject = () => {
    setTemplateData((prev) => {
      const updatedProjects = prev.programmerProjects
        ? [...prev.programmerProjects]
        : [];
      updatedProjects.push({
        title: "New Project",
        description: "Project description",
        image: "/images/projects/default.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/",
      });
      return { ...prev, programmerProjects: updatedProjects };
    });
  };

  const handleRemoveProject = (index: number) => {
    setTemplateData((prev) => {
      const updatedProjects = prev.programmerProjects
        ? [...prev.programmerProjects]
        : [];
      updatedProjects.splice(index, 1);
      return { ...prev, programmerProjects: updatedProjects };
    });
  };

  const handleTeamMemberChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setTemplateData((prev) => {
      const updatedTeamMembers = prev.teamMembers ? [...prev.teamMembers] : [];
      updatedTeamMembers[index] = {
        ...updatedTeamMembers[index],
        [field]: value,
      };
      return { ...prev, teamMembers: updatedTeamMembers };
    });
  };

  const handleTeamMemberImageChange = (index: number, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => {
        const updatedTeamMembers = prev.teamMembers
          ? [...prev.teamMembers]
          : [];
        updatedTeamMembers[index] = {
          ...updatedTeamMembers[index],
          uploadedImg: imageUrl,
        };
        return { ...prev, teamMembers: updatedTeamMembers };
      });
    }
  };

  const handleAddTeamMember = () => {
    setTemplateData((prev) => {
      const updatedTeamMembers = prev.teamMembers ? [...prev.teamMembers] : [];
      updatedTeamMembers.push({
        name: "New Member",
        role: "Role",
        img: "/assets/images/team/default.jpg",
        uploadedImg: undefined,
        instagramLink: "",
        behanceLink: "",
        githubLink: "",
      });
      return { ...prev, teamMembers: updatedTeamMembers };
    });
  };

  const handleRemoveTeamMember = (index: number) => {
    setTemplateData((prev) => {
      const updatedTeamMembers = prev.teamMembers ? [...prev.teamMembers] : [];
      updatedTeamMembers.splice(index, 1);
      return { ...prev, teamMembers: updatedTeamMembers };
    });
  };

  const handlePortfolioSlideChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setTemplateData((prev) => {
      const updatedSlides = prev.portfolioSlides
        ? [...prev.portfolioSlides]
        : [];
      updatedSlides[index] = { ...updatedSlides[index], [field]: value };
      return { ...prev, portfolioSlides: updatedSlides };
    });
  };

  const handleTestimonialChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setTemplateData((prev) => {
      const updatedTestimonials = prev.portfolioTestimonials
        ? [...prev.portfolioTestimonials]
        : [];
      updatedTestimonials[index] = {
        ...updatedTestimonials[index],
        [field]: value,
      };
      return { ...prev, portfolioTestimonials: updatedTestimonials };
    });
  };

  const handleBlogImageChange = (index: number, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => {
        const updatedImages = [...(prev.blogImages || [])];
        updatedImages[index] = imageUrl;
        return { ...prev, blogImages: updatedImages };
      });
    }
  };

  const handleNavLinkChange = (index: number, field: string, value: string) => {
    setTemplateData((prev) => {
      const updatedLinks = prev.navigationLinks
        ? [...prev.navigationLinks]
        : [];
      updatedLinks[index] = { ...updatedLinks[index], [field]: value };
      return { ...prev, navigationLinks: updatedLinks };
    });
  };

  const handleMenuItemChange = (
    category: string,
    index: number,
    field: string,
    value: string
  ) => {
    setTemplateData((prev) => {
      const updatedMenuItems = prev.menuItems
        ? { ...prev.menuItems }
        : {
            appetizers: [],
            soupsSalads: [],
            mainCourses: [],
            desserts: [],
          };
      if (!updatedMenuItems[category as keyof typeof updatedMenuItems]) {
        updatedMenuItems[category as keyof typeof updatedMenuItems] = [];
      }
      updatedMenuItems[category as keyof typeof updatedMenuItems][index] = {
        ...updatedMenuItems[category as keyof typeof updatedMenuItems][index],
        [field]: value,
      };
      return { ...prev, menuItems: updatedMenuItems };
    });
  };

  const handleMenuItemImageChange = (
    category: string,
    index: number,
    file: File | null
  ) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => {
        const updatedMenuItems = prev.menuItems
          ? { ...prev.menuItems }
          : {
              appetizers: [],
              soupsSalads: [],
              mainCourses: [],
              desserts: [],
            };
        if (!updatedMenuItems[category as keyof typeof updatedMenuItems]) {
          updatedMenuItems[category as keyof typeof updatedMenuItems] = [];
        }
        updatedMenuItems[category as keyof typeof updatedMenuItems][index] = {
          ...updatedMenuItems[category as keyof typeof updatedMenuItems][index],
          img: imageUrl,
        };
        return { ...prev, menuItems: updatedMenuItems };
      });
    }
  };

  const handleChefSpecialChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setTemplateData((prev) => {
      const updatedSpecials = prev.chefSpecials ? [...prev.chefSpecials] : [];
      updatedSpecials[index] = {
        ...updatedSpecials[index],
        [field]: value,
      };
      return { ...prev, chefSpecials: updatedSpecials };
    });
  };

  const handleChefSpecialImageChange = (index: number, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => {
        const updatedSpecials = prev.chefSpecials ? [...prev.chefSpecials] : [];
        updatedSpecials[index] = {
          ...updatedSpecials[index],
          image: imageUrl,
        };
        return { ...prev, chefSpecials: updatedSpecials };
      });
    }
  };

  const saveTemplateData = () => {
    openModal(
      "Are you sure you want to save the template data?",
      () => {
        try {
          localStorage.setItem("templateData", JSON.stringify(templateData));
          openModal("Template data saved successfully!", () => {}, "OK");
        } catch (error) {
          const errorMessage =
            error instanceof Error
              ? `Failed to save template data: ${error.message}`
              : "Failed to save template data. An unexpected error occurred.";
          openModal(errorMessage, () => {}, "OK");
        }
      },
      "OK",
      "No"
    );
  };

  const loadTemplateData = () => {
    const savedData = localStorage.getItem("templateData");
    if (savedData) {
      openModal(
        "Are you sure you want to load the saved template data?",
        () => {
          setTemplateData(JSON.parse(savedData));
          openModal("Saved template data loaded successfully!", () => {}, "OK");
        },
        "OK",
        "No"
      );
    } else {
      openModal("No saved data found.", () => {}, "OK");
    }
  };
  const resetTemplateData = () => {
    openModal(
      "Are you sure you want to reset all changes to default values?",
      () => {
        setTemplateData(initialTemplateData);
        openModal(
          "Template data has been reset to default values.",
          () => {},
          "OK"
        );
      }
    );
  };

  const getFontClassName = () => {
    switch (templateData.fontFamily) {
      case "Roboto":
        return roboto.className;
      case "Poppins":
        return poppins.className;
      case "Montserrat":
        return montserrat.className;
      case "Palanquin Dark":
        return palanquinDark.className;
      case "JetBrains Mono":
        return jetBrains_Mono.className;
      case "Arial":
      case "Times New Roman":
        return "";
      default:
        return roboto.className;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar
        projectName={templateName || "Default Project"}
        onPreview={() => setShowSidebar(!showSidebar)}
        showSidebar={showSidebar}
      />

      <div className="flex flex-grow overflow-hidden">
        {showSidebar && (
          <div className="w-1/4 bg-lightGray border-r border-gray-200 overflow-y-auto">
            <Sidebar
              templateData={templateData}
              onChange={handleChange}
              onArrayChange={handleArrayChange}
              onImageChange={handleImageChange}
              onServiceChange={handleServiceChange}
              onPortfolioSlideChange={handlePortfolioSlideChange}
              onTestimonialChange={handleTestimonialChange}
              onBlogImageChange={handleBlogImageChange}
              onNavLinkChange={handleNavLinkChange}
              onSave={saveTemplateData}
              onLoad={loadTemplateData}
              onReset={resetTemplateData}
              templateName={templateName || ""}
              onMenuItemChange={handleMenuItemChange}
              onMenuItemImageChange={handleMenuItemImageChange}
              onChefSpecialChange={handleChefSpecialChange}
              onChefSpecialImageChange={handleChefSpecialImageChange}
              onAchievementsChange={handleAchievementsChange}
              onProjectChange={handleProjectChange}
              onProjectImageChange={handleProjectImageChange}
              onTeamMemberChange={handleTeamMemberChange}
              onTeamMemberImageChange={handleTeamMemberImageChange}
              onAddTeamMember={handleAddTeamMember}
              onRemoveTeamMember={handleRemoveTeamMember}
              onAddAchievement={handleAddAchievement}
              onRemoveAchievement={handleRemoveAchievement}
              onAddSkill={handleAddSkill}
              onRemoveSkill={handleRemoveSkill}
              onAddEducation={handleAddEducation}
              onRemoveEducation={handleRemoveEducation}
              onAddCertification={handleAddCertification}
              onRemoveCertification={handleRemoveCertification}
              onAddProject={handleAddProject}
              onRemoveProject={handleRemoveProject}
            />
          </div>
        )}
        <div
          className={`flex-grow bg-lightGray overflow-y-auto ${
            showSidebar ? "w-3/4" : "w-full"
          }`}
        >
          <MainEditor>
            {selectedTemplate?.Component ? (
              React.cloneElement(
                <selectedTemplate.Component
                  {...templateData}
                  fontFamilyClass={getFontClassName()}
                />,
                {},
                null
              )
            ) : (
              <p>Template not found</p>
            )}
          </MainEditor>
        </div>
      </div>

      <ConfirmationModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        onConfirm={modalState.onConfirm}
        message={modalState.message}
        confirmText={modalState.confirmText}
        cancelText={modalState.cancelText}
      />
    </div>
  );
};

export default ControlTemplate;
