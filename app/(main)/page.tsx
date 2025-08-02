"use client"
import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/home/FeaturedProject ";
import AboutMeTeaser from "@/components/home/AboutMeTeaser";
import Personality from "@/components/about/Personality";
// import Expertise from "@/components/projects/expertise";
import Projects from "@/components/projects/projects";
// import WillLearn from "@/components/projects/willLearn";
import Skills from "@/components/skills/Skills";

export default  function Home() {

  
  const mySkills = [
    {name: "JavaScript",image: "/techs/javascript.png",category: "FrontEnd"},
      {name: "NextJS",image: "/techs/nextjs.png",category: "FrontEnd"},
      {name: "ReactJS",image: "/techs/react.png",category: "FrontEnd"},
      {name: "Redux",image: "/techs/redux.png",category: "FrontEnd"},
      {name: "TypeScript",image: "/techs/typescript.png",category: "FrontEnd"},
      {name: "Tailwind",image: "/techs/tailwindcss.png",category: "FrontEnd"},
      {name: "Material UI",image: "/techs//material-ui.png",category: "FrontEnd"},
      {name: "HTML5",image: "/techs/html.png",category: "FrontEnd"},
      {name: "CSS3",image: "/techs/css3.png",category: "FrontEnd"},
      {name: "Sass",image: "/techs/sass.png",category: "FrontEnd"},


      {name: "Googling",image: "/techs/google-logo.png",category: "others"},
      {name: "Vercel",image: "/techs/vercel.png",category: "others"},
      {name: "Git",image: "/techs/git.png",category: "others"},
      {name: "GitHub",image: "/techs/github.png",category: "others"},
      {name: "Firebase",image: "/techs/firebase.png",category: "others"},

      
    
     
    
  ];

  // await new Promise((resolve)=>setTimeout(resolve,3000))
  return (
    <main className=" flex flex-col gap-10 justify-center items-center py-10 z-1">
      <Personality />
      <Skills skillData={mySkills} />

      <FeaturedProject />

      {/* <Expertise /> */}
      <Projects />
      {/* <WillLearn /> */}

      {/* <Expertise classes="hidden" /> */}
    </main>
  );
}
