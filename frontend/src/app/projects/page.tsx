import ProjectList from "@/components/PageComponents/Projects/ProjectList";
import { FilterProjectDropdown } from "@/components/PageComponents/Projects/FilterProjectDropdown";
import React from "react";
import AllProjectList from "@/components/PageComponents/Projects/AllProjectList";

const page = async () => {
  const { data,categories } = await getServerSideProps();
  
  return (
    <div className="p-5">
      <AllProjectList allProjects={data.data} categories={categories} />
    </div>
  );
};

export default page;

async function getServerSideProps() {
  const url = process.env.NEXT_STRAPI_API_URL + "/api/";
  const projectEndpoint = "projects?populate=deep";
  const categoryEndpoint = "project-categories?populate=deep";
  const res = await fetch(url + projectEndpoint);
  const projectResponse = await res.json();

  const res2 = await fetch(url + categoryEndpoint);
  const categoryResponse = await res2.json();

  return {
    data: projectResponse,
    categories: categoryResponse,
  };
}
