import { TemplateData } from "@/app/types/templateData";

interface TestimonialsSectionProps {
  templateData: TemplateData;
  onTestimonialChange: (index: number, field: string, value: string) => void;
}

const TestimonialsSection = ({
  templateData,
  onTestimonialChange,
}: TestimonialsSectionProps) => {
  return (
    <>
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Testimonials</h3>
      </div>
      <div>
        {(templateData.portfolioTestimonials ?? []).map(
          (
            testimonial: { name: string; quote: string; image: string },
            index: number
          ) => (
            <div key={index} className="mb-4">
              <h4 className="text-sm font-medium">Testimonial {index + 1}</h4>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={testimonial.name}
                  onChange={(e) =>
                    onTestimonialChange(index, "name", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
                />
              </label>
              <label className="block mb-2">
                Quote:
                <textarea
                  value={testimonial.quote}
                  onChange={(e) =>
                    onTestimonialChange(index, "quote", e.target.value)
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
                      onTestimonialChange(index, "image", imageUrl);
                    }
                  }}
                  className="p-1 border rounded-md w-full"
                />
              </label>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default TestimonialsSection;
