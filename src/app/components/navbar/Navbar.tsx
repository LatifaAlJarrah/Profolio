"use client";
import React, { useState, useEffect } from "react";
import SignUpButton from "../auth/SignUpButton";
import LogInButton from "../auth/LogInButton";
import Logo from "../logo/Logo";
import NavbarList from "../list/NavbarList";

interface NavbarProps {
  type: string;
  className?: string;
}

export default function Navbar({ type = "nav" }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // تعطيل التمرير عند فتح القائمة
  useEffect(() => {
    if (isDrawerOpen) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }, [isDrawerOpen]);

  // إغلاق القائمة
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav className="flex justify-between py-4 px-12 bg-lightGray relative">
      {/* Logo */}
      <Logo />

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className="xl:hidden text-primary focus:outline-none"
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

      {/* Desktop Navbar */}
      <div className="hidden xl:flex xl:flex-row xl:items-center xl:justify-between xl:w-4/5">
        <NavbarList type={type} className="flex-row space-x-10" />
        <div className="flex gap-4">
          <LogInButton />
          <SignUpButton />
        </div>
      </div>

      {/* Overlay عند فتح القائمة */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeDrawer}
        ></div>
      )}

      {/* Drawer Menu (Sidebar) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform z-50 flex flex-col justify-between px-6 py-6 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeDrawer}
          className="absolute top-4 right-4 text-gray-600"
        >
          ✖
        </button>

        {/* Navbar List */}
        <NavbarList type={type} className="flex-col space-y-6 mt-12 text-xl" />

        {/* Authentication Buttons */}
        <div className="flex flex-col gap-4 pb-6">
          <LogInButton className="w-full text-center" />
          <SignUpButton className="w-full text-center" />
        </div>
      </div>
    </nav>
  );
}
// "use client";
// import React, { useState, useEffect } from "react";
// import SignUpButton from "../auth/SignUpButton";
// import LogInButton from "../auth/LogInButton";
// import Logo from "../logo/Logo";
// import NavbarList from "../list/NavbarList";
// import Modal from "../auth/Modal"; // تأكد من أن المسار صحيح

// interface NavbarProps {
//   type: string;
//   className?: string;
// }

// export default function Navbar({ type = "nav" }: NavbarProps) {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // تعطيل التمرير عند فتح القائمة
//   useEffect(() => {
//     if (isDrawerOpen) {
//       document.documentElement.classList.add("overflow-hidden");
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.documentElement.classList.remove("overflow-hidden");
//       document.body.classList.remove("overflow-hidden");
//     }
//   }, [isDrawerOpen]);

//   // إغلاق القائمة
//   const closeDrawer = () => {
//     setIsDrawerOpen(false);
//   };

//   // فتح المودال بعد إغلاق القائمة
//   const handleOpenModal = () => {
//     setIsDrawerOpen(false); // يغلق القائمة الجانبية
//     setIsModalOpen(true); // يفتح المودال
//   };


//   return (
//     <nav className="flex justify-between py-4 px-12 bg-lightGray relative">
//       {/* Logo */}
//       <Logo />

//       {/* Hamburger Menu Button */}
//       <button
//         onClick={() => setIsDrawerOpen(!isDrawerOpen)}
//         className="xl:hidden text-primary focus:outline-none"
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

//       {/* Desktop Navbar */}
//       <div className="hidden xl:flex xl:flex-row xl:items-center xl:justify-between xl:w-4/5">
//         <NavbarList type={type} className="flex-row space-x-10" />
//         <div className="flex gap-4">
//           <LogInButton />
//           <SignUpButton onClick={handleOpenModal} />
//         </div>
//       </div>

//       {/* Overlay عند فتح القائمة */}
//       {isDrawerOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={closeDrawer}
//         ></div>
//       )}

//       {/* Drawer Menu (Sidebar) */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform z-50 flex flex-col justify-between px-6 py-6 ${
//           isDrawerOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={closeDrawer}
//           className="absolute top-4 right-4 text-gray-600"
//         >
//           ✖
//         </button>

//         {/* Navbar List */}
//         <NavbarList type={type} className="flex-col space-y-6 mt-12 text-xl" />

//         {/* Authentication Buttons */}
//         <div className="flex flex-col gap-4 pb-6">
//           <LogInButton className="w-full text-center" />
//           <SignUpButton
//             className="w-full text-center"
//             onClick={handleOpenModal}
//           />
//         </div>
//       </div>

//       {/* المودال */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </nav>
//   );
// }
