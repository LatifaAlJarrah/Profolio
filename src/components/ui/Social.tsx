import React, { JSX } from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

interface SocialProps {
  containerStyles: string;
  iconStyles: (iconName: string) => string;
  instagramLink?: string;
  linkedinLink?: string;
  twitterLink?: string;
}

const Social = ({
  containerStyles,
  iconStyles,
  instagramLink,
  linkedinLink,
  twitterLink,
}: SocialProps) => {
  const iconMap: { [key: string]: JSX.Element } = {
    Instagram: <FaInstagram />,
    Twitter: <FaTwitter />,
    LinkedIn: <FaLinkedin />,
  };

  const iconsToRender = [
    { name: "Instagram", link: instagramLink || "https://instagram.com" },
    { name: "Twitter", link: twitterLink || "https://twitter.com" },
    { name: "LinkedIn", link: linkedinLink || "https://linkedin.com" },
  ].filter((icon) => icon.link);

  return (
    <div className={containerStyles}>
      {iconsToRender.map((social, index) => (
        <a
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          href={social.link}
          className={iconStyles(social.name)}
        >
          {iconMap[social.name as keyof typeof iconMap] || <FaInstagram />}
        </a>
      ))}
    </div>
  );
};

export default Social;