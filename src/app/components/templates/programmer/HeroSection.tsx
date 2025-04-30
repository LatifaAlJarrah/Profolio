// "use client";
// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Programmer } from "@/app/assets/images";
// import { Palanquin_Dark } from "next/font/google";
// const palanquin = Palanquin_Dark({
//   weight: "400",
//   subsets: ["latin"],
// });

// const HeroSection = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start order-2 md:order-none"
//         >
//           <h1
//             className={`${palanquin.className} text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold`}
//           >
//             <span className="bg-gradient-to-r from-[#497D74] to-[#2F4F4F] text-transparent bg-clip-text">
//               Hello, I&apos;m{" "}
//             </span>
//             <br></br>
//             <TypeAnimation
//               sequence={[
//                 "Zayn Haddad",
//                 1000,
//                 "Web Developer",
//                 1000,
//                 "Mobile Developer",
//                 1000,
//                 "UI/UX Designer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//             A full-stack web developer passionate about building interactive and
//             responsive applications, with experience in JavaScript, React,
//             Node.js, PostgreSQL,
//           </p>
//           <div>
//             <Link
//               href="/#contact"
//               className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#497D74] to-[#2F4F4F] text-white"
//             >
//               Hire Me
//             </Link>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0 order-1 md:order-none"
//         >
//           <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src={Programmer}
//               alt="hero image"
//               // width={400}
//               // height={400}
//               priority
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Palanquin_Dark } from "next/font/google";

const palanquin = Palanquin_Dark({
  weight: "400",
  subsets: ["latin"],
});

interface HeroSectionProps {
  programmerHeaderGreeting?: string;
  programmerHeaderName?: string;
  programmerHeaderRoles?: string[];
  programmerHeaderDescription?: string;
  programmerHeaderButtonText?: string;
  programmerHeaderImage?: string;
  fontFamilyClass?: string; // لدعم الخط المخصص من ControlTemplate
}

const HeroSection: React.FC<HeroSectionProps> = ({
  programmerHeaderGreeting = "Hello, I'm",
  programmerHeaderName = "Zayn Haddad",
  programmerHeaderRoles = [
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
  ],
  programmerHeaderDescription = "A full-stack web developer passionate about building interactive and responsive applications, with experience in JavaScript, React, Node.js, PostgreSQL,",
  programmerHeaderButtonText = "Hire Me",
  programmerHeaderImage = "/assets/images/programmer.png",
  fontFamilyClass,
}) => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start order-2 md:order-none"
        >
          <h1
            className={`${
              fontFamilyClass || palanquin.className
            } text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold`}
          >
            <span className="bg-gradient-to-r from-[#497D74] to-[#2F4F4F] text-transparent bg-clip-text">
              {programmerHeaderGreeting}{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                programmerHeaderName,
                1000,
                ...programmerHeaderRoles.flatMap((role) => [role, 1000]),
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {programmerHeaderDescription}
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#497D74] to-[#2F4F4F] text-white"
            >
              {programmerHeaderButtonText}
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 order-1 md:order-none"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={programmerHeaderImage}
              alt="hero image"
              width={400}
              height={400}
              priority
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-s-lg rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;