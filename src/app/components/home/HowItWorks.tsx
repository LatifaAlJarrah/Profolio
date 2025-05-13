import React from "react";
import Image from "next/image";
import { Website, WebsiteBuilder, ContentCreator } from "@assets/images";
import Steps from "./Steps";

import { StaticImageData } from "next/image";

const features = [
  { icon: Website, title: "Choose A Template" },
  { icon: ContentCreator, title: "Customize The Template" },
  { icon: WebsiteBuilder, title: "Launch Your Website" },
];

interface FeatureCardProps {
  icon: StaticImageData;
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
          <div className="bg-[#F3F3F3] w-full lg:w-1/2 h-[150px] lg:h-[500px] flex items-center justify-center rounded-md mb-10">
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
