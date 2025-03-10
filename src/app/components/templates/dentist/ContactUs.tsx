import React from "react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

const ContactUs = () => {
  return (
    <section className="absolute top-[87%] left-1/2 transform -translate-x-1/2 shadow-lg rounded-lg p-4 w-[90%] z-10 bg-[#F6FBFF]">
      <div
        className={`${roboto.className} flex flex-col lg:flex-row justify-between items-center text-center px-5 space-y-5`}
      >
        <div>
          <p className={`text-black lg:text-2xl`}>To book an appointment</p>
        </div>

        <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>
        <div className=" block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>

        <div className="flex lg:flex-col md:flex-row sm:flex-row gap-8">
          <div className="flex items-center space-x-2">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6 text-red-300"
              />
            </Link>
            <span>Instagram Name</span>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-6 h-6 text-blue-500"
              />
            </Link>
            <span>Facebook Name</span>
          </div>
        </div>
        <div className=" block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>

        <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>

        <div className="flex lg:flex-col md:flex-row sm:flex-row gap-8">
          <div className="flex items-center space-x-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="w-5 h-5 text-[#555555]"
              />
            </Link>
            <span className="underline">(123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-5 h-5 text-[#555555]"
              />
            </Link>
            <span className="underline">dr.williams@brightsmiledental.com</span>
          </div>
        </div>

        <div className=" block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>

        <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>

        <div className="flex items-center space-x-2">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-5 h-5 text-red-700"
            />
          </Link>
          <span className="font-bold">location:</span>
          <span>BrightSmile Dental Clinic</span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
