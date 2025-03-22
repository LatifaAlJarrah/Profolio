"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import { templates } from "../data/templates"; // استيراد البيانات

import Image from "next/image";

const TemplatesPage = () => {
  const router = useRouter(); // Initialize the router

  return (
    <div className="py-8 text-center px-20">
      <h2 className="text-3xl font-bold text-black">All Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {templates.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="relative rounded-md shadow-md flex flex-col items-center justify-center overflow-hidden cursor-pointer h-96"
                      onClick={() =>
                        router.push(`/controltemplate?template=${item.name}`)
                      } // Use router.push
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          src={item.link as string}
                          alt={item.name || "Template Image"}
                          fill
                          quality={100}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <p className="text-black text-2xl mt-2 text-center">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
    </div>
  );
};

export default TemplatesPage;
