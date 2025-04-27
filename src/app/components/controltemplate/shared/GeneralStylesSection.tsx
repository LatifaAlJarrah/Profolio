// import { TemplateData } from "@/app/types/templateData";

// interface GeneralStylesSectionProps {
//   templateData: TemplateData;
//   onChange: (key: string, value: string) => void;
// }

// const AboutMeSection = ({
//   templateData,
//   onChange,
// }: GeneralStylesSectionProps) => {
//   return (
//     <>
//       <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
//         <h3 className="text-lg font-normal text-center">General Styles</h3>
//       </div>
//       <div>
//         <label className="block mb-2">
//           Font Family:
//           <select
//             value={templateData.fontFamily}
//             onChange={(e) => onChange("fontFamily", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           >
//             <option value="Roboto">Roboto</option>
//             <option value="Arial">Arial</option>
//             <option value="Times New Roman">Times New Roman</option>
//             <option value="Poppins">Poppins</option>
//             <option value="Montserrat">Montserrat</option>
//           </select>
//         </label>
//       </div>
//     </>
//   );
// };

// export default AboutMeSection;
import { TemplateData } from "@/app/types/templateData";

interface GeneralStylesSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
}

const GeneralStylesSection = ({
  templateData,
  onChange,
}: GeneralStylesSectionProps) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">
          General Styles (Restaurant)
        </h3>
      </div>
      <div className="px-8">
        {/* Font Family */}
        <label className="block mb-2">
          Font Family:
          <select
            value={templateData.fontFamily || "Roboto"}
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

        {/* Background Overlay Color */}
        <label className="block mb-2">
          Background Overlay Color:
          <input
            type="color"
            value={templateData.backgroundOverlayColor || "#000000"}
            onChange={(e) => onChange("backgroundOverlayColor", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent"
          />
        </label>

        {/* General Text Color */}
        <label className="block mb-2">
          General Text Color:
          <input
            type="color"
            value={templateData.titleTextColor || "#ffffff"}
            onChange={(e) => onChange("titleTextColor", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent"
          />
        </label>

        {/* Button Color */}
        <label className="block mb-2">
          Button Color:
          <input
            type="color"
            value={templateData.buttonColor || "#ff5733"}
            onChange={(e) => onChange("buttonColor", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent"
          />
        </label>
      </div>
    </>
  );
};

export default GeneralStylesSection;