import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { TemplateData } from "@/app/types/templateData";

interface ContactUsSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
}

const ContactUsSection = ({
  templateData,
  onChange,
}: ContactUsSectionProps) => {
  return (
    <>
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <FontAwesomeIcon icon={faImage} className="w-5 h-5 text-charcoalGray" />
        <h3 className="text-lg font-normal">Contact Us</h3>
      </div>
      <div>
        <label className="block mb-2">
          Booking Text:
          <input
            type="text"
            value={templateData.contactBookingText}
            onChange={(e) => onChange("contactBookingText", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Instagram Name:
          <input
            type="text"
            value={templateData.contactInstagramName}
            onChange={(e) => onChange("contactInstagramName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Instagram Link:
          <input
            type="text"
            value={templateData.contactInstagramLink}
            onChange={(e) => onChange("contactInstagramLink", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Facebook Name:
          <input
            type="text"
            value={templateData.contactFacebookName}
            onChange={(e) => onChange("contactFacebookName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Facebook Link:
          <input
            type="text"
            value={templateData.contactFacebookLink}
            onChange={(e) => onChange("contactFacebookLink", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Phone:
          <input
            type="text"
            value={templateData.contactPhone}
            onChange={(e) => onChange("contactPhone", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="text"
            value={templateData.contactEmail}
            onChange={(e) => onChange("contactEmail", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Location:
          <input
            type="text"
            value={templateData.contactLocation}
            onChange={(e) => onChange("contactLocation", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
      </div>
    </>
  );
};

export default ContactUsSection;
