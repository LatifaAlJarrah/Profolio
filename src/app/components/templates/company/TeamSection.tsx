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
import {
  James,
  Emily,
  Michael,
  David,
  SophiaMiller,
  Daniel,
} from "@/app/assets/images";

const teamMembers = [
  {
    name: "James Carter",
    role: "CEO (Chief Executive Officer)",
    img: James,
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    img: Emily,
  },
  {
    name: "Michael Smith",
    role: "Lead Developer",
    img: Michael,
  },
  {
    name: "David Brown",
    role: "Frontend Developer",
    img: David,
  },
  {
    name: "Sophia Miller",
    role: "Backend Developer",
    img: SophiaMiller,
  },
  {
    name: "Daniel Wils",
    role: "AI Engineer",
    img: Daniel,
  },
];

export default function TeamSection() {
  return (
    <div className="py-10 bg-[#FAFAFA] px-10">
      <h2 className="text-3xl font-bold text-center mb-6">OUR TEAM</h2>
      <Swiper
        slidesPerView={5} // عرض 5 صور في نفس الوقت
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // للجوال
          640: { slidesPerView: 2, spaceBetween: 15 }, // للأجهزة الصغيرة
          1024: { slidesPerView: 4, spaceBetween: 20 }, // للمتوسطة
          1280: { slidesPerView: 5, spaceBetween: 25 }, // للشاشات الكبيرة
        }}
        className="px-6"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white p-5 rounded-full shadow-lg text-center w-60 h-96 flex flex-col justify-between">
              <div>
                <Image
                  src={member.img}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="w-[150px] h-[150px] mx-auto rounded-full object-cover border-4 border-gray-300"
                />

                <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-500 text-xl">{member.role}</p>
              </div>
              <div className="flex justify-center gap-3 text-white">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-7 h-7 bg-[#5C5757] rounded-full p-2"
                />
                <FontAwesomeIcon
                  icon={faBehance}
                  className="w-7 h-7 bg-[#5C5757] rounded-full p-2"
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-7 h-7 bg-[#5C5757] rounded-full p-2"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
