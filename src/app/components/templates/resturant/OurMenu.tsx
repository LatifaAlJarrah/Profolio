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
  Chocolate,
  MilleFeuille,
  Macarons,
  PumpkinSoup,
  TomatoSoup,
  OlivierSalad,
  VinaigretteSalad,
  GoatCheeseSalad,
  TunaTartare,
  TomahawkSteak,
  PrimeSteak,
  LambChops,
  RibeyeSteak,
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
  soupsSalads: [
    {
      name: "Pumpkin & Apple Soup",
      price: "10$",
      img: PumpkinSoup,
      description: "A creamy soup made with pumpkin and apples.",
    },
    {
      name: "Tomato Soup",
      price: "7$",
      img: TomatoSoup,
      description:
        " Fresh tomatoes, onion, garlic, olive oil, vegetable broth, heavy cream",
    },
    {
      name: "Vinaigrette Salad",
      price: "5$",
      img: VinaigretteSalad,
      description: "A mix of beets, beans, potatoes, and pickles.",
    },
    {
      name: "Olivier Salad",
      price: "6$",
      img: OlivierSalad,
      description: "Beef, carrots, peas, eggs, potatoes, and pickles.",
    },
    {
      name: "Goat Cheese Salad",
      price: "5$",
      img: GoatCheeseSalad,
      description: "Fresh tomatoes with goat cheese and cream cheese.",
    },
  ],
  mainCourses: [
    {
      name: "Ribeye Steak",
      price: "15$",
      img: RibeyeSteak,
      description: "Grilled ribeye steak",
    },
    {
      name: "Prime Steak Tartare",
      price: "12$",
      img: PrimeSteak,
      description: "Finely minced raw beef with spices and fresh ingredients",
    },
    {
      name: "Tuna Tartare",
      price: "10$",
      img: TunaTartare,
      description: "Finely minced raw tuna with spices and fresh ingredients",
    },
    {
      name: "Tomahawk Steak",
      price: "17$",
      img: TomahawkSteak,
      description: "Grilled bone-in tomahawk steak",
    },
    {
      name: "Lamb Chops",
      price: "15$",
      img: LambChops,
      description: "Grilled lamb chops with special seasonings.",
    },
  ],
  desserts: [
    {
      name: "Molten Lava Cake",
      price: "5$",
      img: Chocolate,
      description: "Warm chocolate cake with a gooey center",
    },
    {
      name: "Mille-Feuille",
      price: "5$",
      img: MilleFeuille,
      description: "Layers of puff pastry filled with vanilla cream",
    },
    {
      name: "Macarons",
      price: "4$",
      img: Macarons,
      description:
        "Famous almond-based French cookies with various fillings such as chocolate, vanilla",
    },
  ],
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
              className="w-full h-[270px] object-cover"
            />

            <div className="p-3 text-left">
              <div className="flex justify-between">
                <h3 className="text-2xl">{item.name}</h3>
                <p className="text-yellow font-bold text-3xl">{item.price}</p>
              </div>
              <p className="text-gray-400 text-base mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
