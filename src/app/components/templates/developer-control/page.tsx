// "use client";

// import React from "react";
// import Header from "../developer/Header";
// import Home from "@/app/templates/developer/page";
// import Work from "@/app/templates/developer/work/page";
// import Services from "@/app/templates/developer/services/page";
// import Resume from "@/app/templates/developer/resume/page";
// import Contact from "@/app/templates/developer/contact/page";
// import { TemplateData } from "@/app/types/templateData";
// import { defaultTemplateDeveloperData } from "@/app/components/data/defaultTemplateDeveloperData";

// const TemplatePreview = ({
//   backgroundColor,
//   logoName,
//   logoColor,
//   navigationLinks,
//   navigationLinksColor,
//   navbarColor,
//   hireMeButton,
//   developerHeaderRole,
//   developerHeadertitle,
//   developerHeadername,
//   developerHeaderdescription,
//   developerHeaderImage,
//   developerHeaderServicesButtonText,
//   developerHeaderServicesButtonColor,
//   developerInstagramLink,
//   developerLinkedinLink,
//   developerTwitterLink,
//   ourAchievements,
//   developerProjects,
//   developerServices,
//   developerResume,
//   developerInfo,
//   developerContact,
// }: TemplateData) => {
//   return (
//     <div className="bg-primarydev text-white font-jetBrainsMono leading-loose px-20 py-12">
//       <div className="mb-12">
//         <Header
//           logoName={logoName}
//           logoColor={logoColor}
//           navigationLinks={navigationLinks}
//           navigationLinksColor={navigationLinksColor}
//           navbarColor={navbarColor}
//           hireMeButton={hireMeButton}
//         />
//       </div>

//       <div className="mb-12">
//         <Home
//           backgroundColor={backgroundColor}
//           developerHeaderRole={developerHeaderRole}
//           developerHeadertitle={developerHeadertitle}
//           developerHeadername={developerHeadername}
//           developerHeaderdescription={developerHeaderdescription}
//           developerHeaderImage={developerHeaderImage}
//           developerHeaderServicesButtonText={developerHeaderServicesButtonText}
//           developerHeaderServicesButtonColor={
//             developerHeaderServicesButtonColor
//           }
//           developerInstagramLink={developerInstagramLink}
//           developerLinkedinLink={developerLinkedinLink}
//           developerTwitterLink={developerTwitterLink}
//           ourAchievements={ourAchievements}
//         />
//       </div>

//       <div className="mb-12">
//         <Work developerProjects={developerProjects} />
//       </div>

//       <div className="mb-12">
//         <Services developerServices={developerServices} />
//       </div>

//       <div className="mb-12">
//         <Resume developerResume={developerResume} />
//       </div>

//       <div className="mb-12">
//         <Contact
//           developerInfo={developerInfo}
//           developerContact={developerContact}
//         />
//       </div>
//     </div>
//   );
// };

// export default function DeveloperControlPage() {
//   return <TemplatePreview {...defaultTemplateDeveloperData} />;
// }
"use client";
import React from "react";
import Header from "../developer/Header";
import HomePage from "@/app/templates/developer/page";
import WorkPage from "@/app/templates/developer/work/page";
import ServicesPage from "@/app/templates/developer/services/page";
import ResumePage from "@/app/templates/developer/resume/page";
import ContactPage from "@/app/templates/developer/contact/page";
// import { TemplateData } from "@/app/types/templateData";
import { defaultTemplateDeveloperData } from "@/app/components/data/defaultTemplateDeveloperData";

const TemplatePreview = () => {
  return (
    <div className="bg-primarydev text-white font-jetBrainsMono leading-loose px-20 py-12">
      <div className="mb-12">
        <Header
          logoName={defaultTemplateDeveloperData.logoName}
          logoColor={defaultTemplateDeveloperData.logoColor}
          navigationLinks={defaultTemplateDeveloperData.navigationLinks}
          navigationLinksColor={
            defaultTemplateDeveloperData.navigationLinksColor
          }
          navbarColor={defaultTemplateDeveloperData.navbarColor}
          hireMeButton={defaultTemplateDeveloperData.hireMeButton}
        />
      </div>

      <div className="mb-12">
        <HomePage />
      </div>

      <div className="mb-12">
        <WorkPage />
      </div>

      <div className="mb-12">
        <ServicesPage />
      </div>

      <div className="mb-12">
        <ResumePage />
      </div>

      <div className="mb-12">
        <ContactPage />
      </div>
    </div>
  );
};

export default function DeveloperControlPage() {
  return <TemplatePreview />;
}