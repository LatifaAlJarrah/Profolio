"use client";
import { useState } from "react";
import Image from "next/image";
import { Facbook, Insta, Apple, Gmail } from "@/app/assets/icons";

export default function ContactSection() {
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
    // Add form submission logic here (e.g., send to API)
  };

  return (
    <section className="px-20 bg-[#FAFAFA]" id="contact">
      {/* Left Side - Contact Info */}
      <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
      <div className="grid grid-cols-12 justify-between items-center h-full py-5">
        <div className="col-span-12 lg:col-span-4 bg-navyBlue text-white p-8 rounded-lg h-full">
          <div className="mb-4">
            <h3 className="text-2xl">Address</h3>
            <p className="text-[#989898] text-xl">
              123 Innovation Street, Silicon Valley, CA 94043, USA
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl">Contact</h3>
            <p className="text-[#989898] text-xl">Phone: +1 (415) 123-4567</p>
            <p className="text-[#989898] text-xl">
              Email: Contact@Technovasolutions.Com
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl">Open Time</h3>
            <p className="text-[#989898] text-xl">
              Monday - Friday: 10:00 - 20:00
            </p>
          </div>
          <div>
            <h3 className="text-2xl mb-2">Stay Connected</h3>
            <div className="flex space-x-4">
              <span className="bg-[#F3F3EE] p-2 rounded-full">
                <Image
                  src={Gmail}
                  alt="Mail"
                  className="w-6 h-6"
                  width={30}
                  height={30}
                />
              </span>
              <span className="bg-[#F3F3EE] p-2 rounded-full">
                <Image
                  src={Apple}
                  alt="Apple"
                  className="w-6 h-6"
                  width={30}
                  height={30}
                />
              </span>
              <span className="bg-[#F3F3EE] p-2 rounded-full">
                <Image
                  src={Insta}
                  alt="Instagram"
                  className="w-6 h-6"
                  width={30}
                  height={30}
                />
              </span>
              <span className="bg-[#F3F3EE] p-2 rounded-full">
                <Image
                  src={Facbook}
                  alt="Facebook"
                  className="w-6 h-6"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-0 sm:mt-8 h-full">
          <h2 className="text-3xl font-medium mb-4">
            Contact us now to receive your{" "}
            <span className="text-navyBlue">service</span> from a highly skilled
            and creative team.
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium">
                Your email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="jacob@google.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navyBlue bg-transparent"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Subject*
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Just saying hi"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navyBlue bg-transparent"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Message*
              </label>
              <textarea
                name="message"
                placeholder="Let's talk about....."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navyBlue bg-transparent"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1D374D] text-white py-2 rounded-lg hover:bg-white hover:text-navyBlue hover:border hover:border-navyBlue transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
