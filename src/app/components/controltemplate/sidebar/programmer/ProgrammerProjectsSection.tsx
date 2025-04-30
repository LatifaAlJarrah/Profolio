import React from "react";
import { TemplateData } from "@/app/types/templateData";
import { FaFolder, FaPlus, FaTrash, FaImage } from "react-icons/fa";

interface ProgrammerProjectsSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onProjectChange: (
    index: number,
    field: string,
    value: string | string[]
  ) => void;
  onProjectImageChange: (index: number, file: File | null) => void;
  onAddProject: () => void;
  onRemoveProject: (index: number) => void;
}

const ProgrammerProjectsSection: React.FC<ProgrammerProjectsSectionProps> = ({
  templateData,
  onChange,
  onProjectChange,
  onProjectImageChange,
  onAddProject,
  onRemoveProject,
}) => {
  const handleTagChange = (index: number, tagIndex: number, value: string) => {
    const updatedProjects = [...(templateData.programmerProjects || [])];
    const updatedTags = [...updatedProjects[index].tag];
    updatedTags[tagIndex] = value;
    onProjectChange(index, "tag", updatedTags);
  };

  const handleAddTag = (index: number) => {
    const updatedProjects = [...(templateData.programmerProjects || [])];
    const updatedTags = [...updatedProjects[index].tag, "New Tag"];
    onProjectChange(index, "tag", updatedTags);
  };

  const handleRemoveTag = (index: number, tagIndex: number) => {
    const updatedProjects = [...(templateData.programmerProjects || [])];
    const updatedTags = [...updatedProjects[index].tag];
    updatedTags.splice(tagIndex, 1);
    onProjectChange(index, "tag", updatedTags);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaFolder className="text-gray-500 w-5 h-5" />
        <h3 className="text-lg font-semibold text-gray-800">
          Projects Settings
        </h3>
      </div>

      {/* العنوان */}
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Title:</span>
        <input
          type="text"
          value={templateData.programmerProjectsTitle || ""}
          onChange={(e) => onChange("programmerProjectsTitle", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter projects title"
        />
      </label>

      {/* المشاريع */}
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium text-gray-800">Projects</h4>
        <button
          onClick={onAddProject}
          className="flex items-center space-x-1 text-blue-500 hover:text-blue-700"
        >
          <FaPlus />
          <span>Add Project</span>
        </button>
      </div>
      {templateData.programmerProjects &&
      templateData.programmerProjects.length > 0 ? (
        templateData.programmerProjects.map((project, index) => (
          <div key={index} className="border p-3 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium text-gray-700">
                Project {index + 1}
              </h5>
              <button
                onClick={() => onRemoveProject(index)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>

            {/* عنوان المشروع */}
            <label className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">
                Project Title:
              </span>
              <input
                type="text"
                value={project.title}
                onChange={(e) =>
                  onProjectChange(index, "title", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter project title"
              />
            </label>

            {/* وصف المشروع */}
            <label className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">
                Description:
              </span>
              <textarea
                value={project.description}
                onChange={(e) =>
                  onProjectChange(index, "description", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter description"
                rows={2}
              />
            </label>

            {/* صورة المشروع */}
            <label className="flex items-center space-x-2">
              <FaImage className="text-gray-500 w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">Image:</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  onProjectImageChange(index, e.target.files?.[0] || null)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* العلامات (Tags) */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Tags:</span>
              <button
                onClick={() => handleAddTag(index)}
                className="flex items-center space-x-1 text-blue-500 hover:text-blue-700"
              >
                <FaPlus />
                <span>Add Tag</span>
              </button>
            </div>
            {project.tag.map((tag, tagIndex) => (
              <div key={tagIndex} className="flex items-center space-x-2 mb-2">
                <label className="flex items-center space-x-2 flex-1">
                  <span className="text-sm font-medium text-gray-700">
                    Tag {tagIndex + 1}:
                  </span>
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) =>
                      handleTagChange(index, tagIndex, e.target.value)
                    }
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter tag ${tagIndex + 1}`}
                  />
                </label>
                <button
                  onClick={() => handleRemoveTag(index, tagIndex)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}

            {/* رابط GitHub */}
            <label className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">
                GitHub URL:
              </span>
              <input
                type="text"
                value={project.gitUrl}
                onChange={(e) =>
                  onProjectChange(index, "gitUrl", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter GitHub URL"
              />
            </label>

            {/* رابط Preview */}
            <label className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">
                Preview URL:
              </span>
              <input
                type="text"
                value={project.previewUrl}
                onChange={(e) =>
                  onProjectChange(index, "previewUrl", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Preview URL"
              />
            </label>
          </div>
        ))
      ) : (
        <p className="text-gray-500">
          No projects available. Add one to get started!
        </p>
      )}
    </div>
  );
};

export default ProgrammerProjectsSection;
