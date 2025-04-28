import { TemplateData } from "@/app/types/templateData";

export const defaultTemplateCompanyData: TemplateData = {
  navbarColor: "#FFFFFF",
  fontFamily: "Roboto",
  logoName: "Nexora",
  logoColor: "#000000",
  navigationLinks: [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Team", link: "#team" },
    { name: "Contact", link: "#contact" },
  ],
  navigationLinksColor: "#000000",
  titleTextColor: "#ffffff",
  buttonColor: "#27445D",
  // يمكنك إضافة المزيد من القيم الافتراضية للأقسام الأخرى
  headerTitle: "Innovative Programming and AI for Smarter Marketing",
  headerTagline:
    "We provide tailored solutions to help businesses leverage advanced programming and smart technologies to maximize their marketing potential",
};
