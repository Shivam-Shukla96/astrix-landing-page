"use client"

// import React from 'react'
// import Image from 'next/image'
// import Smartphone1 from '../../public/images/SmartphoneImg1.png'
// import SmartphoneImg2 from '../../public/images/SmartphoneImg2.png'

// const Services = () => {
//   return (
//     <>
//     <section className='flex  my-10 overflow-y-auto  my_custom_scrollbar h-[90vh]'>

//       <div className='w-2/3 sticky top-0 flex items-center justify-center'> 
//         <Image src={Smartphone1} alt='smartphone' className=' w-3/4 h-3/4 object-fit pt-10' /> </div>
//       <div className='w-1/2 space-y-6'>
//         <h2 className='text-[#AF8FFC]'>What does Astrix offer</h2>
//         <div className='space-y-20 text-[#CCD0D7] overflow-hidden'>
//         <div className='space-y-6 w-full md:w-2/3'>
//           <h2 className=' text-5xl'>Secure 
//           Ticket Resale</h2>
//           <h4 className=' text-xl '>A secure, structured resale market that ensures easy ticket reselling, prevents scalping with price caps, and guarantees ticket authenticity through verification</h4>
//         </div>
//         <div className='space-y-6 w-full md:w-2/3'>
//           <h2 className=' text-5xl'>Seamless Ticketing</h2>
//           <h4 className=' text-xl '>Enjoy tickets that are fair, unscalpable and unlock access to exclusive communities and rewards</h4>
//         </div>
//         <div className='space-y-6 w-full md:w-2/3'>
//           <h2 className=' text-5xl'>Exclusive Digital Collectible</h2>
//           <h4 className=' text-xl '>Unlock exclusive perks and VIP experiences with our digital collectibles, offering lasting rewards and engagement beyond the event.
//           </h4>
//         </div>
//         <div className='space-y-6 w-full md:w-2/3'>
//           <h2 className=' text-5xl'>Exclusive Communities & Rewards</h2>
//           <h4 className=' text-xl '>Get exclusive access to a private community, connect with authors, win prizes, and stay engaged with Astrix’s post-event experience!</h4>
//         </div>
//         </div>
//       </div>
//     </section>
//     </>
//   )
// }

// export default Services


import React, { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import Smartphone1 from '../../public/images/SmartphoneImg1.png'
import Smartphone2 from '../../public/images/SmartphoneImg2.png'
import card3 from '../../public/cards/card3.png'
import card5 from '../../public/cards/card5.png'


// Define the type for the reference array
type SectionRefs = Array<any>;

const Services: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  // Initialize the reference array for each section
  const sectionRefs = useRef<SectionRefs>([]);

  // IntersectionObserver to track the active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section as HTMLDivElement);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section as HTMLDivElement);
      });
    };
  }, []);

  // Function to get the correct image based on active section
  const getImage = (): StaticImageData => {
    switch (activeSection) {
      case 0:
        return Smartphone1;
      case 1:
        return card3;
      case 2:
        return card5;
      case 3:
        return Smartphone2;
      default:
        return Smartphone1;
    }
  };

  return (
    <section className="flex  justify-center gap-2 md:gap-0 my-20 h-[80vh]">
      {/* Image Section */}
      <div className="w-2/3 sticky top-0 flex  items-center justify-center ">
        <Image
          src={getImage()}
          alt="smartphone"
          className="w-full md:w-1/2 object-contain"
        />
      </div>
    <div className='w-1/2  space-y-12 '> <h2 className="text-[#AF8FFC] text-2xl mb-6 ">What does Astrix offer</h2>
      {/* Scrollable Topics Section */}
      <div className=" h-[60vh]   overflow-y-auto  my_custom_scrollbar">
        

        {/* Section 1 */}
        <div
          className="space-y-8 pt-12 pb-24 "
          ref={(el:any) => (sectionRefs.current[0] = el)}
        >
          <h2 className="text-3xl font-bold">Secure Ticket Resale</h2>
          <p className="text-sm md:text-lg text-[#CCD0D7] w-3/4" >
            A secure, structured resale market that ensures easy ticket reselling, prevents scalping with price caps, and guarantees ticket authenticity through verification.
          </p>
        </div>

        {/* Section 2 */}
        <div
          className="space-y-8  pt-12 pb-24 "
          ref={(el:any) => (sectionRefs.current[1] = el)}
        >
          <h2 className="text-3xl font-bold">Seamless Ticketing</h2>
          <p className="text-sm md:text-lg text-[#CCD0D7] w-3/4">
            Enjoy tickets that are fair, unscalpable, and unlock access to exclusive communities and rewards.
          </p>
        </div>

        {/* Section 3 */}
        <div
          className="space-y-8  pt-12 pb-24 "
          ref={(el:any) => (sectionRefs.current[2] = el)}
        >
          <h2 className="text-3xl font-bold">Exclusive Digital Collectible</h2>
          <p className="text-sm md:text-lg text-[#CCD0D7] w-3/4">
            Unlock exclusive perks and VIP experiences with our digital collectibles, offering lasting rewards and engagement beyond the event.
          </p>
        </div>

        {/* Section 4 */}
        <div
          className="space-y-8 pt-12 pb-24   mb-10"
          ref={(el:any) => (sectionRefs.current[3] = el)}
        >
          <h2 className="text-3xl font-bold">Exclusive Communities & Rewards</h2>
          <p className="text-sm md:text-lg text-[#CCD0D7] w-3/4">
            Get exclusive access to a private community, connect with authors, win prizes, and stay engaged with Astrix’s post-event experience!
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
