import { Website, WebsiteBuilder, ContentCreator } from "@assets/images";

import Image from "next/image";

const features = [
  { icon: Website, title: "Choose A Template" },
  { icon: ContentCreator, title: "Customize The Template" },
  { icon: WebsiteBuilder, title: "Launch Your Website" },
];

export default function WhyUs() {
  return (
    <section className="text-center py-10">
      <h2 className="text-2xl font-bold mb-6">How It Works ?</h2>
      <div className="bg-gray-200 p-6 rounded-lg mx-auto w-3/4 mb-20">
        <button className="bg-gray-400 w-16 h-16 rounded-lg">▶</button>
      </div>
      <div className="flex justify-around mt-8 space-x-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md text-center relative overflow-visible"
          >
            <div className="flex justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={130}
                height={130}
                className="-mt-28 -ml-52"
              />
            </div>
            <p className="mt-10 text-xl text-black leading-5 font-normal">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
