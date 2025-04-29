import React from "react";
import { TemplateData } from "@/app/types/templateData";

interface ProjectsSectionProps {
  templateData: TemplateData;
  onProjectChange: (
    category: string,
    index: number,
    field: string,
    value: string
  ) => void;
  onProjectImageChange: (
    category: string,
    index: number,
    file: File | null
  ) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  templateData,
  onProjectChange,
  onProjectImageChange,
}) => {
  const categories = Object.keys(templateData.projects || {});

  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-4 rounded-lg mb-6 mx-6 shadow-sm">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Projects Settings
        </h3>
      </div>
      <div className="px-6 space-y-4">
        {categories.map((category) => (
          <div key={category} className="border p-4 rounded-md space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">{category}</h4>
            {templateData.projects?.[category]?.map((project, index) => (
              <div key={index} className="border p-4 rounded-md space-y-2">
                <h5 className="text-md font-medium text-gray-700">
                  Project {index + 1}
                </h5>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Name:
                  </span>
                  <input
                    type="text"
                    value={project.name || ""}
                    onChange={(e) =>
                      onProjectChange(category, index, "name", e.target.value)
                    }
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the project name"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">
                    Image:
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      onProjectImageChange(
                        category,
                        index,
                        e.target.files?.[0] || null
                      )
                    }
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
                  />
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
