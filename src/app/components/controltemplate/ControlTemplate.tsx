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
import { getSession } from "next-auth/react";

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
            : templateName === "dentist"
  ? defaultTemplateData
      : defaultTemplateData;

  const [templateData, setTemplateData] = useState(initialTemplateData);
  const [showSidebar, setShowSidebar] = useState(true);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
    confirmText?: string;
    cancelText?: string;
    iconType?: "save" | "load" | "reset" | "warning" | "none";
  }>({
    isOpen: false,
    message: "",
    onConfirm: () => {},
    confirmText: "Yes, I'm sure",
    cancelText: "No, cancel",
    iconType: "warning",
  });

  // const templateId = searchParams.get("id") || "1";

  const openModal = (
    message: string,
    onConfirm: () => void,
    confirmText?: string,
    cancelText?: string,
    iconType: "save" | "load" | "reset" | "warning" | "none" = "warning"
  ) => {
    setModalState({
      isOpen: true,
      message,
      onConfirm,
      confirmText,
      cancelText,
      iconType,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  // // دالة محسنة للحصول على التوكن الخاص بالمستخدم
  // const getUserToken = async (): Promise<string | null> => {
  //   try {
  //     console.log("Getting user token...");
      
  //     // الحصول على الجلسة الحالية
  //     const session = await getSession();
  //     console.log("Session data:", session);

  //     if (!session) {
  //       console.warn("No active session found");
  //       return null;
  //     }

  //     // البحث عن التوكن في أماكن مختلفة من الجلسة
  //     let token = null;

  //     // 1. التوكن من API الخاص بك (apiAccessToken)
  //     if ((session as any).apiAccessToken) {
  //       token = (session as any).apiAccessToken;
  //       console.log("Token found in session.apiAccessToken");
  //     }
      
  //     // 2. التوكن العادي من NextAuth
  //     else if ((session as any).accessToken) {
  //       token = (session as any).accessToken;
  //       console.log("Token found in session.accessToken");
  //     }
      
  //     // 3. التوكن في user object
  //     else if (session.user && (session.user as any).accessToken) {
  //       token = (session.user as any).accessToken;
  //       console.log("Token found in session.user.accessToken");
  //     }

  //     if (token) {
  //       console.log("Token retrieved successfully:", token.substring(0, 20) + "...");
  //       return token;
  //     }

  //     console.warn("No token found in session");
  //     return null;

  //   } catch (error) {
  //     console.error("Error getting user token:", error);
  //     return null;
  //   }
  // };

  // دالة بديلة للحصول على معلومات المستخدم والتوكن معاً
  const getUserInfo = async () => {
    try {
      const session = await getSession();
      
      if (!session) {
        return { user: null, token: null };
      }

      const token = (session as any).apiAccessToken || 
                   (session as any).accessToken || 
                   (session.user as any)?.accessToken;

      return {
        user: {
          id: session.user?.id,
          email: session.user?.email,
          name: session.user?.name,
          role: (session.user as any)?.role
        },
        token: token,
        session: session
      };
    } catch (error) {
      console.error("Error getting user info:", error);
      return { user: null, token: null };
    }
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

  const handleNavLinkDelete = (index: number) => {
    const updatedLinks = [...(templateData.navigationLinks || [])];
    updatedLinks.splice(index, 1);
    setTemplateData({ ...templateData, navigationLinks: updatedLinks });
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

  const prepareTemplateData = () => {
    return {
      // Basic styling
      backgroundColor: templateData.backgroundColor,
      navbarColor: templateData.navbarColor,
      buttonColor: templateData.buttonColor,
      fontFamily: templateData.fontFamily,
      fontFamilyClass: templateData.fontFamilyClass,
      navigationLinksColor: templateData.navigationLinksColor,
      backgroundOverlayColor: templateData.backgroundOverlayColor,
      backgroundImage: templateData.backgroundImage,

      // Logo and branding
      logoName: templateData.logoName,
      logoColor: templateData.logoColor,
      logoIcon: templateData.logoIcon,

      // Header section
      headerTitle: templateData.headerTitle,
      headerSubtitle: templateData.headerSubtitle,
      headerTagline: templateData.headerTagline,
      headerDescription: templateData.headerDescription,
      headerImage: templateData.headerImage,
      titleTextColor: templateData.titleTextColor,
      subtitleTextColor: templateData.subtitleTextColor,
      descriptionTextColor: templateData.descriptionTextColor,

      // About section
      aboutTitle: templateData.aboutTitle,
      aboutTagline: templateData.aboutTagline,
      aboutDescription: templateData.aboutDescription,
      visitText: templateData.visitText,
      aboutImage: templateData.aboutImage,
      aboutButtonColor: templateData.aboutButtonColor,
      aboutDoctorName: templateData.aboutDoctorName,
      aboutExtraText: templateData.aboutExtraText,

      // Blog section
      blogTitle: templateData.blogTitle,
      blogContent: templateData.blogContent,
      blogImages: templateData.blogImages,
      blogButtonColor: templateData.blogButtonColor,

      // Contact section
      contactBookingText: templateData.contactBookingText,
      contactInstagramName: templateData.contactInstagramName,
      contactInstagramLink: templateData.contactInstagramLink,
      contactFacebookName: templateData.contactFacebookName,
      contactFacebookLink: templateData.contactFacebookLink,
      contactPhone: templateData.contactPhone,
      contactPhone2: templateData.contactPhone2,
      contactEmail: templateData.contactEmail,
      contactLocation: templateData.contactLocation,
      openTime: templateData.openTime,
      contactEmailLabel: templateData.contactEmailLabel,
      contactSubjectLabel: templateData.contactSubjectLabel,
      contactMessageLabel: templateData.contactMessageLabel,
      contactEmailPlaceholder: templateData.contactEmailPlaceholder,
      contactSubjectPlaceholder: templateData.contactSubjectPlaceholder,
      contactMessagePlaceholder: templateData.contactMessagePlaceholder,
      contactSubmitButtonText: templateData.contactSubmitButtonText,

      // Dynamic content arrays
      services: templateData.services || [],
      menuItems: templateData.menuItems || [],
      chefSpecials: templateData.chefSpecials || [],
      portfolioSlides: templateData.portfolioSlides || [],
      portfolioTestimonials: templateData.portfolioTestimonials || [],
      navigationLinks: templateData.navigationLinks || [],
      ourAchievements: templateData.ourAchievements || [],
      projects: templateData.projects || [],
      teamMembers: templateData.teamMembers || [],

      // Portfolio specific
      portfolioButtonColor:
        templateData.portfolioButtonColor || templateData.aboutButtonColor,

      // Footer
      footerDescription: templateData.footerDescription,
      footerName: templateData.footerName,

      // Programmer/Developer specific fields
      programmerHeaderGreeting: templateData.programmerHeaderGreeting,
      programmerHeaderName: templateData.programmerHeaderName,
      programmerHeaderRoles: templateData.programmerHeaderRoles || [],
      programmerHeaderDescription: templateData.programmerHeaderDescription,
      programmerHeaderButtonText: templateData.programmerHeaderButtonText,
      programmerHeaderImage: templateData.programmerHeaderImage,
      programmerAchievements: templateData.programmerAchievements || [],
      programmerAboutTitle: templateData.programmerAboutTitle,
      programmerAboutDescription: templateData.programmerAboutDescription,
      programmerAboutImage: templateData.programmerAboutImage,
      programmerSkills: templateData.programmerSkills || [],
      programmerEducation: templateData.programmerEducation || [],
      programmerCertifications: templateData.programmerCertifications || [],
      programmerProjectsTitle: templateData.programmerProjectsTitle,
      programmerProjects: templateData.programmerProjects || [],
      programmerContactTitle: templateData.programmerContactTitle,
      programmerContactDescription: templateData.programmerContactDescription,
      programmerGithubLink: templateData.programmerGithubLink,
      programmerLinkedinLink: templateData.programmerLinkedinLink,
      programmerContactEmailLabel: templateData.programmerContactEmailLabel,
      programmerContactSubjectLabel: templateData.programmerContactSubjectLabel,
      programmerContactMessageLabel: templateData.programmerContactMessageLabel,
      programmerContactEmailPlaceholder:
        templateData.programmerContactEmailPlaceholder,
      programmerContactSubjectPlaceholder:
        templateData.programmerContactSubjectPlaceholder,
      programmerContactMessagePlaceholder:
        templateData.programmerContactMessagePlaceholder,
      programmerContactSubmitButtonText:
        templateData.programmerContactSubmitButtonText,
      programmerFooterText: templateData.programmerFooterText,

      // Additional developer fields
      hireMeButton: templateData.hireMeButton,
      developerHeaderRole: templateData.developerHeaderRole,
      developerHeadertitle: templateData.developerHeadertitle,
      developerHeadername: templateData.developerHeadername,
      developerHeaderdescription: templateData.developerHeaderdescription,
      developerHeaderImage: templateData.developerHeaderImage,
      developerHeaderServicesButtonText:
        templateData.developerHeaderServicesButtonText,
      developerHeaderServicesButtonColor:
        templateData.developerHeaderServicesButtonColor,
      developerInstagramLink: templateData.developerInstagramLink,
      developerLinkedinLink: templateData.developerLinkedinLink,
      developerTwitterLink: templateData.developerTwitterLink,
      developerSocialIconsColor: templateData.developerSocialIconsColor,
      developerProjects: templateData.developerProjects || [],
      developerServices: templateData.developerServices || [],
      developerResume: templateData.developerResume,
      developerInfo: templateData.developerInfo,
      developerContact: templateData.developerContact,
      userData: templateData.userData,
    };
  };

  const saveTemplateData = async () => {
    console.log("Starting template save process");

    openModal(
      "Are you sure you want to save the template data?",
      async () => {
        try {
          // get user and token information
          const { user, token, session } = await getUserInfo();
          
          console.log("User info:", user);
          console.log("Token available:", !!token);
          console.log("Full session:", session);

          if (!token) {
            throw new Error("Authentication required. Please login again to save templates.");
          }

          if (!user?.id) {
            throw new Error("User ID not found. Please refresh and try again.");
          }

          // prepare data
          const preparedData = prepareTemplateData();
          
          const templatePayload = {
            // Sending data is unknown from the API
            name: templateName || "Untitled Template",
            description: `Template created for ${user.email}`,
            templateType: templateName?.toUpperCase() || "DENTIST",
            isPublic: false,
            templateData: preparedData,
          };

          console.log("Sending template payload:", templatePayload);
          console.log("Using token:", token.substring(0, 30) + "...");

          // send data to server  
          const response = await fetch("http://localhost:3001/api/templates", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(templatePayload),
          });

          console.log("Response status:", response.status);
          console.log("Response headers:", Object.fromEntries(response.headers.entries()));

          // handle response
          const responseText = await response.text();
          console.log("Raw response:", responseText);

          if (!response.ok) {
            let errorMessage = `Server error: ${response.status}`;
            
            try {
              const errorData = JSON.parse(responseText);
              errorMessage = errorData.message || errorData.error || errorMessage;
            } catch (e) {
              console.log(e)
              errorMessage = responseText || errorMessage;
            }
            
            throw new Error(errorMessage);
          }

          // convert response to json
          const result = responseText ? JSON.parse(responseText) : {};
          console.log("Template saved successfully:", result);

          // save backup
          try {
            const backupData = {
              ...templatePayload,
              savedAt: new Date().toISOString(),
              userId: user.id,
              backendResponse: result,
            };
            localStorage.setItem("templateDataBackup", JSON.stringify(backupData));
            console.log("Backup saved to localStorage");
          } catch (localStorageError) {
            console.warn("Failed to save backup:", localStorageError);
          }

          // display success message
          const now = new Date();
          const formattedDate = now.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long", 
            day: "numeric",
          });
          const formattedTime = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          });

          openModal(
           ` Template "${templateName}" saved successfully at ${formattedTime} on ${formattedDate}!`,
            () => {},
            "OK",
            undefined,
            "save"
          );

        } catch (error) {
          console.error("Template save error:", error);
          
          let errorMessage = "Failed to save template.";
          
          if (error instanceof Error) {
            if (error.message.includes("Authentication")) {
              errorMessage = "Authentication failed. Please login again and try saving.";
            } else if (error.message.includes("User ID")) {
              errorMessage = "User session invalid. Please refresh the page and login again.";
            } else if (error.message.includes("Network")) {
              errorMessage = "Network error. Please check your connection.";
            } else if (error.message.includes("Server error: 401")) {
              errorMessage = "Authentication expired. Please login again.";
            } else if (error.message.includes("Server error: 403")) {
              errorMessage = "Access denied. Please check your permissions.";
            } else if (error.message.includes("Server error: 500")) {
              errorMessage = "Server error. Please try again later.";
            } else {
              errorMessage = `Save failed: ${error.message}`;
            }
          }

          openModal(errorMessage, () => {}, "OK", undefined, "warning");
        }
      },
      "Save Template",
      "Cancel", 
      "save"
    );
  };

  // دالة محسنة لتحميل التمبلت
  const loadTemplateData = async () => {
    openModal(
      "Are you sure you want to load the saved template data?",
      async () => {
        try {
          const { token } = await getUserInfo();
          
          if (!token) {
            console.warn("No token found, trying localStorage");
            const savedData = localStorage.getItem("templateData");
            if (savedData) {
              setTemplateData(JSON.parse(savedData));
              openModal(
                "Template data loaded from local storage!",
                () => {},
                "OK",
                undefined,
                "load"
              );
            } else {
              openModal(
                "No saved data found and no authentication available.",
                () => {},
                "OK", 
                undefined,
                "warning"
              );
            }
            return;
          }

          // محاولة التحميل من السيرفر
          const response = await fetch(
            `http://localhost:3001/api/templates/load?templateName=${templateName}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            const result = await response.json();
            if (result.templateData) {
              setTemplateData(result.templateData);
              openModal(
                "Template data loaded from server successfully!",
                () => {},
                "OK",
                undefined,
                "load"
              );
              return;
            }
          }

          // إذا فشل التحميل من السيرفر، استخدم localStorage
          const savedData = localStorage.getItem("templateData");
          if (savedData) {
            setTemplateData(JSON.parse(savedData));
            openModal(
              "Template data loaded from local storage!",
              () => {},
              "OK",
              undefined,
              "load"
            );
          } else {
            openModal(
              "No saved data found on server or locally.",
              () => {},
              "OK",
              undefined,
              "warning"
            );
          }

        } catch (error) {
          console.error("Load template error:", error);
          openModal(
          `  Failed to load template: ${error instanceof Error ? error.message : 'Unknown error'}`,
            () => {},
            "OK",
            undefined,
            "warning"
          );
        }
      },
      "Load Template",
      "Cancel",
      "load"
    );
  };

  const resetTemplateData = () => {
    openModal(
      "Are you sure you want to reset all changes to default values?",
      () => {
        setTemplateData(initialTemplateData);
        const now = new Date();
        const formattedDate = now.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const formattedTime = now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
        openModal(
         ` Template data has been reset to default values at ${formattedTime} on ${formattedDate}.`,
          () => {},
          "OK",
          undefined,
          "reset"
        );
      },
      "Reset Template",
      "Cancel",
      "reset"
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

      <div className="flex flex-grow">
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
              onNavLinkDelete={handleNavLinkDelete}
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
        iconType={modalState.iconType}
      />
    </div>
  );
};

export default ControlTemplate;
