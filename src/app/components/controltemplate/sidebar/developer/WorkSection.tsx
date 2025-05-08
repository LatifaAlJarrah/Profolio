import React from "react";
import { TemplateData } from "@/app/types/templateData";
import { FaPlus, FaTrash, FaLaptopCode} from "react-icons/fa";

interface WorkSectionProps {
  templateData: TemplateData;
  onChange: (
    key: string,
    value: string | TemplateData["developerProjects"]
  ) => void;
}

const WorkSection: React.FC<WorkSectionProps> = ({
  templateData,
  onChange,
}) => {
  const projects = Array.isArray(templateData.developerProjects)
    ? templateData.developerProjects
    : [];

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    onChange("developerProjects", updatedProjects);
  };

  const handleStackChange = (
    projectIndex: number,
    stackIndex: number,
    value: string
  ) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].stack =
      updatedProjects[projectIndex].stack || [];
    if (updatedProjects[projectIndex].stack[stackIndex]) {
      updatedProjects[projectIndex].stack[stackIndex] = { name: value };
    }
    onChange("developerProjects", updatedProjects);
  };

  const handleAddProject = () => {
    const newProject = {
      num: "",
      category: "",
      // title: "",
      description: "",
      stack: [{ name: "" }],
      image: "",
      live: "",
      github: "",
    };
    const updatedProjects = [...projects, newProject];
    onChange("developerProjects", updatedProjects);
  };

  const handleRemoveProject = (index: number) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    onChange("developerProjects", updatedProjects);
  };

  const handleImageChange = (index: number, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        handleProjectChange(index, "image", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddStackItem = (projectIndex: number) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].stack =
      updatedProjects[projectIndex].stack || [];
    updatedProjects[projectIndex].stack.push({ name: "" });
    onChange("developerProjects", updatedProjects);
  };

  const handleRemoveStackItem = (projectIndex: number, stackIndex: number) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].stack =
      updatedProjects[projectIndex].stack || [];
    updatedProjects[projectIndex].stack.splice(stackIndex, 1);
    onChange("developerProjects", updatedProjects);
  };

  return (
    <div>
      <div className="flex items-center space-x-2">
        <FaLaptopCode className="text-gray-500 w-5 h-5" />
        <h4 className="text-md font-medium text-gray-800 mt-4">
          Work Projects Settings
        </h4>
      </div>
      {projects.map((project, index) => (
        <div key={index} className="space-y-2 mb-4 border p-3 rounded-md">
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Num:</span>
            <input
              type="text"
              value={project.num || ""}
              onChange={(e) =>
                handleProjectChange(index, "num", e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter project number"
            />
          </label>
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Category:</span>
            <input
              type="text"
              value={project.category || ""}
              onChange={(e) =>
                handleProjectChange(index, "category", e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category"
            />
          </label>
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">
              Description:
            </span>
            <textarea
              value={project.description || ""}
              onChange={(e) =>
                handleProjectChange(index, "description", e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            />
          </label>
          <label className="flex flex-col items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Stack:</span>
            {(project.stack || []).map((stackItem, stackIndex) => (
              <div
                key={stackIndex}
                className="flex items-center space-x-2 mb-2"
              >
                <input
                  type="text"
                  value={stackItem.name || ""}
                  onChange={(e) =>
                    handleStackChange(index, stackIndex, e.target.value)
                  }
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter stack item"
                />
                <button
                  onClick={() => handleRemoveStackItem(index, stackIndex)}
                  className="p-2 text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              onClick={() => handleAddStackItem(index)}
              className="mt-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center gap-2"
            >
              <FaPlus /> Add Stack Item
            </button>
          </label>
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Image:</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleImageChange(index, e.target.files?.[0] || null)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">
              Live Link:
            </span>
            <input
              type="text"
              value={project.live || ""}
              onChange={(e) =>
                handleProjectChange(index, "live", e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter live URL"
            />
          </label>
          <label className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">
              GitHub Link:
            </span>
            <input
              type="text"
              value={project.github || ""}
              onChange={(e) =>
                handleProjectChange(index, "github", e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter GitHub URL"
            />
          </label>
          <button
            onClick={() => handleRemoveProject(index)}
            className="mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            <FaTrash /> Remove Project
          </button>
        </div>
      ))}
      <button
        onClick={handleAddProject}
        className="mt-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center gap-2"
      >
        <FaPlus /> Add Project
      </button>
    </div>
  );
};

export default WorkSection;
