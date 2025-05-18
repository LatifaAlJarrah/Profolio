import { TemplateData } from "@/app/types/templateData";

interface ResturantHeaderSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
}

const ResturantHeaderSection: React.FC<ResturantHeaderSectionProps> = ({
  templateData,
  onChange,
  onImageChange,
}) => {
  return (
    <>
      <label className="block mb-2">
        background Image:
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            onImageChange("backgroundImage", e.target.files?.[0] || null)
          }
          className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
        />
      </label>
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
        <label className="block mb-2">
          Highlighted Word (e.g., `Meals`):
          <input
            type="text"
            value={templateData.headerSubtitle || ""}
            onChange={(e) => onChange("headerSubtitle", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Header Tagline:
          <textarea
            value={templateData.headerTagline || ""}
            onChange={(e) => onChange("headerTagline", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
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

export default ResturantHeaderSection;