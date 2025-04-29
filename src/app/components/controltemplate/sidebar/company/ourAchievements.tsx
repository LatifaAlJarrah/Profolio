import { TemplateData } from "@/app/types/templateData";

interface ServicesSectionProps {
  templateData: TemplateData;
  onAchievementsChange: (
    index: number,
    field: string,
    value: string
  ) => void;
}

const ServicesSection = ({
  templateData,
  onAchievementsChange,
}: ServicesSectionProps) => {
  return (
    <>
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Services</h3>
      </div>
      <div>
        {(templateData.services ?? []).map(
          (
            service: { title: string; description: string; icon: string },
            index: number
          ) => (
            <div key={index} className="mb-4">
              <h4 className="text-sm font-medium">
                Achievement {index + 1}
              </h4>
              <label className="block mb-2">
                Icon:
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      onAchievementsChange(index, "icon", imageUrl);
                    }
                  }}
                  className="p-1 border rounded-md w-full"
                />
              </label>
              <label className="block mb-2">
                Title:
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) =>
                    onAchievementsChange(index, "title", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                />
              </label>
              <label className="block mb-2">
                Description:
                <textarea
                  value={service.description}
                  onChange={(e) =>
                    onAchievementsChange(index, "description", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
                />
              </label>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ServicesSection;
