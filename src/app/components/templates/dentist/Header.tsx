// import React from "react";
// import Image from "next/image";
// import { BackgroundDentelle } from "@/app/assets/images";

// import ContactUs from "./ContactUs";
// const Header = () => {
//   return (
//     <header
//       className={`font-namdhinggo relative min-h-screen flex flex-col items-start justify-center text-center px-8 lg:pl-16 w-full sm:h-auto`}
//       id="home"
//     >
//       <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent -z-10"></div>
//       <Image
//         // src={source}
//         src={BackgroundDentelle}
//         alt="Hero"
//         fill
//         priority
//         className="absolute top-0 left-0 -z-10 object-[70%_center] object-cover"
//       />
//       <div className="lg:w-1/2 md:text-justify">
//         <p className="text-5xl text-white mb-4">
//           Because Every Smile Tells A Story, We&apos;re Here To Help Yours Shine
//           Brighter Than Ever With Expert Personalized
//         </p>
//         <p className="text-6xl text-sky-600 mb-4">Dental care!</p>
//         <p className="text-xl text-[#828282]">
//           Contact us now to book your appointment and experience our premium
//           service.
//         </p>
//       </div>
//       <ContactUs />
//     </header>
//   );
// };

// export default Header;
import React from "react";
import Image from "next/image";
import ContactUs from "./ContactUs";

interface HeaderProps {
  title?: string;
  description?: string;
  headerImage?: string;
  textColor?: string;
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
  title = "Because Every Smile Tells A Story, We're Here To Help Yours Shine Brighter Than Ever With Expert Personalized",
  description = "Contact us now to book your appointment and experience our premium service.",
  headerImage,
  textColor = "#FFFFFF",
  contactBookingText,
  contactInstagramName,
  contactInstagramLink,
  contactFacebookName,
  contactFacebookLink,
  contactPhone,
  contactEmail,
  contactLocation = "BrightSmile Dental Clinic",
}: HeaderProps) => {
  return (
    <header
      className="font-namdhinggo relative min-h-screen flex flex-col items-start justify-center text-center px-8 lg:pl-16 w-full sm:h-auto"
      id="home"
    >
      <Image
        src={headerImage || "/default-image.jpg"}
        alt="Hero"
        fill
        priority
        className="absolute top-0 left-0  object-[70%_center] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent "></div>
      <div className="lg:w-1/2 md:text-justify z-0">
        <p
          className="text-4xl sm:text-5xl text-white mb-4"
          style={{ color: textColor }}
        >
          {title}
        </p>
        <p className="text-5xl sm:text-6xl text-sky-600 mb-4">
          {title.split(" ").slice(-2).join(" ")}
        </p>
        <p className="text-lg sm:text-xl text-[#828282]">{description}</p>
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