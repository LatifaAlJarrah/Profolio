// import React from "react";
// import Link from "next/link";
// import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

// const socials = [
//   { icon: <FaGithub />, path: "" },
//   { icon: <FaLinkedin />, path: "" },
//   { icon: <FaYoutube />, path: "" },
//   { icon: <FaTwitter />, path: "" },
// ];
// const Social = ({ containerStyles, iconStyles }) => {
//   return (
//     <div className={containerStyles}>
//       {socials.map((item, index) => {
//         return (
//           <Link key={index} href={item.path} className={iconStyles}>
//             {item.icon}
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default Social;
import React,  {JSX} from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
  socialIcons?: Array<{ name: string; link: string }>;
}

const Social = ({
  containerStyles,
  iconStyles,
  socialIcons = [],
}: SocialProps) => {
  // تعيين الأيقونات بناءً على الاسم
  const iconMap: { [key: string]: JSX.Element } = {
    Instagram: <FaInstagram />,
    Twitter: <FaTwitter />,
    LinkedIn: <FaLinkedin />,
  };

  // إذا لم يتم تمرير socialIcons، استخدم قيم افتراضية
  const defaultIcons = [
    { name: "Instagram", link: "https://instagram.com" },
    { name: "Twitter", link: "https://twitter.com" },
    { name: "LinkedIn", link: "https://linkedin.com" },
  ];

  const iconsToRender = socialIcons.length > 0 ? socialIcons : defaultIcons;

  return (
    <div className={containerStyles}>
      {iconsToRender.map((social, index) => (
        <a key={index} href={social.link} className={iconStyles}>
          {iconMap[social.name as keyof typeof iconMap] || <FaInstagram />}{" "}
        </a>
      ))}
    </div>
  );
};

export default Social;