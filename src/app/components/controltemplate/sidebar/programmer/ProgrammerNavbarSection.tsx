import React from "react";
import { TemplateData } from "@/app/types/templateData";
import { FaBars, FaLink } from "react-icons/fa";

interface ProgrammerNavbarSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onNavLinkChange: (index: number, field: string, value: string) => void;
}

const ProgrammerNavbarSection: React.FC<ProgrammerNavbarSectionProps> = ({
  templateData,
  onChange,
  onNavLinkChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaBars className="text-gray-500 w-5 h-5" />
        <h3 className="text-lg font-semibold text-gray-800">Navbar Settings</h3>
      </div>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Navbar Color:</span>
        <input
          type="color"
          value={templateData.navbarColor || "#ffffff"}
          onChange={(e) => onChange("navbarColor", e.target.value)}
          className="p-1 border rounded-md w-full bg-transparent"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Logo Name:</span>
        <input
          type="text"
          value={templateData.logoName || ""}
          onChange={(e) => onChange("logoName", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter logo name"
        />
      </label>
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Logo Color:</span>
        <input
          type="color"
          value={templateData.logoColor || "#ffffff"}
          onChange={(e) => onChange("logoColor", e.target.value)}
          className="p-1 border rounded-md w-full bg-transparent"
        />
      </label>
      <h4 className="text-md font-medium text-gray-800 mt-4">
        Navigation Links
      </h4>
      <label className="block mb-2">
          Navigation Links Color:
          <input
            type="color"
            value={templateData.navigationLinksColor || "#ffffff"}
            onChange={(e) => onChange("navigationLinksColor", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent"
        />
      </label>
      {templateData.navigationLinks?.map((link, index) => (
        <div key={index} className="space-y-2 mb-4 border p-3 rounded-md">
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">
              Link Name:
            </span>
            <input
              type="text"
              value={link.name}
              onChange={(e) => onNavLinkChange(index, "name", e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter link name"
            />
          </label>
          <label className="flex items-center space-x-2">
            <FaLink className="text-gray-500 w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Link URL:</span>
            <input
              type="text"
              value={link.link}
              onChange={(e) => onNavLinkChange(index, "link", e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter link URL"
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProgrammerNavbarSection;
