// "use client";
// import { Button } from "@/components/ui/button";
// import Photo from "@/components/ui/Photo";
// import Social from "@/components/ui/Social";
// import Stats from "@/components/ui/Stats";

// interface HomeProps {
//   backgroundColor?: string;
//   developerHeaderRole?: string;
//   developerHeadertitle?: string;
//   developerHeadername?: string;
//   developerHeaderdescription?: string;
//   developerHeaderImage?: string;
//   developerHeaderServicesButtonText?: string;
//   developerHeaderServicesButtonColor?: string;
//   developerInstagramLink?: string;
//   developerLinkedinLink?: string;
//   developerTwitterLink?: string;
//   ourAchievements?: Array<{
//     number?: number;
//     text?: string;
//   }>;
// }

// const Home = ({
//   backgroundColor,
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
// }: HomeProps) => {
//   const backgroundStyles = {
//     backgroundColor: backgroundColor || "#1c1c22",
//   };
//   const role = developerHeaderRole || "Software Developer";
//   const title = developerHeadertitle || "Hello, I'm ";
//   const name = developerHeadername || "Luke Coleman";
//   const description =
//     developerHeaderdescription ||
//     "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.";
//   const developerImage = developerHeaderImage || "/assets/photo.png";
//   const servicesButtonText =
//     developerHeaderServicesButtonText || "See Sevices";
//   const servicesButtonColor = developerHeaderServicesButtonColor || "#00ff99";
//   const instagramLink = developerInstagramLink || "https://instagram.com";
//   const linkedinLink = developerLinkedinLink || "https://linkedin.com";
//   const twitterLink = developerTwitterLink || "https://twitter.com";

//   const socialIconColors = {
//     Instagram: "#E1306C",
//     Twitter: "#1DA1F2",
//     LinkedIn: "#0077B5",
//   };

//   const ourAchievementsData = ourAchievements || [
//     { number: 12, text: "Years of experience" },
//     { number: 26, text: "Projects Completed" },
//     { number: 8, text: "Technologies mastered" },
//     { number: 500, text: "Code commits" },
//   ];
//   type SocialMedia = "Instagram" | "Twitter" | "LinkedIn";

//   return (
//     <section className={`h-full`} style={backgroundStyles}>
//       <div className="container mx-auto h-full">
//         <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
//           <div className="text-center xl:text-left order-2 xl:order-none">
//             <span className="text-xl">{role}</span>
//             <h1 className="h1 mb-6">
//               {title} <br /> <span className="text-accent">{name}</span>
//             </h1>
//             <p className="max-w-[500px] mb-9 text-white/80">{description}</p>
//             <div className="flex flex-col xl:flex-row items-center gap-8">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="uppercase flex items-center gap-2"
//                 style={{
//                   borderColor: servicesButtonColor,
//                   color: servicesButtonColor,
//                 }}
//                 asChild
//               >
//                 <a href="#">
//                   <span>{servicesButtonText || "See Services"}</span>
//                 </a>
//               </Button>
//               <div className="mb-8 xl:mb-0">
//                 <Social
//                   containerStyles="flex gap-6"
//                   iconStyles={(iconName) =>
//                     `w-9 h-9 border rounded-full flex justify-center items-center text-base hover:transition-all duration-500 border-[${
//                       socialIconColors[iconName as SocialMedia]
//                     }] text-[${
//                       socialIconColors[iconName as SocialMedia]
//                     }] hover:bg-[${
//                       socialIconColors[iconName as SocialMedia]
//                     }] hover:text-primarydev`
//                   }
//                   instagramLink={instagramLink}
//                   linkedinLink={linkedinLink}
//                   twitterLink={twitterLink}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="order-1 xl:order-none flex justify-center items-center mb-8 xl:mb-0">
//             <Photo imageSrc={developerImage} />
//           </div>
//         </div>
//       </div>
//       <Stats ourAchievements={ourAchievementsData} />
//     </section>
//   );
// };

// export default Home;
"use client";
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { defaultTemplateDeveloperData } from "@/app/components/data/defaultTemplateDeveloperData";

