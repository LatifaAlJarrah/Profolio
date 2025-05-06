"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Roboto, Poppins, Montserrat, Palanquin_Dark, JetBrains_Mono } from "next/font/google";

import Sidebar from "./Sidebar";
import MainEditor from "./MainEditor";
import Navbar from "./Navbar";

import { templates } from "../data/templates";
import { defaultTemplateData } from "../data/defaultTemplateDentistData";
import { defaultTemplateRestaurantData } from "../data/defaultTemplateRestaurantData";
import { defaultTemplateCompanyData } from "../data/defaultTemplateCompanyData";
import { defaultTemplateProgrammerData } from "../data/defaultTemplateProgrammerData";
import { defaultTemplateDeveloperData } from "../data/defaultTemplateDeveloperData";

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
  const [renderKey, setRenderKey] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);

  const selectedTemplate = templates.find(
    (t) => t.name.toLowerCase() === templateName
  );

  if (!selectedTemplate) {
    return (
      <p>Template not found. Please check the template name in the URL.</p>
    );
  }

  const handleChange = (key: string, value: string) => {
    setTemplateData((prev) => ({ ...prev, [key]: value }));
    setRenderKey((prev) => prev + 1);
  };

  const handleArrayChange = (key: string, value: string[]) => {
    setTemplateData((prev) => ({ ...prev, [key]: value }));
    setRenderKey((prev) => prev + 1);
  };

  const handleImageChange = (key: string, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => ({ ...prev, [key]: imageUrl }));
      setRenderKey((prev) => prev + 1);
    }
  };

  const handleServiceChange = (index: number, field: string, value: string) => {
    setTemplateData((prev) => {
      const updatedServices = prev.services ? [...prev.services] : [];
      updatedServices[index] = { ...updatedServices[index], [field]: value };
      return { ...prev, services: updatedServices };
    });
    setRenderKey((prev) => prev + 1);
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
    setRenderKey((prev) => prev + 1);
  };

  const handleAddAchievement = () => {
    setTemplateData((prev) => {
      const updatedAchievements = prev.ourAchievements
        ? [...prev.ourAchievements]
        : [];
      updatedAchievements.push({ number: 0, text: "New Achievement" });
      return { ...prev, ourAchievements: updatedAchievements };
    });
    setRenderKey((prev) => prev + 1);
  };

  const handleRemoveAchievement = (index: number) => {
    setTemplateData((prev) => {
      const updatedAchievements = prev.ourAchievements
        ? [...prev.ourAchievements]
        : [];
      updatedAchievements.splice(index, 1);
      return { ...prev, ourAchievements: updatedAchievements };
    });
    setRenderKey((prev) => prev + 1);
  };

  const handleAddSkill = () => {
    setTemplateData((prev) => {
      const updatedSkills = prev.programmerSkills
        ? [...prev.programmerSkills]
        : [];
      updatedSkills.push("New Skill");
      return { ...prev, programmerSkills: updatedSkills };
    });
    setRenderKey((prev) => prev + 1);
  };

  const handleRemoveSkill = (index: number) => {
    setTemplateData((prev) => {
      const updatedSkills = prev.programmerSkills
        ? [...prev.programmerSkills]
        : [];
      updatedSkills.splice(index, 1);
      return { ...prev, programmerSkills: updatedSkills };
    });
    setRenderKey((prev) => prev + 1);
  };

  const handleAddEducation = () => {
    setTemplateData((prev) => {
      const updatedEducation = prev.programmerEducation
        ? [...prev.programmerEducation]
        : [];
      updatedEducation.push("New Education");
      return { ...prev, programmerEducation: updatedEducation };
    });
    setRenderKey((prev) => prev + 1);
  };

  const handleRemoveEducation = (index: number) => {
    setTemplateData((prev) => {
      const updatedEducation = prev.programmerEducation
        ? [...prev.programmerEducation]
        : [];
      updatedEducation.splice(index, 1);
      return { ...prev, programmerEducation: updatedEducation };
    });
    setRenderKey((prev) => prev + 1);
  };

  const handleAddCertification = () => {
    setTemplateData((prev) => {
      const updatedCertifications = prev.programmerCertifications
        ? [...prev.programmerCertifications]
        : [];
      updatedCertifications.push("New Certification");
      return { ...prev, programmerCertifications: updatedCertifications };
    });
    setRenderKey((prev) => prev + 1);
  };

  const handleRemoveCertification = (index: number) => {
    setTemplateData((prev) => {
      const updatedCertifications = prev.programmerCertifications
        ? [...prev.programmerCertifications]
        : [];
      updatedCertifications.splice(index, 1);
      return { ...prev, programmerCertifications: updatedCertifications };
    });
    setRenderKey((prev) => prev + 1);
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
    setRenderKey((prev) => prev + 1);
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
      setRenderKey((prev) => prev + 1);
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
    setRenderKey((prev) => prev + 1);
  };

  const handleRemoveProject = (index: number) => {
    setTemplateData((prev) => {
      const updatedProjects = prev.programmerProjects
        ? [...prev.programmerProjects]
        : [];
      updatedProjects.splice(index, 1);
      return { ...prev, programmerProjects: updatedProjects };
    });
    setRenderKey((prev) => prev + 1);
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
    setRenderKey((prev) => prev + 1);
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
      setRenderKey((prev) => prev + 1);
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
    setRenderKey((prev) => prev + 1);
  };

  const handleRemoveTeamMember = (index: number) => {
    setTemplateData((prev) => {
      const updatedTeamMembers = prev.teamMembers ? [...prev.teamMembers] : [];
      updatedTeamMembers.splice(index, 1);
      return { ...prev, teamMembers: updatedTeamMembers };
    });
    setRenderKey((prev) => prev + 1);
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
    setRenderKey((prev) => prev + 1);
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
    setRenderKey((prev) => prev + 1);
  };

  const handleBlogImageChange = (index: number, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => {
        const updatedImages = [...(prev.blogImages || [])];
        updatedImages[index] = imageUrl;
        return { ...prev, blogImages: updatedImages };
      });
      setRenderKey((prev) => prev + 1);
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
    setRenderKey((prev) => prev + 1);
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
    setRenderKey((prev) => prev + 1);
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
      setRenderKey((prev) => prev + 1);
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
    setRenderKey((prev) => prev + 1);
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
      setRenderKey((prev) => prev + 1);
    }
  };

  const saveTemplateData = () => {
    localStorage.setItem("templateData", JSON.stringify(templateData));
    alert("Template data saved successfully!");
  };

  const loadTemplateData = () => {
    const savedData = localStorage.getItem("templateData");
    if (savedData) {
      setTemplateData(JSON.parse(savedData));
      setRenderKey((prev) => prev + 1);
      alert("Saved template data loaded successfully!");
    } else {
      alert("No saved data found.");
    }
  };

  const resetTemplateData = () => {
    if (
      confirm("Are you sure you want to reset all changes to default values?")
    ) {
      setTemplateData(initialTemplateData);
      setRenderKey((prev) => prev + 1);
      alert("Template data has been reset to default values.");
    }
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
        {/* <div className={`flex-grow bg-lightGray overflow-y-auto ${showSidebar ? "w-3/4" : "w-full"}`}>
          <MainEditor>
            {selectedTemplate?.Component ? (
              <selectedTemplate.Component
                key={renderKey}
                {...templateData}
                fontFamilyClass={getFontClassName()}
              >
                <div></div>
              </selectedTemplate.Component>
            ) : (
              <p>Template not found</p>
            )}
          </MainEditor>
        </div> */}
        <div
          className={`flex-grow bg-lightGray overflow-y-auto ${
            showSidebar ? "w-3/4" : "w-full"
          }`}
        >
          <MainEditor>
            {selectedTemplate?.Component ? (
              React.cloneElement(
                <selectedTemplate.Component
                  key={renderKey}
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
    </div>
  );
};

export default ControlTemplate;
