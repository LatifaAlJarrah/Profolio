"use client";
import { useEffect } from "react";

import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Footer from "./Footer";

interface DentistTemplateProps {
  customizations: {
    colors: Record<string, string>;
    texts: Record<string, string>;
    images: Record<string, string>;
  };
  isEditable?: boolean;
}

const Home = ({ customizations, isEditable = false }: DentistTemplateProps) => {
  // Aplicar estilos CSS variables para colores
  useEffect(() => {
    if (isEditable) {
      const root = document.documentElement;
      Object.entries(customizations.colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
      });
    }
  }, [customizations.colors, isEditable]);

  // Destructuring de los datos de personalización para facilitar el acceso
  const { colors, texts, images } = customizations;

  return (
    <main style={{ backgroundColor: colors.background }}>
      <Navbar backgroundColor={colors.Background} />
      <Header
        backgroundColor={colors.heroBackground}
        source={images.hero}
        headline={texts.headline}
        subheading={texts.subheading}
        contactCta={texts.contactCta}
      />
      <AboutMe
        headingColor={colors.headings}
        source={images.doctorProfile}
        doctorName={texts.doctorName}
        doctorTitle={texts.doctorTitle}
        doctorBio={texts.doctorBio}
      />
      <Services />
      <Portfolio />
      <Blog />
      <Footer />
    </main>
  );
};

export default Home;
// "use client";
// import Image from "next/image";
// import { useEffect } from "react";

// interface DentistTemplateProps {
//   customizations: {
//     colors: Record<string, string>;
//     texts: Record<string, string>;
//     images: Record<string, string>;
//   };
//   isEditable?: boolean;
// }

// const DentistTemplate = ({
//   customizations,
//   isEditable = false,
// }: DentistTemplateProps) => {
//   // Aplicar estilos CSS variables para colores
//   useEffect(() => {
//     if (isEditable) {
//       const root = document.documentElement;
//       Object.entries(customizations.colors).forEach(([key, value]) => {
//         root.style.setProperty(`--${key}`, value);
//       });
//     }
//   }, [customizations.colors, isEditable]);

//   // Destructuring de los datos de personalización para facilitar el acceso
//   const { colors, texts, images } = customizations;

//   return (
//     <div
//       className="dentist-template"
//       style={{ backgroundColor: colors.background }}
//     >
//       {/* Navbar */}
//       <nav style={{ backgroundColor: colors.navbar }}>
//         <div className="logo-container">
//           <img
//             src={images.logo || "/placeholder-logo.svg"}
//             alt="Logo"
//             className="logo"
//           />
//           <span className="site-name">Dentelle</span>
//         </div>
//         <ul className="nav-links">
//           <li>Home</li>
//           <li>About Me</li>
//           <li>Services</li>
//           <li>Portfolio</li>
//           <li>Blog</li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <header
//         className="hero-section"
//         style={{ backgroundColor: colors.heroBackground }}
//       >
//         <div className="hero-content">
//           <div className="hero-text">
//             <h1 style={{ color: colors.headings }}>
//               {texts.headline || "Because Every Smile Tells A Story..."}
//             </h1>
//             <h2 style={{ color: colors.headings }}>
//               {texts.subheading || "Dental care!"}
//             </h2>
//             <p style={{ color: colors.text }}>
//               {texts.contactCta ||
//                 "Contact us now to book your appointment and experience our premium service."}
//             </p>
//           </div>
//           <div className="hero-image">
//             <img src={images.hero || "/placeholder-hero.jpg"} alt="Hero" />
//           </div>
//         </div>
//       </header>

//       {/* Booking Section */}
//       <section className="booking-section">
//         <div className="booking-container">
//           <h3>To book an appointment</h3>
//           <div className="contact-info">
//             <div className="contact-item">
//               <span className="icon">📱</span>
//               <span className="contact-text">(123) 456-7890</span>
//             </div>
//             <div className="contact-item">
//               <span className="icon">✉️</span>
//               <span className="contact-text">
//                 dr.williams@brightsmileendental.com
//               </span>
//             </div>
//             <div className="contact-item">
//               <span className="icon">📍</span>
//               <span className="contact-text">BrightSmile Dental Clinic</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Me Section */}
//       <section className="about-section" id="about">
//         <h2 style={{ color: colors.headings }}>ABOUT ME</h2>
//         <div className="about-content">
//           <div className="about-image">
//             <Image
//               fill
//               src={images.doctorProfile || "/placeholder-doctor.jpg"}
//               alt="Doctor"
//             />
//           </div>
//           <div className="about-text">
//             <h3 style={{ color: colors.headings }}>
//               {texts.doctorName || "Dr. Sarah Williams"}
//             </h3>
//             <h4 style={{ color: colors.text }}>
//               {texts.doctorTitle || "Specialist in Cosmetic Dentistry"}
//             </h4>
//             <p style={{ color: colors.text }}>
//               {texts.doctorBio ||
//                 "Dr. Sarah Williams is a specialist in cosmetic dentistry with over 10 years of experience..."}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Editable overlay */}
//       {isEditable && (
//         <div className="editable-overlay">
//           <div className="editable-notice">
//             Editing Mode - Changes will apply in real-time
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DentistTemplate;
