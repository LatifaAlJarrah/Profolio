import React from "react";
import Link from "next/link";

import ResturantLogo from "./ResturantLogo";
export default function Home() {
  return (
    <div>
      <nav
        // className="fixed w-full bg-black bg-opacity-70 py-4 px-6 flex justify-between items-center z-50"
        className=" w-full bg-black bg-opacity-70 py-4 px-6 flex justify-between items-center z-50"
      >
        <ResturantLogo />
        <ul className="flex space-x-6 text-white text-xl">
          <li>
            <Link href="#" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400">
              Menu
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
