import { TemplateData } from "@/app/types/templateData";

interface ChefSpecial {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface RandomlyChefSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onChefSpecialChange: (
    index: number,
    field: keyof ChefSpecial,
    value: string
  ) => void;
  onChefSpecialImageChange: (index: number, file: File | null) => void;
}

const RandomlyChefSection: React.FC<RandomlyChefSectionProps> = ({
  templateData,
  onChefSpecialChange,
  onChefSpecialImageChange,
}) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">
          Chef Specials
        </h3>
      </div>
      <div className="px-2">
        {templateData.chefSpecials?.map((item: ChefSpecial, index: number) => (
          <div key={index} className="mb-4 border border-[#989898] p-2 rounded-md">
            <h5 className="font-semibold">Special Item {index + 1}</h5>
            <label className="block mb-2 text-charcoalGray">
              Name
              <input
                type="text"
                value={item.name}
                onChange={(e) =>
                  onChefSpecialChange(index, "name", e.target.value)
                }
                className="p-1 border border-[#989898] rounded-md w-full bg-transparent text-black"
              />
            </label>
            <label className="block mb-2 text-charcoalGray">
              Description
              <textarea
                value={item.description}
                onChange={(e) =>
                  onChefSpecialChange(index, "description", e.target.value)
                }
                className="p-1 border border-[#989898] rounded-md w-full bg-transparent text-black"
              />
            </label>
            <label className="block mb-2 text-charcoalGray">
              Price
              <input
                type="text"
                value={item.price}
                onChange={(e) =>
                  onChefSpecialChange(index, "price", e.target.value)
                }
                className="p-1 border border-[#989898] rounded-md w-full bg-transparent text-black"
              />
            </label>
            <label className="block mb-2 text-charcoalGray">
              Image
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  onChefSpecialImageChange(index, e.target.files?.[0] || null)
                }
                className="p-1 border border-[#989898] rounded-md w-full bg-transparent text-black"
              />
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RandomlyChefSection;
