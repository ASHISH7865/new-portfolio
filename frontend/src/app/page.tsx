import Hero from "@/components/PageComponents/Hero/Hero";
import Navbar from "@/components/PageComponents/Navbar/Navbar";
import Skills from "@/components/PageComponents/Skills/Skills";
import Projects from "@/components/PageComponents/Projects/Projects";
import Contact from "@/components/PageComponents/Contact/Contact";
import { getPortfolioComponent, getProjects, getFeaturedProjects } from "@/lib/request/getRequest";
import { Metadata } from "next";

const componentMap = {
  Hero: Hero,
  Skills: Skills,
  Projects: Projects,
};

export const metadata: Metadata = {
  title: "Ashish Portfolio | Home",
  description: "Ashish Portfolio",
};

export default async function Home() {
  const data = await getServerSideProps();
  const renderComponents = data?.data?.map((component: any, index: number) => {
    const Component = componentMap[component.ComponentName as keyof typeof componentMap];
    if (!Component) {
      return null;
    }
    return <Component key={index} {...component} />;
  });

  return (
    data && (
      
      <div className="max-w-screen-xl mx-auto ">
        {renderComponents?.length > 0 ? renderComponents : <h1 className="text-center mt-20"> No Components Found</h1>}
      </div>
    )
  );
}

async function getServerSideProps() {
  const data = await getPortfolioComponent();
  const AllProject = await getProjects(3);
  const FeaturedProject = await getFeaturedProjects();

  const NewAllProject = {
    id: "all-projects",
    __component: "projects.all-projects",
    sectionHeader: "All Projects",
    data: {
      allProjects: AllProject,
      featuredProject: FeaturedProject,
    },
    ComponentName: "Projects",
  };

  data?.push(NewAllProject);

  return {
    data,
  };
}
