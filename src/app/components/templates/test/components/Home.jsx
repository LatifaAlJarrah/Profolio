import AboutMeMain from "./aboutMeSection/AboutMeMain";
import ContactMeMain from "./contactMeSection/ContactMeMain";
import ExperienceMain from "./experienceSection/ExperienceMain";
import FooterMain from "./footer/FooterMain";
import HeroGradient from "./heroSection/HeroGradient";
import HeroMain from "./heroSection/HeroMain";
import NavbarMain from "./navbar/NavbarMain";
import ProjectsMain from "./projectsSection/ProjectsMain";
import SkillsMain from "./skillsSection/SkillsMain";
import SubSkills from "./skillsSection/SubSkills";
import SubHeroMain from "./subHeroSection/SubHeroMain";

export default function Home() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

