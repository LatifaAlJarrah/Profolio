import React from "react";
import Image from "next/image";

interface BlogProps {
  title?: string;
  content?: string;
  images?: string[];
  buttonColor?: string;
}

const ImageGrid = ({ images }: { images: string[] }) => {
  return (
    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-4 max-w-md mx-auto mt-10">
      <div className="rounded-s-[100px] rounded-tr-[100px] overflow-hidden border-s-[16px] border-[#58ADEB82] border-opacity-20 w-52 h-52 sm:w-60 sm:h-60">
        <Image
          src={images[0] || "/assets/icons/DentalPractice.png"}
          alt="Dental Care"
          className="w-full h-full object-cover"
          width={240}
          height={240}
        />
      </div>
      <div className="rounded-e-[100px] rounded-tl-[100px] overflow-hidden border-e-[16px] border-[#58ADEB82] border-opacity-20 w-52 h-52 sm:w-60 sm:h-60">
        <Image
          src={images[1] || "/assets/icons/PerfectSmile.png"}
          alt="Happy Smile"
          className="w-full h-full object-cover"
          width={240}
          height={240}
        />
      </div>
      <div className="rounded-t-[100px] rounded-bl-[100px] overflow-hidden border-t-[16px] border-[#58ADEB82] border-opacity-20 w-52 h-52 sm:w-60 sm:h-60 -rotate-90">
        <Image
          src={images[2] || "/assets/icons/VeneersShow.png"}
          alt="Teeth Whitening"
          className="w-full h-full object-cover"
          width={240}
          height={240}
        />
      </div>
      <div className="rounded-e-[100px] rounded-bl-[100px] overflow-hidden border-e-[16px] border-[#58ADEB82] border-opacity-20 w-52 h-52 sm:w-60 sm:h-60">
        <Image
          src={images[3] || "/assets/icons/DentalVeneers.png"}
          alt="Perfect Teeth"
          className="w-full h-full object-cover"
          width={240}
          height={240}
        />
      </div>
    </div>
  );
};

const Blog = ({ title, content, images = [], buttonColor }: BlogProps) => {
  return (
    <section className={`font-roboto bg-[#FAFAFA] py-8`} id="blog">
      <div className="relative mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl tracking-widest">
          {title}
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 grid-cols-1">
            <ImageGrid images={images} />
          </div>

          <div className="lg:w-1/2 my-0 mt-6 text-center sm:text-left px-4 md:px-12 lg:px-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
              {title}
            </h3>
            <div>
              <p className="text-base sm:text-lg md:text-xl text-[#5C5757] my-6 text-justify mr-0 sm:mr-12">
                {content}
              </p>
            </div>

            <button
              className="text-white text-lg sm:text-xl md:text-2xl rounded-xl text-center w-1/2 py-2 sm:w-1/3"
              style={{ backgroundColor: buttonColor }}
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
