import React from "react";
import { Badge } from "../../ui/badge";

const Hero = () => {
  return (
    <section id="main" className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="lg:w-1/2 self-center">
        <h1 className=" font-extrabold text-[70px] md:text-[100px] lg:text-[150px] text-center">ASHISH</h1>
        <div className="flex flex-col  text-[15px] md:text-[15px] lg:text-[15px]  items-center justify-around text-center  ">
          <p className="w-[85%] capitalize">
            A passionate Full Stack Developer based in India specializing in building Web applications, Backend APIs and Mobile apps.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10 w-[85%]"> 
            <Badge  className="ml-1 "> React </Badge>
            <Badge className="ml-1"> Node </Badge>
            <Badge className="ml-1"> Express </Badge>
            <Badge className="ml-1"> MongoDB </Badge>
            <Badge className="ml-1"> TypeScript </Badge>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
