import { TemplateData } from "@/app/types/templateData";
import ColorPicker from "../ColorPicker";
import Image from "next/image";
import { TextVector } from "@/app/assets/icons";

interface HeaderSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
}

const HeaderSection = ({
  templateData,
  onChange,
  onImageChange,
}: HeaderSectionProps) => {
  return (
    <>
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
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
          />
        </label>
        <label className="block mb-2">
          Header SubTitle:
          <textarea
            value={templateData.headerSubtitle}
            onChange={(e) => onChange("headerSubtitle", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
          />
        </label>
        <label className="block mb-2">
          Header Description:
          <textarea
            value={templateData.headerDescription}
            onChange={(e) => onChange("headerDescription", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
          />
        </label>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Title Text Color</span>
          <ColorPicker
            defaultColor={templateData.titleTextColor}
            onChange={(color) => onChange("titleTextColor", color)}
          />
        </div>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Subtitle Text Color</span>
          <ColorPicker
            defaultColor={templateData.subtitleTextColor}
            onChange={(color) => onChange("subtitleTextColor", color)}
          />
        </div>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Description Text Color</span>
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
            className="p-1 border rounded-md w-full"
          />
        </label>
      </div>
    </>
  );
};

export default HeaderSection;
