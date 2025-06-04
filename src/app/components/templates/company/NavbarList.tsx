"use client";
import React from "react";
import Link from "next/link";

import { TemplateData } from "@/app/types/templateData";

interface NavbarListProps extends TemplateData  {
  className?: string;
  onClick?: () => void;
  links?: Array<{ name: string; link: string }>;
<<<<<<< HEAD
  textColor?: string;
=======
  textColor?: string; // إضافة textColor كـ prop
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
}

const NavbarList: React.FC<NavbarListProps> = ({
  className,
  onClick,
  navigationLinks,
  navigationLinksColor,
}: NavbarListProps) => {
  return (
    <ul
      className={`flex gap-12 text-xl items-start ${className}`}
<<<<<<< HEAD
      style={{ color: navigationLinksColor }}
=======
      style={{ color: navigationLinksColor }} // تطبيق اللون على الـ ul
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
    >
      {navigationLinks?.map((item, index) => (
        <Link key={`${item.name}-${item.link}-${index}`} href={item.link}>
          <li className="hover:text-navyBlue hover:shadow-2xl hover:shadow-slate-700" onClick={onClick}>
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavbarList;