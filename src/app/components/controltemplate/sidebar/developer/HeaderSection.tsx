import React from "react";
import { TemplateData } from "@/app/types/templateData";
import { FaLink } from "react-icons/fa";

interface DeveloperHeaderSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
}

const DeveloperHeaderSection: React.FC<DeveloperHeaderSectionProps> = ({
  templateData,
  onChange,
  onImageChange,
}) => {
  return (
    <div>
      <h4 className="text-md font-medium text-gray-800 mt-4">
        Developer Header Settings
      </h4>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          Background Color
        </span>
        <input
          type="color"
          value={templateData.backgroundColor || "#1c1c22"}
          onChange={(e) => onChange("backgroundColor", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Role:</span>
        <input
          type="text"
          value={templateData.developerHeaderRole || "Software Developer"}
          onChange={(e) => onChange("developerHeaderRole", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Title:</span>
        <input
          type="text"
          value={templateData.developerHeadertitle || "Hello, I'm "}
          onChange={(e) => onChange("developerHeadertitle", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter title"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Name:</span>
        <input
          type="text"
          value={templateData.developerHeadername || "Luke Coleman"}
          onChange={(e) => onChange("developerHeadername", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter name"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Description:</span>
        <textarea
          value={templateData.developerHeaderdescription || ""}
          onChange={(e) =>
            onChange("developerHeaderdescription", e.target.value)
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter description"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          Developer Image:
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            onImageChange("developerHeaderImage", e.target.files?.[0] || null)
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          Download CV Button Text:
        </span>
        <input
          type="text"
          value={
            templateData.developerHeaderdownloadCVButtonText || "DOWNLOAD CV"
          }
          onChange={(e) =>
            onChange("developerHeaderdownloadCVButtonText", e.target.value)
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter button text"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          Download CV Button Color:
        </span>
        <input
          type="color"
          value={templateData.developerHeaderdownloadCVButtonColor || "#00ff99"}
          onChange={(e) =>
            onChange("developerHeaderdownloadCVButtonColor", e.target.value)
          }
          className="p-1 border rounded-md w-full bg-transparent"
        />
      </label>
      <h4 className="text-md font-medium text-gray-800 mt-4">
        Social Links Settings
      </h4>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          Instagram Link:
        </span>
        <div className="flex items-center space-x-2 flex-grow">
          <FaLink className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            value={templateData.developerInstagramLink || ""}
            onChange={(e) => onChange("developerInstagramLink", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Instagram URL"
          />
        </div>
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Twitter Link:</span>
        <div className="flex items-center space-x-2 flex-grow">
          <FaLink className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            value={templateData.developerTwitterLink || ""}
            onChange={(e) => onChange("developerTwitterLink", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Twitter URL"
          />
        </div>
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          LinkedIn Link:
        </span>
        <div className="flex items-center space-x-2 flex-grow">
          <FaLink className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            value={templateData.developerLinkedinLink || ""}
            onChange={(e) => onChange("developerLinkedinLink", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter LinkedIn URL"
          />
        </div>
      </label>
    </div>
  );
};

export default DeveloperHeaderSection;