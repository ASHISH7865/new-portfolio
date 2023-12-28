import React from "react";
import { Badge } from "../../ui/badge";
import Section from "@/components/Common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = (props: any) => {
  return (
    <Section id="hero" className="flex flex-col items-center justify-center min-h-screen py-2 -mt-32">
      <div className="lg:w-1/2 self-center">
        <h1 className=" font-extrabold text-[70px] md:text-[100px] lg:text-[150px] text-center">{props.title}</h1>
        <div className="flex flex-col  text-[15px] md:text-[15px] lg:text-[15px]  items-center justify-around text-center  ">
          <p className="w-[85%] capitalize">{props.description}</p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10 w-[85%]">
            {props?.topSkills?.map((skill: any) => {
              return (
                <Badge key={skill.id} className="ml-1">
                  {" "}
                  {skill.title}{" "}
                </Badge>
              );
            })}
          </div>
          <Button className=" shadow-border mt-10">
            <Link href="/about">About Me</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
