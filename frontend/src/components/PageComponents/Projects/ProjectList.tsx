import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import Section from "@/components/Common/Section";
import SkeletonLoading from "./SkeletonLoading";

const ProjectContent = [
  {
    title: "Full Stack Todo App",
    description: "simple todo app using react and nodejs",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: {
      name: "Tech Stack",
      stack: ["React", "Nodejs", "Express", "MongoDB"],
    },
    links: [
      {
        name: "Github",
        url: " https://github.com",
      },
      {
        name: "Live",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Full Stack Todo App",
    description: "simple todo app using react and nodejs",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: {
      name: "Tech Stack",
      stack: ["React", "Nodejs", "Express", "MongoDB"],
    },
    links: [
      {
        name: "Github",
        url: " https://github.com",
      },
      {
        name: "Live",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Full Stack Todo App",
    description: "simple todo app using react and nodejs",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: {
      name: "Tech Stack",
      stack: ["React", "Nodejs", "Express", "MongoDB"],
    },
    links: [
      {
        name: "Github",
        url: " https://github.com",
      },
      {
        name: "Live",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Full Stack Todo App",
    description: "simple todo app using react and nodejs",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: {
      name: "Tech Stack",
      stack: ["React", "Nodejs", "Express", "MongoDB"],
    },
    links: [
      {
        name: "Github",
        url: " https://github.com",
      },
      {
        name: "Live",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Full Stack Todo App",
    description: "simple todo app using react and nodejs",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: {
      name: "Tech Stack",
      stack: ["React", "Nodejs", "Express", "MongoDB"],
    },
    links: [
      {
        name: "Github",
        url: " https://github.com",
      },
      {
        name: "Live",
        url: "https://github.com",
      },
    ],
  },
];

const ProjectList = (props : any) => {
  return (
    <Section className={`${ props.limit ? 'mt-56' : 'mt-10'}`}>
      <SectionHeader text="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0  ">
        {props?.allProjects?.map((project : any, index : any) => (
          <ProjectCard key={index} title={project.attributes?.title} description={project.attributes?.description} techStack={project?.attributes?.techStack} links={project?.attributes.Links} image={project?.attributes?.image} slug={project?.attributes?.slug} />
        ))}
      </div>
     {props.limit && <div className="flex justify-center items-center">
        <a className="text-md font-bold text-center  hover:text-blue-500" href="/projects">
          <Button>View All Projects</Button>
        </a>
      </div>}
    
    </Section>
  );
};

export default ProjectList;
