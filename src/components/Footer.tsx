import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.svg";
import Instagram from "../../public/socialIcons/Instagram.svg";
import Twitter from "../../public/socialIcons/Twitter.svg";
import Linkedin from "../../public/socialIcons/Linkedin.svg";

const Footer = () => {
  return (
    <>
      <section className="text-center py-12 space-y-10 bg-[#14191F80] rounded-xl  mx-2 md:mx-10 mt-10 ">
        <div className="space-y-8">
          <Image src={Logo} alt="Logo" className="m-auto" />
          <h1 className="text-5xl md:text-7xl"> Get in Touch</h1>{" "}
          <h5 className="text-xl">
            Say Hello at{" "}
            <Link href="mailto:hello@astrix.live" className="text-[#AF8CFF]">
              hello@astrix.live
            </Link>{" "}
          </h5>{" "}
        </div>
        <div className="flex flex-col-reverse gap-4 md:flex-row justify-between items-center px-4 ">
          <h5>Terms & Conditions</h5>
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row">
          <nav className="gap-6 text-xl text-[#AFB6C0]   flex flex-col h-[30vh]  md:h-auto  md:flex-row justify-between items-center md:mr-8">
            <Link href="/gallery">Gallery</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contactus">Contact Us</Link>
          </nav>
          <div className="flex  justify-center items-center gap-8" >
            <Image src={Instagram} alt="" className="m" />
            <Image src={Linkedin} alt="" className="m" />
            <Image src={Twitter} alt="" className="m" />
          </div>
          </div>
        </div>
      </section>
      
      <p className="px-10 text-[#768293]">©2024 Tikitin Solutions Private Limited</p>
      
    </>
  );
};

export default Footer;
