"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

interface Projects {
  developerProjects?: Array<{
    num: string;
    category: string;
    description: string;
    stack: Array<{ name: string }>;
    image: string;
    live: string;
    github: string;
  }>;
}

const WorkPage = ({ developerProjects }: Projects) => {
  const defaultProjects = [
    {
      num: "01",
      category: "frontend",
      description: "A frontend project built with React and Tailwind CSS.",
      stack: [{ name: "React" }, { name: "Tailwind CSS" }],
      image: "/assets/project1.png",
      live: "https://example.com/project1",
      github: "https://github.com/example/project1",
    },
    {
      num: "02",
      category: "backend",
      description: "A backend project built with Node.js and Express.",
      stack: [{ name: "Node.js" }, { name: "Express" }],
      image: "/assets/project2.png",
      live: "https://example.com/project2",
      github: "https://github.com/example/project2",
    },
    {
      num: "03",
      category: "frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, nisi tempora dignissimos facilis recusandae architecto quae.",
      stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
      image: "/assets/work/thumb3.png",
      live: "",
      github: "",
    },
  ];

  const projects = Array.isArray(developerProjects)
    ? developerProjects
    : defaultProjects;

  const [project, setProject] = useState(
    projects[0] || {
      num: "",
      category: "",
      description: "",
      stack: [{ name: "" }],
      image: "",
      live: "",
      github: "",
    }
  );

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex;
    setProject(
      projects[currentIndex] || {
        num: "",
        category: "",
        description: "",
        stack: [{ name: "" }],
        image: "",
        live: "",
        github: "",
      }
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-20">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {(project.stack || [{ name: "" }]).map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name || ""}
                      {index !== (project.stack || [{ name: "" }]).length - 1 &&
                        ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[400px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image || "/assets/placeholder.png"}
                          fill
                          className="object-cover"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                iconsStyles="bg-white/5 text-white text-2xl group-hover:text-accent transition-all duration-500 flex justify-center items-center w-[44px] h-[44px] rounded-full cursor-pointer hover:bg-white/10 hover:shadow-lg"
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primarydev text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkPage;