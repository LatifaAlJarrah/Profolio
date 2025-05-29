"use client";

import React from "react";
import HeroSection from "./components/home/HeroSection";
import TemplatesGrid from "./components/home/TemplatesGrid";
import WhyUs from "./components/home/WhyUs";
import HowItWorks from "./components/home/HowItWorks";
import ClientReviews from "./components/home/ClientReviews";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TemplatesGrid />
      <WhyUs />
      <HowItWorks />
      <ClientReviews />
    </main>
  );
}
