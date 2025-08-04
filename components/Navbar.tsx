"use client";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ModeToggle } from "@/components/ui/togglebtn";

export default function Navbar({ otherClasses = "" }) {
  const navItems = [{ name: "home", href: "/" }];
  const [navShow, setNavShow] = useState("right-[100%]");
  const [divShow, setDivShow] = useState("hidden");

  const handleShow = () => {
    if (navShow == "right-0") {
      setNavShow("right-[100%]");
      setDivShow("hidden");
    } else if (navShow == "right-[100%]") {
      setNavShow("right-0");
      setDivShow("block");
    }
  };

  return (
   
      <nav
        className={`nav-bar w-full flex py-4  text-black bg-[hsl(0,0%,98%)]  dark:bg-gray-900 dark:text-white text-4xl  justify-between px-[5%]   shadow-md ${otherClasses}  `}
      >
        <div className="self-center flex justify-center items-center ">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Abdelwahab
          </span>
        </div>

        <div
          className={` fixed h-screen w-screen bg-gray-300 left-0 top-0 opacity-50 z-40 ${divShow} `}
          onClick={handleShow}
        />
        <div className="flex gap-2">
          <div className="flex gap-5 md:gap-2 lg:gap-5 items-center ">
            <div className="flex self-center cursor-pointer ">
              <ModeToggle />
            </div>

            <button className=" cursor-pointer" onClick={handleShow}>
              <FaBars />
            </button>
          </div>

          <ul
            className={`flex flex-col items-center  gap-[3%] text-2xl h-screen   fixed z-[500] bg-white  dark:bg-gray-900  dark:text-white p-2 transition ${navShow}  top-0 `}
          >
            <IoMdClose
              className="  cursor-pointer hover:text-amber-500 text-4xl "
              onClick={handleShow}
            />
            {navItems.map((ele, idx) => {
              return (
                <li
                  onClick={handleShow}
                  key={ele.href + idx}
                  className="cursor-pointer  rounded-lg p-3 md:animate-chaking hover:animate-none"
                > 
                  <Link className="h-full w-full capitalize" href={`${ele.href}`}>
                   {ele.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    
  );
}
