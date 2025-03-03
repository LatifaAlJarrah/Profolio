// components/Navbar.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Image from "next/image";

import { Backword, Forward } from "@assets/icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-8 bg-gray-100">
      <div>
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6 text-black" />
      </div>
      <div className="flex space-x-3">
        <Link href="">
          <Image src={Backword} alt="backword" className="w-6 h-6" />
        </Link>
        <Link href="">
          <Image src={Forward} alt="forward" className="w-6 h-6" />
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <button className="text-primary bg-transparent w-[123px] h-[35px] border border-primary rounded-lg text-lg border-none hover:bg-primary hover:text-white">
          Save
        </button>
        <button className="bg-primary text-white  w-[123px] h-[35px] border border-primary rounded-lg text-lg">
          Publish
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
