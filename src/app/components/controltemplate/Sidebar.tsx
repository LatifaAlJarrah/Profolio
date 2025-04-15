// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faImage,
// //   faLink,
// //   faAlignLeft,
// //   faAlignCenter,
// //   faAlignRight,
// //   faBold,
// //   faItalic,
// //   faUnderline,
// //   faSquare,
// //   faCircle,
// //   faTriangleExclamation,
// //   faStar,
// // } from "@fortawesome/free-solid-svg-icons";

// // import Image from "next/image";
// // import { TextVector } from "@/app/assets/icons";

// // import ColorPicker from "./ColorPicker";
// // import { IconProp } from "@fortawesome/fontawesome-svg-core";


// // const BreakLine = () => {
// //   return <div className="border border-lightGrayShade2 my-4"></div>;
// // };

// // interface FontAwesomeProps {
// //   icon: IconProp;
// // }

// // const FontAwesome = ({ icon }: FontAwesomeProps) => {
// //   return (
// //     <FontAwesomeIcon
// //       icon={icon}
// //       className="text-gray-600 text-xl cursor-pointer bg-transparent"
// //     />
// //   );
// // };

// // const Sidebar = () => {
 


// //   return (
// //     <aside className="w-64 p-4 bg-lightGray">
// //       {/* Text Section */}
// //       <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
// //         <div className="flex items-center justify-around bg-lightGrayShade2 rounded-lg">
// //           <Image src={TextVector} alt="text vector" className="w-4 h-4" />
// //           <h3 className="text-lg font-normal">Text</h3>
// //         </div>
// //       </div>

// //       <div>
// //         <div className="flex justify-between mb-2 gap-2">
// //           <select className="p-1 border rounded-md w-1/2 bg-transparent text-charcoalGray">
// //             <option>Font</option>
// //             <option>Arial</option>
// //             <option>Roboto</option>
// //           </select>
// //           <select className="p-1 border rounded-md w-1/2 bg-transparent text-charcoalGray">
// //             <option>Size</option>
// //             <option>12</option>
// //             <option>14</option>
// //             <option>16</option>
// //           </select>
// //         </div>
// //         <div className="flex justify-between mb-2 gap-2">
// //           <select className="p-1 border rounded-md w-1/2 bg-transparent text-charcoalGray">
// //             <option>Regular</option>
// //             <option>Bold</option>
// //             <option>Light</option>
// //           </select>
// //           <ColorPicker defaultColor="#000000" />
// //         </div>
// //         <div className="flex justify-between mt-2 space-x-2">
// //           <FontAwesome icon={faAlignLeft}/>
// //           <FontAwesome icon={faAlignCenter} />
// //           <FontAwesome icon={faAlignRight} />

// //           <span className="border border-lightGrayShade2 px-2 py-1 rounded text-sm">
// //             AG
// //           </span>
// //           <span className="border border-lightGrayShade2 px-2 py-1 rounded text-sm">
// //             Ag
// //           </span>
// //           <FontAwesome icon={faBold} />
// //           <FontAwesome icon={faItalic} />
// //           <FontAwesome icon={faUnderline} />
// //         </div>
// //       </div>

// //       <BreakLine />

// //       <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
// //         <FontAwesomeIcon icon={faImage} className="w-5 h-5 text-charcoalGray" />
// //         <h3 className="text-lg font-normal">Photo</h3>
// //       </div>
// //       <div className="flex justify-between mb-2 gap-2 text-charcoalGray">
// //         <input
// //           type="text"
// //           placeholder="H"
// //           className="p-1 border rounded-md w-1/2 text-start bg-transparent"
// //         />
// //         <input
// //           type="text"
// //           placeholder="W"
// //           className="p-1 border rounded-md w-1/2 text-start bg-transparent"
// //         />
// //       </div>
// //       <div className="flex items-center gap-2">
// //         <input type="checkbox" id="background" className="w-4 h-4" />
// //         <label htmlFor="background" className="text-sm">
// //           Use as a background
// //         </label>
// //       </div>

// //       <BreakLine />

// //       {/* Link Section */}
// //       <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
// //         <FontAwesomeIcon icon={faLink} className="w-5 h-5 text-charcoalGray" />
// //         <h3 className="text-lg font-normal">Link</h3>
// //       </div>

