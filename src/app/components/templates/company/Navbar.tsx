import React from "react";
import LogoCompany from "./LogoCompany";
import NavbarList from "./NavbarList";

const Navbar = () => {
  return (
    <nav className="items-center grid grid-cols-11 bg-[#F3F3EE] px-8 rounded-full shadow-md mt-8">
      <div className="col-span-3">
        <LogoCompany />
      </div>
      <div className="col-span-8">
        <NavbarList />
      </div>
    </nav>
  );
};

export default Navbar;
