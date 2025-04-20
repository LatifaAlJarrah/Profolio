import React from "react";
import Image from "next/image";
import ContactUs from "./ContactUs";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  description?: string;
  headerImage?: string;
  subtitleTextColor?: string;
  textColorTitle?: string;
  textColorDescription?: string;
  contactBookingText?: string;
  contactInstagramName?: string;
  contactInstagramLink?: string;
  contactFacebookName?: string;
  contactFacebookLink?: string;
  contactPhone?: string;
  contactEmail?: string;
  contactLocation?: string;
}

const Header = ({
  title,
  subtitle,
  textColorTitle,
  description,
  headerImage,
  subtitleTextColor,
  textColorDescription,
  contactBookingText,
  contactInstagramName,
  contactInstagramLink,
  contactFacebookName,
  contactFacebookLink,
  contactPhone,
  contactEmail,
  contactLocation,
}: HeaderProps) => {
  return (
    <header
      className="font-namdhinggo relative min-h-screen flex flex-col items-start justify-center text-center px-8 lg:pl-16 w-full sm:h-auto"
      id="home"
    >
      <Image
        src={headerImage || "/assets/images/dentist/backgroundDent.png"}
        alt="Hero"
        fill
        priority
        className="absolute top-0 left-0  object-[70%_center] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent"></div>
      <div className="lg:w-1/2 md:text-justify z-0">
        <h2
          className="text-4xl sm:text-5xl text-white mb-4"
          style={{ color: subtitleTextColor }}
        >
          {subtitle}
        </h2>
        <h1
          className="text-5xl sm:text-6xl text-sky-600 mb-4"
          style={{ color: textColorTitle }}
        >
          {title}
        </h1>
        <p
          className="text-lg sm:text-xl text-[#828282]"
          style={{ color: textColorDescription }}
        >
          {description}
        </p>
      </div>
      <ContactUs
        bookingText={contactBookingText}
        instagramName={contactInstagramName}
        instagramLink={contactInstagramLink}
        facebookName={contactFacebookName}
        facebookLink={contactFacebookLink}
        phone={contactPhone}
        email={contactEmail}
        location={contactLocation}
      />
    </header>
  );
};

export default Header;
