import React from "react";

import ResturantNavbar from "./ResturantNavbar";
import AboutResturant from "./AboutResturant";
import ResturantHeader from "./ResturantHeader";
import OurMenu from "./OurMenu";
import RandomlyChef from "./RandomlyChef";

const Resturant = () => {
  return (
    <>
      <ResturantNavbar />
      <ResturantHeader />
      <AboutResturant />
      <OurMenu />
      <RandomlyChef />
    </>
  );
};

export default Resturant;
