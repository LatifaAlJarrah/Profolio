// import React from 'react'
// import TemplatesGrid from '../home/TemplatesGrid'

// const Templates = () => {
//   return (
//     <TemplatesGrid />
//   )
// }

// export default Templates
"use client";
import { templates } from "../data/templates"; // استيراد البيانات
import Link from "next/link";
const TemplatesPage = () => {
  return (
    <div className="py-8 text-center px-20">
      <h2 className="text-3xl font-bold text-black">All Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-6 gap-8">
        {templates.map((item, index) => {
          const TemplateComponent = item.Component;
          return (
            <Link href={item.href} key={index}>
              <div className="relative rounded-md shadow-md flex flex-col items-center justify-center overflow-hidden h-96">
                <div className="flex items-center justify-center">
                  <TemplateComponent />
                </div>
              </div>
              <p className="text-black text-xl mt-2 text-center">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TemplatesPage;
