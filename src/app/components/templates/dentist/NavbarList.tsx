// import React from "react";
// import Link from "next/link";

// const navbarList = [
//   { name: "Home", link: "#home" },
//   { name: "About Me", link: "#about" },
//   { name: "Services", link: "#services" },
//   { name: "Portfolio", link: "#portfolio" },
//   { name: "Blog", link: "#blog" },
// ];
// interface NavbarListProps {
//   className?: string;
//   onClick?: () => void;
// }

// const NavbarList = ({ className, onClick }: NavbarListProps) => {
//   return (
//     <ul className={`flex gap-12 text-black text-xl items-start ${className} `}>
//       {navbarList.map((item, index) => (
//         <Link key={index} href={item.link}>
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
}: NavbarListProps) => {
  return (
    <ul className={`flex gap-12 text-black text-xl items-start ${className}`}>
      {links.map((item, index) => (
        <Link key={index} href={item.link}>
          <li className="hover:text-[#58ADEB]" onClick={onClick}>
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavbarList;