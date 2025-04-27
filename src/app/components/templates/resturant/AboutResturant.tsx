"use client"
import React from "react";
import Image from "next/image";
import { Steak } from "@/app/assets/images";
import ResturantLogo from "./ResturantLogo";
import { TemplateData } from "@/app/types/templateData";

interface AboutResturantProps extends TemplateData {
  customProperty?: string;
  anotherProperty?: number;
}

const AboutResturant: React.FC<AboutResturantProps> = ({
  aboutTitle,
  aboutTagline,
  aboutDescription,
  visitText,
  aboutImage,
  titleTextColor,
  buttonColor,
  contactLocation,
}) => {
  return (
    <section
      className={`text-white py-16 text-center px-10 lg:px-0`}
      id="about"
    >
      <h2
        className="text-4xl tracking-widest"
        style={{ color: titleTextColor || "#ffffff" }}
      >
        {aboutTitle || "ABOUT US"}
      </h2>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8 px-6">
        <div className="w-[447px] h-[436px] rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full bg-black opacity-50"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.2987220499135!2d34.45187872454915!3d31.515954474216052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f3bb1e40d9d%3A0x27047169d4fe2014!2z2LHYr9mH2Kkg2YXYt9in2LnZhSDZg9in2KjZitiq2KfZhCDZhdmI2YQ!5e0!3m2!1sar!2s!4v1741084987457!5m2!1sar!2s"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-[447px] h-[436px] flex flex-col items-center justify-center text-center">
          <p
            className="text-3xl"
            style={{ color: titleTextColor || "#ffffff" }}
          >
            {aboutTagline || "Experience Authentic Flavors"}
          </p>

          <div className="text-3xl flex gap-1 justify-center mt-4">
            <p style={{ color: titleTextColor || "#ffffff" }}>
              {aboutDescription || "At"}
            </p>
            <ResturantLogo />
            <p style={{ color: titleTextColor || "#ffffff" }}>!</p>
          </div>

          <p
            className="mt-5 text-3xl"
            style={{ color: titleTextColor || "#ffffff" }}
          >
            {visitText ||
              `Visit Us At ${
                contactLocation || "Los Angeles"
              } Or Explore Our Menu Online.`}
          </p>

          <button
            className="mt-12 px-6 py-2 rounded-lg w-full border transition hover:text-black"
            style={{
              borderColor: buttonColor || "#ffcc00",
              color: buttonColor || "#ffcc00",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = buttonColor || "#ffcc00";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = buttonColor || "#ffcc00";
            }}
          >
            Menu
          </button>
        </div>

        <div className="rounded-lg">
          <Image
            src={aboutImage || Steak}
            alt="lamb-steak-served-with-potato-fries-melted-cheese"
            width={447}
            height={436}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutResturant;