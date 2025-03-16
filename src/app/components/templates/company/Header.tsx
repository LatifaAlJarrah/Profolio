import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { Company } from "@/app/assets/images";

const Header = () => {
  return (
    <section
      className="relative min-h-screen text-white grid grid-cols-12 text-center"
      id="home"
    >
      <Image
        src={Company}
        alt="company"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="absolute top-0 left-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 bg-black -z-10 opacity-60"></div>

      <div className="col-span-12">
        <Navbar />
      </div>

      <div
        className={`font-roboto col-span-10 col-start-2 flex flex-col items-center text-center`}
      >
        <p className="text-5xl font-bold max-w-4xl">
          Innovative Programming and AI for Smarter Marketing
        </p>
        <p className="text-3xl my-10 max-w-3xl">
          We provide tailored solutions to help businesses leverage advanced
          programming and smart technologies to maximize their marketing
          potential
        </p>
        <button className="text-3xl border-[3px] border-navyBlue text-center rounded-2xl py-2 px-6">
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Header;
