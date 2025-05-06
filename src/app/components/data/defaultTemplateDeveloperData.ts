import { TemplateData } from "@/app/types/templateData";

export const defaultTemplateDeveloperData: TemplateData = {
  navbarColor: "#1c1c22",
  fontFamily: "font-jetBrainsMono",
  logoName: "Luke",
  logoColor: "#ffffff",
  navigationLinks: [
    { name: "home", link: "/" },
    { name: "work", link: "/work" },
    { name: "services", link: "/services" },
    { name: "resume", link: "/resume" },
    { name: "contact", link: "/contact" },
  ],
  navigationLinksColor: "#ffffff",
  hireMeButton: {
    text: "Hire Me",
    path: "/template/developer/contact",
    color: "#1c1c22",
  },

  developerHeader: {
    role: "Software Developer",
    title: "Hello, I'm ",
    name: "Luke Coleman",
    description:
      "I excel at crafting elegant digital experiences and I am proficient in various programming Languages and technologies.",
    developerImage: "/assets/photo.png",
    downloadCVButtonText: "BOWNLOAD CV",
    downloadCVButtonPath: "/template/developer",
    downloadCVButtonColor: "#00ff99",
    socialIcons: [
      { name: "Instagram", link: "" },
      { name: "Twitter", link: "" },
      { name: "LinkedIn", link: "" },
    ],
    socialIconsColor: "#1c1c22",
  },
};
