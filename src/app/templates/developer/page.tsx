// // src/app/templates/developer/page.jsx
// import { Button } from "@/components/ui/button";
// import Photo from "@/components/ui/Photo";
// import Social from "@/components/ui/Social";
// import Stats from "@/components/ui/Stats";
// import { FiDownload } from "react-icons/fi";

// const Home = () => {
//   return (
//     <section className="h-full">
//       <div className="container mx-auto h-full">
//         <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
//           <div className="text-center xl:text-left order-2 xl:order-none">
//             <span className="text-xl">Software Developer</span>
//             <h1 className="h1 mb-6">
//               Hello I&apos;m <br />{" "}
//               <span className="text-accent">Luke Coleman</span>
//             </h1>
//             <p className="max-w-[500px] mb-9 text-white/80">
//               I excel at crafting elegant digital experiences and I am
//               proficient in various programming Languages and technologies.
//             </p>
//             <div className="flex flex-col xl:flex-row items-center gap-8">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="uppercase flex items-center gap-2"
//               >
//                 <span>Download CV</span>
//                 <FiDownload className="text-xl" />
//               </Button>
//               <div className="mb-8 xl:mb-0">
//                 <Social
//                   containerStyles="flex gap-6"
//                   iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primarydev hover:transition-all duration-500"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="order-1 xl:order-none flex justify-center items-center mb-8 xl:mb-0">
//             <Photo />
//           </div>
//         </div>
//       </div>
//       <Stats />
//     </section>
//   );
// };

// export default Home;
"use client";
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";
import { TemplateData } from "@/app/types/templateData";

interface HomeProps {
  data: TemplateData;
}

const Home = ({ data }: HomeProps) => {
  const developerHeader = data.developerHeader;

  // const {
  //   role,
  //   title,
  //   name,
  //   description,
  //   developerImage,
  //   downloadCVButtonText,
  //   downloadCVButtonPath,
  //   downloadCVButtonColor,
  //   socialIcons = [
  //     { name: "Instagram", link: "https://instagram.com" },
  //     { name: "Twitter", link: "https://twitter.com" },
  //     { name: "LinkedIn", link: "https://linkedin.com" },
  //   ],
  //   socialIconsColor,
  // } = developerHeader;

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{developerHeader?.role}</span>
            <h1 className="h1 mb-6">
              {developerHeader?.title} <br />{" "}
              <span className="text-accent">{developerHeader?.name}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {developerHeader?.description}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                style={{
                  borderColor: developerHeader?.downloadCVButtonColor,
                  color: developerHeader?.downloadCVButtonColor,
                }}
                asChild
              >
                <a href={developerHeader?.downloadCVButtonPath}>
                  <span>{developerHeader?.downloadCVButtonText}</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles={`w-9 h-9 border rounded-full flex justify-center items-center text-base hover:transition-all duration-500 border-[${developerHeader?.socialIconsColor}] text-[${developerHeader?.socialIconsColor}] hover:bg-[${developerHeader?.socialIconsColor}] hover:text-primarydev`}
                  socialIcons={developerHeader?.socialIcons}
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none flex justify-center items-center mb-8 xl:mb-0">
            <Photo imageSrc={developerHeader?.developerImage} />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
