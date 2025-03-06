"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Roboto } from "next/font/google";
import {
  StuffedPaper,
  Halloumi,
  FishPlatter,
  ImamBayildi,
  Eggplant,
} from "@/app/assets/images";

interface MenuItem {
  img: StaticImageData;
  name: string;
  description: string;
  price: string;
}

const menuItems: { [key: string]: MenuItem[] } = {
  appetizers: [
    {
      name: "Grilled Halloumi With Honey",
      price: "5$",
      img: Halloumi,
      description: "Grilled Halloumi Cheese With Honey And Pistachios",
    },
    {
      name: "Stuffed Peppers",
      price: "7$",
      img: StuffedPaper,
      description:
        "Jalapeño And Sweet Peppers Stuffed With Goat And Lamb Cheese",
    },
    {
      name: "Smoked Fish Platter",
      price: "15$",
      img: FishPlatter,
      description: "A Selection Of Smoked Salmon And Whitefish",
    },
    {
      name: "Imam Bayildi",
      price: "10$",
      img: ImamBayildi,
      description:
        "Slow-Cooked Eggplant With Tomatoes, Sweet Peppers, And Garlic.",
    },
    {
      name: "Eggplant Rolls",
      price: "5$",
      img: Eggplant,
      description:
        "Rolled Eggplant Stuffed With Creamy Cheese, Labneh, And Walnuts.",
    },
  ],
  soupsSalads: [],
  mainCourses: [],
  desserts: [],
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function OurMenu() {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  return (
    <section className="py-16 text-white text-center">
      <h2 className="text-4xl tracking-widest mb-8">OUR MENU</h2>

      {/* Category Tabs */}
      <div
        className={` ${roboto.className} flex justify-center space-x-4 mb-6`}
      >
        {["appetizers", "soupsSalads", "mainCourses", "desserts"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg transition ${
                activeCategory === category
                  ? "bg-yellow text-black"
                  : " text-white bg-white bg-opacity-15"
              }`}
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

      {/* Menu Items */}
      <div className="flex justify-center gap-6 flex-wrap">
        {menuItems[activeCategory].map((item: MenuItem, index: number) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 w-[250px] rounded-lg overflow-hidden"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={250}
              height={160}
              layout="responsive"
              objectFit="cover"
            />
            <div className="p-3 text-left">
              <div className="flex justify-between">
                <h3 className="text-2xl">{item.name}</h3>
                <p className="text-yellow font-bold text-3xl">
                  {item.price}
                </p>
              </div>
              <p className="text-gray-400 text-base mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
