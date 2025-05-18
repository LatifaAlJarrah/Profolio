// src/app/components/data/defaultTemplateDeveloperData.ts
import { TemplateData } from "@/app/types/templateData";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
export const defaultTemplateDeveloperData: TemplateData = {
  backgroundColor: "#1c1c22",
  navbarColor: "#1c1c22",
  fontFamily: "font-jetBrainsMono",
  logoName: "Luke",
  logoColor: "#ffffff",
  navigationLinks: [
    { name: "home", link: "#home" },
    { name: "work", link: "#work" },
    { name: "services", link: "#services" },
    { name: "resume", link: "#resume" },
    { name: "contact", link: "#contact" },
  ],
  navigationLinksColor: "#ffffff",
  hireMeButton: [
    { text: "Hire Me", path: "#contact", color: "#00ff99" },
  ],
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
  developerServices: [
    {
      num: "01",
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,",
      href: "",
    },
    {
      num: "02",
      title: "Ux/Ui Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,",
      href: "",
    },
    {
      num: "03",
      title: "Logo Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,",
      href: "",
    },
    {
      num: "04",
      title: "SEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,",
      href: "",
    },
  ],

  developerResume: {
    about: {
      title: "About Me",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
      info: [
        {
          fieldName: "Name",
          fieldValue: "Luke Coleman",
        },
        {
          fieldName: "Phone",
          fieldValue: "(+40 321 568 985)",
        },
        {
          fieldName: "Experience",
          fieldValue: "12+ Years",
        },
        {
          fieldName: "Skype",
          fieldValue: "luke.01",
        },
        {
          fieldName: "Nationality",
          fieldValue: "Palestinian",
        },
        {
          fieldName: "Email",
          fieldValue: "luke.01@gmail.com",
        },
        {
          fieldName: "Freelance",
          fieldValue: "Available",
        },
        {
          fieldName: "Languages",
          fieldValue: "English, Arabic",
        },
      ],
    },

    experience: {
      icon: "/assets/resume/badge.svg",
      title: "My Experience",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
      items: [
        {
          company: "Tech Solutions Inc.",
          position: "Full Stack Developer",
          duration: "2022 - present",
        },
        {
          company: "Web Design Studio",
          position: "Front-End Developer Intern",
          duration: "Summer 2021",
        },
        {
          company: "E-commerce StartUp",
          position: "Freelance Web Developer",
          duration: "2021 - 2022",
        },
        {
          company: "Tech Academy",
          position: "Teaching Assistant",
          duration: "2019 - 2020",
        },
        {
          company: "Digital Agency",
          position: "UI/UX Designer",
          duration: "2023 - 2024",
        },
        {
          company: "Software Development Firm",
          position: "Junior Developer",
          duration: "2017 - 2018",
        },
      ],
    },

    education: {
      icon: "/assets/resume/cap.svg",
      title: "My Education",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
      items: [
        {
          institution: "Online Course Platform",
          degree: "Full Stack Web Development Bootcamp",
          duration: "2023",
        },
        {
          institution: "Codecademy",
          degree: "Front-end Track",
          duration: "2022",
        },
        {
          institution: "Online Course",
          degree: "Programming Course",
          duration: "2020 - 2021",
        },
        {
          institution: "Tech Institute",
          degree: "Certified Web",
          duration: "2019",
        },
        {
          institution: "Design School",
          degree: "Diploma in Graphic Design",
          duration: "2018",
        },
        {
          institution: "Community College",
          degree: "Associate Degree in Computer Science",
          duration: "2016 - 2017",
        },
      ],
    },

    skills: {
      title: "My Skills",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
      skillList: [
        {
          name: "Html 5",
          iconType: "component",
          icon: "FaHtml5",
          imageUrl: "",
        },
        { name: "Css 3", iconType: "component", icon: "FaCss3", imageUrl: "" },
        {
          name: "javascript",
          iconType: "component",
          icon: "FaJs",
          imageUrl: "",
        },
        {
          name: "react.js",
          iconType: "component",
          icon: "FaReact",
          imageUrl: "",
        },
        {
          name: "next.js",
          iconType: "component",
          icon: "SiNextdotjs",
          imageUrl: "",
        },
        {
          name: "tailwind.css",
          iconType: "component",
          icon: "SiTailwindcss",
          imageUrl: "",
        },
        {
          name: "node.js",
          iconType: "component",
          icon: "FaNodeJs",
          imageUrl: "",
        },
        { name: "figma", iconType: "component", icon: "FaFigma", imageUrl: "" },
      ],
    },
  },
  developerInfo: [
    {
      icon: FaPhoneAlt,
      title: "Phone",
      description: "(+40) 365 542 856",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      description: "email@gmail.com",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Address",
      description: "Code Corner, Tech Town 25632",
    },
  ],
  developerContact: {
    title: "Let's work together",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
  },
};
