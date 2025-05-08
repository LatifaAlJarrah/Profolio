import React from "react";
import { TemplateData } from "@/app/types/templateData";
import { FaPlus, FaTrash } from "react-icons/fa";

interface DeveloperServiceSectionProps {
  templateData: TemplateData;
  onChange: (
    key: string,
    value: string | TemplateData["developerServices"]
  ) => void;
}

const DeveloperServiceSection: React.FC<DeveloperServiceSectionProps> = ({
  templateData,
  onChange,
}) => {
  const services = Array.isArray(templateData.developerServices)
    ? templateData.developerServices
    : [];

  const handleServiceChange = (index: number, field: string, value: string) => {
    const updatedServices = [...services];
    updatedServices[index] = { ...updatedServices[index], [field]: value };
    onChange("developerServices", updatedServices);
  };

  const handleAddService = () => {
    const newService = {
      num: "",
      title: "",
      description: "",
      href: "",
    };
    const updatedServices = [...services, newService];
    onChange("developerServices", updatedServices);
  };

  const handleRemoveService = (index: number) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    onChange("developerServices", updatedServices);
  };

  return (
    <div>
      <h4 className="text-md font-medium text-gray-800 mt-4">
        Services Settings
      </h4>
      {services.map((service, index) => (
        <div key={index} className="space-y-2 mb-4 border p-3 rounded-md">
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Num:</span>
            <input
              type="text"
              value={service.num || ""}
              onChange={(e) =>
                handleServiceChange(index, "num", e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service number (e.g., 01)"
            />
          </label>
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Title:</span>
            <input
              type="text"
              value={service.title || ""}
              onChange={(e) =>
                handleServiceChange(index, "title", e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service title"
            />
          </label>
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">
              Description:
            </span>
            <textarea
              value={service.description || ""}
              onChange={(e) =>
                handleServiceChange(index, "description", e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service description"
            />
          </label>
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">
              Link (href):
            </span>
            <input
              type="text"
              value={service.href || ""}
              onChange={(e) =>
                handleServiceChange(index, "href", e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service link (e.g., /service)"
            />
          </label>
          <button
            onClick={() => handleRemoveService(index)}
            className="mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            <FaTrash /> Remove Service
          </button>
        </div>
      ))}
      <button
        onClick={handleAddService}
        className="mt-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center gap-2"
      >
        <FaPlus /> Add Service
      </button>
    </div>
  );
};

export default DeveloperServiceSection;
