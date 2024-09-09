"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [shadow, setShadow] = useState("")


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

  console.log(shadow)

    const linkDesign = "relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-[#AD92F6] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#C8B2F2] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-black"
  return (
    <nav className={`flex justify-between h-24 items-center bg-gradient-to-r from-[#F8EBE9] to-[#815EFD] text-white fixed top-0 w-full z-50 ${shadow}`}>
      <div className="mx-10">
        <h1 className="font-nerko text-3xl text-[#8766FB]">Naveed</h1>
      </div>
      <div className="mx-10 flex gap-5">
        <Link href="/" className={`${linkDesign}`}>Home</Link>
        <Link href="/projects" className={`${linkDesign}`}>Projects</Link>
      </div>
    </nav>
  );
};

export default Nav;
