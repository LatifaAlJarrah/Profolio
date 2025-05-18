"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TemplateData } from "@/app/types/templateData";

interface OurMenuProps extends TemplateData {
  titleTextColor?: string;
  buttonColor?: string;
}

interface MenuItems {
  [key: string]: {
    name: string;
    description: string;
    price: string;
    img: string;
  }[];
}

const OurMenu: React.FC<OurMenuProps> = ({
  menuItems,
  titleTextColor,
  buttonColor,
}) => {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  const defaultMenuItems = {
    appetizers: [],
    soupsSalads: [],
    mainCourses: [],
    desserts: [],
  };

  // const items = menuItems || defaultMenuItems;

  const items: MenuItems = menuItems || defaultMenuItems;

  return (
    <section className="py-16 text-center px-10" id="menu">
      <h2
        className="text-4xl tracking-widest mb-8"
        style={{ color: titleTextColor || "#ffffff" }}
      >
        OUR MENU
      </h2>

      <div className={`font-roboto flex justify-center space-x-4 mb-6`}>
        {["appetizers", "soupsSalads", "mainCourses", "desserts"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg transition ${
                activeCategory === category
                  ? "text-black"
                  : "text-white bg-white bg-opacity-15"
              }`}
              style={{
                backgroundColor:
                  activeCategory === category
                    ? buttonColor || "#ffcc00"
                    : undefined,
              }}
            >
              {category === "appetizers"
                ? "Appetizers"
                : category === "soupsSalads"
                ? "Soups & Salads"
                : category === "mainCourses"
                ? "Main Courses"
                : "Desserts"}
            </button>
          )
        )}
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {items[activeCategory].map((item, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 w-[250px] rounded-lg overflow-hidden"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={250}
              height={270}
              className="w-full h-[270px] object-cover"
            />

            <div className="p-3 text-left">
              <div className="flex justify-between">
                <h3
                  className="text-2xl"
                  style={{ color: titleTextColor || "#ffffff" }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-bold text-3xl"
                  style={{ color: buttonColor || "#ffcc00" }}
                >
                  {item.price}
                </p>
              </div>
              <p
                className="text-gray-400 text-base mt-1"
                style={{ color: "#d1d5db" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMenu;
