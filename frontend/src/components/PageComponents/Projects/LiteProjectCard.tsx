"use client";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { LuFileSymlink } from "react-icons/lu";

const LiteProjectCard = ({ slug, title, description, techStack, links, image }: any) => {
  const router = useRouter();
  const handleProjectClick = () => {
    router.push(`/projects/${slug}`);
  };
  return (
    <div  className="group   px-10 py-6 rounded-md shadow-border  transform hover:-translate-y-2  transition-all duration-200">
      <div className="mt-4 flex justify-between items-center">
        <div>
          <CiFolderOn className="text-5xl group-hover:text-blue-500" />
        </div>
        <div className="flex flex-wrap mt-2 gap-4 items-center ">
          {links?.map((link: any, index: number) => (
            <a href={link?.url} className="" key={index} target="_blank">
              {link?.name === "Github" ? <FiGithub className="inline mr-1 text-xl hover:text-blue-500" /> : <FiExternalLink className="inline mr-1 text-xl hover:text-blue-500" />}
            </a>
          ))}
          {/* <LuFileSymlink className="text-xl hover:text-blue-500" onClick={handleProjectClick} /> */}
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between ">
        <div>
          <h3 className="text-md sm:text-2xl text-gray-700 dark:text-gray-300 font-bold text capitalize group-hover:text-blue-500">{title}</h3>
          <p className="text-sm sm:text-md text-gray-800 dark:text-gray-400 font-medium capitalize mt-2 line-clamp-4 min-h-[40px] leading-6">{description}</p>
        </div>
        <div className="mt-10  items-end">
          <div className="flex flex-wrap mt-2 gap-4 ">
            {techStack?.stack?.map((tech: any, index: number) => (
              <p className="text-[12px] text-gray-800 dark:text-[#dddddd]" key={index}>
                {tech?.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteProjectCard;
