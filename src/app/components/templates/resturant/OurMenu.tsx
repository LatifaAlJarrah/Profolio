// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// interface MenuItem {
//   img:  string;
//   name: string;
//   description: string;
//   price: string;
// }

// const menuItems: { [key: string]: MenuItem[] } = {
//   appetizers: [
//     {
//       name: "Grilled Halloumi With Honey",
//       price: "5$",
//       img: "/assets/images/resturantMenu/halloumi.png",
//       description: "Grilled Halloumi Cheese With Honey And Pistachios",
//     },
//     {
//       name: "Stuffed Peppers",
//       price: "7$",
//       img: "/assets/images/resturantMenu/stuffed-peppers.png",
//       description:
//         "Jalapeño And Sweet Peppers Stuffed With Goat And Lamb Cheese",
//     },
//     {
//       name: "Smoked Fish Platter",
//       price: "15$",
//       img: "/assets/images/resturantMenu/fish-platter.png",
//       description: "A Selection Of Smoked Salmon And Whitefish",
//     },
//     {
//       name: "Imam Bayildi",
//       price: "10$",
//       img: "/assets/images/resturantMenu/imam-bayildi.png",
//       description:
//         "Slow-Cooked Eggplant With Tomatoes, Sweet Peppers, And Garlic.",
//     },
//     {
//       name: "Eggplant Rolls",
//       price: "5$",
//       img: "/assets/images/resturantMenu/eggplant.png",
//       description:
//         "Rolled Eggplant Stuffed With Creamy Cheese, Labneh, And Walnuts.",
//     },
//   ],
//   soupsSalads: [
//     {
//       name: "Pumpkin & Apple Soup",
//       price: "10$",
//       img: "/assets/images/resturantMenu/pumpkin-and-apple-soup.jpeg",
//       description: "A creamy soup made with pumpkin and apples.",
//     },
//     {
//       name: "Tomato Soup",
//       price: "7$",
//       img: "/assets/images/resturantMenu/tomatosoup.jpeg",
//       description:
//         " Fresh tomatoes, onion, garlic, olive oil, vegetable broth, heavy cream",
//     },
//     {
//       name: "Vinaigrette Salad",
//       price: "5$",
//       img: "/assets/images/resturantMenu/VinaigretteSalad.jpeg",
//       description: "A mix of beets, beans, potatoes, and pickles.",
//     },
//     {
//       name: "Olivier Salad",
//       price: "6$",
//       img: "/assets/images/resturantMenu/olivier-salad.jpeg",
//       description: "Beef, carrots, peas, eggs, potatoes, and pickles.",
//     },
//     {
//       name: "Goat Cheese Salad",
//       price: "5$",
//       img: "/assets/images/resturantMenu/goat-cheese-salad.jpeg",
//       description: "Fresh tomatoes with goat cheese and cream cheese.",
//     },
//   ],
//   mainCourses: [
//     {
//       name: "Ribeye Steak",
//       price: "15$",
//       img: "/assets/images/resturantMenu/ribeye-steak.jpeg",
//       description: "Grilled ribeye steak",
//     },
//     {
//       name: "Prime Steak Tartare",
//       price: "12$",
//       img: "/assets/images/resturantMenu/prime-steak.jpeg",
//       description: "Finely minced raw beef with spices and fresh ingredients",
//     },
//     {
//       name: "Tuna Tartare",
//       price: "10$",
//       img: "/assets/images/resturantMenu/tuna-tartare.jpeg",
//       description: "Finely minced raw tuna with spices and fresh ingredients",
//     },
//     {
//       name: "Tomahawk Steak",
//       price: "17$",
//       img: "/assets/images/resturantMenu/tomahawk-steak.jpeg",
//       description: "Grilled bone-in tomahawk steak",
//     },
//     {
//       name: "Lamb Chops",
//       price: "15$",
//       img: "/assets/images/resturantMenu/lamb-chops.jpeg",
//       description: "Grilled lamb chops with special seasonings.",
//     },
//   ],
//   desserts: [
//     {
//       name: "Molten Lava Cake",
//       price: "5$",
//       img: "/assets/images/resturantMenu/chocolate.jpeg",
//       description: "Warm chocolate cake with a gooey center",
//     },
//     {
//       name: "Mille Feuille",
//       price: "5$",
//       img: "/assets/images/resturantMenu/mille-feuille.jpeg",
//       description: "Layers of puff pastry filled with vanilla cream",
//     },
//     {
//       name: "Macarons",
//       price: "4$",
//       img: "/assets/images/resturantMenu/macarons.jpeg",
//       description:
//         "Famous almond-based French cookies with various fillings such as chocolate, vanilla",
//     },
//   ],
// };

// export default function OurMenu() {
//   const [activeCategory, setActiveCategory] = useState("appetizers");

//   return (
//     <section className="py-16 text-white text-center px-10" id="menu">
//       <h2 className="text-4xl tracking-widest mb-8">OUR MENU</h2>

//       {/* Category Tabs */}
//       <div
//         className={`font-roboto flex justify-center space-x-4 mb-6`}
//       >
//         {["appetizers", "soupsSalads", "mainCourses", "desserts"].map(
//           (category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-2 rounded-lg transition ${
//                 activeCategory === category
//                   ? "bg-yellow text-black"
//                   : " text-white bg-white bg-opacity-15"
//               }`}
//             >
//               {category === "appetizers"
//                 ? "Appetizers"
//                 : category === "soupsSalads"
//                 ? "Soups & Salads"
//                 : category === "mainCourses"
//                 ? "Main Courses"
//                 : "Desserts"}
//             </button>
//           )
//         )}
//       </div>

//       {/* Menu Items */}
//       <div className="flex justify-center gap-6 flex-wrap">
//         {menuItems[activeCategory].map((item: MenuItem, index: number) => (
//           <div
//             key={index}
//             className="bg-white bg-opacity-10 w-[250px] rounded-lg overflow-hidden"
//           >
//             <Image
//               src={item.img}
//               alt={item.name}
//               width={250}
//               height={270}
//               className="w-full h-[270px] object-cover"
//             />

//             <div className="p-3 text-left">
//               <div className="flex justify-between">
//                 <h3 className="text-2xl">{item.name}</h3>
//                 <p className="text-yellow font-bold text-3xl">{item.price}</p>
//               </div>
//               <p className="text-gray-400 text-base mt-1">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
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