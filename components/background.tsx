"use client"
import React from 'react'
import {Vortex} from "@/components/ui/vortex"
import {WavyBackground} from "@/components/ui/wavy-background"

import { useTheme } from "next-themes";

const BackGround = () => {
     const {theme} = useTheme()
  return (
    <div className='w-screen h-screen fixed t-0 left-0 -z-[99] '>
    { theme == "dark"  &&  <Vortex  /> }
  { theme == "light"  &&   <WavyBackground speed="fast" backgroundFill="white" />}
  
    
    </div>

)
}

export default BackGround