import React from "react";

import { Namdhinggo } from "next/font/google";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const namdhinggo = Namdhinggo({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div
      className={`${namdhinggo.className} lg:w-1/2 md:w-full flex flex-col lg:items-start md:items-center text-center md:text-left pt-28 pl-24`}
    >
      <p className="text-5xl text-white mb-4">
        Because Every Smile Tells A Story, We&apos;re Here To Help Yours Shine
        Brighter Than Ever With Expert Personalized
      </p>
      <p className="text-6xl text-sky-600 mb-4">Dental care!</p>
      <p className="text-xl text-[#828282]">
        Contact us now to book your appointment and experience our premium
        service.
      </p>
      {/* <FontAwesomeIcon icon={faArrowDown} /> */}
    </div>
  );
};

export default Header;
