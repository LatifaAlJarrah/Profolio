import { TemplateData } from "@/app/types/templateData";
import ColorPicker from "../ColorPicker";

interface BlogSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onBlogImageChange: (index: number, file: File | null) => void;
}

const BlogSection = ({
  templateData,
  onChange,
  onBlogImageChange,
}: BlogSectionProps) => {
  return (
    <>
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Blog</h3>
      </div>
      <div>
        <label className="block mb-2">
          Blog Title:
          <input
            type="text"
            value={templateData.blogTitle}
            onChange={(e) => onChange("blogTitle", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Blog Content:
          <textarea
            value={templateData.blogContent}
            onChange={(e) => onChange("blogContent", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
          />
        </label>
        {Array.isArray(templateData.blogImages) &&
        templateData.blogImages.length > 0 ? (
          templateData.blogImages.map((image: string, index: number) => (
            <label key={index} className="block mb-2">
              Blog Image {index + 1}:
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  onBlogImageChange(index, e.target.files?.[0] || null)
                }
                className="p-1 border rounded-md w-full"
              />
            </label>
          ))
        ) : (
          <p>No blog images available.</p>
        )}
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Button Color</span>
          <ColorPicker
            defaultColor={templateData.blogButtonColor}
            onChange={(color) => onChange("blogButtonColor", color)}
          />
        </div>
      </div>
    </>
  );
};

export default BlogSection;
