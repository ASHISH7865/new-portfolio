import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="dark:bg-[#131313] bg-[#e9ecef] p-4 rounded-2xl shadow-border [&>div>div>*]:hover:bg-opacity-0  ">
      <div className=" rounded-2xl">
        <div className="relative">
          <div className=" rounded-2xl
          w-full h-full absolute top-0 left-0 z-10 bg-black bg-opacity-60 transition-all duration-500
          "></div>
        <Image className="rounded-2xl " quality={100} src={"https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={"img"} width={1000} height={1000} />
        </div>
        <div className="mt-4">
            <p className="text-xl text-gray-700 dark:text-gray-300 font-bold text capitalize">Full Stack Todo App</p>
            <p className="text-md text-gray-700 dark:text-gray-300 font-medium capitalize mt-2">simple todo app using react and nodejs</p>
            <div className="mt-4">
              <p className="text-sm">Tech Stack</p>
              <div className="flex flex-wrap mt-2 gap-4">
                <Badge className=" mr-2">React</Badge>
                <Badge className=" mr-2">Nodejs</Badge>
                <Badge className=" mr-2">Express</Badge>
                <Badge className=" mr-2">MongoDB</Badge>
                </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">Links</p>
              <div className="flex flex-wrap mt-2">
                <a href="#" className="mr-2 bg-[#333333] text-white px-2 py-1 rounded">Github</a>
                <a href="#" className="mr-2 bg-[#333333] text-white px-2 py-1 rounded">Live</a>
                </div> 
                </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
