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
  developerHeaderServicesButtonText: "See Sevices",
  developerHeaderServicesButtonColor: "#00ff99",
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

  developerProjects: [
    {
      num: "01",
      category: "frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
      image: "/assets/work/thumb1.png",
      live: "",
      github: "",
    },
    {
      num: "02",
      category: "fullstack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
      stack: [
        { name: "Next.js" },
        { name: "Tailwind.css" },
        { name: "Node.js" },
      ],
      image: "/assets/work/thumb2.png",
      live: "",
      github: "",
    },
    {
      num: "03",
      category: "frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
      stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
      image: "/assets/work/thumb3.png",
      live: "",
      github: "",
    },
  ],
};
