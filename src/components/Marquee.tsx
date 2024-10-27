import React from "react";
import Image from "next/image";
import star from "../../public/marquee/Star.svg";
import brand1 from "../../public/marquee/Brand1.svg";
import brand2 from "../../public/marquee/Brand2.svg";
import brand3 from "../../public/marquee/Brand3.svg";
import brand4 from "../../public/marquee/Brand4.svg";
import brand5 from "../../public/marquee/Brand5.svg";

const Marquee = ({ data }: { data?: Object[] }) => {
  const brandsCollab = [
    { idx: 1, img: brand1 },
    { idx: 2, img: brand2 },
    { idx: 3, img: brand3 },
    { idx: 4, img: brand4 },
    { idx: 5, img: brand5 },
    { idx: 6, img: brand1 },
    { idx: 7, img: brand2 },
    { idx: 8, img: brand3 },
    { idx: 9, img: brand4 },
    { idx: 10, img: brand5 },
  ];
  return (
    <div className="bg-[#6666663D] h-20 " >
      <div
        style={{
          writingMode: "sideways-lr",
          textOrientation: "mixed",
          whiteSpace: "nowrap",
        }}
        className="animate-marquee  flex justify-around  cursor-default h-full sm:py-2 text-xl text-noble_black-900"
      >
        {brandsCollab?.map((el, idx) => (
          <div key={idx} className=" flex items-center justify-around  gap-6">
            <div className="">
              <Image src={star} alt="" className="mx-3"  />
            </div>
            <div className=" w-20">
              <Image src={el.img} alt="" className="" />
            </div>
          </div>
        ))}
      </div>
      {/* =========== */}
    </div>
  );
};

export default Marquee;
