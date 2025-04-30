"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { TemplateData } from "@/app/types/templateData";

interface ContactSectionProps extends TemplateData {
  contactBookingText?: string;
  contactInstagramLink?: string;
  contactFacebookLink?: string;
  contactPhone?: string;
  contactEmail?: string;
  contactLocation?: string;
  openTime?: string;
  contactEmailLabel?: string;
  contactSubjectLabel?: string;
  contactMessageLabel?: string;
  contactEmailPlaceholder?: string;
  contactSubjectPlaceholder?: string;
  contactMessagePlaceholder?: string;
  contactSubmitButtonText?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  contactBookingText,
  contactInstagramLink,
  contactFacebookLink,
  contactPhone,
  contactEmail,
  contactLocation,
  openTime,
  contactEmailLabel,
  contactSubjectLabel,
  contactMessageLabel,
  contactEmailPlaceholder,
  contactSubjectPlaceholder,
  contactMessagePlaceholder,
  contactSubmitButtonText,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // لا يمكن إرسال النموذج بسبب قيود sandbox، لذا نكتفي بطباعة البيانات
  };

  return (
    <section className="px-20 bg-[#FAFAFA]" id="contact">
      {/* Left Side - Contact Info */}
      <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
      <div className="grid grid-cols-12 justify-between items-center h-full py-5">
        <div className="col-span-12 lg:col-span-5 bg-navyBlue text-white p-8 rounded-lg h-full">
          <div className="mb-4">
            <h3 className="text-2xl">Address</h3>
            <p className="text-[#989898] text-xl">
              {contactLocation ||
                "123 Innovation Street, Silicon Valley, CA 94043, USA"}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl">Contact</h3>
            <p className="text-[#989898] text-xl">
              Phone: {contactPhone || "+1 (415) 123-4567"}
            </p>
            <p className="text-[#989898] text-xl mt-5">
              Email: {contactEmail || "Contact@Technovasolutions.Com"}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl">Open Time</h3>
            <p className="text-[#989898] text-xl">
              {openTime || "Monday - Friday: 10:00 - 20:00"}
            </p>
          </div>
          <div>
            <h3 className="text-2xl mb-2">Stay Connected</h3>
            <div className="flex space-x-4">
              <a
                href={`mailto:${
                  contactEmail || "Contact@Technovasolutions.Com"
                }`}
                className="hover:scale-110 transition-transform"
              >
                <span className="bg-[#F3F3EE] p-2 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="w-6 h-6 text-[#5C5757]"
                  />
                </span>
              </a>
              {contactInstagramLink && (
                <a
                  href={contactInstagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <span className="bg-[#F3F3EE] p-2 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="w-6 h-6 text-[#5C5757]"
                    />
                  </span>
                </a>
              )}
              {contactFacebookLink && (
                <a
                  href={contactFacebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <span className="bg-[#F3F3EE] p-2 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-6 h-6 text-[#5C5757]"
                    />
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-7 mt-0 sm:mt-8 h-full">
          <h2 className="text-3xl font-medium mb-4">
            {contactBookingText || (
              <>
                Contact us now to receive your{" "}
                <span className="text-navyBlue">service</span> from a highly
                skilled and creative team.
              </>
            )}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                {contactEmailLabel || "Your email*"}
              </label>
              <input
                type="email"
                name="email"
                placeholder={contactEmailPlaceholder || "jacob@google.com"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navyBlue bg-transparent"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                {contactSubjectLabel || "Subject*"}
              </label>
              <input
                type="text"
                name="subject"
                placeholder={contactSubjectPlaceholder || "Just saying hi"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navyBlue bg-transparent"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                {contactMessageLabel || "Message*"}
              </label>
              <textarea
                name="message"
                placeholder={
                  contactMessagePlaceholder || "Let's talk about....."
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navyBlue bg-transparent"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-[#1D374D] text-white py-2 rounded-lg hover:bg-white hover:text-navyBlue hover:border hover:border-navyBlue transition"
            >
              {contactSubmitButtonText || "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;