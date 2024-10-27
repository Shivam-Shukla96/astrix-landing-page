import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.svg";
import card3 from "../../public/cards/card3.png";
// components/Table.js
export default function Table() {
  const tablecontent = [
    "Unscalpable Tickets",
    "Ticket Resale",
    "Community",
    "Low Commission",
  ];

  return (
    <>
      <div className=" w-full md:w-3/4 lg:w-1/2 m-auto space-y-10 px-2 md:px-4 py-20">
        <h1 className="text-3xl ">What Sets Us Apart</h1>
        <table className="min-w-full bg-[#14191F50] text-center rounded-xl">
          <thead>
            <tr>
              <th className=""></th>
              <th className=" py-2 flex justify-center items-center bg-[#7520E125]">
                <Image src={Logo} alt="" className="w-32 sm:w-full" />
              </th>
              <th className="text-lg sm:text-3xl font-thin">Others</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-2xl font-extralight">
            {tablecontent.map((item, idx) => (
              <tr key={idx}>
                <td className=" border-b border-[#FFFFFF20] ">{item}</td>
                <td className="p-2 sm:p-8 border-b border-[#FFFFFF20] bg-[#7520E125] ">
                  yes
                </td>
                <td className="p-2 sm:p-8 border-b border-[#FFFFFF20]">yes</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <div className="flex flex-col sm:flex-row items-center w-[95%]  sm:w-[80%] m-auto  rounded-xl my-10  ">
          <div className="h-[40vh]  sm:aspect-square ">
            <Image src={card3} alt="" className="object-cover h-full w-full rounded-xl" />
          </div>
          <div className=" flex flex-col gap-2  justify-center bg-[#14191F80] p-4 rounded-md">
            {" "}
            <h1 className="text-[#AF8CFF] text-xl">Why partner with us</h1>
            <h2 className="text-2xl text-[#CCD0D7]">Agency Support</h2>
            <h4 className="text-[#AFB6C0]">
              Astrix provides full-service event management, helping brands
              organise and execute events seamlessly from start to finish
            </h4>
            <button className="text-[#AF8CFF] bg-[#14191F] border-2  border-[#AF8CFF] hover:text-black hover:bg-[#AF8CFF] text-xl rounded-3xl  py-1 w-40 ">
              <Link href="/signup">Get in Touch</Link>
            </button>
          </div>
        </div>
    </>
  );
}
