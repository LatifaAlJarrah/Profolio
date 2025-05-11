"use client";
import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { TemplateData } from "@/app/types/templateData";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

interface InfoItem {
  icon?: IconType;
  title?: string;
  description?: string;
}

interface DeveloperContact {
  title?: string;
  description?: string;
}

interface ContactSectionProps {
  templateData: TemplateData;
  onChange: (
    key: string,
    value: TemplateData["developerInfo"] | TemplateData["developerContact"]
  ) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  templateData,
  onChange,
}) => {
  const [contactInfo, setContactInfo] = useState<InfoItem[]>(
    templateData.developerInfo ?? [
      { icon: FaPhoneAlt, title: "Phone", description: "(+40) 365 542 856" },
      { icon: FaEnvelope, title: "Email", description: "email@gmail.com" },
      {
        icon: FaMapMarkedAlt,
        title: "Address",
        description: "Code Corner, Tech Town 25632",
      },
    ]
  );

  const [developerContact, setDeveloperContact] = useState<DeveloperContact>(
    templateData.developerContact ?? {
      title: "Let's work together",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
    }
  );

  const updateInfo = (
    index: number,
    field: keyof InfoItem,
    value: string | IconType
  ) => {
    setContactInfo((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      onChange("developerInfo", updated);
      return updated;
    });
  };

  const updateDeveloperContact = (
    field: keyof DeveloperContact,
    value: string
  ) => {
    setDeveloperContact((prev) => {
      const updated = { ...prev, [field]: value };
      onChange("developerContact", updated);
      return updated;
    });
  };

  const addInfoItem = () => {
    setContactInfo((prev) => {
      const updated = [
        ...prev,
        { icon: FaPhoneAlt, title: "", description: "" },
      ];
      onChange("developerInfo", updated);
      return updated;
    });
  };

  const removeInfoItem = (index: number) => {
    setContactInfo((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      onChange("developerInfo", updated);
      return updated;
    });
  };

  const iconOptions = [
    { name: "FaPhoneAlt", component: FaPhoneAlt },
    { name: "FaEnvelope", component: FaEnvelope },
    { name: "FaMapMarkedAlt", component: FaMapMarkedAlt },
  ];

  return (
    <div className="w-full max-w-[380px] p-4 rounded-lg space-y-6">
      <h2 className="text-2xl font-bold">Contact Editor</h2>

      {/* Developer Contact Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Contact Header</h3>
        <input
          type="text"
          value={developerContact.title || ""}
          onChange={(e) => updateDeveloperContact("title", e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Title"
        />
        <textarea
          value={developerContact.description || ""}
          onChange={(e) =>
            updateDeveloperContact("description", e.target.value)
          }
          className="w-full p-2 mb-2 border rounded h-24"
          placeholder="Description"
        />
      </div>

      {/* Contact Info Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        {contactInfo.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 mb-2">
            <select
              value={
                item.icon
                  ? iconOptions.find((opt) => opt.component === item.icon)?.name
                  : ""
              }
              onChange={(e) => {
                const selectedIcon = iconOptions.find(
                  (opt) => opt.name === e.target.value
                )?.component;
                if (selectedIcon) updateInfo(index, "icon", selectedIcon);
              }}
              className="p-2 border rounded"
            >
              <option value="">Select Icon</option>
              {iconOptions.map((opt) => (
                <option key={opt.name} value={opt.name}>
                  {opt.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={item.title || ""}
              onChange={(e) => updateInfo(index, "title", e.target.value)}
              className="p-2 border rounded"
              placeholder="Title"
            />
            <input
              type="text"
              value={item.description || ""}
              onChange={(e) => updateInfo(index, "description", e.target.value)}
              className="p-2 border rounded"
              placeholder="Description"
            />
            <button
              onClick={() => removeInfoItem(index)}
              className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <button
          onClick={addInfoItem}
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-2"
        >
          <FaPlus /> Add Info
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
