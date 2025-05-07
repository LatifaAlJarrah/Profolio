import { TemplateData } from "@/app/types/templateData";

export const defaultTemplateDeveloperData: TemplateData = {
  backgroundColor: "#1c1c22",
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
  developerHeaderRole: "Software Developer",
  developerHeadertitle: "Hello, I'm ",
  developerHeadername: "Luke Coleman",
  developerHeaderdescription:
    "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
  developerHeaderImage: "/assets/photo.png",
  developerHeaderdownloadCVButtonText: "DOWNLOAD CV",
  developerHeaderdownloadCVButtonColor: "#00ff99",
  developerInstagramLink: "https://instagram.com",
  developerTwitterLink: "https://twitter.com",
  developerLinkedinLink: "https://linkedin.com",
  developerSocialIconsColor: "#1c1c22",

  ourAchievements: [
    { number: 12, text: "Years of experience" },
    { number: 26, text: "Projects Completed" },
    { number: 8, text: "Technologies mastered" },
    { number: 500, text: "Code commits" },
  ],
};
