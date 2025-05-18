import Header from "@/app/components/templates/developer/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { defaultTemplateDeveloperData } from "@/app/components/data/defaultTemplateDeveloperData";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {
    navbarColor,
    logoName,
    logoColor,
    navigationLinks,
    navigationLinksColor,
    fontFamily: fontFamilyClass,
    hireMeButton,
  } = defaultTemplateDeveloperData;

  return (
    <div
      className="bg-primarydev text-white font-jetBrainsMono leading-loose "
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