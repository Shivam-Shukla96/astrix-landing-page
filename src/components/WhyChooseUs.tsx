import React from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../../public/arrow.svg";
import card1 from "../../public/cards/card1.jpg";
import card2 from "../../public/cards/card2.png";
import card3 from "../../public/cards/card3.png";
import card4 from "../../public/cards/card4.png";
import card5 from "../../public/cards/card5.png";
import card6 from "../../public/cards/card6.png";
import diamond from "../../public/cards/diamond.png";

const cardsRow1 = [
  { src: card1, desc: "EVENT CREATION" },
  { src: card2, desc: "COMMUNITY BUILDING" },
  { src: card3, desc: "LOW COMMISSION" },
];
const cardsRow2 = [
  { src: card4, desc: "DIGITAL COLLECTIBLES" },
  { src: card5, desc: "DATA  INSIGHTS" },
  { src: card6, desc: "RESALE REVENUE" },
];

const WhyChooseUs = () => {
  return (
    <>
      <section className="text-[#CCD0D7] space-y-8 my-2 px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
            <h2 className="text-4xl md:text-6xl">
              Why Organise <br /> your Next Event with Us{" "}
            </h2>
            <div className="flex items-center gap-3">
              <Image src={Arrow} alt="arrow" className="w-5 sm:w-8" />
              <button className="text-[#AF8CFF] bg-[#14191F] border-2  border-[#AF8CFF] hover:text-black hover:bg-[#AF8CFF] text-lg md:text-xl rounded-3xl  px-2 py-1 w-30 md:w-40 ">
                {" "}
                <Link href="/signup">Explore Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-10 flex flex-col justify-center items-center  h-70vh w-full">
          <div className="flex w-[100%] md:w-[80%] justify-center md:justify-start">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-10 md:gap-20   ">
              {cardsRow1.map((card, idx) => (
                <div
                  key={idx}
                  className="w-full flex justify-center items-center  rounded-3xl relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${card.src.src})`,
                    width: "25%",
                    //   height: "100",
                    minWidth: "220px",
                    aspectRatio: "3/4",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <Image
                    src={diamond}
                    alt="card"
                    className=" absolute -bottom-20 -right-20 opacity-40"
                  />
                  <div className="z-10 h-full w-full bg-[#14191F99] gap-2 flex flex-col justify-center items-center group">
                    {/* Heading (h1) */}
                    <h1 className="text-xl md:text-2xl w-3/4 text-[#E6EAF2] transition-all duration-300 group-hover:text-xl">
                      {card.desc}
                    </h1>

                    {/* Paragraph (Initially hidden) */}
                    <p className="text-white w-4/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Inventore, totam!
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-[80%] justify-center md:justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-10 md:gap-20  ">
              {cardsRow2.map((card) => (
                <div
                  className="w-full flex justify-center items-center  rounded-3xl relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${card.src.src})`,
                    width: "25%",
                    //   height: "100",
                    minWidth: "220px",
                    aspectRatio: "3/4",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <Image
                    src={diamond}
                    alt="card"
                    className=" absolute -bottom-20 -right-20 opacity-40"
                  />
                  <div className="z-10 h-full w-full bg-[#14191F99] gap-2 flex flex-col justify-center items-center group">
                    {/* Heading (h1) */}
                    <h1 className="text-xl md:text-2xl w-3/4 text-[#E6EAF2] transition-all duration-300 group-hover:text-xl">
                      {card.desc}
                    </h1>

                    {/* Paragraph (Initially hidden) */}
                    <p className="text-white w-4/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Inventore, totam!
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;

// const HoverCard: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="group w-64 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
//         {/* Heading (h1) */}
//         <h1 className="text-3xl font-bold text-black mb-2 transition-all duration-300 group-hover:text-2xl">
//           Amazing Card
//         </h1>
//         {/* Paragraph (Initially hidden) */}
//         <p className="text-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           This is some additional content that becomes visible when you hover over the card.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HoverCard;
