// import { TemplateData } from "@/app/types/templateData";
// import ColorPicker from "../../shared/ColorPicker";

// interface AboutMeSectionProps {
//   templateData: TemplateData;
//   onChange: (key: string, value: string) => void;
//   onImageChange: (key: string, file: File | null) => void;
// }

// const AboutCompanySection = ({
//   templateData,
//   onChange,
//   onImageChange,
// }: AboutMeSectionProps) => {
//   return (
//     <>
//       <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
//         <h3 className="text-lg font-normal">ABOUT US</h3>
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
//           About Tagline:
//           <textarea
//             value={templateData.aboutTagline}
//             onChange={(e) => onChange("aboutTagline", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
//           />
//         </label>
//         <label className="block mb-2">
//           About Description:
//           <textarea
//             value={templateData.aboutDescription}
//             onChange={(e) => onChange("aboutDescription", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
//           />
//         </label>
//         <label className="block mb-2">
//           Business Image:
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) =>
//               onImageChange("aboutImage", e.target.files?.[0] || null)
//             }
//             className="p-1 border rounded-md w-full"
//           />
//         </label>
//         <div className="flex justify-between mb-2 gap-2 items-center">
//           <span className="text-sm">Button Color</span>
//           <ColorPicker
//             defaultColor={templateData.aboutButtonColor}
//             onChange={(color) => onChange("aboutButtonColor", color)}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutCompanySection;
import React from "react";
import { TemplateData } from "@/app/types/templateData";

interface AboutCompanySectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
  onAchievementsChange: (index: number, field: string, value: string) => void;
}

const AboutCompanySection: React.FC<AboutCompanySectionProps> = ({
  templateData,
  onChange,
  onImageChange,
  onAchievementsChange,
}) => {
  // دالة لمعالجة رفع الأيقونات
  const handleIconChange = (index: number, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onAchievementsChange(index, "uploadedIcon", imageUrl);
    } else {
      onAchievementsChange(index, "uploadedIcon", "");
    }
  };

  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-4 rounded-lg mb-6 mx-6 shadow-sm">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          About Company Settings
        </h3>
      </div>
      <div className="px-6 space-y-4">
        {/* About Title */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            About Title:
          </span>
          <input
            type="text"
            value={templateData.aboutTitle || ""}
            onChange={(e) => onChange("aboutTitle", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the about title"
          />
        </label>

        {/* About Tagline */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            About Tagline:
          </span>
          <input
            type="text"
            value={templateData.aboutTagline || ""}
            onChange={(e) => onChange("aboutTagline", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the about tagline"
          />
        </label>

        {/* About Description */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            About Description:
          </span>
          <textarea
            value={templateData.aboutDescription || ""}
            onChange={(e) => onChange("aboutDescription", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the about description"
            rows={4}
          />
        </label>

        {/* About Button Color */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            About Button Color:
          </span>
          <input
            type="color"
            value={templateData.aboutButtonColor || "#27445D"}
            onChange={(e) => onChange("aboutButtonColor", e.target.value)}
            className="mt-1 p-1 border border-gray-300 rounded-md w-full bg-white"
          />
        </label>

        {/* About Image */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            About Image:
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              onImageChange("aboutImage", e.target.files?.[0] || null)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
          />
        </label>

        {/* Achievements Section */}
        <h4 className="text-lg font-semibold text-gray-800 mt-6">
          Achievements
        </h4>
        {templateData.ourAchievements?.map((achievement, index) => (
          <div key={index} className="border p-4 rounded-md space-y-2">
            <h5 className="text-md font-medium text-gray-700">
              Achievement {index + 1}
            </h5>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Value:</span>
              <input
                type="text"
                value={achievement.value || ""}
                onChange={(e) =>
                  onAchievementsChange(index, "value", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the value (e.g., 150)"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Label:</span>
              <input
                type="text"
                value={achievement.label || ""}
                onChange={(e) =>
                  onAchievementsChange(index, "label", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the label (e.g., Project Done)"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Icon:</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleIconChange(index, e.target.files?.[0] || null)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
              />
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutCompanySection;