import { TemplateData } from "@/app/types/templateData";

interface FooterSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  templateData,
  onChange,
}) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">Footer Settings</h3>
      </div>
      <div className="px-8">
        <label className="block mb-2">
          Restaurant Name:
          <input
            type="text"
            value={templateData.footerName || ""}
            onChange={(e) => onChange("footerName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Footer Description:
          <textarea
            value={templateData.footerDescription || ""}
            onChange={(e) => onChange("footerDescription", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
      </div>
    </>
  );
};

export default FooterSection;
