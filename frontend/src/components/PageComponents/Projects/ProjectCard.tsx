"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithubAlt } from "react-icons/fa6";
import { ImLink } from "react-icons/im";
import { useRouter } from "next/navigation";

const ProjectCard = ({ slug, title, description, techStack, links, image }: any) => {
  const router = useRouter();
  const handleProjectClick = () => {
    router.push(`/projects/${slug}`);
  };
  return (
    <div className="dark:bg-[#131313] bg-[#e9ecef] p-4 rounded-2xl shadow-border [&>div>div>*]:hover:bg-opacity-0  ">
      <div className=" rounded-2xl flex flex-col ">
        <div className="relative cursor-pointer" onClick={handleProjectClick}>
          <div
            className=" rounded-2xl
          w-full h-full absolute top-0 left-0 z-10 bg-black bg-opacity-30 transition-all duration-500
          "
          ></div>
          {image?.data && <Image className="rounded-2xl sm:h-[300px] " quality={100} src={`${image?.data?.attributes?.url}`} alt={"img"} width={1000} height={1000} />}{" "}
        </div>
        <div className="mt-4 flex flex-col">
          <p className="text-md sm:text-xl text-gray-700 dark:text-gray-300 font-bold text capitalize">{title}</p>
          <p className="text-sm sm:text-md text-gray-700 dark:text-gray-300 font-medium capitalize mt-2 line-clamp-2 min-h-[40px]">{description}</p>
          <div className="mt-4 min-h-[100px]">
            <p className="text-xs sm:text-sm">{techStack?.name}</p>
            <div className="flex flex-wrap mt-2 gap-4 ">
              {techStack?.stack?.map((tech: any, index: number) => (
                <Badge className="scale-95 md:scal-100 mr-2" key={index}>
                  {tech?.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs sm:text-sm">{links?.length > 0 && "Links"}</p>
            <div className="flex flex-wrap mt-2 gap-4  ">
              {links?.map((link: any, index: number) => (
                <a href={link?.url} className="" key={index} target="_blank">
                  <Button className="text-xs sm:text-sm">
                    {link?.name === "Github" ? <FaGithubAlt className="inline mr-1" /> : <ImLink className="inline mr-1" />}
                    {link?.name}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
