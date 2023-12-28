import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import Section from "@/components/Common/Section";
import SkeletonLoading from "./SkeletonLoading";
import LiteProjectCard from "./LiteProjectCard";
import Link from "next/link";

const ProjectList = (props : any) => {
  return (
    <Section id="projects" className={`${ props.limit ? 'mt-56' : 'mt-10'}`}>
      <SectionHeader text="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0  ">
        {props?.allProjects?.map((project : any, index : any) => (
          <LiteProjectCard key={index} title={project.attributes?.title} description={project.attributes?.description} techStack={project?.attributes?.techStack} links={project?.attributes.Links} image={project?.attributes?.image} slug={project?.attributes?.slug} />
        ))}
      </div>
     {props.limit && <div className="flex justify-center items-center">
        <Link className="text-md font-bold text-center  hover:text-blue-500" href="/projects">
          <Button>View All Projects</Button>
        </Link>
      </div>}
    
    </Section>
  );
};

export default ProjectList;
