import React from "react";
import { TemplateData } from "@/app/types/templateData";
import ResturantNavbar from "./ResturantNavbar";
import AboutResturant from "./AboutResturant";
import ResturantHeader from "./ResturantHeader";
import OurMenu from "./OurMenu";
import RandomlyChef from "./RandomlyChef";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Image from "next/image";
import { ResturantBg } from "@/app/assets/images";

interface ResturantProps extends TemplateData {
  fontFamilyClass?: string;
}

const Resturant: React.FC<ResturantProps> = ({
  fontFamilyClass,
  backgroundOverlayColor,
  backgroundImage,
  titleTextColor,
  buttonColor,
  navbarColor,
  navigationLinks,
  navigationLinksColor,
  headerTitle,
  headerSubtitle,
  headerTagline,
  headerImage,
  aboutTitle,
  aboutTagline,
  aboutDescription,
  visitText,
  aboutImage,
  menuItems,
  chefSpecials,
  contactInstagramName,
  contactInstagramLink,
  contactFacebookName,
  contactFacebookLink,
  contactPhone,
  contactPhone2,
  contactLocation,
  footerDescription,
  footerName,
  logoName,
  logoColor,
}) => {
  return (
    <main
      className={`relative min-h-screen ${fontFamilyClass || ""}`}
      style={{ color: titleTextColor || "#ffffff" }}
    >
      <Image
        src={backgroundImage || ResturantBg}
        alt="Background"
        fill
        className="absolute top-0 left-0 -z-10 object-cover"
        style={{
          filter: `brightness(0.5)`,
          background: backgroundOverlayColor
            ? `${backgroundOverlayColor}50`
            : "rgba(0, 0, 0, 0.5)",
        }}
      />
      <ResturantNavbar
        navbarColor={navbarColor}
        navigationLinks={navigationLinks}
        navigationLinksColor={navigationLinksColor}
        logoName={logoName}
        logoColor={logoColor}
      />
      <ResturantHeader
        headerTitle={headerTitle}
        headerSubtitle={headerSubtitle}
        headerTagline={headerTagline}
        headerImage={headerImage}
        titleTextColor={titleTextColor}
      />
      <AboutResturant
        aboutTitle={aboutTitle}
        aboutTagline={aboutTagline}
        aboutDescription={aboutDescription}
        visitText={visitText}
        aboutImage={aboutImage}
        titleTextColor={titleTextColor}
        buttonColor={buttonColor}
        contactLocation={contactLocation}
        logoName={logoName}
        logoColor={logoColor}
      />
      <OurMenu
        menuItems={menuItems}
        titleTextColor={titleTextColor}
        buttonColor={buttonColor}
      />
      <RandomlyChef
        chefSpecials={chefSpecials}
        titleTextColor={titleTextColor}
        buttonColor={buttonColor}
      />
      <ContactUs
        contactInstagramName={contactInstagramName}
        contactInstagramLink={contactInstagramLink}
        contactFacebookName={contactFacebookName}
        contactFacebookLink={contactFacebookLink}
        contactPhone={contactPhone}
        contactPhone2={contactPhone2}
        titleTextColor={titleTextColor}
        buttonColor={buttonColor}
      />
      <Footer
        footerDescription={footerDescription}
        footerName={footerName}
        titleTextColor={titleTextColor}
        logoName={logoName}
        logoColor={logoColor}
      />
    </main>
  );
};

export default Resturant;