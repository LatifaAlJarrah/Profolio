import { TemplateData } from "@/app/types/templateData";

interface ResturantContactUsSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
}

const ResturantContactUsSection: React.FC<ResturantContactUsSectionProps> = ({
  templateData,
  onChange,
}) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">Contact Us Settings</h3>
      </div>
      <div className="px-8">
        <label className="block mb-2">
          Instagram Name:
          <input
            type="text"
            value={templateData.contactInstagramName || ""}
            onChange={(e) => onChange("contactInstagramName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Instagram Link:
          <input
            type="text"
            value={templateData.contactInstagramLink || ""}
            onChange={(e) => onChange("contactInstagramLink", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Facebook Name:
          <input
            type="text"
            value={templateData.contactFacebookName || ""}
            onChange={(e) => onChange("contactFacebookName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Facebook Link:
          <input
            type="text"
            value={templateData.contactFacebookLink || ""}
            onChange={(e) => onChange("contactFacebookLink", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Phone 1:
          <input
            type="text"
            value={templateData.contactPhone || ""}
            onChange={(e) => onChange("contactPhone", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Phone 2:
          <input
            type="text"
            value={templateData.contactPhone2 || ""}
            onChange={(e) => onChange("contactPhone2", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
      </div>
    </>
  );
};

export default ResturantContactUsSection;
