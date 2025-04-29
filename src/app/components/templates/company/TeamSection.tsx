"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import { TemplateData } from "@/app/types/templateData";

interface TeamSectionProps extends TemplateData {
  teamMembers?: Array<{
    name: string;
    role: string;
    img: string;
    uploadedImg?: string;
    instagramLink?: string;
    behanceLink?: string;
    githubLink?: string;
  }>;
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  if (!teamMembers || teamMembers.length === 0) {
    return (
      <section className="px-20 py-10 bg-[#FAFAFA]" id="team">
        <h2 className="text-3xl font-bold text-center mb-6">OUR TEAM</h2>
        <p>No team members available.</p>
      </section>
    );
  }

  return (
    <section className="px-20 py-10 bg-[#FAFAFA]" id="team">
      <h2 className="text-3xl font-bold text-center mb-6">OUR TEAM</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 25 },
        }}
        className="px-6"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white p-5 rounded-full shadow-lg text-center w-60 h-96 flex flex-col justify-between">
              <div>
                <Image
                  src={member.uploadedImg || member.img}
                  alt={member.name}
                  width={150}
                  height={150}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={75}
                  className="w-[150px] h-[150px] mx-auto rounded-full object-cover border-4 border-gray-300"
                />
                <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-500 text-xl">{member.role}</p>
              </div>
              <div className="flex justify-center gap-3 text-white">
                <a
                  href={member.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-7 h-7 bg-[#5C5757] rounded-full p-2"
                  />
                </a>

                <a
                  href={member.behanceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon
                    icon={faBehance}
                    className="w-7 h-7 bg-[#5C5757] rounded-full p-2"
                  />
                </a>

                <a
                  href={member.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="w-7 h-7 bg-[#5C5757] rounded-full p-2"
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSection;
