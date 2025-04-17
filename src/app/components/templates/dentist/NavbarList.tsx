// import React from "react";
// import Link from "next/link";

// interface NavbarListProps {
//   className?: string;
//   onClick?: () => void;
//   links?: Array<{ name: string; link: string }>;
// }

// const NavbarList = ({
//   className,
//   onClick,
//   links = [
//     { name: "Home", link: "#home" },
//     { name: "About Me", link: "#about" },
//     { name: "Services", link: "#services" },
//     { name: "Portfolio", link: "#portfolio" },
//     { name: "Blog", link: "#blog" },
//   ],
// }: NavbarListProps) => {
//   return (
//     <ul className={`flex gap-12 text-black text-xl items-start ${className}`}>
//       {links.map((item, index) => (
//         <Link key={`${item.name}-${item.link}-${index}`} href={item.link}>
//           <li className="hover:text-[#58ADEB]" onClick={onClick}>
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
  links = [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Blog", link: "#blog" },
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