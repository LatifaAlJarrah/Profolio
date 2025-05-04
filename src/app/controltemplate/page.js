import React from "react";
import { Suspense } from "react";

import ControlTemplate from "../components/controltemplate/ControlTemplate";

export const metadata = {
  title: "Control Template",
};

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ControlTemplate />
    </Suspense>
  );
};

export default page;