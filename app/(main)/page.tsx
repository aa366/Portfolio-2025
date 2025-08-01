import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/home/FeaturedProject ";
import AboutMeTeaser from "@/components/home/AboutMeTeaser";
import Personality from "@/components/about/Personality";
import Expertise from "@/components/projects/expertise";
import Projects from "@/components/projects/projects";
import WillLearn from "@/components/projects/willLearn";

export default async function Home() {
  
    // await new Promise((resolve)=>setTimeout(resolve,3000))
  return (
   <main className=" flex flex-col gap-10 justify-center items-center py-10 z-1">
     <Personality />
   
   <FeaturedProject />
    
      <Expertise />
    <Projects />
    <WillLearn />
    
        <Expertise classes="hidden"/>
   </main>
  );
}
