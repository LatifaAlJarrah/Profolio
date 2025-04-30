import React from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Projects from "./Projects";
import TeamSection from "./TeamSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

import { TemplateData } from "@/app/types/templateData";

interface StartUpCompanyProps extends TemplateData {
  fontFamilyClass?: string;
}
const StartUpCompany: React.FC<StartUpCompanyProps> = ({
  fontFamilyClass,
  navbarColor,
  fontFamily,
  logoName,
  logoColor,
  logoIcon,
  navigationLinks,
  navigationLinksColor,
  buttonColor,
  headerTitle,
  headerTagline,
  headerImage,
  titleTextColor,
  descriptionTextColor,
  aboutTitle,
  aboutTagline,
  aboutDescription,
  aboutImage,
  aboutButtonColor,
  ourAchievements,
  services,
  projects,
  teamMembers,
  contactBookingText,
  contactInstagramLink,
  contactFacebookLink,
  contactPhone,
  contactEmail,
  contactLocation,
  openTime,
  contactEmailLabel,
  contactSubjectLabel,
  contactMessageLabel,
  contactEmailPlaceholder,
  contactSubjectPlaceholder,
  contactMessagePlaceholder,
  contactSubmitButtonText,
}) => {
  return (
    <main
      className={`grid grid-cols-12 ${fontFamilyClass}`}
      style={{ fontFamily }}
    >
      <div className="col-span-12 ">
        <Header
          navbarColor={navbarColor}
          fontFamily={fontFamily}
          logoName={logoName}
          logoColor={logoColor}
          logoIcon={logoIcon}
          navigationLinks={navigationLinks}
          navigationLinksColor={navigationLinksColor}
          buttonColor={buttonColor}
          headerTitle={headerTitle}
          headerTagline={headerTagline}
          headerImage={headerImage}
          titleTextColor={titleTextColor}
          descriptionTextColor={descriptionTextColor}
        />
        <AboutUs
          aboutTitle={aboutTitle}
          aboutTagline={aboutTagline}
          aboutDescription={aboutDescription}
          aboutImage={aboutImage}
          aboutButtonColor={aboutButtonColor}
          ourAchievements={ourAchievements}
        />
        <Services services={services} />
        <Projects projects={projects} />
        <TeamSection teamMembers={teamMembers} />
        <ContactSection
          contactBookingText={contactBookingText}
          contactInstagramLink={contactInstagramLink}
          contactFacebookLink={contactFacebookLink}
          contactPhone={contactPhone}
          contactEmail={contactEmail}
          contactLocation={contactLocation}
          openTime={openTime}
          contactEmailLabel={contactEmailLabel}
          contactSubjectLabel={contactSubjectLabel}
          contactMessageLabel={contactMessageLabel}
          contactEmailPlaceholder={contactEmailPlaceholder}
          contactSubjectPlaceholder={contactSubjectPlaceholder}
          contactMessagePlaceholder={contactMessagePlaceholder}
          contactSubmitButtonText={contactSubmitButtonText}
        />
        <Footer logoName={logoName} logoColor={logoColor} logoIcon={logoIcon} />
      </div>
    </main>
  );
};

export default StartUpCompany;
