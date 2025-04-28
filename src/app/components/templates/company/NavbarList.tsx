// // import React from "react";
// // import Link from "next/link";

// // const navbarList = [
// //   { name: "Home", link: "#home" },
// //   { name: "About", link: "#about" },
// //   { name: "Services", link: "#services" },
// //   { name: "Projects", link: "#projects" },
// //   { name: "Team", link: "#team" },
// //   { name: "Contact", link: "#contact" },
// // ];

// // interface NavbarListProps {
// //   className?: string;
// //   onClick?: () => void;
// // }

// // const NavbarList = ({ className, onClick }: NavbarListProps) => {
// //   return (
// //     <ul
// //       className={`grid grid-cols-1 lg:grid-cols-8 gap-0 lg:gap-12 text-black text-lg items-start ${className}`}
// //     >
// //       {navbarList.map((item, index) => (
// //         <Link key={index} href={item.link}>
// //           <li className="hover:text-navyBlue" onClick={onClick}>
// //             {item.name}
// //           </li>
// //         </Link>
// //       ))}
// //     </ul>
// //   );
// // };

// // export default NavbarList;
// import React from "react";
// import Link from "next/link";
// import { TemplateData } from "@/app/types/templateData";

// interface NavbarListProps extends TemplateData {
//   className?: string;
//   onClick?: () => void;
// }

// const NavbarList: React.FC<NavbarListProps> = ({
//   className,
//   onClick,
//   navigationLinks,
//   navigationLinksColor,
// }) => {
//   // إذا لم تكن navigationLinks معرفة، نستخدم قيمة افتراضية
//   const links =  [
//     { name: "Home", link: "#home" },
//     { name: "About", link: "#about" },
//     { name: "Services", link: "#services" },
//     { name: "Projects", link: "#projects" },
//     { name: "Team", link: "#team" },
//     { name: "Contact", link: "#contact" },
//   ];

//   return (
//     <ul
//       className={`grid grid-cols-1 lg:grid-cols-8 gap-0 lg:gap-12 text-lg items-start ${className}`}
//     >
//       {links.map((item, index) => (
//         <Link key={index} href={item.link}>
//           <li
//             className="hover:text-navyBlue"
//             style={{ color: navigationLinksColor || "#000000" }}
//             onClick={onClick}
//           >
//             {item.name}
//           </li>
//         </Link>
//       ))}
//     </ul>
//   );
// };

// export default NavbarList;

import React from "react";
import Link from "next/link";

interface NavbarListProps {
  className?: string;
  onClick?: () => void;
  links?: Array<{ name: string; link: string }>;
  textColor?: string; // إضافة textColor كـ prop
}

const NavbarList = ({
  className,
  onClick,
   links =  [
      { name: "Home", link: "#home" },
      { name: "About", link: "#about" },
      { name: "Services", link: "#services" },
      { name: "Projects", link: "#projects" },
      { name: "Team", link: "#team" },
      { name: "Contact", link: "#contact" },
    ],
  textColor = "#000000", // القيمة الافتراضية للون النص
}: NavbarListProps) => {
  return (
    <ul
      className={`flex gap-12 text-xl items-start ${className}`}
      style={{ color: textColor }} // تطبيق اللون على الـ ul
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