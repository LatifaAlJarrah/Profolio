import React from "react";

import Image from "next/image";
import { Programmer } from "@/app/assets/images";

import { Palanquin_Dark, Roboto } from "next/font/google";
const palanquin = Palanquin_Dark({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const HeroSection = () => {
  return (
    <section className="grid grid-cols-12 justify-center text-left">
      <div
        className={`${palanquin.className} col-span-6 flex flex-col justify-center`}
      >
        <p className="text-white text-6xl">
          <span className="bg-gradient-to-r from-[#497D74] to-[#2F4F4F] text-transparent bg-clip-text">
            Hello , I&apos;m <br />
          </span>
          Zayn Haddad |
        </p>
        <p className="text-base text-[#555555] mt-12 mb-40">
          A full-stack web developer passionate about building interactive and
          responsive applications, with experience in JavaScript, React,
          Node.js, PostgreSQL,
        </p>
        <div className={`${roboto.className} text-xl text-white`}>
          <button className="bg-gradient-to-r from-[#497D74] to-[#2F4F4F] py-3 px-12 rounded-full">
            Hire Me
          </button>
        </div>
      </div>
      <div className="col-span-6 justify-end">
        <div className="relative h-screen flex items-center justify-center text-white">
          <div className="absolute w-[600px] h-[660px] bg-[#497D74] rounded-full opacity-20 blur-2xl"></div>
          <Image
            src={Programmer}
            alt="programmer"
            className="z-10"
            height={600}
          />
        </div>
      </div>
      <div
        className={`${roboto.className} col-span-12 grid grid-cols-4 border border-[#E8E8E821] border-opacity-20 text-white text-center py-4`}
      >
        <div>
          <p className="font-semibold text-4xl">100+</p>
          <p className="text-lg">projects</p>
        </div>
        <div>
          <p className="font-semibold text-4xl">~100</p>
          <p className="text-lg">users</p>
        </div>
        <div>
          <p className="font-semibold text-4xl">7</p>
          <p className="text-lg">awards</p>
        </div>
        <div>
          <p className="font-semibold text-4xl">5</p>
          <p className="text-lg">Years</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
