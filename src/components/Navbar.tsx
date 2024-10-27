"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.svg";
import Hamburger from "../../public/Hamburger.svg";

import { useState } from "react";

const Navbar = () => {
  const [mobNav, setMobNav] = useState(false);
  return (
    <>
      <div className="block md:flex justify-between z-100 px-1 md:px-4 py-2">
        <div className="flex justify-between ">
          <div className="logo">
            <Image src={Logo} alt="Logo" />
          </div>
          <div
            className="hamburger block md:hidden z-100"
            onClick={() => setMobNav(!mobNav)}
          >
            
            <Image src={Hamburger} alt="Logo" />
          </div>
        </div>

        <div
          className={` ${
            mobNav ? " flex flex-col gap-4" : "hidden"
          } md:flex justify-end items-center flex-1 bg-red800 `}
        >
          <nav className="w-[90%] lg:w-[65%] xl:w-1/2 text-xl text-[#AFB6C0] bg-  flex flex-col h-[30vh]  md:h-auto  md:flex-row justify-between items-center ">
            <span>
              <Link href="/gallery">Gallery</Link>
            </span>
            <span>
              <Link href="/blog">Blog</Link>
            </span>
            <span>
              <Link href="/about">About</Link>
            </span>
            <span>
              <Link href="/contactus">Contact Us</Link>
            </span>
            <button className="text-black bg-[#AF8CFF]  text-xl rounded-3xl px-3 py-1 w-40">
              <Link href="/signup">Get Started</Link>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
