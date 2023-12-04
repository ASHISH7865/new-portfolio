import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectSwiper from "./ProjectSwiper";
import SectionHeader from "@/components/Common/SectionHeader";
import Section from "@/components/Common/Section";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <Section id="projects">
      <section> 
        <SectionHeader text="Featured Projects" />
        <ProjectSwiper />
      </section>
      <section className="mt-10">
        <SectionHeader text="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0  ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex justify-center items-center">
          <a className="text-md font-bold text-center  hover:text-blue-500" href="/projects">
           <Button>View All Projects</Button>
          </a>
        </div>
      </section>
    </Section>
  );
};

export default Projects;
