import {
  Error,
  Growth,
  Support,
  Publishing,
  Professional,
} from "@assets/icons";
import Image from "next/image";

const features = [
  { icon: Professional, title: "Professional & Ready-Made Templates" },
  { icon: Error, title: "Easy Customization With No Coding Required" },
  { icon: Publishing, title: "One-Click Export & Publishing" },
  { icon: Growth, title: "Scalability & Growth" },
  { icon: Support, title: "Continuous Technical Support" },
];

export default function WhyUs() {
  return (
    <section className="bg-lightGray py-12 px-4 md:px-12">
      <h2 className="text-2xl font-semibold text-center mb-12 md:mb-20">
        Why Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md text-center relative overflow-visible"
          >
            <div className="flex justify-center -mt-16">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={130}
                height={130}
                className="rounded-full"
              />
            </div>
            <p className="mt-10 text-lg md:text-xl text-black leading-5 font-normal">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}