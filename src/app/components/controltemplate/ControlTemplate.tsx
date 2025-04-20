"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar from "./Sidebar";
import MainEditor from "./MainEditor";
import { templates } from "../data/templates";
import { Roboto, Poppins, Montserrat } from "next/font/google";
import { defaultTemplateData } from "../data/defaultTemplateDentistData";

// تحميل الـ Fonts باستخدام next/font/google
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
  const templateName = searchParams.get("template");

  // State لتخزين كل التعديلات
  const [templateData, setTemplateData] = useState(defaultTemplateData);
  const [renderKey, setRenderKey] = useState(0); // Counter لإجبار الـ re-render

  const [showSidebar] = useState(true); // State لإظهار/إخفاء الـ Sidebar

  const selectedTemplate = templates.find((t) => t.name === templateName);

  // دالة لتحديث النصوص والألوان
  const handleChange = (key: string, value: string) => {
    setTemplateData((prev) => ({ ...prev, [key]: value }));
    setRenderKey((prev) => prev + 1); // زيادة الـ counter عشان نجبر الـ re-render
  };

  // دالة لتحديث الصور
  const handleImageChange = (key: string, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => ({ ...prev, [key]: imageUrl }));
      setRenderKey((prev) => prev + 1); // زيادة الـ counter
    }
  };

  // دالة لتحديث الخدمات
  const handleServiceChange = (index: number, field: string, value: string) => {
    setTemplateData((prev) => {
      const updatedServices = prev.services ? [...prev.services] : [];
      updatedServices[index] = { ...updatedServices[index], [field]: value };
      return { ...prev, services: updatedServices };
    });
    setRenderKey((prev) => prev + 1); // زيادة الـ counter
  };

  // دالة لتحديث السلايدر في Portfolio
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
    setRenderKey((prev) => prev + 1); // زيادة الـ counter
  };

  // دالة لتحديث الشهادات في Portfolio
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
    setRenderKey((prev) => prev + 1); // زيادة الـ counter
  };

  // دالة لتحديث صور المدونة
  const handleBlogImageChange = (index: number, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => {
        const updatedImages = [...(prev.blogImages || [])];
        updatedImages[index] = imageUrl;
        return { ...prev, blogImages: updatedImages };
      });
      setRenderKey((prev) => prev + 1); // زيادة الـ counter
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
    setRenderKey((prev) => prev + 1); // زيادة الـ counter
  };
  // دالة لحفظ البيانات في localStorage
  const saveTemplateData = () => {
    localStorage.setItem("templateData", JSON.stringify(templateData));
    alert("Template data saved successfully!");
  };

  // دالة لتحميل البيانات من localStorage
  const loadTemplateData = () => {
    const savedData = localStorage.getItem("templateData");
    if (savedData) {
      setTemplateData(JSON.parse(savedData));
      setRenderKey((prev) => prev + 1); // زيادة الـ counter
      alert("Saved template data loaded successfully!");
    } else {
      alert("No saved data found.");
    }
  };

  // دالة لإعادة تعيين البيانات إلى القيم الافتراضية
  const resetTemplateData = () => {
    if (
      confirm("Are you sure you want to reset all changes to default values?")
    ) {
      setTemplateData(defaultTemplateData);
      setRenderKey((prev) => prev + 1); // زيادة الـ counter
      alert("Template data has been reset to default values.");
    }
  };

  // اختيار الـ font بناءً على الـ templateData.fontFamily
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
