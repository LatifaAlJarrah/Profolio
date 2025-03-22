"use client";
import { usePathname } from "next/navigation";

import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isTemplatePage =
    pathname.startsWith("/templates/") ||
    pathname.startsWith("/controltemplate");

  return (
    <html lang="en">
      <body>
        {!isTemplatePage && <Navbar />}
        <main>{children}</main>
        {!isTemplatePage && <Footer />}
      </body>
    </html>
  );
}
