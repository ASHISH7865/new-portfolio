import Hero from "@/components/PageComponents/Hero/Hero";
import Navbar from "@/components/PageComponents/Navbar/Navbar";
import ProjectCard from "@/components/PageComponents/Projects/ProjectCard";
import Skills from "@/components/PageComponents/Skills/Skills";

const componentMap = {
  Header: Navbar,
  Hero: Hero,
  Skills: Skills,
};

export default async function Home() {
  const data = await getServerSideProps();
  const renderComponents = data?.map((component: any, index: number) => {
    const Component = componentMap[component.ComponentName as keyof typeof componentMap];
    if (!Component) {
      return null;
    }
    return <Component key={index} {...component} />;
  });

  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      {renderComponents?.length > 0 ? renderComponents : <h1> No Components Found</h1>}
      <div className="lg:w-[80%] w-full  m-auto">
        <h1 className="text-3xl font-bold text-center my-14">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0  ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex justify-end items-end">
          <a className="text-md font-bold text-center  hover:text-blue-500" href="/projects">
            View All Projects --&gt;
          </a>
        </div>
      </div>
    </div>
  );
}

async function getServerSideProps() {
  const url = process.env.NEXT_STRAPI_LOCAL_API_URL + "/api/";
  const endpoint = "my-portfolio?populate=deep";
  const res = await fetch(url + endpoint);
  const result = await res.json();
  const data = result?.data?.attributes?.portfolioData;
  return data;
}
