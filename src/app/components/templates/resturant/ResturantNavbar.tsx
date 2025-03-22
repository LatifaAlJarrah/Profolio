"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // استيراد الأيقونات
import NavbarList from "./NavbarList";
import ResturantLogo from "./ResturantLogo";

export default function ResturantNavbar() {
  const pathname = usePathname();
  const isControlPage = pathname === "/controltemplate";
  const [isOpen, setIsOpen] = useState(false);

  // تبديل حالة الـ Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full bg-black bg-opacity-20 py-4 px-6 flex justify-between items-center z-40
        ${isControlPage ? "" : "fixed top-0 left-0 right-0"}`}
      >
        <ResturantLogo />

        {/* زر فتح القائمة الجانبية في الجوال */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={toggleSidebar}
        >
          <IoMdMenu />
        </button>

        {/* القائمة العادية على الشاشات الكبيرة */}
        <div className="hidden lg:flex">
          <NavbarList />
        </div>
      </nav>

      {/* Sidebar Menu (for Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-bold text-yellow">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-2xl hover:text-red-600"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Navbar List Inside Sidebar */}
        <div className="p-4 space-y-4 mt-10">
          <NavbarList
            className="flex-col space-y-10 space-x-0"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      {/* Overlay (Click to Close Sidebar) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
