"use client";
import React, { useEffect, useRef } from "react";
import TestimonialCard from "../../public/images/TestimonialCrad.png";
import Image from "next/image";

const AutoScrollingCards: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollSpeed = 10; // Increase or decrease this for faster or slower scroll speed

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;

      // If scrolled past the original content, reset scroll to the start of original content
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      // Continue the animation
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the scroll animation
    animationFrameId = requestAnimationFrame(scroll);

    // Stop the animation on user interaction
    const stopAutoScroll = () => cancelAnimationFrame(animationFrameId);
    const startAutoScroll = () =>
      (animationFrameId = requestAnimationFrame(scroll));

    scrollContainer.addEventListener("mouseenter", stopAutoScroll);
    scrollContainer.addEventListener("mouseleave", startAutoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", stopAutoScroll);
      scrollContainer.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <div
      className="my_custom_scrollbar"
      ref={scrollContainerRef}
      style={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",
        width: "100%",
        // height: "300px", // Adjust height as needed
        padding: "10px",
        position: "relative",
      }}
    >
      {/* Original Cards */}
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className="min-w-[200px] sm:min-w-[300px]  aspect-w-3 aspect-h-4 mr-7 bg-[#14191F80] flex flex-col items-center text-white text-2xl rounded-xl"
          key={item}        >
          <div className="h-3/4">
            <Image
              src={TestimonialCard}
              alt="TestimonialCard"
              className="rounded-t-xl object-cover h-full"
            />
          </div>
          <div className="text-center text-[#CCD0D7] -mt-6   flex-wrap   rounded-2xl px-2  ">
            <h2 className="text-xl ">Partner Name</h2>
            <h3 className="text-xs">Company Name</h3>
            <p className="text-xs text-wrap my-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ipsum consectetur quasi recusandae est asperiores nobi.
            </p>
          </div>
        </div>
      ))}
      {/* Cloned Cards for Infinite Scrolling */}
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className="min-w-[200px] sm:min-w-[300px]  aspect-w-3 aspect-h-4 mr-7 bg-[#14191F80] flex flex-col items-center text-white text-2xl rounded-xl"
          key={"clone-" + item}
        >
          <div className="h-3/4 ">
            <Image
              src={TestimonialCard}
              alt="TestimonialCard"
              className="rounded-t-xl object-cover h-full"
            />
          </div>
          <div className="text-center text-[#CCD0D7] -mt-6     rounded-2xl px-2  ">
            <h2 className="text-xl ">Partner Name</h2>
            <h3 className="text-xs">Company Name</h3>
            <p className="text-xs text-wrap my-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ipsum consectetur quasi recusandae est asperiores nobi.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutoScrollingCards;
