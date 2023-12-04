import Hero from "@/components/PageComponents/Hero/Hero";
import Navbar from "@/components/PageComponents/Navbar/Navbar";
import Skills from "@/components/PageComponents/Skills/Skills";
import Projects from "@/components/PageComponents/Projects/Projects";

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
      <Projects />
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
