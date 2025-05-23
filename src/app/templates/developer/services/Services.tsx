"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

interface Services {
  developerServices?: Array<{
    num?: string;
    title?: string;
    description?: string;
    href?: string;
  }>;
}

const ServicesPage = ({ developerServices }: Services) => {
  const defaultServices = [
    {
      num: "01",
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,",
      href: "",
    },
    {
      num: "02",
      title: "Ux/Ui Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,",
      href: "",
    },
    {
      num: "03",
      title: "Logo Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,",
      href: "",
    },
    {
      num: "04",
      title: "SEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,",
      href: "",
    },
  ];

  const services = developerServices ? developerServices : defaultServices;

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href ? service.href : "#"}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primarydev text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;