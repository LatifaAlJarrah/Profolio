// "use client";

// import React from "react";
// import Header from "./developer/Header";
// import Home from "@/app/templates/developer/page";
// import Work from "@/app/templates/developer/work/page";
// import Services from "@/app/templates/developer/services/page";
// import Resume from "@/app/templates/developer/resume/page";
// import Contact from "@/app/templates/developer/contact/page";
// import { TemplateData } from "@/app/types/templateData";
// import { defaultTemplateDeveloperData } from "../data/defaultTemplateDeveloperData";

// const defaultTemplateData: TemplateData = {
//     ...defaultTemplateDeveloperData,
// }

// const TemplatePreview = (props: Partial<TemplateData>) => {
//   const templateData: TemplateData = { ...defaultTemplateData, ...props };

//   return (
//     <div className="bg-primarydev text-white font-jetBrainsMono leading-loose px-20 py-12">
//       <div className="mb-12">
//         <Header
//           logoName={templateData.logoName}
//           logoColor={templateData.logoColor}
//           navigationLinks={templateData.navigationLinks}
//           navigationLinksColor={templateData.navigationLinksColor}
//           navbarColor={templateData.navbarColor}
//           hireMeButton={templateData.hireMeButton}
//         />
//       </div>

//       <div className="mb-12">
//         <Home
//           backgroundColor={templateData.backgroundColor}
//           developerHeaderRole={templateData.developerHeaderRole}
//           developerHeadertitle={templateData.developerHeadertitle}
//           developerHeadername={templateData.developerHeadername}
//           developerHeaderdescription={templateData.developerHeaderdescription}
//           developerHeaderImage={templateData.developerHeaderImage}
//           developerHeaderServicesButtonText={
//             templateData.developerHeaderServicesButtonText
//           }
//           developerHeaderServicesButtonColor={
//             templateData.developerHeaderServicesButtonColor
//           }
//           developerInstagramLink={templateData.developerInstagramLink}
//           developerLinkedinLink={templateData.developerLinkedinLink}
//           developerTwitterLink={templateData.developerTwitterLink}
//           ourAchievements={templateData.ourAchievements}
//         />
//       </div>

//       <div className="mb-12">
//         <Work developerProjects={templateData.developerProjects} />
//       </div>

//       <div className="mb-12">
//         <Services developerServices={templateData.developerServices} />
//       </div>

//       <div className="mb-12">
//         <Resume developerResume={templateData.developerResume} />
//       </div>

//       <div className="mb-12">
//         <Contact
//           developerInfo={templateData.developerInfo}
//           developerContact={templateData.developerContact}
//         />
//       </div>
//     </div>
//   );
// };

// export default TemplatePreview;
"use client";
import React from "react";
import Header from "./developer/Header";
import HomePage from "@/app/templates/developer/page";
import WorkPage from "@/app/templates/developer/work/page";
import ServicesPage from "@/app/templates/developer/services/page";
import ResumePage from "@/app/templates/developer/resume/page";
import ContactPage from "@/app/templates/developer/contact/page";
import { defaultTemplateDeveloperData } from "../data/defaultTemplateDeveloperData";

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

export default TemplatePreview;