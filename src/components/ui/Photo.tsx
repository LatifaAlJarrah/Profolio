"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PhotoProps {
  imageSrc?: string;
}

const Photo = ({imageSrc = "/assets/photo.png"}: PhotoProps) => {
  return (
    // <div className="w-full h-full relative">
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeOut" },
          }}
          // className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-lighten"
        >
          <Image
            src={imageSrc}
            alt="Developer Photo"
            fill
            priority
            quality={100}
            className="object-contain"
          />
        </motion.div>
        {/* circule*/}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
