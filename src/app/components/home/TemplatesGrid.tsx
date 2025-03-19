"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { templates } from "../data/templates";

import Image from "next/image";
export default function TemplatesGrid() {
  const router = useRouter(); // Initialize the router

  return (
    <section className="px-4 md:px-12 py-8">
      <h2 className="text-2xl font-semibold">Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {templates.slice(4).map((item, index) => {
          return (
            <div key={index}>
              <div
                className="relative h-[300px] w-[350px] rounded-md shadow-md flex flex-col items-center justify-center overflow-hidden cursor-pointer"
                onClick={() =>
                  router.push(`/controltemplate?template=${item.name}`)
                } // Use router.push
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={item.link as string}
                    alt={item.name || "Template Image"}
                    width={350}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-black text-xl mt-2 text-center">{item.name}</p>
            </div>
          );
        })}
      </div>
      <Link href="/templates">
        <button className="mt-6 px-6 py-2 text-white block mx-auto bg-primary w-[159px] h-[45px] rounded-lg text-xl">
          Show More
        </button>
      </Link>
    </section>
  );
}
