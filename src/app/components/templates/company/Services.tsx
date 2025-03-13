import React from "react";
import Image from "next/image";

import {
  WebDesign,
  UxDesign,
  Interface,
  SearchOptimization,
  CustumizationIcon,
  Chatbot,
  Analystic,
  ContentCreator,
} from "@/app/assets/icons";

const services = [
  {
    title: "Website Design & Development",
    description: "Landing pages, corporate websites, e-commerce stores",
    icon: WebDesign,
  },
  {
    title: "Simple Web App Development",
    description: "using technologies like React and Node.js",
    icon: UxDesign,
  },
  {
    title: "Social Media Management",
    description: "content creation, posting, engagement tracking",
    icon: Interface,
  },
  {
    title: "Search Engine Optimization",
    description: "to improve website ranking on Google",
    icon: SearchOptimization,
  },
  {
    title: "Managing Digital Ads",
    description: "on Google and social media platforms",
    icon: CustumizationIcon,
  },
  {
    title: "Chatbots for Customer Support",
    description: "on websites or WhatsApp",
    icon: Chatbot,
  },
  {
    title: "Customer Data Analysis",
    description: "to gain marketing insights",
    icon: Analystic,
  },
  {
    title: "Marketing Task Automation",
    description: "such as post scheduling and email campaigns.",
    icon: ContentCreator,
  },
];

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Services = () => {
  return (
    <section className={`${roboto.className} bg-[#F3F3EE] px-20 py-10`}>
      <h2 className="mb-8 text-3xl uppercase font-medium">
        <span className="text-navyBlue">n</span>exora services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-[100px] px-8 pb-8 hover:shadow-2xl transition duration-300 h-72"
          >
            <div className="w-24 h-24 mb-4 bg-navyBlue rounded-full flex items-center text-center justify-center border-[15px] border-[#F3F3EE]">
              <Image
                src={service.icon}
                alt={service.title}
                width={50}
                height={50}
              />
            </div>
            <h3 className="mb-2 text-black text-xl">{service.title}</h3>
            <p className="text-charcoalGray text-xl">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
