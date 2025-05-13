"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { templates } from "../data/templates";

export default function WhyUs() {
  const router = useRouter();

  return (
    <section className="bg-lightGray py-12 px-4 md:px-12">
      <h2 className="text-2xl font-semibold text-left mb-12">
        Templates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 gap-y-20 lg:gap-y-0 cursor-pointer">
        {templates.slice(1, 5).map((item, index) => (
          <div
            key={index}
            className="text-center relative"
            onClick={() =>
              router.push(`/controltemplate?template=${item.name}`)
            }
          >
            <Image
              src={item.link as string}
              alt={item.name || "Template Image"}
              width={350}
              height={300}
              className="w-full h-full rounded-xl"
            />
            
            <p className="text-black text-xl mt-2 text-center">{item.name}</p>
          </div>
        ))}
      </div>
      <Link href="/templates">
        <button className="mt-20 px-6 py-2 text-white block mx-auto bg-primary w-[159px] h-[45px] rounded-lg text-xl">
          Show More
        </button>
      </Link>
    </section>
  );
}