import React from "react";
import { Website, WebsiteBuilder, ContentCreator } from "@assets/images";
import Image from "next/image";
import Steps from "./Steps";

const features = [
  { icon: Website, title: "Choose A Template" },
  { icon: ContentCreator, title: "Customize The Template" },
  { icon: WebsiteBuilder, title: "Launch Your Website" },
];

export default function HowItWorks() {
  return (
    <section className="text-center py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">How It Works ?</h2>
      <div className="bg-gray-200 p-6 rounded-lg mx-auto w-full md:w-3/4 mb-12 md:mb-20">
        <button className="bg-gray-400 w-16 h-16 rounded-lg">▶</button>
      </div>
      <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-6">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md text-center relative overflow-visible">
              <div className="flex justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={130}
                  height={130}
                  className="-mt-28 -ml-52"
                />
              </div>
              <p className="mt-10 text-lg md:text-xl text-black leading-5 font-normal">
                {feature.title}
              </p>
            </div>
            {index !== 2 && <Steps />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}