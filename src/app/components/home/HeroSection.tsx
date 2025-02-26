import React from "react";
import Image from "next/image";
import Link from "next/link";

import HeroImage from "@assets/images/hero-image.png";

import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section
      className={`${lora.className} flex justify-between items-center px-12 py-4 bg-lightGray my-8`}
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl leading-10">
          Design your{" "}
          <span className="text-primary text-6xl font-semibold">FUTURE</span>{" "}
          Start creating with just a click !
        </h1>
        <p className="mt-4 text-charcoalGray text-xl font-normal leading-6">
          Design your website in just a few minutes by using one of our
          templates according to your field.
        </p>
        <Link
          href="/templates"
          className="mt-8 inline-block text-primary underline"
        >
          Discover Templates &gt;
        </Link>
      </div>
      <Image
        src={HeroImage}
        alt="Hero"
        className="w-1/3"
        width={621}
        height={490}
      />
    </section>
  );
}
