"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import Section from "@/components/Common/Section";
import SkeletonLoading from "./SkeletonLoading";
import { DataDropdown } from "./FilterProjectDropdown";
import { DynamicSelect } from "@/components/Common/DynamicSelect";
import { fetcher } from "@/lib/request/fetcher";
import LiteProjectCard from "./LiteProjectCard";
import LiteProjectCardSkeleton from "./LiteProjectCardSkeleton";
type Checked = boolean | "mixed";

const sortData = [
  {
    id: 1,
    name: "Ascending (A-Z)",
  },
  {
    id: 2,
    name: "Descending (Z-A)",
  },
] as any;

const AllProjectList = ({ allProjects, categories }: any) => {
  const [filterStateData, setFilterStateData] = useState<any>(
    categories?.map((item: any) => {
      return {
        id: item.id,
        name: item.attributes.name,
        checked: false,
      };
    }) || []
  );

  const [filteredProjects, setFilteredProjects] = useState<any>(allProjects) || [];
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSortData, setCurrentSortData] = useState<number>(sortData[0].id);

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

  const fetchProjectsByFilter = async () => {
    try {
      setLoading(true);
      const filterData = filterStateData.filter((item: any) => item.checked === true);
      const filterName = filterData.map((item: any) => item.name);
      const finalQueryParams = filterName.map((item: any) => "filters[project_categories][name][$eq]=" + item).join("&");
      if (filterName.length === 0) {
        setFilteredProjects(allProjects); // enable this line if you want to show all projects when no filter is selected without skeleton loading
        setLoading(false);
        return;
      }
      const projectEndpoint = "projects?populate=deep";
      // const categoryEndpoint = "project-categories?populate=deep";
      const finalURL = projectEndpoint + "&" + finalQueryParams;
      const filtredprojectResponse = await fetcher(finalURL);
      setFilteredProjects(filtredprojectResponse?.data);
      setLoading(false);
    } catch (err) {
      // if error then set all projects
      setFilteredProjects(allProjects || []);
      console.log(err);
    }
  };

  const handleSortData = (id: number) => {
    setCurrentSortData(id);
    sortProjectsByName();

  }

  const sortProjectsByName = () => {
    let sortedProjects = [...filteredProjects];

    if (currentSortData === 1) {
      // Sort A-Z
      sortedProjects.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title));
    } else if (currentSortData === 2) {
      // Sort Z-A
      sortedProjects.sort((a, b) => b.attributes.title.localeCompare(a.attributes.title));
    }

    setFilteredProjects(sortedProjects);
    
  };

 
  useEffect(() => {
    fetchProjectsByFilter();
 // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStateData]);

  useEffect(() => {
    sortProjectsByName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSortData]);

  return (
    <Section className="mt-10">
      <div className="flex gap-8">
        <DataDropdown name={"Filter"} Data={filterStateData} handleSetData={handleFilterState} />
        <DynamicSelect selectLabel={"Sort"} data={sortData} handleStateData={handleSortData}  placeholder={"Sort By Name"}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10  md:px-0  ">
        {!loading &&
          filteredProjects?.map((project: any, index: any) => (
            <LiteProjectCard
              key={index}
              title={project.attributes?.title}
              description={project.attributes?.description}
              techStack={project?.attributes?.techStack}
              links={project?.attributes.Links}
              image={project?.attributes?.image}
              slug={project?.attributes?.slug}
            />
          ))}
        {loading && [1, 2, 3].map((item: any) => <LiteProjectCardSkeleton key={item} />)}
      </div>
    </Section>
  );
};

export default AllProjectList;
