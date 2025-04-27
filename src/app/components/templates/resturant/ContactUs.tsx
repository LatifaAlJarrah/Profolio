// import React from "react";
// import Link from "next/link";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";

// export default function ContactUs() {
//   return (
//     <section
//       className={`font-roboto bg-black bg-opacity-20 text-white py-16 px-6 md:px-16`} id="contact"
//     >
//       <h2 className="text-4xl text-center tracking-widest mb-12">CONTACT US</h2>

//       <div className="flex flex-col md:flex-row items-center justify-between md:space-x-5 space-y-10 lg:space-y-0">
//         <div className="flex flex-col items-center lg:w-1/2">
//           <p className="text-gray-400">Social Media</p>
//           <div className="flex lg:flex-row items-center justify-around space-x-4 w-full lg:mt-14 md:mt-6 md:flex-col md:gap-8">
//             <div className="flex items-center space-x-2 text-gray-300">
//               <Link
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon
//                   icon={faInstagram}
//                   className="w-6 h-6 text-red-300"
//                 />
//               </Link>
//               <span>Instagram Name</span>
//             </div>
//             <div className="flex items-center space-x-2 text-gray-300">
//               <Link
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon
//                   icon={faFacebook}
//                   className="w-6 h-6 text-blue-500"
//                 />
//               </Link>
//               <span>Facebook Name</span>
//             </div>
//           </div>
//         </div>

//         <div className="hidden md:block h-36 w-[1px] bg-lightGrayShade2"></div>

//         <div className="flex flex-col items-center lg:w-1/2">
//           <p className="text-gray-400">For Delivery</p>
//           <div className="flex lg:flex-row items-center justify-around space-x-4 w-full lg:mt-14 md:mt-6 md:flex-col md:gap-3">
//             <div className="flex items-center space-x-2 text-gray-300">
//               <Link
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon
//                   icon={faPhone}
//                   className="w-5 h-5 text-yellow"
//                 />
//               </Link>
//               <span>+1 323 9587458</span>
//             </div>
//             <p className=" text-gray-300">OR</p>
//             <div className="flex items-center space-x-2 text-gray-300">
//               <Link
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon
//                   icon={faPhone}
//                   className="w-5 h-5 text-yellow"
//                 />
//               </Link>
//               <span>+1 323 2548974</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { TemplateData } from "@/app/types/templateData";

interface ContactUsProps extends TemplateData {
  contactInstagramName?: string;
  contactInstagramLink?: string;
  contactFacebookName?: string;
  contactFacebookLink?: string;
  contactPhone?: string;
  contactPhone2?: string;
}

const ContactUs: React.FC<ContactUsProps> = ({
  contactInstagramName,
  contactInstagramLink,
  contactFacebookName,
  contactFacebookLink,
  contactPhone,
  contactPhone2,
  titleTextColor,
  buttonColor,
}) => {
  return (
    <section
      className={`bg-black bg-opacity-20 text-white py-16 px-6 md:px-16`}
      id="contact"
    >
      <h2
        className="text-4xl text-center tracking-widest mb-12"
        style={{ color: titleTextColor || "#ffffff" }}
      >
        CONTACT US
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-5 space-y-10 lg:space-y-0">
        <div className="flex flex-col items-center lg:w-1/2">
          <p style={{ color: "#9ca3af" }}>Social Media</p>
          <div className="flex lg:flex-row items-center justify-around space-x-4 w-full lg:mt-14 md:mt-6 md:flex-col md:gap-8">
            <div
              className="flex items-center space-x-2"
              style={{ color: "#d1d5db" }}
            >
              <Link
                href={contactInstagramLink || "https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-6 h-6 text-red-300"
                />
              </Link>
              <span>{contactInstagramName || "Instagram Name"}</span>
            </div>
            <div
              className="flex items-center space-x-2"
              style={{ color: "#d1d5db" }}
            >
              <Link
                href={contactFacebookLink || "https://facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-6 h-6 text-blue-500"
                />
              </Link>
              <span>{contactFacebookName || "Facebook Name"}</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block h-36 w-[1px] bg-lightGrayShade2"></div>

        <div className="flex flex-col items-center lg:w-1/2">
          <p style={{ color: "#9ca3af" }}>For Delivery</p>
          <div className="flex lg:flex-row items-center justify-around space-x-4 w-full lg:mt-14 md:mt-6 md:flex-col md:gap-3">
            <div
              className="flex items-center space-x-2"
              style={{ color: "#d1d5db" }}
            >
              <Link href={`tel:${contactPhone || "+1 323 9587458"}`}>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-5 h-5"
                  style={{ color: buttonColor || "#ffcc00" }}
                />
              </Link>
              <span>{contactPhone || "+1 323 9587458"}</span>
            </div>
            <p style={{ color: "#d1d5db" }}>OR</p>
            <div
              className="flex items-center space-x-2"
              style={{ color: "#d1d5db" }}
            >
              <Link href={`tel:${contactPhone2 || "+1 323 2548974"}`}>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-5 h-5"
                  style={{ color: buttonColor || "#ffcc00" }}
                />
              </Link>
              <span>{contactPhone2 || "+1 323 2548974"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;