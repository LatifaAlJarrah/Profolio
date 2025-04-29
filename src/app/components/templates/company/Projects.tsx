"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TemplateData } from "@/app/types/templateData";

interface ProjectsProps extends TemplateData {
  projects?: {
    [key: string]: Array<{
      name: string;
      img: string;
      uploadedImg?: string;
    }>;
  };
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  console.log("Projects Data:", projects); // تصحيح للتأكد من البيانات

  if (!projects) {
    return (
      <section className="px-20 py-5" id="projects">
        <h2 className="text-4xl mb-8">PROJECTS</h2>
        <p>No projects available.</p>
      </section>
    );
  }

  return (
    <section className="px-20 py-5" id="projects">
      <h2 className="text-4xl mb-8">PROJECTS</h2>

      {/* أزرار التصنيفات */}
      <div className={`font-roboto flex justify-center space-x-4 mb-6`}>
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-10 py-2 rounded-3xl transition ${
              activeCategory === category
                ? "text-white bg-navyBlue"
                : "text-[#454545] border-[2px] border-charcoalGray"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* عرض المشاريع */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects[activeCategory]?.length > 0 ? (
          projects[activeCategory].map((item, index) => (
            <div
              key={index}
              className="relative group bg-opacity-10 rounded-lg overflow-hidden shadow-md"
            >
              {/* الصورة بتأثير الـ hover */}
              <div className="relative w-full h-[250px] overflow-hidden">
                <Image
                  src={item.uploadedImg || item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-t-lg object-[70%top] transition-all duration-500 ease-in-out scale-100 group-hover:scale-110"
                />
              </div>

              {/* النص */}
              <div className="p-3 text-left">
                <h3 className="text-lg">{item.name}</h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No projects available in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;