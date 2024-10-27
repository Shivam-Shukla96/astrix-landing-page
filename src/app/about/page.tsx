import React from "react";
import Marquee from "../../components/Marquee";
import Image from "next/image";
import { IncomingMessage } from "http";
import Arrow from "../../../public/Arrow.svg";
import trust from "../../../public/trust.svg";
import Search from "../../../public/Search.svg";
import Navigation from "../../../public/Navigation.svg";
import SecurityAuthorization from "../../../public/SecurityAuthorization.svg";

const About = () => {
  const crads = [
    {
      img: trust,
      title: "Scalped",
      desc: "Astrix provides full-service event management, helping brands organise and execute events seamlessly from start to finish",
    },
    {
      img: SecurityAuthorization,
      title: "Authenticity",
      desc: "Struggling to verify the authenticity of tickets bought from untrustworthy sources.",
    },
    {
      img: Navigation,
      title: "Navigate",
      desc: "Navigating endless barriers just to be acknowledged as loyal fans.",
    },
    {
      img: Search,
      title: "Search",
      desc: "Searching for a sense of belonging and engagement within fragmented communities.",
    },
  ];
  return (
    <>
      <section className="px-4 py-20 flex flex-col gap-10">
        <h1 className="text-[#AF8CFF] text-xl">About</h1>
        <h1 className="text-6xl md:text-8xl">Astrix</h1>
        <h4 className="text-lg md:text-xl text-[#AFB6C0] font-thin  w-[90%] leading-8">
          As a bold and energetic India embraces the 21st century, the demand
          for live shows and homegrown talent is skyrocketing. Yet, despite this
          incredible growth, we were frustrated by the ongoing challenges in the
          live event industry, scalped tickets, counterfeit sales, and the lack
          of true communities for fans and creators. We knew we had to do
          something about it.<br></br> <br /> Our team has been deeply involved
          in the events industry for years, both as fans and organizers. We’ve
          experienced firsthand the joy of live shows, but also the frustration
          of navigating a system riddled with inefficiencies and barriers. It’s
          this passion and experience that fueled the creation of Astrix.
        </h4>
      </section>
      <div className="w-full h overflow-hidden">
        <Marquee />
      </div>
      <h5 className="text-[#768293] px-4 py-2">
        *The brands listed showcase previous collaborations facilitated through
        our platform. Their logos and names are displayed for informational
        purposes only, and all trademarks belong to their respective owners.
      </h5>
      <div className="space-y-8 my-8 px-4">
        <h1 className="text-[#CCD0D7] text-3xl">
          We built Astrix because we were tired of:
        </h1>
        <div className="flex justify-center gap-8 flex-wrap">
          {crads.map((card, idx) => (
            <div className="bg-[#14191F80] flex flex-col  rounded-lg py-8 px-4 gap-4 w-[20%] min-w-[250px] ">
              <Image src={card.img} alt="Logo" className="" />
              <div>
                <h3 className="text-[#AF8CFF] text-xs">Why Us</h3>
                <h1 className="text-[#CCD0D7] text-2xl">{card.title}</h1>
                <p className="text-[#AFB6C0]">
                {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
