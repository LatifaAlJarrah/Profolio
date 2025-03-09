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
// }

// const NavbarList = ({ className }: NavbarListProps) => {
//   return (
//     <nav className="w-3/4">
//       <ul className={`${className} flex space-x-16 text-black text-xl items-start`}>
//         {navbarList.map((item, index) => (
//           <Link key={index} href={item.link}>
//             <li className="hover:text-sky-400">{item.name}</li>
//           </Link>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavbarList;
import React from "react";
import Link from "next/link";

interface NavbarListProps {
  className?: string;
  onClick?: () => void;
}

const NavbarList: React.FC<NavbarListProps> = ({ className, onClick }) => {
  const navbarList = [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Blog", link: "#blog" },
  ];

  return (
    <nav className="w-3/4">
      <ul
        className={`${className} flex space-x-16 text-black text-xl items-start`}
      >
        {navbarList.map((item, index) => (
          <Link key={index} href={item.link}>
            <li onClick={onClick} className="hover:text-sky-400">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarList;
