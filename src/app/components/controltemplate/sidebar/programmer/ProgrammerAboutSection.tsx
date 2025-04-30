import React from "react";
import { TemplateData } from "@/app/types/templateData";
import { FaInfoCircle, FaPlus, FaTrash, FaImage } from "react-icons/fa";

interface ProgrammerAboutSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
  onArrayChange?: (key: string, value: string[]) => void;
  onAddSkill?: () => void;
  onRemoveSkill?: (index: number) => void;
  onAddEducation?: () => void;
  onRemoveEducation?: (index: number) => void;
  onAddCertification?: () => void;
  onRemoveCertification?: (index: number) => void;
}

const ProgrammerAboutSection: React.FC<ProgrammerAboutSectionProps> = ({
  templateData,
  onChange,
  onImageChange,
  onArrayChange,
  onAddSkill,
  onRemoveSkill,
  onAddEducation,
  onRemoveEducation,
  onAddCertification,
  onRemoveCertification,
}) => {
  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...(templateData.programmerSkills || [])];
    updatedSkills[index] = value;
    onArrayChange?.("programmerSkills", updatedSkills);
  };

  const handleEducationChange = (index: number, value: string) => {
    const updatedEducation = [...(templateData.programmerEducation || [])];
    updatedEducation[index] = value;
    onArrayChange?.("programmerEducation", updatedEducation);
  };

  const handleCertificationChange = (index: number, value: string) => {
    const updatedCertifications = [
      ...(templateData.programmerCertifications || []),
    ];
    updatedCertifications[index] = value;
    onArrayChange?.("programmerCertifications", updatedCertifications);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaInfoCircle className="text-gray-500 w-5 h-5" />
        <h3 className="text-lg font-semibold text-gray-800">About Settings</h3>
      </div>

      {/* العنوان */}
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Title:</span>
        <input
          type="text"
          value={templateData.programmerAboutTitle || ""}
          onChange={(e) => onChange("programmerAboutTitle", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter about title"
        />
      </label>

      {/* الوصف */}
      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Description:</span>
        <textarea
          value={templateData.programmerAboutDescription || ""}
          onChange={(e) =>
            onChange("programmerAboutDescription", e.target.value)
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter description"
          rows={4}
        />
      </label>

      {/* الصورة */}
      <label className="flex items-center space-x-2">
        <FaImage className="text-gray-500 w-5 h-5" />
        <span className="text-sm font-medium text-gray-700">About Image:</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            onImageChange("programmerAboutImage", e.target.files?.[0] || null)
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
        />
      </label>

      {/* المهارات */}
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium text-gray-800">Skills</h4>
        <button
          onClick={onAddSkill}
          className="flex items-center space-x-1 text-blue-500 hover:text-blue-700"
        >
          <FaPlus />
          <span>Add Skill</span>
        </button>
      </div>
      {templateData.programmerSkills &&
      templateData.programmerSkills.length > 0 ? (
        templateData.programmerSkills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <label className="flex items-center space-x-2 flex-1">
              <span className="text-sm font-medium text-gray-700">
                Skill {index + 1}:
              </span>
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter skill ${index + 1}`}
              />
            </label>
            <button
              onClick={() => onRemoveSkill?.(index)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">
          No skills available. Add one to get started!
        </p>
      )}

      {/* التعليم */}
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium text-gray-800">Education</h4>
        <button
          onClick={onAddEducation}
          className="flex items-center space-x-1 text-blue-500 hover:text-blue-700"
        >
          <FaPlus />
          <span>Add Education</span>
        </button>
      </div>
      {templateData.programmerEducation &&
      templateData.programmerEducation.length > 0 ? (
        templateData.programmerEducation.map((edu, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <label className="flex items-center space-x-2 flex-1">
              <span className="text-sm font-medium text-gray-700">
                Education {index + 1}:
              </span>
              <input
                type="text"
                value={edu}
                onChange={(e) => handleEducationChange(index, e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter education ${index + 1}`}
              />
            </label>
            <button
              onClick={() => onRemoveEducation?.(index)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">
          No education entries available. Add one to get started!
        </p>
      )}

      {/* الشهادات */}
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium text-gray-800">Certifications</h4>
        <button
          onClick={onAddCertification}
          className="flex items-center space-x-1 text-blue-500 hover:text-blue-700"
        >
          <FaPlus />
          <span>Add Certification</span>
        </button>
      </div>
      {templateData.programmerCertifications &&
      templateData.programmerCertifications.length > 0 ? (
        templateData.programmerCertifications.map((cert, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <label className="flex items-center space-x-2 flex-1">
              <span className="text-sm font-medium text-gray-700">
                Certification {index + 1}:
              </span>
              <input
                type="text"
                value={cert}
                onChange={(e) =>
                  handleCertificationChange(index, e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter certification ${index + 1}`}
              />
            </label>
            <button
              onClick={() => onRemoveCertification?.(index)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">
          No certifications available. Add one to get started!
        </p>
      )}
    </div>
  );
};

export default ProgrammerAboutSection;
