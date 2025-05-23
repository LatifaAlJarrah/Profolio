"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Slide {
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  name: string;
  image: string;
  quote: string;
}

interface PortfolioProps {
  slides?: Slide[];
  testimonials?: Testimonial[];
  buttonColor?: string;
}

function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="mx-auto py-12 px-4 sm:px-8 w-full">
      <div className="flex flex-col lg:flex-row justify-center items-center text-center md:text-left gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative shadow-lg rounded-full p-6 w-full md:w-[65%] flex flex-col sm:flex-row items-center overflow-hidden"
          >
            <div className="rounded-full overflow-hidden shrink-0 w-52 h-52">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
                width={208}
                height={208}
              />
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-base lg:text-lg">{testimonial.name}</h3>
              <p className="text-[#4E4E4E] text-sm lg:text-base mt-2 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio({
  slides = [
    {
      title: "Hollywood Smile",
      description:
        "The patient had discoloration and misalignment of the teeth, They were treated with a Hollywood Smile using cosmetic veneers (either veneers or lumineers) to achieve a bright and harmonious smile.",
      image: "/assets/images/HollywoodSmile.jpg",
    },
    {
      title: "Teeth Whitening",
      description:
        "The patient had tooth discoloration and yellowing, which was treated with a professional whitening session to restore their bright smile.",
      image: "/assets/images/TeethWhitening.jpg",
    },
    {
      title: "Dental Restoration",
      description:
        "The Patient Had Severe Decay And Needed Full Restoration...",
      image: "/assets/images/Fillings.jpg",
    },
  ],
  testimonials = [
    {
      name: "Ahmed Ali",
      image: "/assets/images/Ahmad.jpg",
      quote:
        "I Used To Suffer From Uneven Tooth Color And Misalignment, But After Getting A Hollywood Smile, My Smile Became Brighter And More Beautiful. The Results Look Very Natural, And I Am Completely Satisfied With The Experience.",
    },
    {
      name: "Emily",
      image: "/assets/images/Emilly.jpg",
      quote:
        "I Had Decay In One Of My Front Teeth, Which Made Me Feel Self-Conscious. After Getting Tooth-Colored Fillings, My Tooth Looks Completely Natural And Blends Perfectly With The Rest Of My Teeth. The Result Is Amazing, And I'm Very Happy With It!",
    },
  ],
  buttonColor = "#58ADEB",
}: PortfolioProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`font-roboto bg-[#FAFAFA]`} id="portfolio">
      <div className="relative mx-auto p-4">
        <h2 className="text-center my-8 text-3xl sm:text-4xl tracking-widest">
          PORTFOLIO & TESTIMONIALS
        </h2>

        <div className="relative max-w-6xl">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={20}
            centeredSlides={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`rounded-lg shadow-md flex items-center justify-between h-[450px] p-2 ${
                    index === activeIndex ? "border-2 border-[#58ADEB]" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-full object-cover rounded-2xl w-1/2"
                    width={300}
                    height={450}
                  />
                  <div className="p-6 w-1/2 flex flex-col">
                    <h3 className="lg:text-2xl md:text-lg sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="lg:text-xl md:text-base sm:text-base text-charcoalGray my-8">
                      {item.description}
                    </p>
                    <button
                      className="mt-3 text-white px-4 py-2 rounded-2xl lg:text-lg md:text-base sm:text-sm"
                      style={{ backgroundColor: buttonColor }}
                    >
                      Book An Appointment
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
            <ChevronRight size={24} />
          </button>
        </div>
        <Testimonials testimonials={testimonials} />
      </div>
    </section>
  );
}