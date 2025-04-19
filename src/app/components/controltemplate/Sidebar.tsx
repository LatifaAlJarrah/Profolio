// // src/components/controltemplate/Sidebar.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { TextVector } from "@/app/assets/icons";
import ColorPicker from "./ColorPicker";

interface SidebarProps {
  templateData: any;
  onChange: (key: string, value: string) => void;
  onImageChange: (key: string, file: File | null) => void;
  onServiceChange: (index: number, field: string, value: string) => void;
  onPortfolioSlideChange: (index: number, field: string, value: string) => void;
  onTestimonialChange: (index: number, field: string, value: string) => void;
  onBlogImageChange: (index: number, file: File | null) => void;
  onNavLinkChange: (index: number, field: string, value: string) => void; // إضافة دالة لتعديل الروابط
  onSave: () => void;
  onLoad: () => void;
  onReset: () => void;
}

const BreakLine = () => {
  return <div className="border border-lightGrayShade2 my-4"></div>;
};

const Sidebar = ({
  templateData,
  onChange,
  onImageChange,
  onServiceChange,
  onPortfolioSlideChange,
  onTestimonialChange,
  onBlogImageChange,
  onNavLinkChange,
  onSave,
  onLoad,
  onReset,
}: SidebarProps) => {
  return (
    <aside className="p-4 bg-lightGray">
      {/* General Styles Section */}
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

      <BreakLine />

      {/* Navbar Content Section */}
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
        {templateData.navigationLinks.map(
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

      <BreakLine />

      {/* Header Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <Image src={TextVector} alt="text vector" className="w-4 h-4" />
        <h3 className="text-lg font-normal">Header</h3>
      </div>
      <div>
        <label className="block mb-2">
          Header Title:
          <textarea
            value={templateData.headerTitle}
            onChange={(e) => onChange("headerTitle", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
          />
        </label>
        <label className="block mb-2">
          Header Description:
          <textarea
            value={templateData.headerDescription}
            onChange={(e) => onChange("headerDescription", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
          />
        </label>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Text Color</span>
          <ColorPicker
            defaultColor={templateData.headerTextColor}
            onChange={(color) => onChange("headerTextColor", color)}
          />
        </div>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Description Text Color</span>
          <ColorPicker
            defaultColor={templateData.descriptionTextColor}
            onChange={(color) => onChange("descriptionTextColor", color)}
          />
        </div>
        <label className="block mb-2">
          Header Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              onImageChange("headerImage", e.target.files?.[0] || null)
            }
            className="p-1 border rounded-md w-full"
          />
        </label>
      </div>

      <BreakLine />

      {/* Contact Us Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <FontAwesomeIcon icon={faImage} className="w-5 h-5 text-charcoalGray" />
        <h3 className="text-lg font-normal">Contact Us</h3>
      </div>
      <div>
        <label className="block mb-2">
          Booking Text:
          <input
            type="text"
            value={templateData.contactBookingText}
            onChange={(e) => onChange("contactBookingText", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Instagram Name:
          <input
            type="text"
            value={templateData.contactInstagramName}
            onChange={(e) => onChange("contactInstagramName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Instagram Link:
          <input
            type="text"
            value={templateData.contactInstagramLink}
            onChange={(e) => onChange("contactInstagramLink", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Facebook Name:
          <input
            type="text"
            value={templateData.contactFacebookName}
            onChange={(e) => onChange("contactFacebookName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Facebook Link:
          <input
            type="text"
            value={templateData.contactFacebookLink}
            onChange={(e) => onChange("contactFacebookLink", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Phone:
          <input
            type="text"
            value={templateData.contactPhone}
            onChange={(e) => onChange("contactPhone", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="text"
            value={templateData.contactEmail}
            onChange={(e) => onChange("contactEmail", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Location:
          <input
            type="text"
            value={templateData.contactLocation}
            onChange={(e) => onChange("contactLocation", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
      </div>

      <BreakLine />

      {/* About Me Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">About Me</h3>
      </div>
      <div>
        <label className="block mb-2">
          About Title:
          <input
            type="text"
            value={templateData.aboutTitle}
            onChange={(e) => onChange("aboutTitle", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Doctor Name:
          <input
            type="text"
            value={templateData.aboutDoctorName}
            onChange={(e) => onChange("aboutDoctorName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          About Description:
          <textarea
            value={templateData.aboutDescription}
            onChange={(e) => onChange("aboutDescription", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
          />
        </label>
        <label className="block mb-2">
          Extra Text:
          <input
            type="text"
            value={templateData.aboutExtraText}
            onChange={(e) => onChange("aboutExtraText", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Doctor Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              onImageChange("aboutImage", e.target.files?.[0] || null)
            }
            className="p-1 border rounded-md w-full"
          />
        </label>
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Button Color</span>
          <ColorPicker
            defaultColor={templateData.aboutButtonColor}
            onChange={(color) => onChange("aboutButtonColor", color)}
          />
        </div>
      </div>

      <BreakLine />

      {/* Services Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Services</h3>
      </div>
      <div>
        {templateData.services.map((service: { title: string; description: string; icon: string }, index: number) => (
          <div key={index} className="mb-4">
            <h4 className="text-sm font-medium">Service {index + 1}</h4>
            <label className="block mb-2">
              Title:
              <input
                type="text"
                value={service.title}
                onChange={(e) =>
                  onServiceChange(index, "title", e.target.value)
                }
                className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
              />
            </label>
            <label className="block mb-2">
              Description:
              <textarea
                value={service.description}
                onChange={(e) =>
                  onServiceChange(index, "description", e.target.value)
                }
                className="p-1 border rounded-md w-full bg-transparent text-charcoalGray resize-none"
              />
            </label>
            <label className="block mb-2">
              Icon:
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    onServiceChange(index, "icon", imageUrl);
                  }
                }}
                className="p-1 border rounded-md w-full"
              />
            </label>
          </div>
        ))}
      </div>

      <BreakLine />

      {/* Portfolio Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Portfolio</h3>
      </div>
      <div>
        {templateData.portfolioSlides.map((slide: { title: string; description: string; image: string }, index: number) => (
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
        ))}
        <div className="flex justify-between mb-2 gap-2 items-center">
          <span className="text-sm">Button Color</span>
          <ColorPicker
            defaultColor={templateData.portfolioButtonColor}
            onChange={(color) => onChange("portfolioButtonColor", color)}
          />
        </div>
      </div>

      <BreakLine />

      {/* Testimonials Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <h3 className="text-lg font-normal">Testimonials</h3>
      </div>
      <div>
        {templateData.portfolioTestimonials.map(
          (testimonial: { name: string; quote: string; image: string }, index: number) => (
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

      <BreakLine />

      {/* Blog Section */}
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

      <BreakLine />

      {/* Contact Us Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <FontAwesomeIcon icon={faImage} className="w-5 h-5 text-charcoalGray" />
        <h3 className="text-lg font-normal">Contact Us</h3>
      </div>
      <div>
        <label className="block mb-2">
          Booking Text:
          <input
            type="text"
            value={templateData.contactBookingText}
            onChange={(e) => onChange("contactBookingText", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Instagram Name:
          <input
            type="text"
            value={templateData.contactInstagramName}
            onChange={(e) => onChange("contactInstagramName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Instagram Link:
          <input
            type="text"
            value={templateData.contactInstagramLink}
            onChange={(e) => onChange("contactInstagramLink", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Facebook Name:
          <input
            type="text"
            value={templateData.contactFacebookName}
            onChange={(e) => onChange("contactFacebookName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Facebook Link:
          <input
            type="text"
            value={templateData.contactFacebookLink}
            onChange={(e) => onChange("contactFacebookLink", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Phone:
          <input
            type="text"
            value={templateData.contactPhone}
            onChange={(e) => onChange("contactPhone", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="text"
            value={templateData.contactEmail}
            onChange={(e) => onChange("contactEmail", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Location:
          <input
            type="text"
            value={templateData.contactLocation}
            onChange={(e) => onChange("contactLocation", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
      </div>

      {/* Save, Load, and Reset Buttons */}
      <div className="flex flex-wrap justify-between mb-4 gap-2">
        <button
          onClick={onSave}
          className="text-white bg-green-600 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
        >
          Save
        </button>
        <button
          onClick={onLoad}
          className="text-white bg-blue-600 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
        >
          Load Saved Data
        </button>
        <button
          onClick={onReset}
          className="text-white bg-orange-600 w-full sm:w-1/3 p-2 rounded-lg text-center font-bold"
        >
          Reset
        </button>
      </div>

      <BreakLine />

      {/* Delete Button */}
      <button className="text-red-700 w-full text-center font-bold">
        Delete
      </button>
    </aside>
  );
};

export default Sidebar;
