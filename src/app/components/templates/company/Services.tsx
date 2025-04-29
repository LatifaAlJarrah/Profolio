import React from "react";
import Image from "next/image";
import { TemplateData } from "@/app/types/templateData";

interface ServicesProps extends TemplateData {
  services?: Array<{
    title: string;
    description: string;
    icon: string;
    uploadedIcon?: string;
  }>;
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  console.log("Services Data:", services); // تصحيح للتأكد من البيانات

  if (!services || services.length === 0) {
    return (
      <section className={`font-roboto bg-[#F3F3EE] px-20 py-10`} id="services">
        <h2 className="mb-8 text-3xl uppercase font-medium">
          <span className="text-navyBlue">n</span>exora services
        </h2>
        <p>No services available.</p>
      </section>
    );
  }

  return (
    <section className={`font-roboto bg-[#F3F3EE] px-20 py-10`} id="services">
      <h2 className="mb-8 text-3xl uppercase font-medium">
        <span className="text-navyBlue">n</span>exora services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-[100px] px-8 pb-8 hover:shadow-2xl transition duration-300 h-72"
          >
            <div className="w-24 h-24 mb-4 bg-navyBlue rounded-full flex items-center text-center justify-center border-[15px] border-[#F3F3EE]">
              <Image
                src={service.uploadedIcon || service.icon}
                alt={service.title}
                width={50}
                height={50}
              />
            </div>
            <h3 className="mb-2 text-black text-xl">{service.title}</h3>
            <p className="text-charcoalGray text-xl">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;