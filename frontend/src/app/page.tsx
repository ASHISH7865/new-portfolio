import Hero from "@/components/PageComponents/Hero/Hero";
import Navbar from "@/components/PageComponents/Navbar/Navbar";
import Skills from "@/components/PageComponents/Skills/Skills";

const componentMap = {
  Header: Navbar,
  Hero: Hero,
  skills: Skills,
};

export default async function Home() {
  const data = await getServerSideProps();
  const renderComponents = data?.map((component: any, index: number) => {
    const Component = componentMap[component.ComponentName as keyof typeof componentMap];
    console.log(Component);
    if (!Component) {
      return null;
    }
    return <Component  key={index} {...component}  />;
  });

  return <div className="max-w-screen-2xl mx-auto p-4">{renderComponents?.length > 0 ? renderComponents : <h1> No Components Found</h1>}</div>;
}

async function getServerSideProps() {
  const url = process.env.NEXT_STRAPI_PROD_URL + "/api/";
  console.log(url);
  const endpoint = "my-portfolio?populate=deep";
  const res = await fetch(url + endpoint);
  const result = await res.json();
  const data = result?.data?.attributes?.portfolioData;
  return data;
}
