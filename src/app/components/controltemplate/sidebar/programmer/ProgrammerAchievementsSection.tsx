import React from "react";
import { TemplateData } from "@/app/types/templateData";
import { FaTrophy, FaPlus, FaTrash } from "react-icons/fa";

interface ProgrammerAchievementsSectionProps {
  templateData: TemplateData;
  onAchievementsChange: (
    index: number,
    field: string,
    value: string | number
  ) => void;
  onAddAchievement: () => void;
  onRemoveAchievement: (index: number) => void;
}

const ProgrammerAchievementsSection: React.FC<
  ProgrammerAchievementsSectionProps
> = ({
  templateData,
  onAchievementsChange,
  onAddAchievement,
  onRemoveAchievement,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaTrophy className="text-gray-500 w-5 h-5" />
        <h3 className="text-lg font-semibold text-gray-800">
          Achievements Settings
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium text-gray-800">Achievements</h4>
        <button
          onClick={onAddAchievement}
          className="flex items-center space-x-1 text-blue-500 hover:text-blue-700"
        >
          <FaPlus />
          <span>Add Achievement</span>
        </button>
      </div>
      {templateData.ourAchievements?.map((achievement, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 mb-2 border p-3 rounded-md"
        >
          <div className="flex-1 space-y-2">
            <label className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Number:</span>
              <input
                type="number"
                value={achievement.number}
                onChange={(e) =>
                  onAchievementsChange(
                    index,
                    "number",
                    parseInt(e.target.value) || 0
                  )
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter number"
              />
            </label>
            <label className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Text:</span>
              <input
                type="text"
                value={achievement.text}
                onChange={(e) =>
                  onAchievementsChange(index, "text", e.target.value)
                }
                className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter text"
              />
            </label>
          </div>
          <button
            onClick={() => onRemoveAchievement(index)}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProgrammerAchievementsSection;
