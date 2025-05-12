"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useError } from "@/app/context/ErrorContext";
import ErrorBox from "../ui/ErrorBox";
import React from "react";
import HeroSection from "./HeroSection";
import TemplatesGrid from "./TemplatesGrid";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";
import ClientReviews from "./ClientReviews"

export default function Home() {
  const { errorMessage, setErrorMessage } = useError();
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get("error");
    if (errorParam === "email_exists") {
      setErrorMessage(
        "الإيميل موجود بالفعل، يرجى تسجيل الدخول باستخدام المزود الصحيح."
      );
      router.replace("/");
    }
  }, [router, setErrorMessage]);

  return (
    <main>
      {errorMessage && (
        <ErrorBox
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}

      <HeroSection />
      <TemplatesGrid />
      <WhyUs />
      <HowItWorks />
      <ClientReviews />
    </main>
  );
}
