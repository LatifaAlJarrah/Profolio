// // // src/app/components/templates/dentist/ContactUs.tsx
// // import React from "react";
// // import Link from "next/link";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// // import {
// //   faPhone,
// //   faEnvelope,
// //   faLocationDot,
// // } from "@fortawesome/free-solid-svg-icons";
// // import { Roboto } from "next/font/google";

// // const roboto = Roboto({
// //   weight: "500",
// //   subsets: ["latin"],
// // });

// // interface ContactUsProps {
// //   bookingText?: string;
// //   instagramName?: string;
// //   instagramLink?: string;
// //   facebookName?: string;
// //   facebookLink?: string;
// //   phone?: string;
// //   email?: string;
// //   location?: string;
// // }

// // const ContactUs = ({
// //   bookingText = "To book an appointment",
// //   instagramName = "Instagram Name",
// //   instagramLink = "https://instagram.com",
// //   facebookName = "Facebook Name",
// //   facebookLink = "https://facebook.com",
// //   phone = "(123) 456-7890",
// //   email = "dr.williams@brightsmiledental.com",
// //   location = "BrightSmile Dental Clinic",
// // }: ContactUsProps) => {
// //   return (
// //     <section className="absolute top-[87%] left-1/2 transform -translate-x-1/2 shadow-lg rounded-lg p-4 w-[90%] z-10 bg-[#F6FBFF]">
// //       <div
// //         className={`${roboto.className} flex flex-col lg:flex-row justify-between items-center text-center px-5 space-y-5`}
// //       >
// //         <div>
// //           <p className={`text-black lg:text-2xl`}>{bookingText}</p>
// //         </div>

// //         <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>
// //         <div className="block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>

// //         <div className="flex lg:flex-col gap-8">
// //           <div className="flex items-center space-x-2">
// //             <Link
// //               href={instagramLink}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               <FontAwesomeIcon
// //                 icon={faInstagram}
// //                 className="w-6 h-6 text-red-300"
// //               />
// //             </Link>
// //             <span>{instagramName}</span>
// //           </div>
// //           <div className="flex items-center space-x-2">
// //             <Link href={facebookLink} target="_blank" rel="noopener noreferrer">
// //               <FontAwesomeIcon
// //                 icon={faFacebook}
// //                 className="w-6 h-6 text-blue-500"
// //               />
// //             </Link>
// //             <span>{facebookName}</span>
// //           </div>
// //         </div>

// //         <div className="block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>
// //         <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>

// //         <div className="flex lg:flex-col gap-8">
// //           <div className="flex items-center space-x-2">
// //             <Link
// //               href={`tel:${phone}`}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               <FontAwesomeIcon
// //                 icon={faPhone}
// //                 className="w-5 h-5 text-[#555555]"
// //               />
// //             </Link>
// //             <span className="underline">{phone}</span>
// //           </div>
// //           <div className="flex items-center space-x-2">
// //             <Link
// //               href={`mailto:${email}`}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               <FontAwesomeIcon
// //                 icon={faEnvelope}
// //                 className="w-5 h-5 text-[#555555]"
// //               />
// //             </Link>
// //             <span className="underline">{email}</span>
// //           </div>
// //         </div>

// //         <div className="block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>
// //         <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>

// //         <div className="flex items-center space-x-2">
// //           <Link href={facebookLink} target="_blank" rel="noopener noreferrer">
// //             <FontAwesomeIcon
// //               icon={faLocationDot}
// //               className="w-5 h-5 text-red-700"
// //             />
// //           </Link>
// //           <span className="font-bold">location:</span>
// //           <span>{location}</span>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactUs;
// import React, { useEffect } from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import {
//   faPhone,
//   faEnvelope,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: "500",
//   subsets: ["latin"],
// });

// interface ContactUsProps {
//   bookingText?: string;
//   instagramName?: string;
//   instagramLink?: string;
//   facebookName?: string;
//   facebookLink?: string;
//   phone?: string;
//   email?: string;
//   location?: string;
// }

// const ContactUs = ({
//   bookingText = "To book an appointment",
//   instagramName = "Instagram Name",
//   instagramLink = "https://instagram.com",
//   facebookName = "Facebook Name",
//   facebookLink = "https://facebook.com",
//   phone = "(123) 456-7890",
//   email = "dr.williams@brightsmiledental.com",
//   location = "BrightSmile Dental Clinic",
// }: ContactUsProps) => {
//   // إضافة console.log للتأكد من تحديث الـ props
//   useEffect(() => {
//     console.log("ContactUs Props Updated:", {
//       bookingText,
//       instagramName,
//       instagramLink,
//       facebookName,
//       facebookLink,
//       phone,
//       email,
//       location,
//     });
//   }, [
//     bookingText,
//     instagramName,
//     instagramLink,
//     facebookName,
//     facebookLink,
//     phone,
//     email,
//     location,
//   ]);