// //       <input
// //         type="text"
// //         placeholder="Add your link here..."
// //         className="p-1 border rounded-md w-full mb-2"
// //       />

// //       <div className="flex items-center justify-between gap-2">
// //         <h4 className="text-base font-normal">Color</h4>
// //         <ColorPicker defaultColor="#399BD0" />
// //       </div>

// //       <BreakLine />

// //       {/* Shape Selection */}
// //       <div className="flex justify-between mb-2 gap-2">
// //         <FontAwesome icon={faSquare} />
// //         <FontAwesome icon={faCircle} />
// //         <FontAwesome icon={faTriangleExclamation} />
// //         <FontAwesome icon={faStar} />
// //         <div className="text-gray-600 text-4xl cursor-pointer bg-transparent w-36 h-8">
// //           /
// //         </div>
// //       </div>

// //       <div className="flex justify-between mb-2 gap-2 text-charcoalGray">
// //         <input
// //           type="text"
// //           placeholder="H"
// //           className="p-1 border rounded-md w-1/2 text-start bg-transparent"
// //         />
// //         <input
// //           type="text"
// //           placeholder="W"
// //           className="p-1 border rounded-md w-1/2 text-start bg-transparent"
// //         />
// //       </div>

// //       {/* Fill and Stroke Colors */}
// //       <div className="flex justify-between mb-2 gap-2 items-center">
// //         <span className="text-sm">Fill</span>
// //         <ColorPicker defaultColor="#9A9A9A" />
// //       </div>
// //       <div className="flex justify-between mb-2 gap-2 items-center">
// //         <span className="text-sm">Stroke</span>
// //         <ColorPicker defaultColor="#000000" />
// //       </div>

// //       <BreakLine />

// //       {/* Background, Buttons, and Navbar Colors */}
// //       <div className="flex justify-between mb-2 gap-2 items-center">
// //         <span className="text-sm">Background color</span>
// //         <ColorPicker defaultColor="#FFFFFF"/>
// //       </div>
// //       <div className="flex justify-between mb-2 gap-2 items-center">
// //         <span className="text-sm">Buttons color</span>
// //         <ColorPicker defaultColor="#27445D" />
// //       </div>
// //       <div className="flex justify-between mb-2 gap-2 items-center">
// //         <span className="text-sm">Navbar color</span>
// //         <ColorPicker defaultColor="#FAA5CA" />
// //       </div>

// //       <BreakLine />

// //       {/* Delete Button */}
// //       <button className="text-red-700 w-full text-center font-bold">
// //         Delete
// //       </button>
// //     </aside>
// //   );
// // };

// // export default Sidebar;
// // // "use client";
// // // import { useState } from "react";
// // // import ColorPicker from "./ColorPicker";

// // // interface SidebarProps {
// // //   templateName: string;
// // //   customizations: {
// // //     colors: Record<string, string>;
// // //     texts: Record<string, string>;
// // //     images: Record<string, string>;
// // //   };
// // //   onColorChange: (key: string, value: string) => void;
// // //   onTextChange: (key: string, value: string) => void;
// // //   onImageChange: (key: string, value: string) => void;
// // //   onSave: () => void;
// // // }

// // // const Sidebar = ({
// // //   templateName,
// // //   customizations,
// // //   onColorChange,
// // //   onTextChange,
// // //   onImageChange,
// // //   onSave,
// // // }: SidebarProps) => {
// // //   const [activeTab, setActiveTab] = useState<"colors" | "texts" | "images">(
// // //     "colors"
// // //   );

// // //   // Helper para generar etiquetas legibles
// // //   const formatLabel = (key: string): string => {
// // //     return key
// // //       .replace(/([A-Z])/g, " $1") // Añadir espacio antes de mayúsculas
// // //       .replace(/^./, (str) => str.toUpperCase()) // Primera letra en mayúscula
// // //       .replace(/Color$/, " Color") // Añadir espacio antes de "Color"
// // //       .trim();
// // //   };

