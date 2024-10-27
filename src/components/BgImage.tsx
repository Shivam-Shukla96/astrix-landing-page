'use client';
import React, { useEffect, useState } from "react";
// import img from '../../public/images/'

export const DesktopEventBg = ({ children }: any) => {
    const [viewportHeight, setViewportHeight] = useState("100vh");
  
    useEffect(() => {
      const updateViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        setViewportHeight(`${vh * 100}px`);
      };
  
      updateViewportHeight();
  
      window.addEventListener("resize", updateViewportHeight);
  
      return () => window.removeEventListener("resize", updateViewportHeight);
    }, []);
    return (
      <div
        // style={{ minHeight: viewportHeight }}
        className="fixed top-0 min-h-screen w-full overflow-hidden pb-2"
      >
        <div className="pointer-events-none absolute left-[-100px] top-[-200px]">
          <img
            className="h-[420px] w-[420px]"
            src="/images/bg_overlay.png"
            alt="Background overlay"
            style={{ opacity: "0.4" }}
          />
        </div>
        <div className="pointer-events-none absolute z-10 bottom-[50px] right-[-270px]">
          <img
            className="h-[470px] w-[490px] opacity-40"
            src="/images/bg_event_overlay.png"
            alt="Event overlay"
          />
        </div>
        <div
          className="my_custom_scrollbar absolute z-30 h-full w-full desBg"
          // style={{
          //   background:
          //     "linear-gradient(0deg, rgb(6, 7, 8, 0.85) 10%, rgba(26, 58, 60, 0.70) 100%)",
          // }}
        >
          {children}
        </div>
      </div>
    );
  };