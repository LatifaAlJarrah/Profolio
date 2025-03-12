"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ProgrammingBg } from "@/app/assets/images";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

// تعريف التصنيفات وقوائمها
const features: { [key: string]: string[] } = {
  skills: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "Sequelize",
    "JavaScript",
    "React",
  ],
  education: ["Bachelor's in CS", "Full-Stack Bootcamp", "AI Workshop"],
  certifications: [
    "AWS Certified Developer",
    "Google Cloud Associate",
    "Scrum Master",
  ],
};

const AboutMe = () => {
  const [activeCategory, setActiveCategory] = useState("skills");

  return (
    <section
      className={`${roboto.className} grid grid-cols-12 text-white py-16`}
    >
      {/* 🔹 صورة الخلفية */}
      <div className="col-span-4 h-[500px]">
        <Image
          src={ProgrammingBg}
          alt="programming background"
          className="rounded-2xl h-full"
        />
      </div>

      <div className="col-span-1"></div>

      <div className="col-span-6 flex flex-col justify-center">
        <p className="text-4xl font-bold">About Me</p>
        <p className="text-lg text-[#b0b0b0] mt-4">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience working
          with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          Sequelize, HTML, CSS, and Git. I am a quick learner and always looking
          to expand my knowledge and skill set. I am a team player and excited
          to work with others to create amazing applications.
        </p>

        <div className="flex space-x-6 mt-6 text-white border-b border-gray-600 pb-2">
          {Object.keys(features).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-lg py-2 transition ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#497D74] to-[#2F4F4F] text-transparent bg-clip-text border-b-2 border-[#497D74]"
                  : "text-gray-400"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 mt-4">
          {features[activeCategory].length > 0 ? (
            features[activeCategory].map((item, index) => (
              <ul key={index} className="text-white list-inside list-disc">
                <li className="py-1 text-lg">{item}</li>
              </ul>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No items available in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