interface HomeProps {
  backgroundColor?: string;
  developerHeaderRole?: string;
  developerHeadertitle?: string;
  developerHeadername?: string;
  developerHeaderdescription?: string;
  developerHeaderImage?: string;
  developerHeaderServicesButtonText?: string;
  developerHeaderServicesButtonColor?: string;
  developerInstagramLink?: string;
  developerLinkedinLink?: string;
  developerTwitterLink?: string;
  ourAchievements?: Array<{
    number?: number;
    text?: string;
  }>;
}

const Home = ({
  backgroundColor,
  developerHeaderRole,
  developerHeadertitle,
  developerHeadername,
  developerHeaderdescription,
  developerHeaderImage,
  developerHeaderServicesButtonText,
  developerHeaderServicesButtonColor,
  developerInstagramLink,
  developerLinkedinLink,
  developerTwitterLink,
  ourAchievements,
}: HomeProps) => {
  const backgroundStyles = {
    backgroundColor: backgroundColor || "#1c1c22",
  };
  const role = developerHeaderRole || "Software Developer";
  const title = developerHeadertitle || "Hello, I'm ";
  const name = developerHeadername || "Luke Coleman";
  const description =
    developerHeaderdescription ||
    "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.";
  const developerImage = developerHeaderImage || "/assets/photo.png";
  const servicesButtonText = developerHeaderServicesButtonText || "See Sevices";
  const servicesButtonColor = developerHeaderServicesButtonColor || "#00ff99";
  const instagramLink = developerInstagramLink || "https://instagram.com";
  const linkedinLink = developerLinkedinLink || "https://linkedin.com";
  const twitterLink = developerTwitterLink || "https://twitter.com";

  const socialIconColors = {
    Instagram: "#E1306C",
    Twitter: "#1DA1F2",
    LinkedIn: "#0077B5",
  };

  const ourAchievementsData = ourAchievements || [
    { number: 12, text: "Years of experience" },
    { number: 26, text: "Projects Completed" },
    { number: 8, text: "Technologies mastered" },
    { number: 500, text: "Code commits" },
  ];
  type SocialMedia = "Instagram" | "Twitter" | "LinkedIn";

  return (
    <section className={`h-full`} style={backgroundStyles}>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{role}</span>
            <h1 className="h1 mb-6">
              {title} <br /> <span className="text-accent">{name}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{description}</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                style={{
                  borderColor: servicesButtonColor,
                  color: servicesButtonColor,
                }}
                asChild
              >
                <a href="#">
                  <span>{servicesButtonText || "See Services"}</span>
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles={(iconName) =>
                    `w-9 h-9 border rounded-full flex justify-center items-center text-base hover:transition-all duration-500 border-[${
                      socialIconColors[iconName as SocialMedia]
                    }] text-[${
                      socialIconColors[iconName as SocialMedia]
                    }] hover:bg-[${
                      socialIconColors[iconName as SocialMedia]
                    }] hover:text-primarydev`
                  }
                  instagramLink={instagramLink}
                  linkedinLink={linkedinLink}
                  twitterLink={twitterLink}
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none flex justify-center items-center mb-8 xl:mb-0">
            <Photo imageSrc={developerImage} />
          </div>
        </div>
      </div>
      <Stats ourAchievements={ourAchievementsData} />
    </section>
  );
};

// الدالة الافتراضية للصفحة
export default function HomePage() {
  const {
    backgroundColor,
    developerHeaderRole,
    developerHeadertitle,
    developerHeadername,
    developerHeaderdescription,
    developerHeaderImage,
    developerHeaderServicesButtonText,
    developerHeaderServicesButtonColor,
    developerInstagramLink,
    developerLinkedinLink,
    developerTwitterLink,
    ourAchievements,
  } = defaultTemplateDeveloperData;

  return (
    <Home
      backgroundColor={backgroundColor}
      developerHeaderRole={developerHeaderRole}
      developerHeadertitle={developerHeadertitle}
      developerHeadername={developerHeadername}
      developerHeaderdescription={developerHeaderdescription}
      developerHeaderImage={developerHeaderImage}
      developerHeaderServicesButtonText={developerHeaderServicesButtonText}
      developerHeaderServicesButtonColor={developerHeaderServicesButtonColor}
      developerInstagramLink={developerInstagramLink}
      developerLinkedinLink={developerLinkedinLink}
      developerTwitterLink={developerTwitterLink}
      ourAchievements={ourAchievements}
    />
  );
}