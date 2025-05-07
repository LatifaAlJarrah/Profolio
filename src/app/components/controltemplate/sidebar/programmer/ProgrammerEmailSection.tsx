import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

interface ProgrammerEmailSectionProps {
  templateData: {
    programmerContactTitle?: string;
    programmerContactDescription?: string;
    programmerGithubLink?: string;
    programmerLinkedinLink?: string;
    programmerContactEmailLabel?: string;
    programmerContactSubjectLabel?: string;
    programmerContactMessageLabel?: string;
    programmerContactEmailPlaceholder?: string;
    programmerContactSubjectPlaceholder?: string;
    programmerContactMessagePlaceholder?: string;
    programmerContactSubmitButtonText?: string;
  };
  onChange: (key: string, value: string) => void;
}

const ProgrammerEmailSection: React.FC<ProgrammerEmailSectionProps> = ({
  templateData,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-gray-500 w-5 h-5" />
        <h3 className="text-lg font-semibold text-gray-800">Email Settings</h3>
      </div>

      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Title:</span>
        <input
          type="text"
          value={templateData.programmerContactTitle || ""}
          onChange={(e) => onChange("programmerContactTitle", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter section title"
        />
      </label>

      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Description:</span>
        <textarea
          value={templateData.programmerContactDescription || ""}
          onChange={(e) =>
            onChange("programmerContactDescription", e.target.value)
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter section description"
          rows={3}
        />
      </label>

      <h4 className="text-md font-medium text-gray-800">Social Links</h4>
      <label className="flex items-center space-x-2">
        <FaGithub className="text-gray-500 w-5 h-5" />
        <span className="text-sm font-medium text-gray-700">GitHub URL:</span>
        <input
          type="text"
          value={templateData.programmerGithubLink || ""}
          onChange={(e) => onChange("programmerGithubLink", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter GitHub URL"
        />
      </label>
      <label className="flex items-center space-x-2">
        <FaLinkedin className="text-gray-500 w-5 h-5" />
        <span className="text-sm font-medium text-gray-700">LinkedIn URL:</span>
        <input
          type="text"
          value={templateData.programmerLinkedinLink || ""}
          onChange={(e) => onChange("programmerLinkedinLink", e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter LinkedIn URL"
        />
      </label>

      <h4 className="text-md font-medium text-gray-800">Form Fields</h4>
      <div className="border p-3 rounded-md space-y-2">
        <h5 className="text-sm font-medium text-gray-700">Email Field</h5>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Label:</span>
          <input
            type="text"
            value={templateData.programmerContactEmailLabel || ""}
            onChange={(e) =>
              onChange("programmerContactEmailLabel", e.target.value)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email label"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Placeholder:
          </span>
          <input
            type="text"
            value={templateData.programmerContactEmailPlaceholder || ""}
            onChange={(e) =>
              onChange("programmerContactEmailPlaceholder", e.target.value)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email placeholder"
          />
        </label>
      </div>
      <div className="border p-3 rounded-md space-y-2">
        <h5 className="text-sm font-medium text-gray-700">Subject Field</h5>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Label:</span>
          <input
            type="text"
            value={templateData.programmerContactSubjectLabel || ""}
            onChange={(e) =>
              onChange("programmerContactSubjectLabel", e.target.value)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter subject label"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Placeholder:
          </span>
          <input
            type="text"
            value={templateData.programmerContactSubjectPlaceholder || ""}
            onChange={(e) =>
              onChange("programmerContactSubjectPlaceholder", e.target.value)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter subject placeholder"
          />
        </label>
      </div>
      <div className="border p-3 rounded-md space-y-2">
        <h5 className="text-sm font-medium text-gray-700">Message Field</h5>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Label:</span>
          <input
            type="text"
            value={templateData.programmerContactMessageLabel || ""}
            onChange={(e) =>
              onChange("programmerContactMessageLabel", e.target.value)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter message label"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Placeholder:
          </span>
          <input
            type="text"
            value={templateData.programmerContactMessagePlaceholder || ""}
            onChange={(e) =>
              onChange("programmerContactMessagePlaceholder", e.target.value)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter message placeholder"
          />
        </label>
      </div>

      <label className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          Submit Button Text:
        </span>
        <input
          type="text"
          value={templateData.programmerContactSubmitButtonText || ""}
          onChange={(e) =>
            onChange("programmerContactSubmitButtonText", e.target.value)
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter submit button text"
        />
      </label>
    </div>
  );
};

export default ProgrammerEmailSection;