//   return (
//     <section className="absolute top-[87%] left-1/2 transform -translate-x-1/2 shadow-lg rounded-lg p-4 w-[90%] z-10 bg-[#F6FBFF]">
//       <div
//         className={`${roboto.className} flex flex-col lg:flex-row justify-between items-center text-center px-5 space-y-5`}
//       >
//         <div>
//           <p className={`text-black lg:text-2xl`}>{bookingText}</p>
//         </div>

//         <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>
//         <div className="block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>

//         <div className="flex lg:flex-col gap-8">
//           <div className="flex items-center space-x-2">
//             <Link
//               href={instagramLink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FontAwesomeIcon
//                 icon={faInstagram}
//                 className="w-6 h-6 text-red-300"
//               />
//             </Link>
//             <span>{instagramName}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Link href={facebookLink} target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon
//                 icon={faFacebook}
//                 className="w-6 h-6 text-blue-500"
//               />
//             </Link>
//             <span>{facebookName}</span>
//           </div>
//         </div>

//         <div className="block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>
//         <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>

//         <div className="flex lg:flex-col gap-8">
//           <div className="flex items-center space-x-2">
//             <Link
//               href={`tel:${phone}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FontAwesomeIcon
//                 icon={faPhone}
//                 className="w-5 h-5 text-[#555555]"
//               />
//             </Link>
//             <span className="underline">{phone}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Link
//               href={`mailto:${email}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FontAwesomeIcon
//                 icon={faEnvelope}
//                 className="w-5 h-5 text-[#555555]"
//               />
//             </Link>
//             <span className="underline">{email}</span>
//           </div>
//         </div>

//         <div className="block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>
//         <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>

//         <div className="flex items-center space-x-2">
//           <Link href={facebookLink} target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon
//               icon={faLocationDot}
//               className="w-5 h-5 text-red-700"
//             />
//           </Link>
//           <span className="font-bold">location:</span>
//           <span>{location}</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

interface ContactUsProps {
  bookingText?: string;
  instagramName?: string;
  instagramLink?: string;
  facebookName?: string;
  facebookLink?: string;
  phone?: string;
  email?: string;
  location?: string;
}

const ContactUs = ({
  bookingText = "To book an appointment",
  instagramName = "Instagram Name",
  instagramLink = "https://instagram.com",
  facebookName = "Facebook Name",
  facebookLink = "https://facebook.com",
  phone = "(123) 456-7890",
  email = "dr.williams@brightsmiledental.com",
  location = "BrightSmile Dental Clinic",
}: ContactUsProps) => {
  // إضافة console.log للتأكد من تحديث الـ props
  useEffect(() => {
    console.log("ContactUs Props Updated:", {
      bookingText,
      instagramName,
      instagramLink,
      facebookName,
      facebookLink,
      phone,
      email,
      location,
    });
  }, [
    bookingText,
    instagramName,
    instagramLink,
    facebookName,
    facebookLink,
    phone,
    email,
    location,
  ]);

  return (
    <section className="absolute top-[87%] left-1/2 transform -translate-x-1/2 shadow-lg rounded-lg p-4 w-[90%] z-10 bg-[#F6FBFF]">
      <div
        className={`font-roboto flex flex-col lg:flex-row justify-between items-center text-center px-5 space-y-5`}
      >
        <div>
          <p className={`text-black lg:text-2xl`}>{bookingText}</p>
        </div>

        <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>
        <div className="block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>

        <div className="flex lg:flex-col gap-8">
          <div className="flex items-center space-x-2">
            <Link
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6 text-red-300"
              />
            </Link>
            <span>{instagramName}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Link href={facebookLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-6 h-6 text-blue-500"
              />
            </Link>
            <span>{facebookName}</span>
          </div>
        </div>

        <div className="block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>
        <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>

        <div className="flex lg:flex-col gap-8">
          <div className="flex items-center space-x-2">
            <Link
              href={`tel:${phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="w-5 h-5 text-[#555555]"
              />
            </Link>
            <span className="underline">{phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-5 h-5 text-[#555555]"
              />
            </Link>
            <span className="underline">{email}</span>
          </div>
        </div>

        <div className="block lg:hidden border border-lightGrayShade2 my-4 w-full"></div>
        <div className="hidden lg:block h-36 w-[1px] bg-lightGrayShade2"></div>

        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="w-5 h-5 text-red-700"
          />
          <span className="font-bold">location:</span>
          <span>{location}</span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;