// // //   return (
// // //     <div className="sidebar-container">
// // //       <div className="sidebar-header">
// // //         <h2>{templateName || "Template"} Editor</h2>
// // //         <div className="template-tabs">
// // //           <button
// // //             className={`tab-button ${activeTab === "colors" ? "active" : ""}`}
// // //             onClick={() => setActiveTab("colors")}
// // //           >
// // //             Colors
// // //           </button>
// // //           <button
// // //             className={`tab-button ${activeTab === "texts" ? "active" : ""}`}
// // //             onClick={() => setActiveTab("texts")}
// // //           >
// // //             Texts
// // //           </button>
// // //           <button
// // //             className={`tab-button ${activeTab === "images" ? "active" : ""}`}
// // //             onClick={() => setActiveTab("images")}
// // //           >
// // //             Images
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="sidebar-content">
// // //         {activeTab === "colors" && (
// // //           <div className="colors-panel">
// // //             {Object.entries(customizations.colors).map(([key, value]) => (
// // //               <div key={key} className="color-item">
// // //                 <ColorPicker
// // //                   label={formatLabel(key)}
// // //                   defaultColor={value}
// // //                   onChange={(newColor) => onColorChange(key, newColor)}
// // //                 />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {activeTab === "texts" && (
// // //           <div className="texts-panel">
// // //             {Object.entries(customizations.texts).map(([key, value]) => (
// // //               <div key={key} className="text-item">
// // //                 <label className="text-label">{formatLabel(key)}</label>
// // //                 <textarea
// // //                   value={value}
// // //                   onChange={(e) => onTextChange(key, e.target.value)}
// // //                   className="text-editor"
// // //                   rows={3}
// // //                 />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {activeTab === "images" && (
// // //           <div className="images-panel">
// // //             {Object.entries(customizations.images).map(([key, value]) => (
// // //               <div key={key} className="image-item">
// // //                 <label className="image-label">{formatLabel(key)}</label>
// // //                 <div className="image-preview">
// // //                   {value && (
// // //                     <img src={value} alt={key} className="preview-thumbnail" />
// // //                   )}
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   value={value}
// // //                   onChange={(e) => onImageChange(key, e.target.value)}
// // //                   placeholder="Image URL"
// // //                   className="image-url-input"
// // //                 />
// // //                 {/* En un entorno real, aquí añadirías un componente de carga de imágenes */}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>

// // //       <div className="sidebar-footer">
// // //         <button className="save-button" onClick={onSave}>
// // //           Save Changes
// // //         </button>
// // //         <button className="preview-button">Preview</button>
// // //         <button className="publish-button">Publish</button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Sidebar;
// // src/components/controltemplate/Sidebar.tsx
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faImage,
//   faLink,
//   faAlignLeft,
//   faAlignCenter,
//   faAlignRight,
//   faBold,
//   faItalic,
//   faUnderline,
//   faSquare,
//   faCircle,
//   faTriangleExclamation,
//   faStar,
// } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import { TextVector } from "@/app/assets/icons";
// import ColorPicker from "./ColorPicker";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";

// interface SidebarProps {
//   onChange: (key: string, value: string) => void;
//   templateData: any;
// }

// const BreakLine = () => {
//   return <div className="border border-lightGrayShade2 my-4"></div>;
// };

// interface FontAwesomeProps {
//   icon: IconProp;
// }

// const FontAwesome = ({ icon }: FontAwesomeProps) => {
//   return (
//     <FontAwesomeIcon
//       icon={icon}
//       className="text-gray-600 text-xl cursor-pointer bg-transparent"
//     />
//   );
// };

// const Sidebar = ({ onChange, templateData }: SidebarProps) => {
//   return (
//     <aside className="w-64 p-4 bg-lightGray">
//       {/* Title and Description Section */}
//       <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
//         <div className="flex items-center justify-around bg-lightGrayShade2 rounded-lg">
//           <Image src={TextVector} alt="text vector" className="w-4 h-4" />
//           <h3 className="text-lg font-normal">Header</h3>
//         </div>
//       </div>
//       <div>
//         <label className="block mb-2">
//           Header Title:
//           <input
//             type="text"
//             value={templateData.title}
//             onChange={(e) => onChange("title", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           />
//         </label>
//         <label className="block mb-2">
//           Header Description:
//           <textarea
//             value={templateData.description}
//             onChange={(e) => onChange("description", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           />
//         </label>
//       </div>

