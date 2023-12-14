import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProjectCard = (props: any) => {
  return (
    <div className="dark:bg-[#131313] bg-[#e9ecef] p-4 rounded-2xl shadow-border [&>div>div>*]:hover:bg-opacity-0  ">
      <div className=" rounded-2xl">
        <div className="relative">
          <div
            className=" rounded-2xl
          w-full h-full absolute top-0 left-0 z-10 bg-black bg-opacity-60 transition-all duration-500
          "
          ></div>
          <Image className="rounded-2xl md:min-h-[250px]" quality={100} src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${props.image.data.attributes.url}`} alt={"img"} width={1000} height={1000} />
        </div>
        <div className="mt-4 flex flex-col justify-between h-full">
          <p className="text-md sm:text-xl text-gray-700 dark:text-gray-300 font-bold text capitalize">{props.title}</p>
          <p className="text-sm sm:text-md text-gray-700 dark:text-gray-300 font-medium capitalize mt-2">{props.description}</p>
          <div className="mt-4">
            <p className="text-xs sm:text-sm">{props?.techStack?.name}</p>
            <div className="flex flex-wrap mt-2 gap-4">
              {props?.techStack?.stack?.map((tech: any, index: number) => (
                <Badge className="scale-95 md:scal-100 mr-2" key={index}>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-4">
              <p className="text-xs sm:text-sm">{props?.links.length > 0 && "Links"}</p>
            <div className="flex flex-wrap mt-2 gap-4  ">
              {props?.links?.map((link: any, index: number) => (
                <a href={link.url} className="border-b border-primary" key={index}>
                  {link.name}
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
