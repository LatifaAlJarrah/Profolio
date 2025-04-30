import React from "react";
import { TemplateData } from "@/app/types/templateData";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

interface ContactSectionSettingsProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
}

const ContactSectionSettings: React.FC<ContactSectionSettingsProps> = ({
  templateData,
  onChange,
}) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-4 rounded-lg mb-6 mx-6 shadow-sm">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Contact Section Settings
        </h3>
      </div>
      <div className="px-6 space-y-4">
        {/* Left Side Settings */}
        <label className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-gray-500 w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Address:</span>
          <input
            type="text"
            value={templateData.contactLocation || ""}
            onChange={(e) => onChange("contactLocation", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the address"
          />
        </label>
        <label className="flex items-center space-x-2">
          <FaPhone className="text-gray-500 w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Phone:</span>
          <input
            type="text"
            value={templateData.contactPhone || ""}
            onChange={(e) => onChange("contactPhone", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the phone number"
          />
        </label>
        <label className="flex items-center space-x-2">
          <FaEnvelope className="text-gray-500 w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Email:</span>
          <input
            type="email"
            value={templateData.contactEmail || ""}
            onChange={(e) => onChange("contactEmail", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the email address"
          />
        </label>
        <label className="flex items-center space-x-2">
          <FaClock className="text-gray-500 w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Open Time:</span>
          <input
            type="text"
            value={templateData.openTime || ""}
            onChange={(e) => onChange("openTime", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the open time (e.g., Monday - Friday: 10:00 - 20:00)"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Instagram Link:
          </span>
          <input
            type="text"
            value={templateData.contactInstagramLink || ""}
            onChange={(e) => onChange("contactInstagramLink", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Instagram link (optional)"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Facebook Link:
          </span>
          <input
            type="text"
            value={templateData.contactFacebookLink || ""}
            onChange={(e) => onChange("contactFacebookLink", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Facebook link (optional)"
          />
        </label>

        {/* Right Side Settings */}
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Booking Text:
          </span>
          <textarea
            value={templateData.contactBookingText || ""}
            onChange={(e) => onChange("contactBookingText", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the booking text"
            rows={3}
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Email Label:
          </span>
          <input
            type="text"
            value={templateData.contactEmailLabel || ""}
            onChange={(e) => onChange("contactEmailLabel", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the label for email field"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Email Placeholder:
          </span>
          <input
            type="text"
            value={templateData.contactEmailPlaceholder || ""}
            onChange={(e) =>
              onChange("contactEmailPlaceholder", e.target.value)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the placeholder for email field"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Subject Label:
          </span>
          <input
            type="text"
            value={templateData.contactSubjectLabel || ""}
            onChange={(e) => onChange("contactSubjectLabel", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the label for subject field"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Subject Placeholder:
          </span>
          <input
            type="text"
            value={templateData.contactSubjectPlaceholder || ""}
            onChange={(e) =>
              onChange("contactSubjectPlaceholder", e.target.value)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the placeholder for subject field"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Message Label:
          </span>
          <input
            type="text"
            value={templateData.contactMessageLabel || ""}
            onChange={(e) => onChange("contactMessageLabel", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the label for message field"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Message Placeholder:
          </span>
          <textarea
            value={templateData.contactMessagePlaceholder || ""}
            onChange={(e) =>
              onChange("contactMessagePlaceholder", e.target.value)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the placeholder for message field"
            rows={3}
          />
        </label>
        <label className="flex items-center space-x-2">
          <FaPaperPlane className="text-gray-500 w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">
            Submit Button Text:
          </span>
          <input
            type="text"
            value={templateData.contactSubmitButtonText || ""}
            onChange={(e) =>
              onChange("contactSubmitButtonText", e.target.value)
            }
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the text for submit button"
          />
        </label>
      </div>
    </>
  );
};

export default ContactSectionSettings;
