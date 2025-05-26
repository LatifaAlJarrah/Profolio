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

// const HomePage: React.FC<HomeProps> = ({
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
// }) => {
//   const socialIconColors = {
//     Instagram: "#E1306C",
//     Twitter: "#1DA1F2",
//     LinkedIn: "#0077B5",
//   };

//   type SocialMedia = "Instagram" | "Twitter" | "LinkedIn";

//   return (
//     <section
//       style={{ backgroundColor: backgroundColor ?? "#1c1c22" }}
//     >
//       <div className="h-full px-20">
//         <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
//           <div className="text-center xl:text-left order-2 xl:order-none">
//             <span className="text-xl">{developerHeaderRole}</span>
//             <h1 className="h1 mb-6">
//               {developerHeadertitle} <br />{" "}
//               <span className="text-accent">{developerHeadername}</span>
//             </h1>
//             <p className="max-w-[500px] mb-9 text-white/80">
//               {developerHeaderdescription}
//             </p>
//             <div className="flex flex-col xl:flex-row items-center gap-8">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="uppercase flex items-center gap-2"
//                 style={{
//                   borderColor: developerHeaderServicesButtonColor,
//                   color: developerHeaderServicesButtonColor,
//                 }}
//                 asChild
//               >
//                 <a href="#">
//                   <span>
//                     {developerHeaderServicesButtonText || "See Services"}
//                   </span>
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
//                   instagramLink={developerInstagramLink}
//                   linkedinLink={developerLinkedinLink}
//                   twitterLink={developerTwitterLink}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="order-1 xl:order-none flex justify-center items-center mb-8 xl:mb-0">
//             <Photo imageSrc={developerHeaderImage} />
//           </div>
//         </div>
//       </div>
//       <Stats ourAchievements={ourAchievements} />
//     </section>
//   );
// };

// export default HomePage;
"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";

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

const HomePage: React.FC<HomeProps> = ({
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
}) => {
  const [processedImages, setProcessedImages] = useState<string[]>([]);
  const [, setSelectedFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const socialIconColors = {
    Instagram: "#E1306C",
    Twitter: "#1DA1F2",
    LinkedIn: "#0077B5",
  };

  type SocialMedia = "Instagram" | "Twitter" | "LinkedIn";

  // دالة لإزالة الخلفية باستخدام Photoroom API
  const removeBackground = async (files: File[]) => {
    const apiKey = ""; // استبدلي بـ x-api-key بتاعك
    const apiUrl = "https://sdk.photoroom.com/v1/segment"; // الـ endpoint الصحيح

    const newProcessedImages: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("image_file", file);

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "x-api-key": apiKey,
            Accept: "image/png, application/json", // لضمان التوافق
          },
          body: formData,
        });

        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          const processedUrl = URL.createObjectURL(
            new Blob([arrayBuffer], { type: "image/png" })
          );
          newProcessedImages.push(processedUrl);
        } else {
          const errorText = await response.text();
          if (errorText.includes("credits")) {
            setErrorMessage(
              "Your free credits have been used up. Please upgrade your plan at https://www.photoroom.com/pricing."
            );
          } else if (errorText.includes("429")) {
            setErrorMessage(
              "Too many requests. Please wait a minute and try again."
            );
          } else if (errorText.includes("not_found")) {
            setErrorMessage(
              "The API endpoint was not found. Please check the documentation for the correct URL."
            );
          } else {
            setErrorMessage(
              "Failed to remove background. Please try again later."
            );
            console.error("Failed to remove background:", errorText);
          }
        }
      } catch (error) {
        console.error("Error processing image:", error);
        setErrorMessage("An error occurred while processing the image.");
      }
    }

    setProcessedImages((prev) => [...prev, ...newProcessedImages]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
      setErrorMessage(null); // مسح الرسالة عند رفع صور جديدة
      removeBackground(filesArray); // معالجة الصور فورًا
    }
  };

  useEffect(() => {
    if (developerHeaderImage) {
      fetch(developerHeaderImage)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "defaultImage.jpg", {
            type: "image/jpeg",
          });
          removeBackground([file]);
        });
    }
  }, [developerHeaderImage]);

  return (
    <section style={{ backgroundColor: backgroundColor ?? "#1c1c22" }}>
      <div className="h-full px-20">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{developerHeaderRole}</span>
            <h1 className="h1 mb-6">
              {developerHeadertitle} <br />{" "}
              <span className="text-accent">{developerHeadername}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {developerHeaderdescription}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                style={{
                  borderColor: developerHeaderServicesButtonColor,
                  color: developerHeaderServicesButtonColor,
                }}
                asChild
              >
                <a href="#">
                  <span>
                    {developerHeaderServicesButtonText || "See Services"}
                  </span>
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
                  instagramLink={developerInstagramLink}
                  linkedinLink={developerLinkedinLink}
                  twitterLink={developerTwitterLink}
                />
              </div>
              {/* زر رفع الصور */}
              <div className="mt-4">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  accept="image/*"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
            </div>
          </div>
          <div className="order-1 xl:order-none flex justify-center items-center mb-8 xl:mb-0">
            {processedImages.length > 0 ? (
              processedImages.map((img, index) => (
                <Photo key={index} imageSrc={img} />
              ))
            ) : (
              <Photo imageSrc={developerHeaderImage} />
            )}
          </div>
        </div>
      </div>
      <Stats ourAchievements={ourAchievements} />
    </section>
  );
};

export default HomePage;