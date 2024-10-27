import React from "react";
import Image from "next/image";
import TestimonialCard from "../../public/images/TestimonialCrad.png";
import HorizontallyMovingCards from "./HorizontallyMovingCards";
const Testimonials = () => {
  return (
    <>
      <section className="space-y-8 ">
        <h1 className="text-5xl px-4">What Our Partners Say</h1>
        <div className="flex gap-8 overflow-x-auto ">
            <HorizontallyMovingCards />
        </div>
      </section>
    </>
  );
};

export default Testimonials;



// <div className="min-w-72 w-1/4 bg-[#14191F80] rounded-3xl">
// <div>
//   <Image
//     src={TestimonialCard}
//     alt="TestimonialCard"
//     className="rounded-t-xl object-cover"
//   />
// </div>
// <div className="text-center text-[#CCD0D7] -mt-8   rounded-2xl px-2  ">
//   <h2 className="text-xl">Partner Name</h2>
//   <h3 className="text-xs">Company Name</h3>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
//     ipsum consectetur quasi recusandae est asperiores nobi.
//   </p>
// </div>
// </div>
// <div className="min-w-72 w-1/4 bg-[#14191F80] rounded-3xl">
// <div>
//   <Image
//     src={TestimonialCard}
//     alt="TestimonialCard"
//     className="rounded-t-xl object-cover"
//   />
// </div>
// <div className="text-center text-[#CCD0D7] -mt-8  rounded-2xl px-2  ">
//   <h2 className="text-xl">Partner Name</h2>
//   <h3 className="text-xs">Company Name</h3>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
//     ipsum consectetur quasi recusandae est asperiores nobi.
//   </p>
// </div>
// </div>
// <div className="min-w-72 w-1/4 bg-[#14191F80] rounded-3xl">
// <div>
//   <Image
//     src={TestimonialCard}
//     alt="TestimonialCard"
//     className="rounded-t-xl object-cover"
//   />
// </div>
// <div className="text-center text-[#CCD0D7] -mt-8  rounded-2xl px-2  ">
//   <h2 className="text-xl">Partner Name</h2>
//   <h3 className="text-xs">Company Name</h3>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
//     ipsum consectetur quasi recusandae est asperiores nobi.
//   </p>
// </div>
// </div>
// <div className="min-w-72 w-1/4 bg-[#14191F80] rounded-3xl">
// <div>
//   <Image
//     src={TestimonialCard}
//     alt="TestimonialCard"
//     className="rounded-t-xl object-cover"
//   />
// </div>
// <div className="text-center text-[#CCD0D7] -mt-8   rounded-2xl px-2  ">
//   <h2 className="text-xl">Partner Name</h2>
//   <h3 className="text-xs">Company Name</h3>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
//     ipsum consectetur quasi recusandae est asperiores nobi.
//   </p>
// </div>
// </div>
// <div className="min-w-72 w-1/4 bg-[#14191F80] rounded-3xl">
// <div>
//   <Image
//     src={TestimonialCard}
//     alt="TestimonialCard"
//     className="rounded-t-xl object-cover"
//   />
// </div>
// <div className="text-center text-[#CCD0D7] -mt-8  rounded-2xl px-2  ">
//   <h2 className="text-xl">Partner Name</h2>
//   <h3 className="text-xs">Company Name</h3>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
//     ipsum consectetur quasi recusandae est asperiores nobi.
//   </p>
// </div>
// </div>