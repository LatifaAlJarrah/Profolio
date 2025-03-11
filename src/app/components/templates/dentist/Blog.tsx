import React from "react";

import Image from "next/image";
import {
  DentalPractice,
  DentalVeneers,
  PerfectSmile,
  VeneersShow,
} from "@/app/assets/icons";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-4 max-w-md mx-auto mt-10">
      <div className="rounded-s-[100px] rounded-tr-[100px] overflow-hidden border-s-[16px] border-[#58ADEB82] border-opacity-20 w-52 h-52 sm:w-60 sm:h-60">
        <Image
          src={DentalPractice}
          alt="Dental Care"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-e-[100px] rounded-tl-[100px] overflow-hidden border-e-[16px] border-[#58ADEB82] border-opacity-20 w-52 h-52 sm:w-60 sm:h-60">
        <Image
          src={PerfectSmile}
          alt="Happy Smile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-t-[100px] rounded-bl-[100px] overflow-hidden border-t-[16px] border-[#58ADEB82] border-opacity-20 w-52 h-52 sm:w-60 sm:h-60 -rotate-90">
        <Image
          src={VeneersShow}
          alt="Teeth Whitening"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-e-[100px] rounded-bl-[100px] overflow-hidden border-e-[16px] border-[#58ADEB82] border-opacity-20 w-52 h-52 sm:w-60 sm:h-60">
        <Image
          src={DentalVeneers}
          alt="Perfect Teeth"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section className={`${roboto.className} bg-[#FAFAFA] py-8`}>
      <div className="relative mx-auto">
        <h2 className="text-center text-4xl tracking-widest">BLOG</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 grid-cols-1">
            <ImageGrid />
          </div>

          <div className="lg:w-1/2 my-0 mt-6 text-center sm:text-left px-4 md:px-12 lg:px-4">
            <h3 className="text-xl sm:text-3xl font-medium">
              How to Achieve a Hollywood Smile with Cosmetic Dentistry
            </h3>
            <div className="">
              <p className="text-xl text-[#5C5757] my-6 text-justify mr-0 sm:mr-12">
                outlines how to attain a Hollywood smile using various cosmetic
                techniques. These techniques include veneers, which are thin
                shells that improve the shape and color of the teeth; teeth
                whitening, a process that brightens the teeth and removes
                stains; crowns, which cover damaged teeth; clear braces that
                discreetly align the teeth without altering their appearance;
                and dental implants that replace missing teeth for a natural
                look. When combined, these procedures not only enhance the
                aesthetics of the smile but also boost self-confidence. 4o mini
              </p>
            </div>

            <button className="text-white text-2xl bg-[#58ADEB] rounded-xl text-center w-1/2 py-2">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
