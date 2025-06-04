"use client";
<<<<<<< HEAD
import React, { useState, useEffect, useCallback  } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
import { useSearchParams } from "next/navigation";
import {
  Roboto,
  Poppins,
  Montserrat,
  Palanquin_Dark,
  JetBrains_Mono,
} from "next/font/google";

import { useRouter } from "next/navigation";

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
  const templateId = searchParams.get("templateId");

<<<<<<< HEAD
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

=======
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
  const getInitialTemplateData = () => {
    switch (templateName) {
      case "restaurant":
        return defaultTemplateRestaurantData;
      case "company":
        return defaultTemplateCompanyData;
      case "programmer":
        return defaultTemplateProgrammerData;
      case "developer":
        return defaultTemplateDeveloperData;
      case "dentist":
        return defaultTemplateData;
      default:
        return defaultTemplateData;
    }
  };

  const [templateData, setTemplateData] = useState(getInitialTemplateData());
  const [showSidebar, setShowSidebar] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const router = useRouter();

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

<<<<<<< HEAD
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        setAuthLoading(true);
        const session = await getSession();

        if (!session || !session.user) {
          console.log("No session found, redirecting to login");
          router.push("/auth/signin");
          return;
        }

        // check if token exists
        const token =
          (session as unknown as { apiAccessToken: string | undefined })
            .apiAccessToken ||
          (session as unknown as { accessToken: string | undefined })
            .accessToken ||
          (session.user as unknown as { accessToken: string | undefined })
            ?.accessToken;

        if (!token) {
          console.log("No token found, redirecting to login");
          router.push("/auth/signin");
          return;
        }

        console.log("User authenticated successfully:", session.user.email);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Authentication check failed:", error);
        router.push("/login");
      } finally {
        setAuthLoading(false);
      }
    };

    checkAuthentication();
  }, [router]);

  // Function to generate a unique identifier for each template
  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36); // Convert the current time to base36
    const randomStr = Math.random().toString(36).substring(2, 8); // 6 random characters
    return `${timestamp}-${randomStr}`;
  };

  const getUserInfo = useCallback(async () => {
    try {
      const session = await getSession();

      if (!session) {
        return { user: null, token: null };
      }

      const token =
        (session as unknown as { apiAccessToken: string | undefined })
          .apiAccessToken ||
        (session as unknown as { accessToken: string | undefined })
          .accessToken ||
        (session.user as unknown as { accessToken: string | undefined })
          ?.accessToken;

    
      if (!token) {
        router.push("/auth/signin");
        return { user: null, token: null };
      }

      return {
        user: {
          id: session.user?.id,
          email: session.user?.email,
          name: session.user?.name,
        },
        token: token,
        session: session,
      };
    } catch (error) {
      console.error("Error getting user info:", error);
      return { user: null, token: null };
    }
  }, [router]);

=======
  // دالة توليد معرف فريد لكل قالب
  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36); // تحويل الوقت الحالي إلى base36
    const randomStr = Math.random().toString(36).substring(2, 8); // 6 أحرف عشوائية
    return `${timestamp}-${randomStr}`;
  };

