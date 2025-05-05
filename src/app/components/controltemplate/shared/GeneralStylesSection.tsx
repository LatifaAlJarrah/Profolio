import { TemplateData } from "@/app/types/templateData";
import { useSearchParams } from "next/navigation";

interface GeneralStylesSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
}

const GeneralStylesSection = ({
  templateData,
  onChange,
}: GeneralStylesSectionProps) => {

  const searchParams = useSearchParams();
  const templateName = searchParams.get("template")?.toLowerCase();

  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">General Styles</h3>
      </div>
      <div className="px-8">
        {/* Font Family */}
        <label className="block mb-2">
          Font Family:
          <select
            value={templateData.fontFamily || "Roboto"}
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

        {templateName !== "programmer" && templateName !== "developer" && (
          <>
            <label className="block mb-2">
              General Text Color:
              <input
                type="color"
                value={templateData.titleTextColor || "#ffffff"}
                onChange={(e) => onChange("titleTextColor", e.target.value)}
                className="p-1 border rounded-md w-full bg-transparent"
              />
            </label>

            <label className="block mb-2">
              Button Color:
              <input
                type="color"
                value={templateData.buttonColor || "#FFDB58"}
                onChange={(e) => onChange("buttonColor", e.target.value)}
                className="p-1 border rounded-md w-full bg-transparent"
              />
            </label>
          </>
        )}
      </div>
    </>
  );
};

export default GeneralStylesSection;
