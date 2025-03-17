import Header from "@/app/components/templates/developer/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-primarydev text-white font-jetBrainsMono leading-loose px-20">
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