//       <BreakLine />

//       {/* About Section */}
//       <div className="flexśn items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
//         <h3 className="text-lg font-normal">About Section</h3>
//       </div>
//       <div>
//         <label className="block mb-2">
//           About Title:
//           <input
//             type="text"
//             value={templateData.aboutTitle}
//             onChange={(e) => onChange("aboutTitle", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           />
//         </label>
//         <label className="block mb-2">
//           About Description:
//           <textarea
//             value={templateData.aboutDescription}
//             onChange={(e) => onChange("aboutDescription", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           />
//         </label>
//         <div className="flex justify-between mb-2 gap-2 items-center">
//           <span className="text-sm">Text Color</span>
//           <ColorPicker
//             defaultColor={templateData.aboutTextColor}
//             onChange={(color) => onChange("aboutTextColor", color)}
//           />
//         </div>
//       </div>

//       <BreakLine />

//       {/* Blog Section */}
//       <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
//         <h3 className="text-lg font-normal">Blog Section</h3>
//       </div>
//       <div>
//         <label className="block mb-2">
//           Blog Title:
//           <input
//             type="text"
//             value={templateData.blogTitle}
//             onChange={(e) => onChange("blogTitle", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           />
//         </label>
//         <label className="block mb-2">
//           Blog Content:
//           <textarea
//             value={templateData.blogPostContent}
//             onChange={(e) => onChange("blogPostContent", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           />
//         </label>
//         <div className="flex justify-between mb-2 gap-2 items-center">
//           <span className="text-sm">Text Color</span>
//           <ColorPicker
//             defaultColor={templateData.blogTextColor}
//             onChange={(color) => onChange("blogTextColor", color)}
//           />
//         </div>
//       </div>

//       <BreakLine />

//       {/* Background, Buttons, and Navbar Colors */}
//       <div className="flex justify-between mb-2 gap-2 items-center">
//         <span className="text-sm">Background color</span>
//         <ColorPicker
//           defaultColor={templateData.backgroundColor}
//           onChange={(color) => onChange("backgroundColor", color)}
//         />
//       </div>
//       <div className="flex justify-between mb-2 gap-2 items-center">
//         <span className="text-sm">Buttons color</span>
//         <ColorPicker
//           defaultColor={templateData.buttonColor}
//           onChange={(color) => onChange("buttonColor", color)}
//         />
//       </div>
//       <div className="flex justify-between mb-2 gap-2 items-center">
//         <span className="text-sm">Navbar color</span>
//         <ColorPicker
//           defaultColor={templateData.navbarColor}
//           onChange={(color) => onChange("navbarColor", color)}
//         />
//       </div>

//       <BreakLine />

//       {/* Delete Button */}
//       <button className="text-red-700 w-full text-center font-bold">Delete</button>
//     </aside>
//   );
// };

// export default Sidebar;

// src/components/controltemplate/Sidebar.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { TextVector } from "@/app/assets/icons";
import ColorPicker from "./ColorPicker";

interface SidebarProps {
  templateData: any;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
  onServiceChange: (index: number, field: string, value: string) => void;
  onPortfolioSlideChange: (index: number, field: string, value: string) => void;
  onTestimonialChange: (index: number, field: string, value: string) => void;
  onBlogImageChange: (index: number, file: File | null) => void;
  onSave: () => void;
  onLoad: () => void;
  onReset: () => void;
}

const BreakLine = () => {
  return <div className="border border-lightGrayShade2 my-4"></div>;
};

