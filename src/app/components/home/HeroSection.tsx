import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@assets/images/hero-image.png";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function HeroSection() {
  return (
    <section
      className={`${lora.className} flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-8 bg-lightGray my-8`}
    >
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="text-3xl md:text-5xl leading-tight md:leading-10">
          Design your{" "}
          <span className="text-primary text-4xl md:text-6xl font-semibold">
            FUTURE
          </span>{" "}
          Start creating with just a click !
        </h1>
        <p className="mt-4 text-charcoalGray text-lg md:text-xl font-normal leading-6">
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
        className="w-full md:w-1/3 mt-8 md:mt-0"
        width={621}
        height={490}
        priority
      />
    </section>
  );
}