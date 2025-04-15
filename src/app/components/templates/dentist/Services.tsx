// import React from "react";
// import Image from "next/image";

// import {
//   Crown,
//   Equipment,
//   Implant,
//   Mouth,
//   Orthodontic,
//   Trainer,
//   Veneers,
//   Teeth,
// } from "@/app/assets/icons";

// const services = [
//   {
//     title: "Teeth Whitening",
//     description: "Removes stains and brightens teeth for a radiant smile.",
//     icon: Teeth,
//   },
//   {
//     title: "Veneers & Lumineers",
//     description: "Thin shells placed on teeth to improve color and shape.",
//     icon: Veneers,
//   },
//   {
//     title: "Tooth-Colored Fillings",
//     description: "Restores damaged teeth with natural-looking fillings.",
//     icon: Equipment,
//   },
//   {
//     title: "Cosmetic Crowns & Bridges",
//     description:
//       "Covers damaged or treated teeth for protection and aesthetics.",
//     icon: Crown,
//   },
//   {
//     title: "Tooth Reshaping",
//     description: "Adjusts tooth size or shape for a more balanced look.",
//     icon: Mouth,
//   },
//   {
//     title: "Dental Implants",
//     description: "Replaces missing teeth with natural-looking implants.",
//     icon: Implant,
//   },
//   {
//     title: "Clear Aligners (Invisalign)",
//     description: "Straightens teeth discreetly without metal braces.",
//     icon: Trainer,
//   },
//   {
//     title: "Hollywood Smile",
//     description:
//       "A complete smile makeover using a combination of cosmetic treatments.",
//     icon: Orthodontic,
//   },
// ];

// const Services = () => {
//   return (
//     <section className={`font-roboto bg-white`} id="services">
//       <h2 className="text-center mb-8 text-4xl tracking-widest">SERVICES</h2>

//       {/* Grid layout for services */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
//           >
//             <div className="w-20 h-20 mb-4 bg-[#58ADEB4D] bg-opacity-30 rounded-full flex items-center text-center justify-center">
//               <Image
//                 src={service.icon}
//                 alt={service.title}
//                 width={60}
//                 height={60}
//               />
//             </div>
//             <h3 className="mb-2 text-black text-2xl">{service.title}</h3>
//             <p className="text-[#555555] text-lg">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
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

const Services = ({
  services = [
    {
      title: "Teeth Whitening",
      description: "Removes stains and brightens teeth for a radiant smile.",
      icon: "/assets/icons/Teeth.png",
    },
    {
      title: "Veneers & Lumineers",
      description: "Thin shells placed on teeth to improve color and shape.",
      icon: "/assets/icons/Veneers.png",
    },
    {
      title: "Tooth-Colored Fillings",
      description: "Restores damaged teeth with natural-looking fillings.",
      icon: "/assets/icons/Equipment.png",
    },
    {
      title: "Cosmetic Crowns & Bridges",
      description:
        "Covers damaged or treated teeth for protection and aesthetics.",
      icon: "/assets/icons/Crown.png",
    },
    {
      title: "Tooth Reshaping",
      description: "Adjusts tooth size or shape for a more balanced look.",
      icon: "/assets/icons/Mouth.png",
    },
    {
      title: "Dental Implants",
      description: "Replaces missing teeth with natural-looking implants.",
      icon: "/assets/icons/Implant.png",
    },
    {
      title: "Clear Aligners (Invisalign)",
      description: "Straightens teeth discreetly without metal braces.",
      icon: "/assets/icons/Trainer.png",
    },
    {
      title: "Hollywood Smile",
      description:
        "A complete smile makeover using a combination of cosmetic treatments.",
      icon: "/assets/icons/Orthodontic.png",
    },
  ],
}: ServicesProps) => {
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
            <div className="w-20 h-20 mb-4 bg-[#58ADEB4D] bg-opacity-30 rounded-full flex items-center text-center justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
              />
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