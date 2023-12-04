import Hero from "@/components/PageComponents/Hero/Hero";
import Navbar from "@/components/PageComponents/Navbar/Navbar";
import Skills from "@/components/PageComponents/Skills/Skills";
import Projects from "@/components/PageComponents/Projects/Projects";

const componentMap = {
  Header: Navbar,
  Hero: Hero,
  Skills: Skills,
  Projects: Projects,
};

export default async function Home() {
  const data = await getServerSideProps();
  // console.log(data);
  const renderComponents = data?.data?.map((component: any, index: number) => {
    const Component = componentMap[component.ComponentName as keyof typeof componentMap];
    if (!Component) {
      return null;
    }
    return <Component key={index} {...component} />;
  });

  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      {renderComponents?.length > 0 ? renderComponents : <h1> No Components Found</h1>}
    </div>
  );
}

async function getServerSideProps() {
  const url = process.env.NEXT_STRAPI_API_URL + "/api/";
  const endpoint = "my-portfolio?populate=deep";
  const projectEndpoint = "projects?populate=deep&pagination[limit]=3";
  const featuredProjectEndpoint = "projects?populate=deep&filters[featured]=true";
  const res = await fetch(url + endpoint);
  const result = await res.json();
  const data = result?.data?.attributes?.portfolioData;

  const AllProjectData = await fetch(url + projectEndpoint);
  const AllProjectResult = await AllProjectData.json();
  const AllProject = AllProjectResult?.data

  const FeaturedProjectData = await fetch(url + featuredProjectEndpoint);
  const FeaturedProjectResult = await FeaturedProjectData.json();
  const FeaturedProject = FeaturedProjectResult?.data

  
  const NewAllProject = {
    id: "all-projects",
    __component: "projects.all-projects",
    sectionHeader: "All Projects",
    data: {
      allProjects: AllProject,
      featuredProject: FeaturedProject
    },
    ComponentName: "Projects",
  }
  
  
  
  data.push(NewAllProject)
  
  return {
    data
  }
}
