import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AchievementsSection from "./AchievementsSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import EmailSection from "./EmailSection";
import Footer from "./Footer";

import { TemplateData } from "@/app/types/templateData";

interface HomeProps extends TemplateData {
  fontFamilyClass?: string;
}

export default function Home({
  fontFamilyClass,
  navbarColor,
  logoName,
  logoColor,
  navigationLinks,
  navigationLinksColor,
  // ourAchievements,
  ...props
}: HomeProps) {
  return (
    <main
      className={`flex min-h-screen flex-col bg-[#121212] px-20 `}
      style={{ fontFamily: fontFamilyClass }}
    >
      <Navbar
        navbarColor={navbarColor}
        logoName={logoName}
        logoColor={logoColor}
        navigationLinks={navigationLinks}
        navigationLinksColor={navigationLinksColor}
      />
      <div className="container mt-24 mx-auto py-4">
        <HeroSection {...props} />
        <AchievementsSection {...props} />
        <AboutSection {...props} />
        <ProjectsSection {...props} />
        <EmailSection {...props} />
      </div>
      <Footer {...props} />
    </main>
  );
}
