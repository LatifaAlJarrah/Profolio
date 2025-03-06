import React from "react";

import Image from "next/image";
import { DrSarah } from "@/app/assets/images";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutMe() {
  return (
    <section className={`${roboto.className} text-black py-16 text-center mt-64`}>
      <h2 className="text-4xl tracking-widest mt-4">ABOUT US</h2>
      <div className="mt-8 flex justify-center items-center gap-8 px-6 text-start">
        <div className="w-1/2">
          <Image src={DrSarah} alt="dr sarah image" width={667} height={508} />
        </div>
        <div className="w-1/2">
          <p className="text-3xl font-semibold mb-6">Dr. Sarah Williams</p>
          <p className="text-2xl mb-4">
            Dr. Sarah Williams is a specialist in cosmetic dentistry with over
            10 years of experience. She is passionate about creating beautiful,
            natural smiles through teeth whitening, veneers, and smile
            makeovers. With a patient-centered approach and the latest
            technology, Dr. Williams ensures comfortable treatments and
            long-lasting results. She believes that a confident smile can
            transform lives and is dedicated to helping her patients achieve
            their dream smiles.
          </p>
          <p className="text-[#555555] text-xl mb-6">
            Beautiful smile is not just about appearance
          </p>
          <button className="text-xl bg-[#58ADEB] rounded-xl text-center text-white px-20 py-4">
            Call Me Now!
          </button>
        </div>
      </div>
    </section>
  );
}
