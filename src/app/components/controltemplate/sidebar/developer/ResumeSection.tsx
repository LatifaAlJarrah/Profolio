
import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

interface About {
  title?: string;
  description?: string;
  info?: Array<{
    fieldName?: string;
    fieldValue?: string;
  }>;
}

interface Experience {
  icon?: string;
  title?: string;
  description?: string;
  items?: Array<{
    company?: string;
    position?: string;
    duration?: string;
  }>;
}

interface Education {
  icon?: string;
  title?: string;
  description?: string;
  items?: Array<{
    institution?: string;
    degree?: string;
    duration?: string;
  }>;
}

interface Skill {
  icon?: React.ReactNode;
  name?: string;
}

interface Skills {
  title?: string;
  description?: string;
  skillList?: Skill[];
}

interface DeveloperResume {
  about?: About;
  experience?: Experience;
  education?: Education;
  skills?: Skills;
}

interface TemplateData {
  developerResume?: DeveloperResume;
}

interface ResumeSidebarProps {
  templateData: TemplateData;
  onChange: (key: string, value: DeveloperResume) => void;
}

const ResumeSidebar: React.FC<ResumeSidebarProps> = ({
  templateData,
  onChange,
}) => {
  const [resumeData, setResumeData] = useState<DeveloperResume>(
    templateData.developerResume || {
      about: {
        title: "About Me",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
        info: [
          { fieldName: "Name", fieldValue: "Luke Coleman" },
          { fieldName: "Phone", fieldValue: "(+40 321 568 985)" },
          { fieldName: "Experience", fieldValue: "12+ Years" },
          { fieldName: "Skype", fieldValue: "luke.01" },
          { fieldName: "Nationality", fieldValue: "Palestinian" },
          { fieldName: "Email", fieldValue: "luke.01@gmail.com" },
          { fieldName: "Freelance", fieldValue: "Available" },
          { fieldName: "Languages", fieldValue: "English, Arabic" },
        ],
      },
      experience: {
        icon: "/assets/resume/badge.svg",
        title: "My Experience",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
        items: [
          {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "2022 - present",
          },
          {
            company: "Web Design Studio",
            position: "Front-End Developer Intern",
            duration: "Summer 2021",
          },
          {
            company: "E-commerce StartUp",
            position: "Freelance Web Developer",
            duration: "2021 - 2022",
          },
          {
            company: "Tech Academy",
            position: "Teaching Assistant",
            duration: "2019 - 2020",
          },
          {
            company: "Digital Agency",
            position: "UI/UX Designer",
            duration: "2023 - 2024",
          },
          {
            company: "Software Development Firm",
            position: "Junior Developer",
            duration: "2017 - 2018",
          },
        ],
      },
      education: {
        icon: "/assets/resume/cap.svg",
        title: "My Education",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
        items: [
          {
            institution: "Online Course Platform",
            degree: "Full Stack Web Development Bootcamp",
            duration: "2023",
          },
          {
            institution: "Codecademy",
            degree: "Front-end Track",
            duration: "2022",
          },
          {
            institution: "Online Course",
            degree: "Programming Course",
            duration: "2020 - 2021",
          },
          {
            institution: "Tech Institute",
            degree: "Certified Web",
            duration: "2019",
          },
          {
            institution: "Design School",
            degree: "Diploma in Graphic Design",
            duration: "2018",
          },
          {
            institution: "Community College",
            degree: "Associate Degree in Computer Science",
            duration: "2016 - 2017",
          },
        ],
      },
      skills: {
        title: "My Skills",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
        skillList: [
          { icon: <FaHtml5 />, name: "Html 5" },
          { icon: <FaCss3 />, name: "Css 3" },
          { icon: <FaJs />, name: "javascript" },
          { icon: <FaReact />, name: "react.js" },
          { icon: <SiNextdotjs />, name: "next.js" },
          { icon: <SiTailwindcss />, name: "tailwind.css" },
          { icon: <FaNodeJs />, name: "node.js" },
          { icon: <FaFigma />, name: "figma" },
        ],
      },
    }
  );

  const handleUpdate = (
    section: keyof DeveloperResume,
    field: string,
    value:
      | string
      | Partial<About>
      | Partial<Experience>
      | Partial<Education>
      | Partial<Skills>
      | { fieldName: string; fieldValue: string }
      | { company: string; position: string; duration: string }
      | { institution: string; degree: string; duration: string }
      | Skill,
    index?: number
  ) => {
    const updatedResume = { ...resumeData };
    if (section === "about") {
      if (!updatedResume.about) updatedResume.about = {};
      if (field === "info" && index !== undefined) {
        if (!updatedResume.about.info) updatedResume.about.info = [];
        updatedResume.about.info[index] = value as {
          fieldName: string;
          fieldValue: string;
        };
      } else {
        updatedResume.about = { ...updatedResume.about, ...(value as object) };
      }
    } else if (section === "experience") {
      if (!updatedResume.experience) updatedResume.experience = { items: [] };
      if (field === "items" && index !== undefined) {
        if (!updatedResume.experience.items)
          updatedResume.experience.items = [];
        updatedResume.experience.items[index] = value as {
          company: string;
          position: string;
          duration: string;
        };
      }  else {
        updatedResume.experience = { ...updatedResume.experience, ...value as Experience };
      }
    } else if (section === "education") {
      if (!updatedResume.education) updatedResume.education = { items: [] };
      if (field === "items" && index !== undefined) {
        if (!updatedResume.education.items) updatedResume.education.items = [];
        updatedResume.education.items[index] = value as {
          institution: string;
          degree: string;
          duration: string;
        };
      } else {
        updatedResume.education = {
          ...updatedResume.education,
          ...(value as Education),
        };
      }
    } else if (section === "skills") {
      if (!updatedResume.skills) updatedResume.skills = { skillList: [] };
      if (field === "skillList" && index !== undefined) {
        if (!updatedResume.skills.skillList)
          updatedResume.skills.skillList = [];
        updatedResume.skills.skillList[index] = value as Skill;
      }  else {
        updatedResume.skills = {
          ...updatedResume.skills,
          ...(value as object),
        };
      }
    }
    setResumeData(updatedResume);
    onChange("developerResume", updatedResume);
  };

  const handleAddItem = (section: keyof DeveloperResume) => {
    const updatedResume = { ...resumeData };
    if (section === "about") {
      if (!updatedResume.about) updatedResume.about = {};
      if (!updatedResume.about.info) updatedResume.about.info = [];
      updatedResume.about.info.push({ fieldName: "", fieldValue: "" });
    } else if (section === "experience") {
      if (!updatedResume.experience) updatedResume.experience = { items: [] };
      updatedResume.experience.items!.push({
        company: "",
        position: "",
        duration: "",
      });
    } else if (section === "education") {
      if (!updatedResume.education) updatedResume.education = { items: [] };
      updatedResume.education.items!.push({
        institution: "",
        degree: "",
        duration: "",
      });
    } else if (section === "skills") {
      if (!updatedResume.skills) updatedResume.skills = { skillList: [] };
      updatedResume.skills.skillList!.push({
        icon: <FaHtml5 />, // Default icon
        name: "",
      });
    }
    setResumeData(updatedResume);
    onChange("developerResume", updatedResume);
  };

  const handleRemoveItem = (section: keyof DeveloperResume, index: number) => {
    const updatedResume = { ...resumeData };
    if (section === "about" && updatedResume.about?.info) {
      updatedResume.about.info.splice(index, 1);
    } else if (section === "experience" && updatedResume.experience?.items) {
      updatedResume.experience.items.splice(index, 1);
    } else if (section === "education" && updatedResume.education?.items) {
      updatedResume.education.items.splice(index, 1);
    } else if (section === "skills" && updatedResume.skills?.skillList) {
      updatedResume.skills.skillList.splice(index, 1);
    }
    setResumeData(updatedResume);
    onChange("developerResume", updatedResume);
  };

  return (
    <div className="w-full max-w-[380px] p-4 text-black">
      <h2 className="text-2xl font-bold mb-4">Resume Editor</h2>
      {/* About Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">About Me</h3>
        <input
          type="text"
          value={resumeData.about?.title || ""}
          onChange={(e) => handleUpdate("about", "title", e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Title"
        />
        <textarea
          value={resumeData.about?.description || ""}
          onChange={(e) => handleUpdate("about", "description", e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Description"
        />
        {resumeData.about?.info?.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 mb-2">
            <input
              type="text"
              value={item.fieldName || ""}
              onChange={(e) =>
                handleUpdate(
                  "about",
                  "info",
                  {
                    fieldName: e.target.value,
                    fieldValue: item.fieldValue || "",
                  },
                  index
                )
              }
              className="p-2 border rounded"
              placeholder="Field Name"
            />
            <input
              type="text"
              value={item.fieldValue || ""}
              onChange={(e) =>
                handleUpdate(
                  "about",
                  "info",
                  {
                    fieldName: item.fieldName || "",
                    fieldValue: e.target.value,
                  },
                  index
                )
              }
              className="p-2 border rounded"
              placeholder="Field Value"
            />
            <button
              onClick={() => handleRemoveItem("about", index)}
              className="p-2 bg-red-500 text-white rounded"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          onClick={() => handleAddItem("about")}
          className="p-2 bg-green-500 text-white rounded flex items-center gap-2"
        >
          <FaPlus /> Add Info
        </button>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Experience</h3>
        <input
          type="text"
          value={resumeData.experience?.title || ""}
          onChange={(e) => handleUpdate("experience", "title", e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Title"
        />
        <textarea
          value={resumeData.experience?.description || ""}
          onChange={(e) =>
            handleUpdate("experience", "description", e.target.value)
          }
          className="w-full p-2 mb-2 border rounded"
          placeholder="Description"
        />
        {resumeData.experience?.items?.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 mb-2">
            <input
              type="text"
              value={item.company || ""}
              onChange={(e) =>
                handleUpdate(
                  "experience",
                  "items",
                  {
                    company: e.target.value,
                    position: item.position || "",
                    duration: item.duration || "",
                  },
                  index
                )
              }
              className="p-2 border rounded"
              placeholder="Company"
            />
            <input
              type="text"
              value={item.position || ""}
              onChange={(e) =>
                handleUpdate(
                  "experience",
                  "items",
                  {
                    company: item.company || "",
                    position: e.target.value,
                    duration: item.duration || "",
                  },
                  index
                )
              }
              className="p-2 border rounded"
              placeholder="Position"
            />
            <input
              type="text"
              value={item.duration || ""}
              onChange={(e) =>
                handleUpdate(
                  "experience",
                  "items",
                  {
                    company: item.company || "",
                    position: item.position || "",
                    duration: e.target.value,
                  },
                  index
                )
              }
              className="p-2 border rounded"
              placeholder="Duration"
            />
            <button
              onClick={() => handleRemoveItem("experience", index)}
              className="p-2 bg-red-500 text-white rounded"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          onClick={() => handleAddItem("experience")}
          className="p-2 bg-green-500 text-white rounded flex items-center gap-2"
        >
          <FaPlus /> Add Experience
        </button>
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Education</h3>
        <input
          type="text"
          value={resumeData.education?.title || ""}
          onChange={(e) => handleUpdate("education", "title", e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Title"
        />
        <textarea
          value={resumeData.education?.description || ""}
          onChange={(e) =>
            handleUpdate("education", "description", e.target.value)
          }
          className="w-full p-2 mb-2 border rounded"
          placeholder="Description"
        />
        {resumeData.education?.items?.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 mb-2">
            <input
              type="text"
              value={item.institution || ""}
              onChange={(e) =>
                handleUpdate(
                  "education",
                  "items",
                  {
                    institution: e.target.value,
                    degree: item.degree || "",
                    duration: item.duration || "",
                  },
                  index
                )
              }
              className="p-2 border rounded"
              placeholder="Institution"
            />
            <input
              type="text"
              value={item.degree || ""}
              onChange={(e) =>
                handleUpdate(
                  "education",
                  "items",
                  {
                    institution: item.institution || "",
                    degree: e.target.value,
                    duration: item.duration || "",
                  },
                  index
                )
              }
              className="p-2 border rounded"
              placeholder="Degree"
            />
            <input
              type="text"
              value={item.duration || ""}
              onChange={(e) =>
                handleUpdate(
                  "education",
                  "items",
                  {
                    institution: item.institution || "",
                    degree: item.degree || "",
                    duration: e.target.value,
                  },
                  index
                )
              }
              className="p-2 border rounded"
              placeholder="Duration"
            />
            <button
              onClick={() => handleRemoveItem("education", index)}
              className="p-2 bg-red-500 text-white rounded"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          onClick={() => handleAddItem("education")}
          className="p-2 bg-green-500 text-white rounded flex items-center gap-2"
        >
          <FaPlus /> Add Education
        </button>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Skills</h3>
        <input
          type="text"
          value={resumeData.skills?.title || ""}
          onChange={(e) => handleUpdate("skills", "title", e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Title"
        />
        <textarea
          value={resumeData.skills?.description || ""}
          onChange={(e) =>
            handleUpdate("skills", "description", e.target.value)
          }
          className="w-full p-2 mb-2 border rounded"
          placeholder="Description"
        />
        {resumeData.skills?.skillList?.map((skill, index) => (
          <div key={index} className="flex flex-col gap-2 mb-2">
            <input
              type="text"
              value={skill.name || ""}
              onChange={(e) =>
                handleUpdate(
                  "skills",
                  "skillList",
                  { icon: skill.icon, name: e.target.value },
                  index
                )
              }
              className="p-2 border rounded"
              placeholder="Skill Name"
            />
            <select
              value={skill.icon ? "custom" : ""}
              onChange={(e) => {
                const icon = iconMap[
                  e.target.value as keyof typeof iconMap
                ] || <FaHtml5 />;
                handleUpdate(
                  "skills",
                  "skillList",
                  { icon, name: skill.name || "" },
                  index
                );
              }}
              className="p-2 border rounded"
            >
              <option value="">Select Icon</option>
              <option value="FaHtml5">HTML5</option>
              <option value="FaCss3">CSS3</option>
              <option value="FaJs">JavaScript</option>
              <option value="FaReact">React</option>
              <option value="SiNextdotjs">Next.js</option>
              <option value="SiTailwindcss">Tailwind CSS</option>
              <option value="FaNodeJs">Node.js</option>
              <option value="FaFigma">Figma</option>
            </select>
            <button
              onClick={() => handleRemoveItem("skills", index)}
              className="p-2 bg-red-500 text-white rounded"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          onClick={() => handleAddItem("skills")}
          className="p-2 bg-green-500 text-white rounded flex items-center gap-2"
        >
          <FaPlus /> Add Skill
        </button>
      </div>
    </div>
  );
};

// Icon mapping for skills
const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3: <FaCss3 />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiTailwindcss: <SiTailwindcss />,
  FaNodeJs: <FaNodeJs />,
  FaFigma: <FaFigma />,
};

export default ResumeSidebar;
