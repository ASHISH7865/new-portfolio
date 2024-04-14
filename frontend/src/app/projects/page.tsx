import React from "react";
import AllProjectList from "@/components/PageComponents/Projects/AllProjectList";
import { getAllProjectCategories, getAllProjects } from "@/lib/request/getRequest";
import { Metadata } from "next";
import { portfolioConstant } from "@/lib/portfolioConstant";
import LiteProjectCard from "@/components/PageComponents/Projects/LiteProjectCard";
import Section from "@/components/Common/Section";

export const metadata: Metadata = {
  title: "Ashish Portfolio | Projects",
  description: "Ashish Portfolio",
};

const page = async () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Section id="projects" className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {portfolioConstant.projectData.projects.map((project: any, index: any) =>
          <LiteProjectCard {...project} />
        )}
        </div>
      </Section>
    </div>
  );
};

export default page;

