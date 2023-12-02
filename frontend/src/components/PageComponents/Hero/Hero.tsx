import React from "react";
import { Badge } from "../../ui/badge";

const Hero = (props : any) => {
  return (
    <section id="main" className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="lg:w-1/2 self-center">
        <h1 className=" font-extrabold text-[70px] md:text-[100px] lg:text-[150px] text-center">{props.Title}</h1>
        <div className="flex flex-col  text-[15px] md:text-[15px] lg:text-[15px]  items-center justify-around text-center  ">
          <p className="w-[85%] capitalize">
           {props.Description}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10 w-[85%]"> 
          {
            props?.TopSkills?.map((skill : any) => {
              return <Badge  key={skill.id} className="ml-1"> {skill.SkillName} </Badge>
            } )
          }
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
