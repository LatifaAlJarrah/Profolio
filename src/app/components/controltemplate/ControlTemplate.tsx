// "use client"; // ضروري لجعل الكود يعمل في الـ Client Side
// import { useSearchParams } from "next/navigation";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import MainEditor from "./MainEditor";
// import { templates } from "../data/templates";




// const ControlTemplate = () => {
//   const searchParams = useSearchParams(); // استخدام `useSearchParams` بدلاً من `useRouter`
//   const templateName = searchParams.get("template"); // جلب قيمة `template` من الـ URL

//   // البحث عن التمبليت المناسب
//   const selectedTemplate = templates.find((t) => t.name === templateName);

//   return (
//     <div className="flex flex-col h-screen">
//       <Navbar projectName={templateName || "Default Project"} />
//       <div className="flex flex-grow">
//         <Sidebar />
//         <MainEditor>
//           {selectedTemplate?.Component ? (
//             <selectedTemplate.Component />
//           ) : (
//             <p>Template not found</p>
//           )}
//         </MainEditor>
//       </div>
//     </div>
//   );
// };

// export default ControlTemplate;

// // "use client";
// // import { useSearchParams } from "next/navigation";
// // import { useState, useEffect } from "react";
// // import Navbar from "./Navbar";
// // import Sidebar from "./Sidebar";
// // import MainEditor from "./MainEditor";
// // import { templates } from "../data/templates";

// // // Interfaz para las personalizaciones
// // interface Customizations {
// //   colors: Record<string, string>;
// //   texts: Record<string, string>;
// //   images: Record<string, string>;
// // }

// // const ControlTemplate = () => {
// //   const searchParams = useSearchParams();
// //   const templateName = searchParams.get("template");

// //   // Estado para almacenar las personalizaciones
// //   const [customizations, setCustomizations] = useState<Customizations>({
// //     colors: {},
// //     texts: {},
// //     images: {},
// //   });

// //   // Estado para controlar si se ha cargado el template
// //   const [templateLoaded, setTemplateLoaded] = useState(false);

// //   // Buscar el template seleccionado
// //   const selectedTemplate = templates.find((t) => t.name === templateName);

// //   // Cargar configuraciones por defecto cuando cambia el template
// //   useEffect(() => {
// //     if (selectedTemplate) {
// //       // Cargar las personalizaciones por defecto del template
// //       setCustomizations({
// //         colors: selectedTemplate.defaultColors || {},
// //         texts: selectedTemplate.defaultTexts || {},
// //         images: selectedTemplate.defaultImages || {},
// //       });
// //       setTemplateLoaded(true);
// //     }
// //   }, [templateName, selectedTemplate]);

// //   // Manejadores para actualizar las personalizaciones
// //   const handleColorChange = (key: string, value: string) => {
// //     setCustomizations((prev) => ({
// //       ...prev,
// //       colors: {
// //         ...prev.colors,
// //         [key]: value,
// //       },
// //     }));
// //   };

// //   const handleTextChange = (key: string, value: string) => {
// //     setCustomizations((prev) => ({
// //       ...prev,
// //       texts: {
// //         ...prev.texts,
// //         [key]: value,
// //       },
// //     }));
// //   };

// //   const handleImageChange = (key: string, value: string) => {
// //     setCustomizations((prev) => ({
// //       ...prev,
// //       images: {
// //         ...prev.images,
// //         [key]: value,
// //       },
// //     }));
// //   };

// //   // Función para guardar las personalizaciones
// //   const handleSave = async () => {
// //     try {
// //       // Implementar lógica para guardar en la base de datos
// //       console.log("Guardando personalizaciones:", {
// //         templateName,
// //         customizations,
// //       });
// //       // Aquí iría tu lógica de API para guardar
// //       alert("¡Cambios guardados correctamente!");
// //     } catch (error) {
// //       console.error("Error al guardar:", error);
// //       alert("Error al guardar los cambios");
// //     }
// //   };

// //   return (
// //     <div className="control-template-container">
// //       <Navbar />
// //       <div className="control-template-content">
// //         <Sidebar
// //           templateName={templateName || ""}
// //           customizations={customizations}
// //           onColorChange={handleColorChange}
// //           onTextChange={handleTextChange}
// //           onImageChange={handleImageChange}
// //           onSave={handleSave}
// //         />
// //         <MainEditor>
// //           {selectedTemplate?.Component ? (
// //             <selectedTemplate.Component
// //               customizations={customizations}
// //               isEditable={true}
// //             />
// //           ) : (
// //             <div className="template-not-found">Template not found</div>
// //           )}
// //         </MainEditor>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ControlTemplate;
// src/components/controltemplate/ControlTemplate.tsx
"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainEditor from "./MainEditor";
import { templates } from "../data/templates";

