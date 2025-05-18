"use client";
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
  aboutImage,
  titleTextColor,
  buttonColor,
  contactLocation,
  logoName,
  logoColor,
  aboutDescription,
}) => {
  // رابط الخريطة الديناميكي بناءً على contactLocation
  const mapSrc = contactLocation
    ? `https://www.google.com/maps/embed/v1/place?key=AIzaSyAgdHoAGIa4DeSwc4tzFr7ADBdAqgMQyU4&q=${encodeURIComponent(
        contactLocation
      )}`
    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.2987220499135!2d34.45187872454915!3d31.515954474216052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f3bb1e40d9d%3A0x27047169d4fe2014!2z2LHYr9mH2Kkg2YXYt9in2LnZhSDZg9in2KjZitiq2KfZhCDZhdmI2YQ!5e0!3m2!1sar!2s!4v1741084987457!5m2!1sar!2s";

  return (
    <section
      className={`text-white py-16 text-center px-10 lg:px-0`}
      id="about"
    >
      {/* العنوان الرئيسي */}
      <h2
        className="text-5xl tracking-wider font-bold mb-10"
        style={{ color: titleTextColor || "#ffffff" }}
      >
        {aboutTitle || "Discover Our Story"}
      </h2>

      {/* الشبكة التي تحتوي على الخريطة، النصوص، والصورة */}
      <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-10 px-4">
        {/* الخريطة (اختيارية) */}
        {contactLocation && (
          <div className="w-full max-w-[400px] h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full bg-black opacity-80 transition-opacity hover:opacity-100"
              src={mapSrc}
              allowFullScreen
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </div>
        )}

        {/* النصوص والزر */}
        <div className="w-full max-w-[400px] flex flex-col items-center justify-center text-center">
          <p
            className="text-3xl font-light italic mb-4"
            style={{ color: titleTextColor || "#ffffff" }}
          >
            {aboutTagline || "Savor the Art of Culinary Excellence"}
          </p>

          <div className="text-4xl flex gap-2 justify-center items-center mb-6">
            <p style={{ color: titleTextColor || "#ffffff" }}>Welcome to</p>
            <ResturantLogo logoName={logoName} logoColor={logoColor} />
            <p style={{ color: titleTextColor || "#ffffff" }}>!</p>
          </div>

          {/* إضافة aboutDescription */}
          {aboutDescription && (
            <p
              className="text-lg font-light leading-relaxed mb-6"
              style={{ color: titleTextColor || "#ffffff" }}
            >
              {aboutDescription}
            </p>
          )}

          <a
            href="#menu"
            className="px-8 py-3 font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg mt-12 rounded-lg w-full border hover:text-black"
            style={{
              border: `2px solid ${buttonColor || "#ffcc00"}`,
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
            Explore Our Menu
          </a>
        </div>

        {/* الصورة */}
        <div className="w-full max-w-[400px] h-[400px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={aboutImage || Steak}
            alt="Signature dish - Lamb Steak with Potato Fries and Melted Cheese"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutResturant;
