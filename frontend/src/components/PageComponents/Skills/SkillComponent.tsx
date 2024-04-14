import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { GrHeroku } from "react-icons/gr";
import { SiNetlify } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiDocker } from "react-icons/si";

const skillMap = [
  {
    title: "React",
    icon: <FaReact className="text-5xl text-sky-800  " />,
  },
  {
    title: "Node",
    icon: <FaNode className="text-5xl text-green-800  " />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="text-5xl text-cyan-800  " />,
  },
  {
    title: "JavaScript",
    icon: <IoLogoJavascript className="text-5xl text-yellow-800  " />,
  },
  {
    title: "MongoDB",
    icon: <DiMongodb className="text-5xl text-green-800  " />,
  },
  {
    title: "Github",
    icon: <AiFillGithub className="text-5xl text-gray-800  " />,
  },
  {
    title: "Heroku",
    icon: <GrHeroku className="text-5xl text-purple-800  " />,
  },
  {
    title: "Netlify",
    icon: <SiNetlify className="text-5xl text-blue-800  " />,
  },
  {
    title: "Vercel",
    icon: <SiVercel className="text-5xl text-black dark:text-white " />,
  },
  {
    title: "Docker",
    icon: <SiDocker className="text-5xl text-blue-800  " />,
  },
];

const Skill = () => {
  return (
    <div className="flex gap-4 justify-center flex-wrap ">
      {skillMap.map((skill: any) => (
        <TooltipProvider key={skill.title}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div key={skill.title} className="p-4  relative rounded-md hover:bg-slate-100 dark:hover:bg-slate-900  shadow-border ">

                {skill.icon}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{skill.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default Skill;
