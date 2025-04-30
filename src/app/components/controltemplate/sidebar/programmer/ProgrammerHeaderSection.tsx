import React from "react";
import { TemplateData } from "@/app/types/templateData";
import { FaHeading, FaImage } from "react-icons/fa";

interface ProgrammerHeaderSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
  onArrayChange?: (key: string, value: string[]) => void;
}

const ProgrammerHeaderSection: React.FC<ProgrammerHeaderSectionProps> = ({
  templateData,
  onChange,
  onImageChange,
  onArrayChange,
}) => {
  const handleRoleChange = (index: number, value: string) => {
    const updatedRoles = [...(templateData.programmerHeaderRoles || [])];
    updatedRoles[index] = value;
    onArrayChange?.("programmerHeaderRoles", updatedRoles);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaHeading className="text-gray-500 w-5 h-5" />
        <h3 className="text-lg font-semibold text-gray-800">Header Settings</h3>
      </div>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Greeting:</span>
        <input
          type="text"
          value={templateData.programmerHeaderGreeting || ""}
          onChange={(e) => onChange("programmerHeaderGreeting", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter greeting text"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Name:</span>
        <input
          type="text"
          value={templateData.programmerHeaderName || ""}
          onChange={(e) => onChange("programmerHeaderName", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </label>
      <h4 className="text-md font-medium text-gray-800 mt-4">Roles</h4>
      {templateData.programmerHeaderRoles?.map((role, index) => (
        <label key={index} className="flex items-center space-x-2 mb-2">
          <span className="text-sm font-medium text-gray-700">
            Role {index + 1}:
          </span>
          <input
            type="text"
            value={role}
            onChange={(e) => handleRoleChange(index, e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder={`Enter role ${index + 1}`}
          />
        </label>
      ))}
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Description:</span>
        <textarea
          value={templateData.programmerHeaderDescription || ""}
          onChange={(e) =>
            onChange("programmerHeaderDescription", e.target.value)
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter description"
          rows={3}
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Button Text:</span>
        <input
          type="text"
          value={templateData.programmerHeaderButtonText || ""}
          onChange={(e) =>
            onChange("programmerHeaderButtonText", e.target.value)
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter button text"
        />
      </label>
      <label className="flex items-center space-x-2">
        <FaImage className="text-gray-500 w-5 h-5" />
        <span className="text-sm font-medium text-gray-700">Header Image:</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            onImageChange("programmerHeaderImage", e.target.files?.[0] || null)
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
        />
      </label>
    </div>
  );
};

export default ProgrammerHeaderSection;
