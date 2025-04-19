"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar from "./Sidebar";
import MainEditor from "./MainEditor";
import { templates } from "../data/templates";
import { Roboto, Poppins, Montserrat } from "next/font/google";

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

// Default state للـ templateData
const defaultTemplateData = {
  navbarColor: "#FFFFFF",
  buttonColor: "#58ADEB",
  fontFamily: "Roboto",
  logoName: "Dentelle",
  logoColor: "#000000",
  navigationLinks: [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Blog", link: "#blog" },
  ],
  navigationLinksColor: "#000000",
  headerTitle:
    "Because Every Smile Tells A Story, We're Here To Help Yours Shine Brighter Than Ever With Expert Personalized",
  headerDescription:
    "Contact us now to book your appointment and experience our premium service.",
  headerImage: "/assets/images/dentist/backgroundDent.png",
  headerTextColor: "#FFFFFF",
  descriptionTextColor: "#828282",
  aboutTitle: "ABOUT ME",
  aboutDoctorName: "Dr. Sarah Williams",
  aboutDescription:
    "Dr. Sarah Williams is a specialist in cosmetic dentistry with over 10 years of experience. She is passionate about creating beautiful, natural smiles through teeth whitening, veneers, and smile makeovers. With a patient-centered approach and the latest technology, Dr. Williams ensures comfortable treatments and long-lasting results. She believes that a confident smile can transform lives and is dedicated to helping her patients achieve their dream smiles.",
  aboutExtraText: "Beautiful smile is not just about appearance",
  aboutImage: "/assets/images/dentist/drSarah.png",
  aboutButtonColor: "#58ADEB",
  blogTitle: "How to Achieve a Hollywood Smile with Cosmetic Dentistry",
  blogContent:
    "outlines how to attain a Hollywood smile using various cosmetic techniques. These techniques include veneers, which are thin shells that improve the shape and color of the teeth; teeth whitening, a process that brightens the teeth and removes stains; crowns, which cover damaged teeth; clear braces that discreetly align the teeth without altering their appearance; and dental implants that replace missing teeth for a natural look. When combined, these procedures not only enhance the aesthetics of the smile but also boost self-confidence.",
  blogImages: [
    "/assets/icons/dentist/dentalPractice.jpeg",
    "/assets/icons/dentist/perfectSmile.jpeg",
    "/assets/icons/dentist/veneersShow.jpeg",
    "/assets/icons/dentist/dentalVeneers.jpeg",
  ],
  blogButtonColor: "#58ADEB",
  contactBookingText: "To book an appointment",
  contactInstagramName: "Instagram Name",
  contactInstagramLink: "https://instagram.com",
  contactFacebookName: "Facebook Name",
  contactFacebookLink: "https://facebook.com",
  contactPhone: "(123) 456-7890",
  contactEmail: "dr.williams@brightsmiledental.com",
  contactLocation: "BrightSmile Dental Clinic",
  services: [
    {
      title: "Teeth Whitening",
      description: "Removes stains and brightens teeth for a radiant smile.",
      icon: "/assets/icons/dentist/teeth.png",
    },
    {
      title: "Veneers & Lumineers",
      description: "Thin shells placed on teeth to improve color and shape.",
      icon: "/assets/icons/dentist/veneers.png",
    },
    {
      title: "Tooth-Colored Fillings",
      description: "Restores damaged teeth with natural-looking fillings.",
      icon: "/assets/icons/dentist/equipment.png",
    },
    {
      title: "Cosmetic Crowns & Bridges",
      description:
        "Covers damaged or treated teeth for protection and aesthetics.",
      icon: "/assets/icons/dentist/crown.png",
    },
    {
      title: "Tooth Reshaping",
      description: "Adjusts tooth size or shape for a more balanced look.",
      icon: "/assets/icons/dentist/mouth.png",
    },
    {
      title: "Dental Implants",
      description: "Replaces missing teeth with natural-looking implants.",
      icon: "/assets/icons/dentist/implant.png",
    },
    {
      title: "Clear Aligners (Invisalign)",
      description: "Straightens teeth discreetly without metal braces.",
      icon: "/assets/icons/dentist/trainer.png",
    },
    {
      title: "Hollywood Smile",
      description:
        "A complete smile makeover using a combination of cosmetic treatments.",
      icon: "/assets/icons/dentist/orthodontic.png",
    },
  ],
  portfolioSlides: [
    {
      id: 1,
      title: "Hollywood Smile",
      description:
        "The patient had discoloration and misalignment of the teeth, They were treated with a Hollywood Smile using cosmetic veneers (either veneers or lumineers) to achieve a bright and harmonious smile.",
      image: "/assets/images/dentist/HollywoodSmile.jpeg",
    },
    {
      id: 2,
      title: "Teeth Whitening",
      description:
        "The patient had tooth discoloration and yellowing, which was treated with a professional whitening session to restore their bright smile.",
      image: "/assets/images/dentist/teethWhitening.jpeg",
    },
    {
      id: 3,
      title: "Dental Restoration",
      description:
        "The Patient Had Severe Decay And Needed Full Restoration...",
      image: "/assets/images/dentist/fillings.jpeg",
    },
  ],
  portfolioTestimonials: [
    {
      id: 1,
      name: "Ahmed Ali",
      image: "/assets/images/dentist/ahmad.jpeg",
      quote:
        "I Used To Suffer From Uneven Tooth Color And Misalignment, But After Getting A Hollywood Smile, My Smile Became Brighter And More Beautiful. The Results Look Very Natural, And I Am Completely Satisfied With The Experience.",
    },
    {
      id: 2,
      name: "Emily",
      image: "/assets/images/dentist/emilly.jpeg",
      quote:
        "I Had Decay In One Of My Front Teeth, Which Made Me Feel Self-Conscious. After Getting Tooth-Colored Fillings, My Tooth Looks Completely Natural And Blends Perfectly With The Rest Of My Teeth. The Result Is Amazing, And I'm Very Happy With It!",
    },
  ],
  portfolioButtonColor: "#58ADEB",
};

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
      const updatedServices = [...prev.services];
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
      const updatedSlides = [...prev.portfolioSlides];
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
      const updatedTestimonials = [...prev.portfolioTestimonials];
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

  // دالة لتحديث الروابط في NavbarList
  const handleNavLinkChange = (index: number, field: string, value: string) => {
    setTemplateData((prev) => {
      const updatedLinks = [...prev.navigationLinks];
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
        return ""; // مش محتاج className لأنهم fonts افتراضية
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
                {/* Add any valid children content here */}
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