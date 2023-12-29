import React from "react";
import AllProjectList from "@/components/PageComponents/Projects/AllProjectList";
import { getAllProjectCategories, getAllProjects } from "@/lib/request/getRequest";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashish Portfolio | Projects",
  description: "Ashish Portfolio",
};

const page = async () => {
  const { data, categories } = await getServerSideProps();
  return (
    <div className="max-w-screen-xl mx-auto">
      <AllProjectList allProjects={data} categories={categories} />
    </div>
  );
};

export default page;

async function getServerSideProps() {
  const allProjects = await getAllProjects();
  const allProjectCategories = await getAllProjectCategories();

  return {
    data: allProjects,
    categories: allProjectCategories,
  };
}
