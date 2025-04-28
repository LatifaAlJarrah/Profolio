import { TemplateData } from "@/app/types/templateData";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  img: string;
}

interface OurMenuSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onMenuItemChange: (
    category: string,
    index: number,
    field: keyof MenuItem,
    value: string
  ) => void;
  onMenuItemImageChange: (
    category: string,
    index: number,
    file: File | null
  ) => void;
}

const OurMenuSection: React.FC<OurMenuSectionProps> = ({
  templateData,
  onMenuItemChange,
  onMenuItemImageChange,
}) => {
  const categories = ["appetizers", "soupsSalads", "mainCourses", "desserts"];

  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">Menu Settings</h3>
      </div>
      <div>
        {categories.map((category) => (
          <div key={category} className="mb-6">
            <h4 className="text-xl font-semibold mb-2 capitalize">
              {category}
            </h4>
            {templateData.menuItems?.[
              category as keyof typeof templateData.menuItems
            ]?.map((item: MenuItem, index: number) => (
              <div key={index} className="mb-4 border p-2 rounded-md">
                <h5 className="font-semibold">Menu Item {index + 1}</h5>
                <label className="block mb-2">
                  Name:
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      onMenuItemChange(category, index, "name", e.target.value)
                    }
                    className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                  />
                </label>
                <label className="block mb-2">
                  Description:
                  <textarea
                    value={item.description}
                    onChange={(e) =>
                      onMenuItemChange(
                        category,
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                  />
                </label>
                <label className="block mb-2">
                  Price:
                  <input
                    type="text"
                    value={item.price}
                    onChange={(e) =>
                      onMenuItemChange(category, index, "price", e.target.value)
                    }
                    className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                  />
                </label>
                <label className="block mb-2">
                  Image:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      onMenuItemImageChange(
                        category,
                        index,
                        e.target.files?.[0] || null
                      )
                    }
                    className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                  />
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default OurMenuSection;