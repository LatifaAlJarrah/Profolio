// // // src/app/components/templates/dentist/Navbar.tsx
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import NavbarList from "./NavbarList";
// import DentistLogo from "./DentistLogo";

// interface NavbarProps {
//   type?: string;
//   className?: string;
//   backgroundColor?: string;
//   logoName?: string; // إضافة logoName
//   logoTextColor?: string; // إضافة logoColor
//   logoIcon?: string;
//   navLinks?: Array<{ name: string; link: string }>; // إضافة navLinks
//   fontFamily?: string; // إضافة fontFamily للـ fonts الافتراضية
//   fontFamilyClass?: string; // إضافة fontFamilyClass للـ fonts المحملة
// }

// export default function Navbar({
//   className = "flex-row space-x-10",
//   backgroundColor = "#FFFFFF",
//   logoName,
//   logoTextColor,
//   logoIcon,
//   navLinks = [
//     { name: "Home", link: "#home" },
//     { name: "About Me", link: "#about" },
//     { name: "Services", link: "#services" },
//     { name: "Portfolio", link: "#portfolio" },
//     { name: "Blog", link: "#blog" },
//   ],
// }: // fontFamilyClass,
// NavbarProps) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const sidebarRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target as Node)
//       ) {
//         setIsSidebarOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav
//       className={`flex justify-between py-4 relative w-full items-center z-50 shadow-lg px-16`}
//       style={{ backgroundColor }}
//     >
//       <DentistLogo
//         name={logoName}
//         logoColor={logoTextColor}
//         logoIcon={logoIcon}
//       />

//       <button
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         className="lg:hidden text-primary focus:outline-none"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//           ></path>
//         </svg>
//       </button>
//       <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-4/5">
//         <NavbarList className={className} links={navLinks} />{" "}
//         {/* تمرير navLinks */}
//       </div>
//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
//       )}
//       <div
//         ref={sidebarRef}
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform z-50 flex flex-col justify-between px-6 py-6 ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <button
//           onClick={() => setIsSidebarOpen(false)}
//           className="absolute top-4 right-4 text-gray-600"
//         >
//           ✖
//         </button>

//         <NavbarList
//           className="flex-col space-y-6 mt-12 text-lg"
//           onClick={() => setIsSidebarOpen(false)}
//           links={navLinks} // تمرير navLinks للـ Sidebar
//         />
//       </div>
//     </nav>
//   );
// }
"use client";
import React, { useState, useEffect, useRef } from "react";
import NavbarList from "./NavbarList";
import DentistLogo from "./DentistLogo";

interface NavbarProps {
  type?: string;
  className?: string;
  backgroundColor?: string;
  logoName?: string;
  logoColor?: string;
  logoIcon?: string;
  navLinks?: Array<{ name: string; link: string }>;
  fontFamily?: string;
  fontFamilyClass?: string;
  navLinksTextColor?: string; // إضافة navLinksTextColor كـ prop
}

export default function Navbar({
  className = "flex-row space-x-10",
  backgroundColor = "#FFFFFF",
  logoName,
  logoColor,
  logoIcon,
  navLinks = [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Blog", link: "#blog" },
  ],
  fontFamily = "Roboto",
  fontFamilyClass = "",
  navLinksTextColor = "#000000", // القيمة الافتراضية للون الروابط
}: NavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between py-4 relative w-full items-center z-50 shadow-lg px-16 ${fontFamilyClass}`}
      style={{ backgroundColor, fontFamily }}
    >
      <DentistLogo
        name={logoName}
        logoColor={logoColor}
        logoIcon={logoIcon}
      />

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden text-primary focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-4/5">
        <NavbarList
          className={className}
          links={navLinks}
          textColor={navLinksTextColor} // تمرير اللون للـ NavbarList
        />
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform z-50 flex flex-col justify-between px-6 py-6 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 text-gray-600"
        >
          ✖
        </button>

        <NavbarList
          className="flex-col space-y-6 mt-12 text-lg"
          onClick={() => setIsSidebarOpen(false)}
          links={navLinks}
          textColor={navLinksTextColor} // تمرير اللون للـ NavbarList في الـ Sidebar
        />
      </div>
    </nav>
  );
}