const Sidebar = ({
  templateData,
  onChange,
  onImageChange,
  onServiceChange,
  onPortfolioSlideChange,
  onTestimonialChange,
  onBlogImageChange,
  onSave,
  onLoad,
  onReset,
}: SidebarProps) => {
  return (
    <aside className="w-1/3 p-4 bg-lightGray overflow-y-auto">
      {/* General Styles Section */}
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">General Styles</h3>
      </div>
      <div>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Background Color</span>
          <ColorPicker
            defaultColor={templateData.backgroundColor}
            onChange={(color) => onChange("backgroundColor", color)}
          />
        </div>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Navbar Color</span>
          <ColorPicker
            defaultColor={templateData.navbarColor}
            onChange={(color) => onChange("navbarColor", color)}
          />
        </div>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Button Color</span>
          <ColorPicker
            defaultColor={templateData.buttonColor}
            onChange={(color) => onChange("buttonColor", color)}
          />
        </div>
        <label className="block mb-2">
          Font Family:
          <select
            value={templateData.fontFamily}
            onChange={(e) => onChange("fontFamily", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          >
            <option value="Roboto">Roboto</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Poppins">Poppins</option>
            <option value="Montserrat">Montserrat</option>
          </select>
        </label>
      </div>

      <BreakLine />

      {/* Header Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <Image src={TextVector} alt="text vector" className="w-4 h-4" />
        <h3 className="text-lg font-normal">Header</h3>
      </div>
      <div>
        <label className="block mb-2">
          Header Title:
          <textarea
            value={templateData.headerTitle}
            onChange={(e) => onChange("headerTitle", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Header Description:
          <textarea
            value={templateData.headerDescription}
            onChange={(e) => onChange("headerDescription", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Text Color</span>
          <ColorPicker
            defaultColor={templateData.headerTextColor}
            onChange={(color) => onChange("headerTextColor", color)}
          />
        </div>
        <label className="block mb-2">
          Header Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              onImageChange("headerImage", e.target.files?.[0] || null)
            }
            className="p-1 border rounded-md w-full"
          />
        </label>
      </div>

      <BreakLine />

      {/* About Me Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">About Me</h3>
      </div>
      <div>
        <label className="block mb-2">
          About Title:
          <input
            type="text"
            value={templateData.aboutTitle}
            onChange={(e) => onChange("aboutTitle", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Doctor Name:
          <input
            type="text"
            value={templateData.aboutDoctorName}
            onChange={(e) => onChange("aboutDoctorName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          About Description:
          <textarea
            value={templateData.aboutDescription}
            onChange={(e) => onChange("aboutDescription", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Extra Text:
          <input
            type="text"
            value={templateData.aboutExtraText}
            onChange={(e) => onChange("aboutExtraText", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Doctor Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              onImageChange("aboutImage", e.target.files?.[0] || null)
            }
            className="p-1 border rounded-md w-full"
          />
        </label>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Button Color</span>
          <ColorPicker
            defaultColor={templateData.aboutButtonColor}
            onChange={(color) => onChange("aboutButtonColor", color)}
          />
        </div>
      </div>

      <BreakLine />

      {/* Blog Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Blog</h3>
      </div>
      <div>
        <label className="block mb-2">
          Blog Title:
          <input
            type="text"
            value={templateData.blogTitle}
            onChange={(e) => onChange("blogTitle", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Blog Content:
          <textarea
            value={templateData.blogContent}
            onChange={(e) => onChange("blogContent", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        {Array.isArray(templateData.blogImages) &&
        templateData.blogImages.length > 0 ? (
          templateData.blogImages.map((image: string, index: number) => (
            <label key={index} className="block mb-2">
              Blog Image {index + 1}:
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  onBlogImageChange(index, e.target.files?.[0] || null)
                }
                className="p-1 border rounded-md w-full"
              />
            </label>
          ))
        ) : (
          <p>No blog images available.</p>
        )}
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Button Color</span>
          <ColorPicker
            defaultColor={templateData.blogButtonColor}
            onChange={(color) => onChange("blogButtonColor", color)}
          />
        </div>
      </div>

      <BreakLine />

      {/* Contact Us Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <FontAwesomeIcon icon={faImage} className="w-5 h-5 text-charcoalGray" />
        <h3 className="text-lg font-normal">Contact Us</h3>
      </div>
      <div>
        <label className="block mb-2">
          Booking Text:
          <input
            type="text"
            value={templateData.contactBookingText}
            onChange={(e) => onChange("contactBookingText", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Instagram Name:
          <input
            type="text"
            value={templateData.contactInstagramName}
            onChange={(e) => onChange("contactInstagramName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Instagram Link:
          <input
            type="text"
            value={templateData.contactInstagramLink}
            onChange={(e) => onChange("contactInstagramLink", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Facebook Name:
          <input
            type="text"
            value={templateData.contactFacebookName}
            onChange={(e) => onChange("contactFacebookName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Facebook Link:
          <input
            type="text"
            value={templateData.contactFacebookLink}
            onChange={(e) => onChange("contactFacebookLink", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Phone:
          <input
            type="text"
            value={templateData.contactPhone}
            onChange={(e) => onChange("contactPhone", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="text"
            value={templateData.contactEmail}
            onChange={(e) => onChange("contactEmail", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Location:
          <input
            type="text"
            value={templateData.contactLocation}
            onChange={(e) => onChange("contactLocation", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
      </div>

      <BreakLine />

      {/* Services Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Services</h3>
      </div>
      <div>
        {templateData.services.map((service: any, index: number) => (
          <div key={index} className="mb-4">
            <h4 className="text-sm font-medium">Service {index + 1}</h4>
            <label className="block mb-2">
              Title:
              <input
                type="text"
                value={service.title}
                onChange={(e) =>
                  onServiceChange(index, "title", e.target.value)
                }
                className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
              />
            </label>
            <label className="block mb-2">
              Description:
              <textarea
                value={service.description}
                onChange={(e) =>
                  onServiceChange(index, "description", e.target.value)
                }
                className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
              />
            </label>
            <label className="block mb-2">
              Icon:
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    onServiceChange(index, "icon", imageUrl);
                  }
                }}
                className="p-1 border rounded-md w-full"
              />
            </label>
          </div>
        ))}
      </div>

      <BreakLine />

      {/* Portfolio Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Portfolio</h3>
      </div>
      <div>
        {templateData.portfolioSlides.map((slide: any, index: number) => (
          <div key={index} className="mb-4">
            <h4 className="text-sm font-medium">Slide {index + 1}</h4>
            <label className="block mb-2">
              Title:
              <input
                type="text"
                value={slide.title}
                onChange={(e) =>
                  onPortfolioSlideChange(index, "title", e.target.value)
                }
                className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
              />
            </label>
            <label className="block mb-2">
              Description:
              <textarea
                value={slide.description}
                onChange={(e) =>
                  onPortfolioSlideChange(index, "description", e.target.value)
                }
                className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
              />
            </label>
            <label className="block mb-2">
              Image:
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    onPortfolioSlideChange(index, "image", imageUrl);
                  }
                }}
                className="p-1 border rounded-md w-full"
              />
            </label>
          </div>
        ))}
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Button Color</span>
          <ColorPicker
            defaultColor={templateData.portfolioButtonColor}
            onChange={(color) => onChange("portfolioButtonColor", color)}
          />
        </div>
      </div>

      <BreakLine />

      {/* Testimonials Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Testimonials</h3>
      </div>
      <div>
        {templateData.portfolioTestimonials.map(
          (testimonial: any, index: number) => (
            <div key={index} className="mb-4">
              <h4 className="text-sm font-medium">Testimonial {index + 1}</h4>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={testimonial.name}
                  onChange={(e) =>
                    onTestimonialChange(index, "name", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                />
              </label>
              <label className="block mb-2">
                Quote:
                <textarea
                  value={testimonial.quote}
                  onChange={(e) =>
                    onTestimonialChange(index, "quote", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                />
              </label>
              <label className="block mb-2">
                Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      onTestimonialChange(index, "image", imageUrl);
                    }
                  }}
                  className="p-1 border rounded-md w-full"
                />
              </label>
            </div>
          )
        )}
      </div>

      <BreakLine />

      {/* Save, Load, and Reset Buttons */}
      <div className="flex flex-wrap justify-between mb-4 gap-2">
        <button
          onClick={onSave}
          className="text-white bg-green-600 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
        >
          Save
        </button>
        <button
          onClick={onLoad}
          className="text-white bg-blue-600 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
        >
          Load Saved Data
        </button>
        <button
          onClick={onReset}
          className="text-white bg-orange-600 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
        >
          Reset
        </button>
      </div>

      <BreakLine />

      {/* Delete Button */}
      <button className="text-red-700 w-full text-center font-bold">
        Delete
      </button>
    </aside>
  );
};

export default Sidebar;