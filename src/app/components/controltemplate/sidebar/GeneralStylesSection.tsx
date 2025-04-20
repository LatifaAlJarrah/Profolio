import { TemplateData } from "@/app/types/templateData";

interface GeneralStylesSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
}

const AboutMeSection = ({
  templateData,
  onChange,
}: GeneralStylesSectionProps) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">General Styles</h3>
      </div>
      <div>
        <label className="block mb-2">
          Font Family:
          <select
            value={templateData.fontFamily}
            onChange={(e) => onChange("fontFamily", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          >
            <option value="Roboto">Roboto</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Poppins">Poppins</option>
            <option value="Montserrat">Montserrat</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default AboutMeSection;
