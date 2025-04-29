import React from "react";
import { TemplateData } from "@/app/types/templateData";

interface ServicesSectionProps {
  templateData: TemplateData;
  onServiceChange: (index: number, field: string, value: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  templateData,
  onServiceChange,
}) => {
  const handleIconChange = (index: number, file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onServiceChange(index, "uploadedIcon", imageUrl);
    } else {
      onServiceChange(index, "uploadedIcon", "");
    }
  };

  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-4 rounded-lg mb-6 mx-6 shadow-sm">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Services Settings
        </h3>
      </div>
      <div className="px-6 space-y-4">
        {templateData.services?.map((service, index) => (
          <div key={index} className="border p-4 rounded-md space-y-2">
            <h5 className="text-md font-medium text-gray-700">
              Service {index + 1}
            </h5>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Title:</span>
              <input
                type="text"
                value={service.title || ""}
                onChange={(e) =>
                  onServiceChange(index, "title", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the service title"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                Description:
              </span>
              <input
                type="text"
                value={service.description || ""}
                onChange={(e) =>
                  onServiceChange(index, "description", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the service description"
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

export default ServicesSection;
