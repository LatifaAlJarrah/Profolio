import Resturant from "../templates/resturant/Resturant";
import Home from "../templates/dentist/Home";
import StartUpCompany from "../templates/company/StartUpCompany";
import Programmer from "../templates/programmer/Home";
import Layout from "@/app/templates/developer/layout";

export const templates = [
  {
    title: "Restaurant Website",
    name: "restaurant",
    Component: Resturant,
    link: "/assets/resturant-cover.png",
  },
  {
    name: "dentist",
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