"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Roboto } from "next/font/google";
import {
  SwiftCommerce,
  ContentGenerator,
  Seo,
  Influncer,
  Travel,
  AdOptimizer,
  PoweredChatbot,
  TaskManagement,
} from "@/app/assets/images";

// 👇 إصلاح أسماء التصنيفات لجعلها متطابقة مع الأزرار
interface ProjectProps {
  img: StaticImageData;
  name: string;
}

const projects: { [key: string]: ProjectProps[] } = {
  All: [
    { name: "React Portfolio Website", img: SwiftCommerce },
    { name: "Potography Portfolio Website", img: ContentGenerator },
    { name: "E-commerce Application", img: Seo },
    { name: "Food Ordering Application", img: Influncer },
    { name: "React Firebase Template", img: Travel },
    { name: "Full-stack Roadmap", img: AdOptimizer },
  ],
  Web: [
    { name: "Swift Commerce", img: SwiftCommerce },
    { name: "AI Content Generator", img: ContentGenerator },
    { name: "SEO Genius", img: Seo },
    { name: "Influencer Connect", img: Influncer },
  ],
  Mobile: [
    { name: "Travel Agency - Landing Page Design", img: Travel },
    { name: "AdOptimizer 360", img: AdOptimizer },
    { name: "AI-Powered Chatbot", img: PoweredChatbot },
    { name: "Task Management App Design", img: TaskManagement },
  ],
};

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="px-20 py-5 text-white">
      <h2 className="text-4xl mb-8">PROJECTS</h2>

      {/* 🔹 أزرار التصنيفات */}
      <div className={`${roboto.className} flex justify-center space-x-4 mb-6`}>
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-10 py-2 rounded-3xl transition ${
              activeCategory === category
                ? // ? "text-[#497D74] border-[3px] border-[#497D74]"
                  "bg-gradient-to-r from-[#497D74] to-[#2F4F4F] text-transparent bg-clip-text"
                : " text-[#454545] border-[2px] border-charcoalGray"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 🔹 عرض المشاريع */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects[activeCategory].length > 0 ? (
          projects[activeCategory].map((item: ProjectProps, index: number) => (
            <div
              key={index}
              className="relative group bg-opacity-10 rounded-lg overflow-hidden shadow-md"
            >
              {/* 🔹 الصورة بتأثير الـ hover */}
              <div className="relative w-full h-[250px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover rounded-t-lg object-[70%top] transition-all duration-500 ease-in-out scale-100 group-hover:scale-110"
                />
              </div>

              {/* 🔹 النص يختفي عند hover */}
              <div className="p-3 text-left">
                <h3 className="text-lg">{item.name}</h3>
              </div>
              {/* <div className="p-3 text-left transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
                <h3 className="text-lg">{item.name}</h3>
              </div> */}
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
}
