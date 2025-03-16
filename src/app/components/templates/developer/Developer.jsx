import React from "react";

import Header from "./Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Services from "./Services";

const Developer = ({ children }) => {
  return (
    <div className="font-jetBrainsMono bg-primarydev text-white leading-loose">
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </div>
  );
};

export default Developer;
