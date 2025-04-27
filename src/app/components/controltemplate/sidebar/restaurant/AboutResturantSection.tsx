// import { TemplateData } from "@/app/types/templateData";

// interface AboutResturantSectionProps {
//   templateData: TemplateData;
//   onChange: (key: string, value: string) => void;
//   onImageChange: (key: string, file: File | null) => void;
// }

// const AboutResturantSection = ({
//   templateData,
//   onChange,
//   onImageChange,
// }: AboutResturantSectionProps) => {
//   return (
//     <>
//       <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
//         <h3 className="text-lg font-normal text-center">
//           About Restaurant Settings
//         </h3>
//       </div>
//       <div className="px-8">
//         <label className="block mb-2">
//           About Title:
//           <input
//             type="text"
//             value={templateData.aboutTitle || ""}
//             onChange={(e) => onChange("aboutTitle", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           />
//         </label>
//         <label className="block mb-2">
//           About Description:
//           <textarea
//             value={templateData.aboutDescription || ""}
//             onChange={(e) => onChange("aboutDescription", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           />
//         </label>
//         <label className="block mb-2">
//           About Image:
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) =>
//               onImageChange("aboutImage", e.target.files?.[0] || null)
//             }
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           />
//         </label>
//       </div>
//     </>
//   );
// };

// export default AboutResturantSection;
import { TemplateData } from "@/app/types/templateData";

interface AboutResturantSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
}

const AboutResturantSection: React.FC<AboutResturantSectionProps> = ({
  templateData,
  onChange,
  onImageChange,
}) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">
          About Restaurant Settings
        </h3>
      </div>
      <div className="px-8">
        <label className="block mb-2">
          About Title:
          <input
            type="text"
            value={templateData.aboutTitle || ""}
            onChange={(e) => onChange("aboutTitle", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          About Tagline:
          <input
            type="text"
            value={templateData.aboutTagline || ""}
            onChange={(e) => onChange("aboutTagline", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          About Description (e.g., `At`):
          <input
            type="text"
            value={templateData.aboutDescription || ""}
            onChange={(e) => onChange("aboutDescription", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Visit Text:
          <input
            type="text"
            value={templateData.visitText || ""}
            onChange={(e) => onChange("visitText", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          About Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              onImageChange("aboutImage", e.target.files?.[0] || null)
            }
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
      </div>
    </>
  );
};

export default AboutResturantSection;