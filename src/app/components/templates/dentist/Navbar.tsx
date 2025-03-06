import React from "react";

import NavbarList from "./NavbarList";
import DentistLogo from "./DentistLogo";

export default function Nabvbar() {
  return (
    <nav
      className="w-full bg-white flex items-center z-50 shadow-lg px-16"
    >
      <DentistLogo />
      <NavbarList />
    </nav>
  );
}
