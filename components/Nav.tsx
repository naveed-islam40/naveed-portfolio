"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const [shadow, setShadow] = useState("");

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(isOpen ? 100 : 0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShadow("shadow-md");
      } else {
        setShadow("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkDesign =
    "relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-[#AD92F6] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#C8B2F2] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-black";

  return (
    <nav
      className={`bg-gradient-to-r from-[#F8EBE9] to-[#815EFD] text-white fixed w-full z-50 ${shadow}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
          <div className="flex-shrink-0 flex items-center ">
            {/* Logo */}
            <Link href="/" className="text-4xl font-bold text-gray-800">
              Naveed
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-[17px] font-medium text-gray-700 hover:bg-white hover:text-black transition-colors duration-300 ${linkDesign}`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`ml-4 px-3 py-2 rounded-md text-[17px] font-medium text-gray-700 hover:bg-white hover:text-black transition-colors duration-300 ${linkDesign}`}
            >
              Projects
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden shadow-md rounded-md">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        ref={menuRef}
        className="sm:hidden overflow-hidden transition-all duration-300 ease-in-out shadow-md flex flex-col justify-center items-center h-full"
        style={{ maxHeight: `${menuHeight}px` }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-white hover:text-black transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-white hover:text-black transition-colors duration-300"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
