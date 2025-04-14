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

"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainEditor from "./MainEditor";
import { templates } from "../data/templates";

// Interfaz para las personalizaciones
interface Customizations {
  colors: Record<string, string>;
  texts: Record<string, string>;
  images: Record<string, string>;
}

const ControlTemplate = () => {
  const searchParams = useSearchParams();
  const templateName = searchParams.get("template");

  // Estado para almacenar las personalizaciones
  const [customizations, setCustomizations] = useState<Customizations>({
    colors: {},
    texts: {},
    images: {},
  });

  // Estado para controlar si se ha cargado el template
  const [templateLoaded, setTemplateLoaded] = useState(false);

  // Buscar el template seleccionado
  const selectedTemplate = templates.find((t) => t.name === templateName);

  // Cargar configuraciones por defecto cuando cambia el template
  useEffect(() => {
    if (selectedTemplate) {
      // Cargar las personalizaciones por defecto del template
      setCustomizations({
        colors: selectedTemplate.defaultColors || {},
        texts: selectedTemplate.defaultTexts || {},
        images: selectedTemplate.defaultImages || {},
      });
      setTemplateLoaded(true);
    }
  }, [templateName, selectedTemplate]);

  // Manejadores para actualizar las personalizaciones
  const handleColorChange = (key: string, value: string) => {
    setCustomizations((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [key]: value,
      },
    }));
  };

  const handleTextChange = (key: string, value: string) => {
    setCustomizations((prev) => ({
      ...prev,
      texts: {
        ...prev.texts,
        [key]: value,
      },
    }));
  };

  const handleImageChange = (key: string, value: string) => {
    setCustomizations((prev) => ({
      ...prev,
      images: {
        ...prev.images,
        [key]: value,
      },
    }));
  };

  // Función para guardar las personalizaciones
  const handleSave = async () => {
    try {
      // Implementar lógica para guardar en la base de datos
      console.log("Guardando personalizaciones:", {
        templateName,
        customizations,
      });
      // Aquí iría tu lógica de API para guardar
      alert("¡Cambios guardados correctamente!");
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Error al guardar los cambios");
    }
  };

  return (
    <div className="control-template-container">
      <Navbar />
      <div className="control-template-content">
        <Sidebar
          templateName={templateName || ""}
          customizations={customizations}
          onColorChange={handleColorChange}
          onTextChange={handleTextChange}
          onImageChange={handleImageChange}
          onSave={handleSave}
        />
        <MainEditor>
          {selectedTemplate?.Component ? (
            <selectedTemplate.Component
              customizations={customizations}
              isEditable={true}
            />
          ) : (
            <div className="template-not-found">Template not found</div>
          )}
        </MainEditor>
      </div>
    </div>
  );
};

export default ControlTemplate;