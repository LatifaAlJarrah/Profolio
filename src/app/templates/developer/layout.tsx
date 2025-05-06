// src/app/templates/developer/layout.jsx
import Header from "@/app/components/templates/developer/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

import { TemplateData } from "@/app/types/templateData";

interface LayoutProps extends TemplateData {
  children: React.ReactNode;
  navbarColor?: string;
  logoName?: string;
  logoColor?: string;
  navigationLinks?: Array<{ name: string; link: string }>;
  navigationLinksColor?: string;
  fontFamilyClass?: string;
  hireMeButton?: { text: string; path: string; color: string };
}

export default function Layout({
  children,
  navbarColor,
  logoName,
  logoColor,
  navigationLinks,
  navigationLinksColor,
  fontFamilyClass,
  hireMeButton,
}: LayoutProps) {
  return (
    <div className="bg-primarydev text-white font-jetBrainsMono leading-loose px-20"
    style={{ fontFamily: fontFamilyClass }}
    >
      <Header
        logoName={logoName}
        logoColor={logoColor}
        navigationLinks={navigationLinks}
        navigationLinksColor={navigationLinksColor}
        navbarColor={navbarColor}
        hireMeButton={hireMeButton}
      />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
