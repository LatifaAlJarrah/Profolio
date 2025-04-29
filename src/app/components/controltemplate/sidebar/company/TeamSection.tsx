import React from "react";
import { TemplateData } from "@/app/types/templateData";
import {
  FaUser,
  FaBriefcase,
  FaImage,
  FaTrash,
  FaPlus,
  FaInstagram,
  FaBehance,
  FaGithub,
} from "react-icons/fa";

interface TeamSectionSettingsProps {
  templateData: TemplateData;
  onTeamMemberChange: (index: number, field: string, value: string) => void;
  onTeamMemberImageChange: (index: number, file: File | null) => void;
  onAddTeamMember: () => void;
  onRemoveTeamMember: (index: number) => void;
}

const TeamSectionSettings: React.FC<TeamSectionSettingsProps> = ({
  templateData,
  onTeamMemberChange,
  onTeamMemberImageChange,
  onAddTeamMember,
  onRemoveTeamMember,
}) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-4 rounded-lg mb-6 mx-6 shadow-sm">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Team Section Settings
        </h3>
      </div>
      <div className="px-6 space-y-4">
        {templateData.teamMembers?.map((member, index) => (
          <div
            key={index}
            className="border p-4 rounded-md space-y-3 bg-white shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h5 className="text-md font-medium text-gray-700">
                Team Member {index + 1}
              </h5>
              <button
                onClick={() => onRemoveTeamMember(index)}
                className="text-red-500 hover:text-red-700 transition-colors"
                title="Remove Member"
              >
                <FaTrash className="w-5 h-5" />
              </button>
            </div>
            <label className="flex items-center space-x-2">
              <FaUser className="text-gray-500 w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">Name:</span>
              <input
                type="text"
                value={member.name || ""}
                onChange={(e) =>
                  onTeamMemberChange(index, "name", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the member's name"
              />
            </label>
            <label className="flex items-center space-x-2">
              <FaBriefcase className="text-gray-500 w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">Role:</span>
              <input
                type="text"
                value={member.role || ""}
                onChange={(e) =>
                  onTeamMemberChange(index, "role", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the member's role"
              />
            </label>
            <label className="flex items-center space-x-2">
              <FaImage className="text-gray-500 w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">Image:</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  onTeamMemberImageChange(index, e.target.files?.[0] || null)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900"
              />
            </label>
            <label className="flex items-center space-x-2">
              <FaInstagram className="text-gray-500 w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">
                Instagram Link:
              </span>
              <input
                type="text"
                value={member.instagramLink || ""}
                onChange={(e) =>
                  onTeamMemberChange(index, "instagramLink", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Instagram link (optional)"
              />
            </label>
            <label className="flex items-center space-x-2">
              <FaBehance className="text-gray-500 w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">
                Behance Link:
              </span>
              <input
                type="text"
                value={member.behanceLink || ""}
                onChange={(e) =>
                  onTeamMemberChange(index, "behanceLink", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Behance link (optional)"
              />
            </label>
            <label className="flex items-center space-x-2">
              <FaGithub className="text-gray-500 w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">
                GitHub Link:
              </span>
              <input
                type="text"
                value={member.githubLink || ""}
                onChange={(e) =>
                  onTeamMemberChange(index, "githubLink", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter GitHub link (optional)"
              />
            </label>
          </div>
        ))}
        <button
          onClick={onAddTeamMember}
          className="flex items-center justify-center w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <FaPlus className="w-5 h-5 mr-2" />
          Add New Member
        </button>
      </div>
    </>
  );
};

export default TeamSectionSettings;
