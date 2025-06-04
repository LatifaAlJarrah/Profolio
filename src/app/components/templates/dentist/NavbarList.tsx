import React from "react";
import Link from "next/link";

interface NavbarListProps {
  className?: string;
  onClick?: () => void;
  links?: Array<{ name: string; link: string }>;
<<<<<<< HEAD
  textColor?: string;
=======
  textColor?: string; // إضافة textColor كـ prop
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
}

const NavbarList = ({
  className,
  onClick,
  links = [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Blog", link: "#blog" },
  ],
<<<<<<< HEAD
  textColor = "#000000",
=======
  textColor = "#000000", // القيمة الافتراضية للون النص
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
}: NavbarListProps) => {
  return (
    <ul
      className={`flex gap-12 text-xl items-start ${className}`}
<<<<<<< HEAD
      style={{ color: textColor }}
=======
      style={{ color: textColor }} // تطبيق اللون على الـ ul
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
    >
      {links.map((item, index) => (
        <Link key={`${item.name}-${item.link}-${index}`} href={item.link}>
          <li className="hover:text-[#58ADEB]" onClick={onClick}>
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavbarList;