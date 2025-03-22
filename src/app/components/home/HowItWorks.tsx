// import React from "react";
// import { Website, WebsiteBuilder, ContentCreator } from "@assets/images";
// import Image from "next/image";
// import Steps from "./Steps";

// const features = [
//   { icon: Website, title: "Choose A Template" },
//   { icon: ContentCreator, title: "Customize The Template" },
//   { icon: WebsiteBuilder, title: "Launch Your Website" },
// ];

// export default function HowItWorks() {
//   return (
//     <section className="text-center py-10 px-20">
//       <h2 className="text-2xl font-bold mb-6">How It Works ?</h2>
//       <div className="bg-gray-200 p-6 rounded-lg mx-auto w-full md:w-3/4 mb-12 md:mb-20">
//         <button className="bg-gray-400 w-16 h-16 rounded-lg">▶</button>
//       </div>
//       <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-6">
//         {features.map((feature, index) => (
//           <React.Fragment key={index}>
//             <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md text-center relative overflow-visible">
//               <div className="flex justify-center">
//                 <Image
//                   src={feature.icon}
//                   alt={feature.title}
//                   width={130}
//                   height={130}
//                   className="-mt-28 -ml-52"
//                 />
//               </div>
//               <p className="mt-10 text-lg md:text-xl text-black leading-5 font-normal">
//                 {feature.title}
//               </p>
//             </div>
//             {index !== 2 && <Steps />}
//           </React.Fragment>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import Image from "next/image";
import { Website, WebsiteBuilder, ContentCreator } from "@assets/images";
import Steps from "./Steps";

import { StaticImageData } from "next/image";

// Feature data
const features = [
  { icon: Website, title: "Choose A Template" },
  { icon: ContentCreator, title: "Customize The Template" },
  { icon: WebsiteBuilder, title: "Launch Your Website" },
];

interface FeatureCardProps {
  icon: StaticImageData; // تغيير النوع هنا
  title: string;
}

// FeatureCard Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md text-center relative">
    <div className="flex justify-center -mt-16">
      <Image src={icon} alt={title} width={130} height={130} />
    </div>
    <p className="mt-8 text-lg md:text-xl text-black font-normal">{title}</p>
  </div>
);
// Main Component
export default function HowItWorks() {
  return (
    <section className="text-center py-10 px-6 md:px-20">
      
      <div className="mt-10 px-20 lg:px-0 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">How It Works?</h2>
        <div className="flex justify-center">
          <div className="bg-[#F3F3F3] w-full lg:w-1/2 h-[500px] flex items-center justify-center rounded-md mb-10">
            <button className="text-[#828282] border-[10px] border-[#828282] p-3 text-3xl">
              ▶
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around space-y-12 md:space-y-0 md:space-x-6">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <FeatureCard icon={feature.icon} title={feature.title} />
            {index !== features.length - 1 && <Steps />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
