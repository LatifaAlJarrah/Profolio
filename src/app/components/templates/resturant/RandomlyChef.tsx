import React from "react";
import Image from "next/image";
import { SeaFood, Goulash, SweetBerry } from "@/app/assets/images";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const chefSpecials = [
  {
    name: "Cassoulet",
    price: "20$",
    description:
      "A Traditional French Dish Made Of White Beans, Sausage, And Slow-Cooked Beef.",
    img: Goulash,
  },
  {
    name: "Bouillabaisse",
    price: "12$",
    description:
      "A Traditional French Fish Soup Garnished With Fresh Seafood And Special Spices.",
    img: SeaFood,
  },
  {
    name: "Tarte Aux Fruits",
    price: "10$",
    description: "A Fresh Fruit Tart With A Base Of Vanilla-Scented Cream.",
    img: SweetBerry,
  },
];
export default function RandomlyChef() {
  return (
    <section className="relative bg-black text-white py-16 px-6 md:px-16">
      <h2 className="text-4xl text-center tracking-widest mb-12">
        RANDOMLY CHEF
      </h2>

      <div
        className={`${roboto.className} flex flex-col md:flex-row items-center justify-between space-x-6`}
      >
        <div className="flex">
          <div className="flex flex-col md:w-1/2">
            <div className="relative h-[250px] w-96">
              <Image
                src={chefSpecials[0].img}
                alt={chefSpecials[0].name}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:w-1/2">
            {chefSpecials.slice(1).map((item, index) => (
              <div key={index} className="w-96 h-[250px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4 mt-8 md:mt-0">
          {chefSpecials.map((item, index) => (
            <>
              <div
                key={index}
                className="flex items-center justify-between w-full pb-3 space-x-6"
              >
                <h3 className="text-2xl">{item.name}</h3>
                <div className="border border-yellow w-full"></div>
                <span className="text-yellow font-bold text-3xl">
                  {item.price}
                </span>
              </div>
              <p className="text-charcoalGray text-xl mt-1">
                {item.description}
              </p>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
