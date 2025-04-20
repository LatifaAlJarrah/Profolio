import React from "react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  services?: Service[];
}

const Services = ({ services = [] }: ServicesProps) => {
  return (
    <section className={`font-roboto bg-white`} id="services">
      <h2 className="text-center mb-8 text-3xl sm:text-4xl tracking-widest">
        SERVICES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <div className="w-24 h-24 mb-4 bg-[#58ADEB4D] bg-opacity-30 rounded-full flex items-center text-center justify-center">
              <div
                className={`relative ${
                  service.icon.startsWith("/assets/icons/")
                    ? "w-16 h-16"
                    : "w-20 h-20"
                }`}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className={
                    service.icon.startsWith("/assets/icons/")
                      ? ""
                      : "rounded-full"
                  }
                />
              </div>
            </div>
            <h3 className="mb-2 text-black text-xl sm:text-2xl">
              {service.title}
            </h3>
            <p className="text-[#555555] text-base sm:text-lg">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
