"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { HireDetails } from "@/data/data";

const HireMe = () => {


  const [expand, setExpand] = useState<number | null>(null);

  const showDetails = (index: number) => {
    setExpand(expand === index ? null : index);
    
  };
  return (
    <section className="bg-[#E9E0FF] lg:p-20 max-md:p-0 max-sm:py-5">
      <div>
        <div className="flex justify-center items-center">
          <h1 className='relative after:content-[""] after:absolute after:w-0 after:bg-[#6B41FE] after:h-[3px] after:left-0 after:hover:w-full after:transition-all after:duration-300 after:ease-in-out after:bottom-0 font-[700] text-[40px] text-center max-sm:text-[30px]'>
            {" "}
            Why Should You <br /> Hire Me?
          </h1>
        </div>
        <div className="flex justify-between items-center mt-10 max-custom:flex-col max-custom:gap-5">
          <div>
            <Image
              src={"/naveed.png"}
              alt="hire-me"
              width={400}
              height={400}
              className="shadow-md rounded-md border-b-2 border-slate-300 bg-[#fff]"
            />
          </div>

          <div className="flex flex-col max-sm:my-5">
            {HireDetails &&
              HireDetails.map((detail, index) => {
                return (
                  <div className="shadow-md py-4 px-2 rounded-md  min-h-10 h-full w-[600px] flex justify-between items-center bg-[#fff] mb-2 max-lg:w-[400px] max-sm:w-full" key={index}>
                    <div>
                      <h1 className="text-[30px]">{detail.title}</h1>
                     <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${expand === index ? 'max-h-80' : "max-h-0"}`}>
                     <p className="mt-5">{detail.desc}</p>
                     </div>
                    </div>
                    <div onClick={() => showDetails(index)}>
                     {expand === index ? <FaMinus className="cursor-pointer" /> : <FaPlus className="cursor-pointer" />  }
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
