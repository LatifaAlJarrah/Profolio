// import React from "react";

// import Image from "next/image";
// import { DrSarah } from "@/app/assets/images";

// export default function AboutMe() {
//   return (
//     <section
//       className={`font-roboto text-black text-center mt-40 mb-12 bg-[#FAFAFA]`}
//       id="about"
//     >
//       <h2 className={` text-4xl tracking-widest mt-4`}>ABOUT ME</h2>
//       <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8 px-6 text-start">
//         <div className="w-full md:w-1/2">
//           <Image
//             src={DrSarah}
//             alt="Doctor"
//             className="lg:h-[508px] lg:w-[667px] md:h-[520px] md:w-full"
//           />
//         </div>
//         <div className="w-full md:w-1/2">
//           <p className="lg:text-3xl md:text-xl font-semibold mb-6">
//           Dr. Sarah Williams
//           </p>
//           <p className="lg:text-2xl md:text-lg mb-4 text-justify">
//             Dr. Sarah Williams is a specialist in cosmetic dentistry with over
//             10 years of experience. She is passionate about creating beautiful,
//             natural smiles through teeth whitening, veneers, and smile
//             makeovers. With a patient-centered approach and the latest
//             technology, Dr. Williams ensures comfortable treatments and
//             long-lasting results. She believes that a confident smile can
//             transform lives and is dedicated to helping her patients achieve
//             their dream smiles.
//           </p>
//           <p className="text-[#555555] text-xl mb-6">
//             Beautiful smile is not just about appearance
//           </p>
//           <button className="lg:text-xl md:text-md bg-[#58ADEB] rounded-xl text-center text-white w-1/2 py-2">
//             Call Me Now!
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import Image from "next/image";

interface AboutMeProps {
  title?: string;
  doctorName?: string;
  description?: string;
  extraText?: string;
  image?: string;
  buttonColor?: string;
}

export default function AboutMe({
  title = "ABOUT ME",
  doctorName = "Dr. Sarah Williams",
  description = "Dr. Sarah Williams is a specialist in cosmetic dentistry with over 10 years of experience. She is passionate about creating beautiful, natural smiles through teeth whitening, veneers, and smile makeovers. With a patient-centered approach and the latest technology, Dr. Williams ensures comfortable treatments and long-lasting results. She believes that a confident smile can transform lives and is dedicated to helping her patients achieve their dream smiles.",
  extraText = "Beautiful smile is not just about appearance",
  image = "/assets/images/DrSarah.jpg",
  buttonColor = "#58ADEB",
}: AboutMeProps) {
  return (
    <section
      className={`font-roboto text-black text-center mt-40 mb-12 bg-[#FAFAFA]`}
      id="about"
    >
      <h2 className={`text-3xl sm:text-4xl tracking-widest mt-4`}>{title}</h2>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8 px-4 sm:px-6">
        <div className="w-full md:w-1/2">
          <Image
            src={image}
            alt="Doctor"
            className="lg:h-[508px] lg:w-[667px] md:h-[520px] md:w-full object-cover"
            width={667}
            height={508}
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="lg:text-3xl md:text-xl font-semibold mb-6">
            {doctorName}
          </p>
          <p className="lg:text-xl md:text-lg mb-4 text-justify">
            {description}
          </p>
          <p className="text-[#555555] text-lg sm:text-xl mb-6">{extraText}</p>
          <button
            className="lg:text-xl md:text-md rounded-xl text-center text-white w-1/2 py-2 sm:w-1/3"
            style={{ backgroundColor: buttonColor }}
          >
            Call Me Now!
          </button>
        </div>
      </div>
    </section>
  );
}