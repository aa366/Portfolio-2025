"use client"
import React from "react";
import data from "@/data/home.json";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

const Personality = () => {
  const { personal: P } = data;
  const titles = ["abdelwahab Anwr ","Front end developer"]
  

  return (
   
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-[5%] w-fit  p-[2%] ">

        <Image
          src={P.img }
          alt=""
          width={100}
          height={100}
          className=" rounded-[100%] w-1/2 max-w-[400px] flex justify-self-center md:w-full  aspect-square object-cover self-center"
        />

        <div className="w-full p-3">
          <div className="inset-0  backdrop-blur-lg p-2">
              <h1 className="text-3xl font-bold text-center text-amber-700 dark:text-amber-300 flex gap-2">
                <span>i,am</span>
                <Typewriter
                            options={{
                                strings: titles,
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 50,
                                wrapperClassName: "text-violet-800 dark:text-violet-300 text-xl md:text-3xl font-medium",
                                cursorClassName: "text-violet-800 dark:text-violet-300 text-xl md:text-3xl"
                            }}
                        />
           
          </h1>

          <p className="text-[1.3rem] font-bold text-balance text-center sm:text-2xl">
            {P.Description}
          </p>
          </div>

        

          <div className="flex justify-between my-[3%] font-medium">

            <a className="p-[3px] relative cursor-pointer w-fit flex " href={P.resume} target="_blanck">
             
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />

                <div className="px-8 py-2 bg-violet-400 text-black dark:bg-black dark:text-white rounded-[6px]  relative group transition duration-200  hover:bg-transparent">
                  Resume
                </div>
            
            </a>
            <a className="p-[3px] relative cursor-pointer w-fit flex " href={P.coverLetter} target="_blanck">
             
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-violet-400 text-black dark:bg-black dark:text-white rounded-[6px]  relative group transition duration-200  hover:bg-transparent">
                  Cover Letter
                </div>
            
            </a>
          </div>

        </div>
      </div>
  
  );
};

export default Personality;
