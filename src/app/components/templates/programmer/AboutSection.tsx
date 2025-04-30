"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface AboutSectionProps {
  programmerAboutTitle?: string;
  programmerAboutDescription?: string;
  programmerAboutImage?: string;
  programmerSkills?: string[];
  programmerEducation?: string[];
  programmerCertifications?: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  programmerAboutTitle,
  programmerAboutDescription , programmerAboutImage ,
  programmerSkills ,
  programmerEducation,
  programmerCertifications ,
}) => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          {programmerSkills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          {programmerEducation?.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          {programmerCertifications?.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src={programmerAboutImage || ""}
          width={500}
          height={500}
          alt="About image"
          className="rounded-2xl h-[500px]"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            {programmerAboutTitle}
          </h2>
          <p className="text-base lg:text-xl">{programmerAboutDescription}</p>
          <div className="flex flex-row justify-start mt-8 text-[#828282] text-xl">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;