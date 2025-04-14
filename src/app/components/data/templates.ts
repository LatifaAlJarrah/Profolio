import Resturant from "../templates/resturant/Resturant";
import Home from "../templates/dentist/Home";
import StartUpCompany from "../templates/company/StartUpCompany";
import Programmer from "../templates/programmer/Home";
import Layout from "@/app/templates/developer/layout";

export const templates = [
  {
    title: "Restaurant Website",
    name: "Restaurant",
    Component: Resturant,
    link: "/assets/resturant-cover.png",
  },
  {
    name: "Dental Clinic Website",
    Component: Home,
    link: "/assets/dental-cover.png",
  },
  {
    name: "Programmer Website",
    Component: Programmer,
    link: "/assets/programmer-cover.png",
  },
  {
    name: "StartUp Company Website",
    Component: StartUpCompany,
    link: "/assets/company-cover.png",
  },
  {
    name: "Software Developer Website",
    Component: Layout,
    link: "/assets/developer-cover.png",
  },
  {
    name: "Software Developer Website",
    Component: Layout,
    link: "/assets/developer-cover.png",
  },
  {
    name: "Software Developer Website",
    Component: Layout,
    link: "/assets/developer-cover.png",
  },
  {
    name: "software developer website",
    Component: Layout,
    link: "/assets/developer-cover.png",
  },
];


// import React from "react";
// import DentistTemplate from "../templates/dentist/Home";

// // Interfaz para los templates
// export interface Template {
//   name: string;
//   displayName: string;
//   description: string;
//   thumbnail: string;
//   Component: React.ComponentType<any>;
//   defaultColors: Record<string, string>;
//   defaultTexts: Record<string, string>;
//   defaultImages: Record<string, string>;
// }

// // Lista de templates disponibles
// export const templates: Template[] = [
//   {
//     name: "dentist",
//     displayName: "Dental Clinic",
//     description:
//       "A modern template for dental clinics and healthcare providers",
//     thumbnail: "/thumbnails/dentist.jpg",
//     Component: DentistTemplate,
//     defaultColors: {
//       background: "#FFFFFF",
//       heroBackground: "#399BD0",
//       buttons: "#27445D",
//       navbar: "#FAA5CA",
//       text: "#333333",
//       headings: "#222222",
//       footer: "#222222",
//     },
//     defaultTexts: {
//       headline: "Because Every Smile Tells A Story...",
//       subheading: "Dental care!",
//       contactCta:
//         "Contact us now to book your appointment and experience our premium service.",
//       doctorName: "Dr. Sarah Williams",
//       doctorTitle: "Specialist in Cosmetic Dentistry",
//       doctorBio:
//         "Dr. Sarah Williams is a specialist in cosmetic dentistry with over 10 years of experience...",
//     },
//     defaultImages: {
//       logo: "/assets/images/dentist/logo.png",
//       hero: "/assets/images/dentist/backgroundDent.png",
//       doctorProfile: "/images/dentist/doctor.jpg",
//     },
//   },
// ];