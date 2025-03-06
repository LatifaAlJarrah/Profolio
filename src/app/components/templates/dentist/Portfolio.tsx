import React from "react";

import Image from "next/image";
import { HollywoodSmile } from "@/app/assets/images";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Card = () => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white">
      <div>
        <Image src={HollywoodSmile} alt="HollywoodSmile" />
      </div>
      <div>
        <p className="text-2xl">Hollywood Smile</p>
        <p className="text-charcoalGray text-xl">
          The patient had discoloration and misalignment of the teeth, They were
          treated with a Hollywood Smile using cosmetic veneers (either veneers
          or lumineers) to achieve a bright and harmonious smile.
        </p>
      </div>
    </div>
  );
};
const Portfolio = () => {
  return (
    <section className={`${roboto.className} bg-white`}>
      <h2 className="text-center mb-8 text-4xl tracking-widest">
        PORTFOLIO & TESTIMONIALS
      </h2>
      <Card />
    </section>
  );
};

export default Portfolio;
