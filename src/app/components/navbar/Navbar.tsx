import React from "react";

import SignUpButton from "../auth/SignUpButton";
import LogInButton from "../auth/LogInButton";
import Logo from "../logo/Logo";
import NavbarList from "../list/NavbarList";

interface NavbarProps {
  type: string;
}

export default function Navbar({type = "nav"}: NavbarProps) {

  return (
    <nav className="flex justify-between py-4 px-12 bg-lightGray">
      <div className="flex justify-between w-1/2 items-center">
        <Logo />
        <NavbarList type={type} />
      </div>
      <div className="flex gap-4">
        <LogInButton />
        <SignUpButton />
      </div>
    </nav>
  );
}
