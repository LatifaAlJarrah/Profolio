"use client";
import React, { useState, useEffect, useRef } from "react";
import SignUpButton from "../auth/SignUpButton";
import LogInButton from "../auth/LogInButton";
import Logo from "../logo/Logo";
import NavbarList from "../list/NavbarList";
import Modal from "../auth/Modal";

interface NavbarProps {
  type?: string;
  className?: string;
}

export default function Navbar({
  className = "flex-row space-x-10",
}: NavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"signup" | "login">("login");

  const sidebarRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (type: "signup" | "login") => {
    setIsSidebarOpen(false);
    setModalType(type);
    setIsModalOpen(true);
  };

  // إخفاء السايدبار عند النقر خارجها
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

  // إخفاء المودال عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between py-4 px-12 bg-lightGray relative">
      <Logo />

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

      {/* Desktop Navbar */}
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-4/5">
        <NavbarList type="nav" className={className} />
        <div className="flex gap-4">
          <LogInButton onClick={() => handleOpenModal("login")} />
          <SignUpButton onClick={() => handleOpenModal("signup")} />
        </div>
      </div>

      {/* Overlay عند فتح القائمة */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {/* Drawer Menu (Sidebar) */}
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
          type="sidebar"
          className="flex-col space-y-6 mt-12 text-lg"
          onClick={() => setIsSidebarOpen(false)}
        />

        <div className="flex flex-col gap-4 pb-6">
          <LogInButton
            className="w-full text-center"
            onClick={() => handleOpenModal("login")}
          />
          <SignUpButton
            className="w-full text-center"
            onClick={() => handleOpenModal("signup")}
          />
        </div>
      </div>

      <Modal
        ref={modalRef}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </nav>
  );
}
