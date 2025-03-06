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
  },
  {
    name: "Bouillabaisse",
    price: "12$",
    description:
      "A Traditional French Fish Soup Garnished With Fresh Seafood And Special Spices.",
  },
  {
    name: "Tarte aux Fruits",
    price: "10$",
    description: "A Fresh Fruit Tart With A Base Of Vanilla-Scented Cream.",
  },
];

export default function RandomlyChef() {
  return (
    <section className="px-10 py-8 bg-black text-white">
      <h2 className="text-4xl text-center tracking-widest mb-12">
        RANDOMLY CHEF
      </h2>
      <div
        className={`${roboto.className} flex flex-col md:flex-row justify-between items-center`}
      >
        <div className="relative w-full md:w-1/2 h-[620px] flex items-center justify-center overflow-hidden">
          <div className="absolute top-15 left-10 rotate-12 w-[250px] h-[350px]">
            <Image
              src={Goulash}
              alt="Goulash"
              width={250}
              height={300}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-10 left-[342px] rotate-12 w-[250px] h-[265px]">
            <Image
              src={SeaFood}
              alt="SeaFood"
              width={250}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-80 left-[280px] rotate-12 w-[250px] h-[265px]">
            <Image
              src={SweetBerry}
              alt="SweetBerry"
              width={250}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="space-y-6">
            <div className="flex flex-col space-y-4 mt-8 md:mt-0">
              {chefSpecials.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between w-full pb-3 space-x-6">
                    <h3 className="text-2xl">{item.name}</h3>
                    <div className="border border-yellow w-full"></div>
                    <span className="text-yellow font-bold text-3xl">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-charcoalGray text-xl mt-1 mx-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
