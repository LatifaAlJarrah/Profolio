import React from "react";
import HeroSection from "./HeroSection";
import TemplatesGrid from "./TemplatesGrid";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";
import ClientReviews from "./ClientReviews"

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
