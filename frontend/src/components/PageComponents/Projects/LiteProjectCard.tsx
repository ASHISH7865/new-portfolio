"use client";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
import Link from "next/link";

const LiteProjectCard = (props: any) => {
  return (
    <div className="group px-10 py-6 rounded-md shadow-border">
      <div className="mt-4 flex justify-between items-center">
        <div>
          <CiFolderOn className="text-5xl group-hover:text-blue-500" />
        </div>
        <div className="flex flex-wrap mt-2 gap-4 items-center ">
          <Link href={props.githubLink}>
            <FiGithub className="inline mr-1 text-xl hover:text-blue-500" />
          </Link>
          <Link href={props.projectLink}>
            <FiExternalLink className="inline mr-1 text-xl hover:text-blue-500" />
          </Link>
          {/* <LuFileSymlink className="text-xl hover:text-blue-500" onClick={handleProjectClick} /> */}
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between ">
        <div>
          <h3 className="text-md sm:text-2xl text-gray-700 dark:text-gray-300 font-bold text capitalize group-hover:text-blue-500">{props.title}</h3>
          <p className="text-sm sm:text-md text-gray-800 dark:text-gray-400 font-medium capitalize mt-2 line-clamp-4 min-h-[40px] leading-6">{props.description}</p>
        </div>
        <div className="mt-10  items-end">
          <div className="flex flex-wrap mt-2 gap-4 ">
            {props.techStack?.stack?.map((tech: any, index: number) => (
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
