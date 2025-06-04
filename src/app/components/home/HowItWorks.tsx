import React from "react";
import { Website, WebsiteBuilder, ContentCreator } from "@assets/images";
import Image from "next/image";
import Steps from "./Steps";

import { StaticImageData } from "next/image";

const features = [
  { icon: "/assets/images/WebsiteImage.gif", title: "Choose A Template" },
  {
    icon: "/assets/images/contentCreator.gif",
    title: "Customize The Template",
  },
  { icon: "/assets/images/WebsiteBuilder.gif", title: "Launch Your Website" },
];

export default function HowItWorks() {
  return (
    <section className="text-center py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">How It Works ?</h2>
      <div className="bg-gray-200 p-6 rounded-lg mx-auto w-full md:w-3/4 mb-12 md:mb-20">
        <button className="bg-gray-400 w-16 h-16 rounded-lg">▶</button>
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
