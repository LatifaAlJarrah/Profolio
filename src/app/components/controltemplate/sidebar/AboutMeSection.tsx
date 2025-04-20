import { TemplateData } from "@/app/types/templateData";
import ColorPicker from "../ColorPicker";

interface AboutMeSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
}

const AboutMeSection = ({
  templateData,
  onChange,
  onImageChange,
}: AboutMeSectionProps) => {
  return (
    <>
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
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
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
    </>
  );
};

export default AboutMeSection;
