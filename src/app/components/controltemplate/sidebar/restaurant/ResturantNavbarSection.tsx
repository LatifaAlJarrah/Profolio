import { TemplateData } from "@/app/types/templateData";

interface ResturantNavbarSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onNavLinkChange: (index: number, field: string, value: string) => void;
}

const ResturantNavbarSection: React.FC<ResturantNavbarSectionProps> = ({
  templateData,
  onChange,
  onNavLinkChange,
}) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">Navbar Settings</h3>
      </div>
      <div className="px-8">
        <label className="block mb-2">
          Restaurant Name (Logo):
          <input
            type="text"
            value={templateData.logoName || ""}
            onChange={(e) => onChange("logoName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Logo Highlight Color:
          <input
            type="color"
            value={templateData.logoColor || "#ffcc00"}
            onChange={(e) => onChange("logoColor", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent"
          />
        </label>
        <label className="block mb-2">
          Navbar Color:
          <input
            type="color"
            value={templateData.navbarColor || "#000000"}
            onChange={(e) => onChange("navbarColor", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent"
          />
        </label>
        <label className="block mb-2">
          Navigation Links Color:
          <input
            type="color"
            value={templateData.navigationLinksColor || "#ffffff"}
            onChange={(e) => onChange("navigationLinksColor", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent"
          />
        </label>
        {templateData.navigationLinks?.map((link, index) => (
          <div key={index} className="mb-2">
            <label className="block">
              Link {index + 1} Name:
              <input
                type="text"
                value={link.name}
                onChange={(e) => onNavLinkChange(index, "name", e.target.value)}
                className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
              />
            </label>
            <label className="block">
              Link {index + 1} URL:
              <input
                type="text"
                value={link.link}
                onChange={(e) => onNavLinkChange(index, "link", e.target.value)}
                className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
              />
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResturantNavbarSection;
