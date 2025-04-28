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
      <div className="flex flex-col bg-lightGrayShade2 p-4 rounded-lg mb-6 mx-6 shadow-sm">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          About Restaurant Settings
        </h3>
      </div>
      <div className="px-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            About Title:
          </span>
          <input
            type="text"
            value={templateData.aboutTitle || ""}
            onChange={(e) => onChange("aboutTitle", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the About title"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            About Tagline:
          </span>
          <input
            type="text"
            value={templateData.aboutTagline || ""}
            onChange={(e) => onChange("aboutTagline", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the About tagline"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            About Description:
          </span>
          <textarea
            value={templateData.aboutDescription || ""}
            onChange={(e) => onChange("aboutDescription", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a description about the restaurant"
            rows={4}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Restaurant Location:
          </span>
          <input
            type="text"
            value={templateData.contactLocation || ""}
            onChange={(e) => onChange("contactLocation", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the restaurant location (e.g., Los Angeles)"
          />
        </label>
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
      </div>
    </>
  );
};

export default AboutResturantSection;