>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
  // Auto-load template data if templateId exists
  useEffect(() => {
    const loadTemplateFromServer = async () => {
      if (!templateId) {
        console.log("No templateId provided, using initial data");
        return;
      }

      setIsLoading(true);
      setLoadError(null);

      try {
        console.log("Auto-loading template with ID:", templateId);

        const { token } = await getUserInfo();

        if (!token) {
          console.warn("No authentication token available for auto-load");
          return;
        }

        const response = await fetch(
          `http://localhost:3001/api/templates/${templateId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log("Template loaded successfully:", result);

          // Extract template data from different possible response structures
          let loadedTemplateData = null;

          if (result.templateData) {
            loadedTemplateData = result.templateData;
          } else if (result.data && result.data.templateData) {
            loadedTemplateData = result.data.templateData;
          } else if (result.template && result.template.templateData) {
            loadedTemplateData = result.template.templateData;
          } else if (typeof result === "object" && result.name) {
            loadedTemplateData = result;
          }

          if (loadedTemplateData) {
            setTemplateData(loadedTemplateData);
            console.log("Template data loaded and set successfully");
          } else {
            console.warn("No valid template data found in response");
          }
        } else {
          const errorText = await response.text();
          console.error("Failed to load template:", response.status, errorText);
          setLoadError(`Failed to load template: ${response.status}`);
        }
      } catch (error) {
        console.error("Error loading template:", error);
        setLoadError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    loadTemplateFromServer();
<<<<<<< HEAD
  }, [templateId, getUserInfo]);
=======
  }, [templateId]);
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393

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

<<<<<<< HEAD
  if (authLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }
  if (!isAuthenticated) {
    return null;
  }
=======
  const getUserInfo = async () => {
    try {
      const session = await getSession();

      if (!session) {
        return { user: null, token: null };
      }

      const token =
        (session as any).apiAccessToken ||
        (session as any).accessToken ||
        (session.user as any)?.accessToken;

      return {
        user: {
          id: session.user?.id,
          email: session.user?.email,
          name: session.user?.name,
          role: (session.user as any)?.role,
        },
        token: token,
        session: session,
      };
    } catch (error) {
      console.error("Error getting user info:", error);
      return { user: null, token: null };
    }
  };
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393

  const selectedTemplate = templates.find(
    (t) => t.name.toLowerCase() === templateName
  );

  if (!selectedTemplate) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-red-600">
          Template not found. Please check the template name in the URL.
        </p>
      </div>
    );
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading template data...</p>
        </div>
      </div>
    );
  }

  // Show error state with option to continue with default data
  if (loadError && templateId) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center max-w-md p-6 bg-red-50 rounded-lg border border-red-200">
          <div className="text-red-600 mb-4">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-xl font-semibold mb-2">
              Failed to Load Template
            </h2>
            <p className="text-red-700 mb-4">{loadError}</p>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => {
                setLoadError(null);
                setTemplateData(getInitialTemplateData());
              }}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Continue with Default Data
            </button>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              Retry Loading
            </button>
          </div>
        </div>
      </div>
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

  const prepareTemplateData = async () => {
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
    console.log("Template ID from URL:", templateId);

    const isUpdate = templateId && templateId.trim() !== "";
    const actionText = isUpdate ? "update" : "save";
    const modalMessage = ` Are you sure you want to ${actionText} the template data?`;

    openModal(
      modalMessage,
      async () => {
        try {
          const { user, token } = await getUserInfo();

          console.log("User info:", user);
          console.log("Token available:", !!token);
          console.log("Template ID:", templateId);
          console.log("Is Update:", isUpdate);

          if (!token) {
            throw new Error(
              "Authentication required. Please login again to save templates."
            );
          }

          if (!user?.id) {
            throw new Error("User ID not found. Please refresh and try again.");
          }

          if (!user?.name) {
            throw new Error(
              "User name not found. Please refresh and try again."
            );
          }

          const preparedData = await prepareTemplateData();

<<<<<<< HEAD
          // Generate a unique ID for each new template
=======
          // توليد معرف فريد لكل قالب جديد
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
          const uniqueId = generateUniqueId();
          console.log("Generated unique ID:", uniqueId);

          const templatePayload = {
            name: templateName || "Untitled Template",
            description: `Template ${isUpdate ? "updated" : "created"} for ${
              user.email
            }`,
            templateType: templateName?.toUpperCase() || "DENTIST",
            isPublic: true,
            templateData: preparedData,
<<<<<<< HEAD
            // Only send publishUrl for new templates with unique id
=======
            // فقط إرسال publishUrl للقوالب الجديدة مع المعرف الفريد
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
            ...(isUpdate
              ? {}
              : {
                  publishUrl: `${user.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "")}-${uniqueId}`,
                }),
          };

          console.log("Sending template payload:", templatePayload);
          console.log("Using token:", token.substring(0, 30) + "...");

          const apiUrl = isUpdate
            ? `http://localhost:3001/api/templates/${templateId}`
            : "http://localhost:3001/api/templates";

          const httpMethod = isUpdate ? "PUT" : "POST";

          console.log(`Making ${httpMethod} request to:`, apiUrl);

          const response = await fetch(apiUrl, {
            method: httpMethod,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(templatePayload),
          });

          console.log("Response status:", response.status);

          const responseText = await response.text();
          console.log("Raw response:", responseText);

          if (!response.ok) {
            let errorMessage = `Server error: ${response.status}`;

            try {
              const errorData = JSON.parse(responseText);
              errorMessage =
                errorData.message || errorData.error || errorMessage;
            } catch (e) {
              console.log("Error parsing response:", e);
              errorMessage = responseText || errorMessage;
            }

            throw new Error(errorMessage);
          }

          const result = responseText ? JSON.parse(responseText) : {};
          console.log(`Template ${actionText}d successfully:`, result);

          try {
            const backupData = {
              ...templatePayload,
              savedAt: new Date().toISOString(),
              userId: user.id,
              templateId: templateId || result.id,
              backendResponse: result,
              action: isUpdate ? "update" : "create",
            };
            localStorage.setItem(
              "templateDataBackup",
              JSON.stringify(backupData)
            );
            console.log("Backup saved to localStorage");
          } catch (localStorageError) {
            console.warn("Failed to save backup:", localStorageError);
          }

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

          const successMessage = isUpdate
            ? `✅ Template "${templateName}" updated successfully at ${formattedTime} on ${formattedDate}!`
            : `✅ Template "${templateName}" saved successfully at ${formattedTime} on ${formattedDate}!`;

          openModal(
            successMessage,
            () => {
              router.push("/projects");
            },
            "OK",
            undefined,
            "save"
          );

          if (!isUpdate && result.id) {
<<<<<<< HEAD
            const newUrl = new URL(window.location.href);
=======
            const newUrl = new URL(window.location);
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
            newUrl.searchParams.set("templateId", result.id);
            window.history.replaceState({}, "", newUrl);
            console.log("URL updated with new template ID:", result.id);
          }
        } catch (error) {
          console.error(`Template ${actionText} error:`, error);

          let errorMessage = `Failed to ${actionText} template.`;

          if (error instanceof Error) {
            if (error.message.includes("Authentication")) {
              errorMessage =
                "Authentication failed. Please login again and try saving.";
            } else if (error.message.includes("User ID")) {
              errorMessage =
                "User session invalid. Please refresh the page and login again.";
            } else if (error.message.includes("User name")) {
              errorMessage =
                "User name not found. Please refresh the page and login again.";
            } else if (error.message.includes("Network")) {
              errorMessage = "Network error. Please check your connection.";
            } else if (error.message.includes("Server error: 401")) {
              errorMessage = "Authentication expired. Please login again.";
            } else if (error.message.includes("Server error: 403")) {
              errorMessage = "Access denied. Please check your permissions.";
            } else if (
              error.message.includes("Server error: 404") &&
              isUpdate
            ) {
              errorMessage = "Template not found. It may have been deleted.";
            } else if (error.message.includes("Server error: 500")) {
              errorMessage = "Server error. Please try again later.";
            } else {
              errorMessage = `${
                actionText.charAt(0).toUpperCase() + actionText.slice(1)
              } failed: ${error.message}`;
            }
          }

          openModal(errorMessage, () => {}, "OK", undefined, "warning");
        }
      },
      isUpdate ? "Update Template" : "Save Template",
      "Cancel",
      "save"
    );
  };

  const loadTemplateData = async () => {
    openModal(
      "Are you sure you want to reload the template data? This will overwrite current changes.",
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

          let apiUrl;
          if (templateId) {
            apiUrl = `http://localhost:3001/api/templates/${templateId}`;
            console.log("Reloading specific template:", templateId);
          } else {
            apiUrl = `http://localhost:3001/api/templates/load?templateName=${templateName}`;
            console.log("Loading template by name:", templateName);
          }

          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          console.log("Load response status:", response.status);

          if (response.ok) {
            const result = await response.json();
            console.log("Server response:", result);

            let loadedTemplateData = null;

            if (result.templateData) {
              loadedTemplateData = result.templateData;
            } else if (result.data && result.data.templateData) {
              loadedTemplateData = result.data.templateData;
            } else if (result.template && result.template.templateData) {
              loadedTemplateData = result.template.templateData;
            } else if (typeof result === "object" && result.name) {
              loadedTemplateData = result;
            }

            if (loadedTemplateData) {
              setTemplateData(loadedTemplateData);

              if (result.id && !templateId) {
<<<<<<< HEAD
                const newUrl = new URL(window.location.href);
=======
                const newUrl = new URL(window.location);
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
                newUrl.searchParams.set("templateId", result.id);
                window.history.replaceState({}, "", newUrl);
              }

              openModal(
                "✅ Template data reloaded from server successfully!",
                () => {},
                "OK",
                undefined,
                "load"
              );
              return;
            }
          }

          console.warn("Server load failed, trying localStorage");
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
            const errorMsg = templateId
              ? "Template not found or access denied."
              : "No saved data found on server or locally.";

            openModal(errorMsg, () => {}, "OK", undefined, "warning");
          }
        } catch (error) {
          console.error("Load template error:", error);

          let errorMessage = "Failed to load template.";

          if (error instanceof Error) {
            if (error.message.includes("404")) {
              errorMessage = templateId
                ? "Template not found. It may have been deleted."
                : "No templates found for this type.";
            } else if (error.message.includes("403")) {
              errorMessage =
                "Access denied. You don't have permission to view this template.";
            } else if (error.message.includes("401")) {
              errorMessage = "Authentication expired. Please login again.";
            } else {
              errorMessage = `Failed to load template: ${error.message}`;
            }
          }

          openModal(errorMessage, () => {}, "OK", undefined, "warning");
        }
      },
      "Reload Template",
      "Cancel",
      "load"
    );
  };

  const resetTemplateData = () => {
    openModal(
      "Are you sure you want to reset all changes to default values? This action cannot be undone.",
      () => {
        setTemplateData(getInitialTemplateData());
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
          `🔄 Template data has been reset to default values at ${formattedTime} on ${formattedDate}.`,
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
        projectName={`${templateName || "Default Project"}${
          templateId ? ` (ID: ${templateId.substring(0, 8)}...)` : " (New)"
        }${loadError ? " - Error Loading" : ""}`}
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
