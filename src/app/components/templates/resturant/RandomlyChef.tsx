import React from "react";
import Image from "next/image";
import { TemplateData } from "@/app/types/templateData";

interface RandomlyChefProps extends TemplateData {
  chefSpecials?: {
    name: string;
    price: string;
    description: string;
    image: string;
  }[];
  
}

const RandomlyChef: React.FC<RandomlyChefProps> = ({
  chefSpecials,
  titleTextColor,
  buttonColor,
}) => {
  const defaultChefSpecials = [
    {
      name: "Cassoulet",
      price: "20$",
      description:
        "A Traditional French Dish Made Of White Beans, Sausage, And Slow-Cooked Beef.",
      image: "/assets/images/resturantMenu/goulash.jpg",
    },
    {
      name: "Bouillabaisse",
      price: "12$",
      description:
        "A Traditional French Fish Soup Garnished With Fresh Seafood And Special Spices.",
      image: "/assets/images/resturantMenu/seafood.jpg",
    },
    {
      name: "Tarte Aux Fruits",
      price: "10$",
      description: "A Fresh Fruit Tart With A Base Of Vanilla-Scented Cream.",
      image: "/assets/images/resturantMenu/sweetBerry.jpg",
    },
  ];

  const specials = chefSpecials || defaultChefSpecials;

  return (
    <section className="px-10 py-8 bg-black mx-auto">
      <h2
        className="text-4xl text-center tracking-widest mb-12"
        style={{ color: titleTextColor || "#ffffff" }}
      >
        RANDOMLY CHEF
      </h2>
      <div className="font-roboto flex flex-col justify-between items-center space-y-12 lg:space-y-0 mt-8 md:mt-0">
        {specials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-10"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="rounded-full shadow-lg object-cover w-[100px] lg:w-[200px] h-[100px] lg:h-[200px]"
            />

            <div>
              <div className="flex items-center justify-between pb-3 space-x-6">
                <h3
                  className="text-lg lg:text-2xl"
                  style={{ color: titleTextColor || "#ffffff" }}
                >
                  {item.name}
                </h3>
                <div
                  className="border w-full lg:w-[500px]"
                  style={{ borderColor: buttonColor || "#ffcc00" }}
                ></div>
                <span
                  className="font-bold text-3xl"
                  style={{ color: buttonColor || "#ffcc00" }}
                >
                  {item.price}
                </span>
              </div>
              <p
                className="text-charcoalGray texl-base lg:text-xl mt-1 mx-2"
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

export default RandomlyChef;