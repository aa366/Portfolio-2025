import { useState } from "react";
import { skill } from "@/types/main";
import SkillCard from "./SkillCard";
import SectionWrapper from "../SectionWrapper";

interface Props {
  skillData: skill[];
}

const Skills = ({ skillData }: Props) => {
  const title = "Tech Stack";

  const categories = Array.from(
    new Set(skillData.map((s: { category: string }) => s.category))
  );
  const [category, setCategory] = useState(categories[0]);

  return (
    <SectionWrapper id="skills" className="w-full">
      <h2 className="text-4xl text-center">{title}</h2>

      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-gray-800 p-2 flex justify-between items-center gap-3 rounded-md">
        {categories.map((c: string, i: number) => (
          <span
            key={i}
            onClick={() => setCategory(c)}
            className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${
              category.toLowerCase() === c.toLowerCase()
                ? "bg-violet-600 dark:bg-violet-600 text-white"
                : "bg-gray-200 dark:bg-gray-600  dark:hover:bg-gray-500 hover:dark:bg-grey-900"
            } transition-all capitalize`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
        {skillData
          .filter(
            (s: skill) => s.category.toLowerCase() === category.toLowerCase()
          )
          .map((s, i: number) => (
            <SkillCard key={i} {...s} />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
