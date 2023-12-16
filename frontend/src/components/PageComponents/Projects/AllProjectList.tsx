"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import Section from "@/components/Common/Section";
import SkeletonLoading from "./SkeletonLoading";
import { FilterProjectDropdown } from "./FilterProjectDropdown";
type Checked = boolean | "mixed";

const AllProjectList = ({ allProjects, categories }: any) => {
  const [filterStateData, setFilterStateData] = React.useState<any>(
    categories?.data?.map((item: any) => {
      return {
        id: item.id,
        name: item.attributes.name,
        checked: false,
      };
    }) || []
  );

  const handleFilterState = (checked: Checked, id: number, name: string) => {
    const newData = filterStateData.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          checked: checked,
        };
      }
      return item;
    });
    setFilterStateData(newData);
   
  };

  return (
    <Section className="mt-10">
      <FilterProjectDropdown filterData={filterStateData} handleFilterState={handleFilterState} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-5 md:px-0  ">
        {allProjects?.map((project: any, index: any) => (
          <ProjectCard
            key={index}
            title={project.attributes?.title}
            description={project.attributes?.description}
            techStack={project?.attributes?.techStack}
            links={project?.attributes.Links}
            image={project?.attributes?.image}
            slug={project?.attributes?.slug}
          />
        ))}
      </div>
    </Section>
  );
};

export default AllProjectList;
