"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import { templates } from "../data/templates"; // استيراد البيانات

const TemplatesPage = () => {
  const router = useRouter(); // Initialize the router

  return (
    <div className="py-8 text-center px-20">
      <h2 className="text-3xl font-bold text-black">All Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-6 gap-8">
        {templates.map((item, index) => {
          const TemplateComponent = item.Component;
          return (
            <div
              key={index}
              onClick={() =>
                router.push(`/controltemplate?template=${item.name}`)
              }
              className="relative rounded-md shadow-md flex flex-col items-center justify-center overflow-hidden h-96"
            >
              <div className="flex items-center justify-center">
                <TemplateComponent />
              </div>
              <p className="text-black text-xl mt-2 text-center">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplatesPage;
