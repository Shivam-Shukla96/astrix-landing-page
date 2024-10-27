import React from "react";
import Link from "next/link";
import Image from "next/image";

import Arrow from "../../public/Arrow.svg";
import PartnersLogo from "../../public/Partners.svg";
import Marquee from "./Marquee";

const Hero = () => {
  return (
    <>
      <section className="relative flex flex-col-reverse   min-h-[90vh] align-middle mb-4 px-2 md:px-4 py-2 ">
        <div className="flex absolute right-0 sm:right-10  sm:top-20 justify-end items-center w-[95%] sm:w-[60%] h-[50%]  sm:h-[80%] rounded-3xl bg-green-800 ">
          <video
            className="rounded-3xl h-full w-full object-cover"
            autoPlay
            loop
            muted
          >
            <source
              src="https://ik.imagekit.io/shivam96/HeroVid.mp4?updatedAt=1729690032629"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className=" absolute top-10 sm:top-1/4 space-y-4 sm:space-y-10">
          <h1 className="text-5xl sm:text-6xl md:text-8xl ">
            Elevate <br /> your experience
          </h1>
          <p className=" sm:text-xl w-[90%] sm:w-1/2 font-thin leading-5">
            Be part of the next generation of live experiences in the nation’s
            most vibrant event ecosystem
          </p>
          <button className="text-[#AF8CFF] bg-[#14191F] border-2  border-[#AF8CFF] hover:text-black hover:bg-[#AF8CFF] text-lg sm:text-xl rounded-3xl px-2 py-1 w-30 md:w-40 ">
            <Link href="/signup">Get Started</Link>
          </button>
        </div>
        <div className="absolute right-4 bottom-0 flex  gap-2">
          {" "}
          <Image 
            src={Arrow}
            alt=""
            className="-rotate-45 hover:rotate-0 w-5 sm:w-8"
          />{" "}
          <h1 className="text-lg sm:text-2xl  font-thin hover:text-[#AF8CFF]">
            Explore Events
          </h1>
        </div>
      </section>
      <div className="w-full overflow-hidden">
        <Marquee />
      </div>
      <h5 className="text-[#768293] px-2 sm:px-4 py-2">
        *The brands listed showcase previous collaborations facilitated through
        our platform. Their logos and names are displayed for informational
        purposes only, and all trademarks belong to their respective owners.
      </h5>
    </>
  );
};

export default Hero;

// <div
// className=" min-h-2/3 w-1/2  rounded-2xl absolute top-1/2 left-[40%] transform  -translate-y-1/2"
// style={{
//   backgroundImage: "url('/images/Hero-bg.png')",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   width: "60%",
//   height: "70%",
// }}
// ></div>
