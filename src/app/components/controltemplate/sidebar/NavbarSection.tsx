import { TemplateData } from "@/app/types/templateData";
import ColorPicker from "../ColorPicker";

interface NavbarSectionProps {
  templateData: TemplateData;
  onNavLinkChange: (index: number, field: string, value: string) => void; // إضافة دالة لتعديل الروابط
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
}

const NavbarSection = ({
    templateData,
    onNavLinkChange,
    onChange,
    onImageChange,
}: NavbarSectionProps) => {
  return (
    <>
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Navbar Content</h3>
      </div>
      <div>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Navbar Background</span>
          <ColorPicker
            defaultColor={templateData.navbarColor}
            onChange={(color) => onChange("navbarColor", color)}
          />
        </div>
        <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-24">
          <h4 className="text-lg font-normal text-center">Logo Content</h4>
        </div>
        <label className="block mb-2">
          Logo Name:
          <input
            type="text"
            value={templateData.logoName}
            onChange={(e) => onChange("logoName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
            placeholder="Enter Logo Name"
          />
        </label>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Logo Text Color</span>
          <ColorPicker
            defaultColor={templateData.logoColor}
            onChange={(color) => onChange("logoColor", color)}
          />
        </div>
        <label className="block mb-2">
          Logo Icon:
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              onImageChange("logoIcon", e.target.files?.[0] || null)
            }
            className="p-1 border rounded-md w-full"
          />
        </label>

        <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-24">
          <h4 className="text-lg font-normal text-center">Navigation Links</h4>
        </div>
        {(templateData.navigationLinks ?? []).map(
          (link: { name: string; link: string }, index: number) => (
            <div key={index} className="mb-4">
              <h5 className="text-sm font-medium">Link {index + 1}</h5>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    onNavLinkChange(index, "name", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                />
              </label>
              <label className="block mb-2">
                URL:
                <input
                  type="text"
                  value={link.link}
                  onChange={(e) =>
                    onNavLinkChange(index, "link", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                />
              </label>
            </div>
          )
        )}
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Nav Links Text Color</span>
          <ColorPicker
            defaultColor={templateData.navigationLinksColor}
            onChange={(color) => onChange("navigationLinksColor", color)}
          />
        </div>
      </div>
    </>
  );
};

export default NavbarSection;
