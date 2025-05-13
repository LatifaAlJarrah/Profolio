import Resturant from "../templates/resturant/Resturant";
import Home from "../templates/dentist/Home";
import StartUpCompany from "../templates/company/StartUpCompany";
import Programmer from "../templates/programmer/Home";
import TemplatePreview from "../templates/TemplatePreview";

export const templates = [
  {
    title: "Restaurant Website",
    name: "restaurant",
    Component: Resturant,
    link: "/assets/resturant-cover.png",
  },
  {
    title: "Dentist Website",
    name: "dentist",
    Component: Home,
    link: "/assets/dental-cover.png",
  },
  {
    title: "Programmer Website",
    name: "programmer",
    Component: Programmer,
    link: "/assets/programmer-cover.png",
  },
  {
    title: "Company Website",
    name: "company",
    Component: StartUpCompany,
    link: "/assets/company-cover.png",
  },
  {
    title: "Software Developer Website",
    name: "developer",
    Component: TemplatePreview,
    link: "/assets/developer-cover.png",
  },
];