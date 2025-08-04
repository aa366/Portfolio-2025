"use client"
import React, { useEffect, useState } from 'react'
import {Vortex} from "@/components/ui/vortex"
import {WavyBackground} from "@/components/ui/wavy-background"
import { useTheme } from "next-themes";

const BackGround = () => {

     const {resolvedTheme} = useTheme()
     const [mounted,setMounted] = useState(false)

     useEffect(() => {
      setMounted(true)
      return () => {
        
      };
     }, []);

     if (!mounted) return null

  return (
    <div className='w-screen h-screen fixed t-0 left-0 -z-[99] '>
    { resolvedTheme == "dark"  &&  <Vortex  /> }
  { resolvedTheme == "light"  &&   <WavyBackground speed="fast" backgroundFill="hsl(0, 0%, 98%)" />}
  
    
    </div>

)
}

export default BackGround