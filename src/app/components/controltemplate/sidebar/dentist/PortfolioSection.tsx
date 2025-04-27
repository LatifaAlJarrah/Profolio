import { TemplateData } from "@/app/types/templateData";
import ColorPicker from "../../shared/ColorPicker";

interface PortfolioSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onPortfolioSlideChange: (index: number, field: string, value: string) => void;
}

const PortfolioSection = ({
  templateData,
  onChange,
  onPortfolioSlideChange,
}: PortfolioSectionProps) => {
  return (
    <>
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Portfolio</h3>
      </div>
      <div>
        {(templateData.portfolioSlides ?? []).map(
          (
            slide: { title: string; description: string; image: string },
            index: number
          ) => (
            <div key={index} className="mb-4">
              <h4 className="text-sm font-medium">Slide {index + 1}</h4>
              <label className="block mb-2">
                Title:
                <input
                  type="text"
                  value={slide.title}
                  onChange={(e) =>
                    onPortfolioSlideChange(index, "title", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                />
              </label>
              <label className="block mb-2">
                Description:
                <textarea
                  value={slide.description}
                  onChange={(e) =>
                    onPortfolioSlideChange(index, "description", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
                />
              </label>
              <label className="block mb-2">
                Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      onPortfolioSlideChange(index, "image", imageUrl);
                    }
                  }}
                  className="p-1 border rounded-md w-full"
                />
              </label>
            </div>
          )
        )}
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Button Color</span>
          <ColorPicker
            defaultColor={templateData.portfolioButtonColor}
            onChange={(color) => onChange("portfolioButtonColor", color)}
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
