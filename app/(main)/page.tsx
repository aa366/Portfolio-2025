"use client"

import Personality from "@/components/about/Personality";
import Contact from "@/components/Contact";
// import Expertise from "@/components/projects/expertise";
// import Projects from "@/components/projects/old_projects";
// import WillLearn from "@/components/projects/willLearn";
import Projects from "@/components/projects/projects";
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
      {name: "Shadcn",image: "/techs/shadcn.png",category: "FrontEnd"},
      {name: "Axios",image: "/techs/axios.png",category: "FrontEnd"},
      {name: "ESLint",image: "/techs/ESLint.png",category: "FrontEnd"},
      {name: "Prettier",image: "/techs/Prettier.png",category: "FrontEnd"},
      {name: "Light House",image: "/techs/LightHouse.png",category: "FrontEnd"},
   


      {name: "Googling",image: "/techs/google-logo.png",category: "others"},
      {name: "Vercel",image: "/techs/vercel.png",category: "others"},
      {name: "Git",image: "/techs/git.png",category: "others"},
      {name: "GitHub",image: "/techs/github.png",category: "others"},
      {name: "Firebase",image: "/techs/firebase.png",category: "others"},

      
    
     
    
  ];

  const myProjects = [
    {
     name: "Personal E-commerce App",
    image: "/PE-commerce.png",
    techstack: "nextjs, tailwindcss,shadcn ",
    category: "frontend",
    links: {
        visit: "https://al-safwa-charitable-foundation.vercel.app/",
        code: "https://github.com/aa366/Al-Safwa-Charitable-Foundation",
        video: ""
    }
},
    {
     name: "Al-Safwa-Charitable-Foundation",
    image: "/charity-safawt.png",
    techstack: "nextjs, tailwindcss,shadcn ",
    category: "frontend",
    links: {
        visit: "https://al-safwa-charitable-foundation.vercel.app/",
        code: "https://github.com/aa366/Al-Safwa-Charitable-Foundation",
        video: ""
    }
},
    {
     name: "el safwat collage",
    image: "/colleage-safwat.png",
    techstack: "nextjs, tailwindcss,shadcn ",
    category: "frontend",
    links: {
        visit: "https://el-safwat-collage.vercel.app/",
        code: "https://github.com/aa366/el-safwat-collage",
        video: ""
    }
},
    {
     name: "Portfolio 2025",
    image: "/portfolio.png",
    techstack: "nextjs, tailwindcss,shadcn ",
    category: "frontend",
    links: {
        visit: "",
        code: "https://github.com/aa366/Portfolio-2025",
        video: ""
    }
},
  ]



  // await new Promise((resolve)=>setTimeout(resolve,3000))
  return (
    <main className=" flex flex-col gap-10 justify-center items-center py-10 z-1">
      <Personality />
      <Skills skillData={mySkills} />
      <Projects  projectsData={myProjects} />
      <Contact  />

      
    </main>
  );
}