// Default state للـ templateData
const defaultTemplateData = {
  backgroundColor: "#FAFAFA",
  navbarColor: "#FFFFFF",
  buttonColor: "#58ADEB",
  fontFamily: "Roboto", // إضافة Font Family افتراضي
  headerTitle:
    "Because Every Smile Tells A Story, We're Here To Help Yours Shine Brighter Than Ever With Expert Personalized",
  headerDescription:
    "Contact us now to book your appointment and experience our premium service.",
  headerImage: "/assets/images/BackgroundDentelle.jpg",
  headerTextColor: "#FFFFFF",
  aboutTitle: "ABOUT ME",
  aboutDoctorName: "Dr. Sarah Williams",
  aboutDescription:
    "Dr. Sarah Williams is a specialist in cosmetic dentistry with over 10 years of experience. She is passionate about creating beautiful, natural smiles through teeth whitening, veneers, and smile makeovers. With a patient-centered approach and the latest technology, Dr. Williams ensures comfortable treatments and long-lasting results. She believes that a confident smile can transform lives and is dedicated to helping her patients achieve their dream smiles.",
  aboutExtraText: "Beautiful smile is not just about appearance",
  aboutImage: "/assets/images/DrSarah.jpg",
  aboutButtonColor: "#58ADEB",
  blogTitle: "How to Achieve a Hollywood Smile with Cosmetic Dentistry",
  blogContent:
    "outlines how to attain a Hollywood smile using various cosmetic techniques. These techniques include veneers, which are thin shells that improve the shape and color of the teeth; teeth whitening, a process that brightens the teeth and removes stains; crowns, which cover damaged teeth; clear braces that discreetly align the teeth without altering their appearance; and dental implants that replace missing teeth for a natural look. When combined, these procedures not only enhance the aesthetics of the smile but also boost self-confidence.",
  blogImages: [
    "/assets/icons/DentalPractice.png",
    "/assets/icons/PerfectSmile.png",
    "/assets/icons/VeneersShow.png",
    "/assets/icons/DentalVeneers.png",
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
      icon: "/assets/icons/Teeth.png",
    },
    {
      title: "Veneers & Lumineers",
      description: "Thin shells placed on teeth to improve color and shape.",
      icon: "/assets/icons/Veneers.png",
    },
    {
      title: "Tooth-Colored Fillings",
      description: "Restores damaged teeth with natural-looking fillings.",
      icon: "/assets/icons/Equipment.png",
    },
    {
      title: "Cosmetic Crowns & Bridges",
      description:
        "Covers damaged or treated teeth for protection and aesthetics.",
      icon: "/assets/icons/Crown.png",
    },
    {
      title: "Tooth Reshaping",
      description: "Adjusts tooth size or shape for a more balanced look.",
      icon: "/assets/icons/Mouth.png",
    },
    {
      title: "Dental Implants",
      description: "Replaces missing teeth with natural-looking implants.",
      icon: "/assets/icons/Implant.png",
    },
    {
      title: "Clear Aligners (Invisalign)",
      description: "Straightens teeth discreetly without metal braces.",
      icon: "/assets/icons/Trainer.png",
    },
    {
      title: "Hollywood Smile",
      description:
        "A complete smile makeover using a combination of cosmetic treatments.",
      icon: "/assets/icons/Orthodontic.png",
    },
  ],
  portfolioSlides: [
    {
      id: 1,
      title: "Hollywood Smile",
      description:
        "The patient had discoloration and misalignment of the teeth, They were treated with a Hollywood Smile using cosmetic veneers (either veneers or lumineers) to achieve a bright and harmonious smile.",
      image: "/assets/images/HollywoodSmile.jpg",
    },
    {
      id: 2,
      title: "Teeth Whitening",
      description:
        "The patient had tooth discoloration and yellowing, which was treated with a professional whitening session to restore their bright smile.",
      image: "/assets/images/TeethWhitening.jpg",
    },
    {
      id: 3,
      title: "Dental Restoration",
      description:
        "The Patient Had Severe Decay And Needed Full Restoration...",
      image: "/assets/images/Fillings.jpg",
    },
  ],
  portfolioTestimonials: [
    {
      id: 1,
      name: "Ahmed Ali",
      image: "/assets/images/Ahmad.jpg",
      quote:
        "I Used To Suffer From Uneven Tooth Color And Misalignment, But After Getting A Hollywood Smile, My Smile Became Brighter And More Beautiful. The Results Look Very Natural, And I Am Completely Satisfied With The Experience.",
    },
    {
      id: 2,
      name: "Emily",
      image: "/assets/images/Emilly.jpg",
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

  const [showSidebar, setShowSidebar] = useState(true); // State لإظهار/إخفاء الـ Sidebar

  const selectedTemplate = templates.find((t) => t.name === templateName);

  // دالة لتحديث النصوص والألوان
  const handleChange = (key: string, value: string) => {
    setTemplateData((prev) => ({ ...prev, [key]: value }));
  };

  // دالة لتحديث الصور
  const handleImageChange = (key: string, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTemplateData((prev) => ({ ...prev, [key]: imageUrl }));
    }
  };

  // دالة لتحديث الخدمات
  const handleServiceChange = (index: number, field: string, value: string) => {
    setTemplateData((prev) => {
      const updatedServices = [...prev.services];
      updatedServices[index] = { ...updatedServices[index], [field]: value };
      return { ...prev, services: updatedServices };
    });
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
    }
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
      alert("Template data has been reset to default values.");
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
          <Sidebar
            templateData={templateData}
            onChange={handleChange}
            onImageChange={handleImageChange}
            onServiceChange={handleServiceChange}
            onPortfolioSlideChange={handlePortfolioSlideChange}
            onTestimonialChange={handleTestimonialChange}
            onBlogImageChange={handleBlogImageChange}
            onSave={saveTemplateData}
            onLoad={loadTemplateData}
            onReset={resetTemplateData}
          />
        )}
        <MainEditor>
          {selectedTemplate?.Component ? (
            <selectedTemplate.Component {...templateData} />
          ) : (
            <p>Template not found</p>
          )}
        </MainEditor>
      </div>
    </div>
  );
};

export default ControlTemplate;