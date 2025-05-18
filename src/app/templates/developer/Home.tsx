"use client";
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
  const socialIconColors = {
    Instagram: "#E1306C",
    Twitter: "#1DA1F2",
    LinkedIn: "#0077B5",
  };

  type SocialMedia = "Instagram" | "Twitter" | "LinkedIn";

  return (
    <section
      style={{ backgroundColor: backgroundColor ?? "#1c1c22" }}
    >
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
            </div>
          </div>
          <div className="order-1 xl:order-none flex justify-center items-center mb-8 xl:mb-0">
            <Photo imageSrc={developerHeaderImage} />
          </div>
        </div>
      </div>
      <Stats ourAchievements={ourAchievements} />
    </section>
  );
};

export default HomePage;
