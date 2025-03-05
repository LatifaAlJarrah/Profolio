// import React from "react";
// import Image from "next/image";
// import { SeaFood, Goulash, SweetBerry } from "@/app/assets/images";

// import { Roboto } from "next/font/google";
// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

// const chefSpecials = [
//   {
//     name: "Cassoulet",
//     price: "20$",
//     description:
//       "A Traditional French Dish Made Of White Beans, Sausage, And Slow-Cooked Beef.",
//     img: Goulash,
//   },
//   {
//     name: "Bouillabaisse",
//     price: "12$",
//     description:
//       "A Traditional French Fish Soup Garnished With Fresh Seafood And Special Spices.",
//     img: SeaFood,
//   },
//   {
//     name: "Tarte Aux Fruits",
//     price: "10$",
//     description: "A Fresh Fruit Tart With A Base Of Vanilla-Scented Cream.",
//     img: SweetBerry,
//   },
// ];

// export default function RandomlyChef() {
//   return (
//     <section className="relative text-white py-16 px-6 md:px-16">
//       <h2 className="text-4xl text-center tracking-widest mb-12">
//         RANDOMLY CHEF
//       </h2>

//       <div
//         className={`${roboto.className} flex flex-col md:flex-row items-center justify-between`}
//       >
//         <div className="flex w-1/2 items-center gap-10">
//           <div className="flex flex-col md:w-1/2">
//             <div className="h-[250px] w-96">
//               <Image
//                 src={chefSpecials[0].img}
//                 alt={chefSpecials[0].name}
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col md:w-1/2 bg-yellow">
//             {chefSpecials.slice(1).map((item, index) => (
//               <div key={index} className="h-[250px] w-96">
//                 <Image
//                   src={item.img}
//                   alt={item.name}
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />

//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col space-y-4 mt-8 md:mt-0 w-1/2">
//           {chefSpecials.map((item, index) => (
//             <>
//               <div
//                 key={index}
//                 className="flex items-center justify-between w-full pb-3 space-x-6"
//               >
//                 <h3 className="text-2xl">{item.name}</h3>
//                 <div className="border border-yellow w-full"></div>
//                 <span className="text-yellow font-bold text-3xl">
//                   {item.price}
//                 </span>
//               </div>
//               <p className="text-charcoalGray text-xl mt-1">
//                 {item.description}
//               </p>
//             </>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
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
    <section className="relative text-white py-16 px-6 md:px-16">
      <h2 className="text-4xl text-center tracking-widest mb-12">
        RANDOMLY CHEF
      </h2>

      <div
        className={`${roboto.className} flex flex-col md:flex-row items-center justify-between`}
      >
        {/* Left Side - Images */}
        <div className="flex w-1/2 items-center gap-10">
          {/* Main Image */}
          <div className="relative flex flex-col md:w-1/2">
            <div className="h-[250px] w-96">
              <Image
                src={chefSpecials[0].img}
                alt={chefSpecials[0].name}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Stacked Images */}
          <div className="relative flex flex-col md:w-1/2 h-[250px] w-96">
            {chefSpecials.slice(1).map((item, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 ${
                  index === 1 ? "translate-x-5 translate-y-5 z-10" : "z-20"
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                  width={384} // 96 Tailwind width
                  height={250} // Same height as the first image
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Menu */}
        <div className="flex flex-col space-y-4 mt-8 md:mt-0 w-1/2">
          {chefSpecials.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between w-full pb-3 space-x-6">
                <h3 className="text-2xl">{item.name}</h3>
                <div className="border border-yellow w-full"></div>
                <span className="text-yellow font-bold text-3xl">
                  {item.price}
                </span>
              </div>
              <p className="text-charcoalGray text-xl mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import Image from "next/image";
// import { SeaFood, Goulash, SweetBerry } from "@/app/assets/images";

// // Sample chef's special menu data
// const chefSpecials = [
//   {
//     name: "Cassoulet",
//     price: "20$",
//     description:
//       "A Traditional French Dish Made Of White Beans, Sausage, And Slow-Cooked Beef.",
//     img: Goulash,
//   },
//   {
//     name: "Bouillabaisse",
//     price: "12$",
//     description:
//       "A Traditional French Fish Soup Garnished With Fresh Seafood And Special Spices.",
//     img: SeaFood,
//   },
//   {
//     name: "Tarte Aux Fruits",
//     price: "10$",
//     description: "A Fresh Fruit Tart With A Base Of Vanilla-Scented Cream.",
//     img: SweetBerry,
//   },
// ];

// export default function RandomlyChef() {
//   return (
//     <section className="relative bg-black text-white py-16 px-6 md:px-16">
//       <h2 className="text-4xl text-center tracking-widest mb-12">
//         RANDOMLY CHEF
//       </h2>

//       <div className="flex flex-col md:flex-row items-center justify-between">
//         {/* Left Side - Images */}
//         <div className="flex w-1/2">
//           <div className="flex flex-col">
//             <div className="relative w-[250px] h-[250px]">
//               <Image
//                 src={chefSpecials[0].img}
//                 alt={chefSpecials[0].name}
//                 layout="fill"
//                 objectFit="cover"
//                 className={`rounded-lg shadow-lg`}
//               />
//             </div>
//           </div>
//           <div className="flex flex-col bg-yellow">
//             {chefSpecials.splice(1).map((item, index) => (
//               <div key={index} className="relative w-[250px] h-[250px]">
//                 <Image
//                   src={item.img}
//                   alt={item.name}
//                   layout="fill"
//                   objectFit="cover"
//                   className={`rounded-lg shadow-lg`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Right Side - Text Menu */}
//         <div className="flex flex-col space-y-8 mt-8 md:mt-0 w-1/2">
//           {chefSpecials.map((item, index) => (
//             <div
//               key={index}
//               className="border-b border-yellow-400 pb-3 flex justify-between items-start"
//             >
//               <div>
//                 <h3 className="text-xl font-semibold">{item.name}</h3>
//                 <p className="text-gray-400 text-sm mt-1">{item.description}</p>
//               </div>
//               <span className="text-yellow-400 font-bold text-lg">
//                 {item.price}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
