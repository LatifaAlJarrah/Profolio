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
    link: "/assets/cover-dental.png",
  },
  {
    name: "Programmer Website",
    Component: Programmer,
    link: "/assets/cover-programmer.png",
  },
  {
    name: "StartUp Company Website",
    Component: StartUpCompany,
    link: "/assets/cover-company.png",
  },
  {
    name: "software developer website",
    Component: Layout,
    link: "/assets/developer-cover.png",
  },
  {
    name: "software developer website",
    Component: Layout,
    link: "/assets/developer-cover.png",
  },
  {
    name: "software developer website",
    Component: Layout,
    link: "/assets/developer-cover.png",
  },
  {
    name: "software developer website",
    Component: Layout,
    link: "/assets/developer-cover.png",
  },
];
