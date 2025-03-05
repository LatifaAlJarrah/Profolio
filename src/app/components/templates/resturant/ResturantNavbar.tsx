import React from "react";

import NavbarList from "./NavbarList";
import ResturantLogo from "./ResturantLogo";

export default function ResturantNabvbar() {
  return (
    <nav
      // className="fixed w-full bg-black bg-opacity-20 py-4 px-6 flex justify-between items-center z-50"
      className="w-full bg-black bg-opacity-20 py-4 px-6 flex justify-between items-center z-50"
    >
      <ResturantLogo />
      <NavbarList />
    </nav>
  );
}
