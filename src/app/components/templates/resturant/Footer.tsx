import React from "react";

import NavbarList from "./NavbarList";
import ResturantLogo from "./ResturantLogo";

const Footer = () => {
  const className = "space-x-4 sm:items-end md:items-center flex justify-around sm:flex-col sm:space-y-4";

  return (
    <footer className="bg-black text-white py-4 px-12 text-center">
      <div className="flex items-center gap-x-3">
        <div className="flex flex-col sm:w-1/2 md:w-1/3 text-start space-y-2">
          <ResturantLogo />
          <p>
            upscale restaurant in Los Angeles offering distinctive French dishes
            that blend traditional and modern flavors to provide an exceptional
            dining experience.
          </p>
        </div>
        <div className="sm:w-1/2 md:w-2/3">
          <NavbarList className={className} />
        </div>
      </div>

      <div className="border border-white my-4"></div>
      <p className="mt-4 text-sm">&copy; 2025 Épicure. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
