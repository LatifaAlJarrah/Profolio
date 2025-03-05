import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function ContactUs() {
  return (
    <section
      className={`${roboto.className}bg-black bg-opacity-20 text-white py-16 px-6 md:px-16`}
    >
      <h2 className="text-4xl text-center tracking-widest mb-12">CONTACT US</h2>

      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-5 bg-blue-50">
        <div className="flex flex-col items-center lg:w-1/2">
          <p className="text-gray-400">Social Media</p>
          <div className="flex lg:flex-row items-center justify-around space-x-4 w-full lg:mt-14 md:mt-6 md:flex-col md:gap-8">
            <div className="flex items-center space-x-2 text-gray-300">
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
            <div className="flex items-center space-x-2 text-gray-300">
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
        </div>

        <div className="hidden md:block h-36 w-[1px] bg-lightGrayShade2"></div>

        <div className="flex flex-col items-center lg:w-1/2 bg-blue-50">
          <p className="text-gray-400">For Delivery</p>
          <div className="flex lg:flex-row items-center justify-around space-x-4 w-full lg:mt-14 md:mt-6 md:flex-col md:gap-3">
            <div className="flex items-center space-x-2 text-gray-300">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-5 h-5 text-yellow"
                />
              </Link>
              <span>+1 323 9587458</span>
            </div>
            <p className=" text-gray-300">OR</p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-5 h-5 text-yellow"
                />
              </Link>
              <span>+1 323 2548974</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
