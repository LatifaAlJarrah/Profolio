"use client";
import React from "react";
import Image from "next/image";
import { OfficeCulture } from "@/app/assets/images";
import { TemplateData } from "@/app/types/templateData";

interface AboutCompanyProps extends TemplateData {
  aboutTitle?: string;
  aboutTagline?: string;
  aboutDescription?: string;
  aboutImage?: string;
  aboutButtonColor?: string;
}

const AboutUs: React.FC<AboutCompanyProps> = ({
  aboutTitle,
  aboutTagline,
  aboutDescription,
  aboutImage,
  aboutButtonColor,
  ourAchievements,
}) => {
  return (
    <section className={`py-16 px-20 font-roboto`} id="about">
      <div className="grid grid-cols-12 items-center gap-8">
        <h2 className="col-span-12 text-3xl font-medium text-black mb-10">
          {aboutTitle}
        </h2>
        {/* Left Section: About Us Content */}
        <div className="col-span-8 lg:col-span-5 space-y-6">
          <h3 className="text-2xl lg:text-4xl font-bold text-black leading-tight">
            {aboutTagline}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg lg:text-2xl">
            {aboutDescription}
          </p>
          <button
            className={`bg-navyBlue text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-80 text-lg lg:text-2xl`}
            style={{ backgroundColor: aboutButtonColor }}
            onClick={() => {
              const servicesSection = document.getElementById("services");
              servicesSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Our Services
          </button>
        </div>

        {/* Center Section: Oval Image */}
        <div className="col-span-4 lg:col-span-3 flex justify-center h-full">
          <div className="relative overflow-hidden rounded-full">
            {/* Inner Border */}
            <div className="absolute inset-2 border-[4px] border-navyBlue rounded-full"></div>

            {/* Image */}
            <Image
              src={aboutImage || OfficeCulture}
              alt="Team Working"
              width={200}
              height={200}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>

        {/* Right Section: Statistics Cards */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-4 lg:grid-cols-2 gap-6">
          {ourAchievements?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-navyBlue rounded-3xl p-6 shadow-md bg-white"
            >
              <Image
                src={
                  item.uploadedIcon ||
                  item.icon ||
                  "/assets/icons/company/done.png"
                } // استخدام uploadedIcon إذا كان موجودًا، وإلا استخدام icon
                alt="icon not found"
                width={50}
                height={50}
                className={`text-4xl ${
                  item.icon ? "w-[60px] h-[60px] rounded-lg" : ""
                }`}
              />
              <h4 className="text-3xl font-bold text-gray-900 mt-2">
                <span className="text-charcoalGray">+</span> {item.value}
              </h4>
              <p className="text-xl text-[#4E4E4E]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;