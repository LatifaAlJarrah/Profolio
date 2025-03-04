// import React from "react";

// import Image from "next/image";
// import ResturantHero from "@assets/images/resturantHero.png";

// import { Roboto, Sedan } from "next/font/google";

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

// const sedan = Sedan({
//   weight: "400",
//   subsets: ["latin"],
// });

// export default function ResturantHeader() {
//   return (
//     <section className="w-full h-screen flex items-center justify-center">
//       <div className="">
//         <Image
//           src={ResturantHero}
//           layout="fill"
//           objectFit="cover"
//           alt="Hero background"
//           className="-z-10"
//         />
//       </div>
//       <div className="flex flex-col items-center justify-center text-center z-10 text-white">
//         <h1 className={` ${sedan.className} text-6xl`}>
//           Where Every <span className="text-yellow-400">Meal</span> Tells a
//           Story
//         </h1>
//         <p className={` ${roboto.className} mt-4 text-xl`}>
//           A Culinary Experience Crafted with Passion and Fresh Ingredients
//         </p>
//       </div>
//     </section>
//   );
// }
import React from "react";
import Image from "next/image";
import ResturantHero from "@assets/images/resturantHero.png";
import { Roboto, Sedan } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const sedan = Sedan({
  weight: "400",
  subsets: ["latin"],
});

export default function ResturantHeader() {
  return (
    <section className="w-full h-screen relative flex items-center justify-center">
      <div className="absolute inset-0">
        {" "}
        {/* استخدم absolute inset-0 لتغطية العنصر بالكامل */}
        <Image
          src={ResturantHero}
          layout="fill"
          objectFit="cover"
          alt="Hero background"
          className="-z-10"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* طبقة شفافة */}
      </div>
      <div className="flex flex-col items-center justify-center text-center z-10 text-white">
        <h1 className={`${sedan.className} text-6xl`}>
          Where Every <span className="text-yellow">Meal</span> Tells a
          Story
        </h1>
        <p className={`${roboto.className} mt-4 text-xl`}>
          A Culinary Experience Crafted with Passion and Fresh Ingredients
        </p>
      </div>
    </section>
  );
}