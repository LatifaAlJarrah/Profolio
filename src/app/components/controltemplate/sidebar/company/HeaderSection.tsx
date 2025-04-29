import { TemplateData } from "@/app/types/templateData";

import ColorPicker from "../../shared/ColorPicker";

interface CompanyHeaderSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
}

const CompanyHeaderSection: React.FC<CompanyHeaderSectionProps> = ({
  templateData,
  onChange,
  onImageChange,
}) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">Header Settings</h3>
      </div>
      <div className="px-8">
        <label className="block mb-2">
          Header Title:
          <input
            type="text"
            value={templateData.headerTitle || ""}
            onChange={(e) => onChange("headerTitle", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Header Text Color</span>
          <ColorPicker
            defaultColor={templateData.titleTextColor}
            onChange={(color) => onChange("titleTextColor", color)}
          />
        </div>
        <label className="block mb-2">
          Header Tagline:
          <textarea
            value={templateData.headerTagline || ""}
            onChange={(e) => onChange("headerTagline", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Tagline Text Color</span>
          <ColorPicker
            defaultColor={templateData.descriptionTextColor}
            onChange={(color) => onChange("descriptionTextColor", color)}
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
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
      </div>
    </>
  );
};

export default CompanyHeaderSection;