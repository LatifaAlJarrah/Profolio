"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar from "./Sidebar";
import MainEditor from "./MainEditor";
import { templates } from "../data/templates";
import { Roboto, Poppins, Montserrat } from "next/font/google";
import { defaultTemplateData } from "../data/defaultTemplateDentistData";
import { defaultTemplateRestaurantData } from "../data/defaultTemplateRestaurantData";
import { defaultTemplateCompanyData } from "../data/defaultTemplateCompanyData";
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

const ControlTemplate = () => {
  const searchParams = useSearchParams();
  const templateName = searchParams.get("template")?.toLowerCase();

  // اختيار البيانات الافتراضية بناءً على القالب
  const initialTemplateData =
    templateName === "restaurant"
      ? defaultTemplateRestaurantData : templateName === "company" ? defaultTemplateCompanyData
      : defaultTemplateData;

  const [templateData, setTemplateData] = useState(initialTemplateData);
  const [renderKey, setRenderKey] = useState(0);
  const [showSidebar] = useState(true);

  // البحث عن القالب في قائمة القوالب
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
      // التحقق من وجود menuItems، وإذا لم يكن موجودًا، قم بتهيئته بقيم افتراضية
      const updatedMenuItems = prev.menuItems
        ? { ...prev.menuItems }
        : {
            appetizers: [],
            soupsSalads: [],
            mainCourses: [],
            desserts: [],
          };

      // التحقق من وجود الفئة (category)، وإذا لم تكن موجودة، قم بتهيئتها كمصفوفة فارغة
      if (!updatedMenuItems[category as keyof typeof updatedMenuItems]) {
        updatedMenuItems[category as keyof typeof updatedMenuItems] = [];
      }

      // التحقق من وجود العنصر في الفئة عند الفهرس المحدد
      if (!updatedMenuItems[category as keyof typeof updatedMenuItems][index]) {
        updatedMenuItems[category as keyof typeof updatedMenuItems][index] = {
          name: "",
          description: "",
          price: "",
          img: "",
        };
      }

      // تحديث الحقل المحدد
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
        // التحقق من وجود menuItems، وإذا لم يكن موجودًا، قم بتهيئته بقيم افتراضية
        const updatedMenuItems = prev.menuItems
          ? { ...prev.menuItems }
          : {
              appetizers: [],
              soupsSalads: [],
              mainCourses: [],
              desserts: [],
            };

        // التحقق من وجود الفئة (category)، وإذا لم تكن موجودة، قم بتهيئتها كمصفوفة فارغة
        if (!updatedMenuItems[category as keyof typeof updatedMenuItems]) {
          updatedMenuItems[category as keyof typeof updatedMenuItems] = [];
        }

        // التحقق من وجود العنصر في الفئة عند الفهرس المحدد
        if (
          !updatedMenuItems[category as keyof typeof updatedMenuItems][index]
        ) {
          updatedMenuItems[category as keyof typeof updatedMenuItems][index] = {
            name: "",
            description: "",
            price: "",
            img: "",
          };
        }

        // تحديث الصورة
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
      case "Arial":
      case "Times New Roman":
        return "";
      default:
        return roboto.className;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow overflow-hidden">
        {showSidebar && (
          <div className="w-1/4 bg-lightGray border-r border-gray-200 overflow-y-auto">
            <Sidebar
              templateData={templateData}
              onChange={handleChange}
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
            />
          </div>
        )}
        <div className="w-3/4 overflow-y-auto">
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
        </div>
      </div>
    </div>
  );
};

export default ControlTemplate;