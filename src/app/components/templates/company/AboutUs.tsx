import React from "react";
import Image from "next/image";
import { OfficeCulture } from "@/app/assets/images";
import {
    DoneIcone,
    Customer,
    Calender,
    TeamWork
} from "@/app/assets/icons";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const AboutUs = () => {
  return (
    <section className={`${roboto.className} py-16 px-20`} id="about">
      <div className="grid grid-cols-12 items-center gap-8">
        <h2 className="col-span-12 text-3xl font-medium text-black mb-10">
          ABOUT US
        </h2>
        {/* Left Section: About Us Content */}
        <div className="col-span-8 lg:col-span-5 space-y-6">
          <h3 className="text-2xl lg:text-4xl font-bold text-black leading-tight">
            Empowering <span className="text-navyBlue">Businesses</span> with{" "}
            <br />
            technology, AI, and smart marketing
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg lg:text-2xl">
            We are a team of passionate innovators dedicated to transforming
            businesses through cutting-edge technology. Our expertise spans
            software development, artificial intelligence, and digital
            marketing, helping companies stay ahead in an ever-evolving digital
            world.
          </p>
          <button className="bg-navyBlue text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-80 text-lg lg:text-2xl">
            Explore Our Services
          </button>
        </div>

        {/* Center Section: Oval Image */}
        <div className="col-span-4 lg:col-span-3 flex justify-center h-full">
          <div className="relative  overflow-hidden rounded-full">
            {/* Inner Border */}
            <div className="absolute inset-2 border-[4px] border-navyBlue rounded-full"></div>

            {/* Image */}
            <Image
              src={OfficeCulture}
              alt="Team Working"
              // width={300}
              // height={400}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>

        {/* Right Section: Statistics Cards */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-4 lg:grid-cols-2 gap-6">
          {[
            { icon: DoneIcone, value: "150", label: "Project Done" },
            { icon: Customer, value: "200", label: "Happy Customers" },
            { icon: Calender, value: "5", label: "Years" },
            { icon: TeamWork, value: "20", label: "Team Members" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-navyBlue rounded-3xl p-6 shadow-md bg-white"
            >
              <Image
                className="text-4xl"
                src={item.icon}
                alt="icon not found"
                width={50}
                height={50}
              />
              <h4 className="text-3xl font-bold text-gray-900 mt-2">
                <span className="text-charcoalGray">+</span> {item.value}
              </h4>
              <p className="text-xl text-[#4E4E4E]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
