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
  title,
  doctorName,
  description,
  extraText,
  image,
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
            src={image || "/default-image.jpg"}
            alt="Doctor"
            className="lg:h-[508px] lg:w-[667px] md:h-[520px] md:w-full object-cover rounded-2xl"
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
