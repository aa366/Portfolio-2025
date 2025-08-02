"use client"
import React from "react";
// import data from "@/data/home.json";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

const Personality = () => {

  const titles = ["abdelwahab Anwr ","Front end developer"]
  const ctitle = "I am"
  const para = "Hard working Front-End Developer🤩 with expertise in building responsive, user-friendly web interfaces. Skilled in modern front-end technologies 💥 like Sass, Next JS, Tailwind, and frameworks such as React, focuses on creating seamless and visually appealing digital experiences. With a strong eye for design and performance optimization, 💛 ensures that applications are both functional and engaging for users."
  const btns = [
    {name:"resume",src:"https://drive.google.com/file/d/1F5HMtHwTvk-CZYvFoEjdXVEMtC8dq2w6/view?usp=drive_link"},
    {name:"Cover Letter",src:"https://drive.google.com/file/d/1Wl9CM995z9-KNyDGJCSHqizYsENJEZju/view?usp=drive_link"}
  ]
  
 
  const img = "/ME.jpg"
  const wavingHand = "/imgs/waving-hand.gif"
  const welcomMSG = "hey"

  

  return (
   
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-[5%] w-fit  p-[2%] pt-0">

        <Image
          src={img}
          alt=""
          width={100}
          height={100}
          className=" rounded-[100%] w-1/2 max-w-[400px] flex justify-self-center md:w-full  aspect-square object-cover self-center"
        />

        <div className="w-full p-3">
       


          <div className="inset-0  backdrop-blur-lg p-2 bg-[#fffdfd3f]   dark:bg-none ">
             <div className="flex items-center gap-1">
                        <Image unoptimized={true} alt='waving-hand' width={30} height={30} src={wavingHand} />
                        <p className="text-lg md:text-xl mt-2 md:mt-1.5">
                           {welcomMSG}
                        </p>
                    </div>


              <h1 className="text-3xl font-bold text-center text-amber-700 dark:text-amber-300 flex gap-2">
                <span>{ctitle}</span>
                <Typewriter
                            options={{
                                strings: titles,
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 50,
                                wrapperClassName: "text-violet-800 dark:text-violet-300 text-3xl md:text-3xl font-medium",
                                cursorClassName: "text-violet-800 dark:text-violet-300 text-3xl md:text-3xl"
                            }}
                        />
           
          </h1>

          <p className="text-[1.3rem] font-bold text-balance text-center sm:text-2xl">
            {para}
          </p>
          </div>

        

          <div className="flex justify-between my-[3%] font-medium">

            {
              btns.map((ele)=>{

                return(
                    <a className="p-[3px] relative cursor-pointer w-fit flex  capitalize" href={ele.src} target="_blanck" key={ele.src}>
             
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />

                <div className="px-8 py-2 bg-violet-400 text-black dark:bg-black dark:text-white rounded-[6px]  relative group transition duration-200  hover:bg-transparent">
                  {ele.name}
                </div>
            
            </a>
                  
                )
              })
            }

          
          
          </div>

        </div>
      </div>
  
  );
};

export default Personality;
