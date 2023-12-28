// pages/projects/[slug].js

import Section from "@/components/Common/Section";
import InfoCard from "@/components/Common/card/InfoCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

const projectData = [
  {
    slug: "project-2",
    title: "Social Network Platform",
    description: `
      Our Social Network Platform is a dynamic and engaging space designed to connect people from around the world. 
      With a focus on fostering meaningful connections, this platform goes beyond traditional social networks by introducing innovative features.
      Users can share moments, join communities, and build lasting relationships in a secure and vibrant online environment.
    `,
    imageUrl: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww",
    challenges: `
      Building a Social Network Platform comes with its own set of challenges. 
      Ensuring user privacy and data security were top priorities. Additionally, creating an intuitive and responsive user interface to facilitate seamless interactions posed a creative and technical challenge.
    `,
    solution: `
      To address privacy concerns, we implemented robust encryption and privacy settings, empowering users to control their data. 
      The user interface was crafted with user experience in mind, leveraging React for dynamic and responsive interactions.
    `,
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSocket"],
    features: ["Profile Creation and Customization", "Real-time Messaging with WebSocket", "Community Forums and Discussions", "Event Creation and Participation", "Privacy Settings and Data Encryption"],
    outcome: `
      The Social Network Platform garnered a diverse user base, with users appreciating the emphasis on privacy and the dynamic features that promote genuine connections. 
      Engagement levels soared, establishing the platform as a go-to destination for online socializing.
    `,
    codeRepository: "https://github.com/your-username/project-2",
    demoLink: "https://project2-demo.com",
    timeline: "8 months",
    futureEnhancements: `
      In the future, we plan to enhance the platform by integrating advanced machine learning algorithms for personalized content recommendations. 
      Additionally, we aim to expand the platform's reach by launching mobile applications for both iOS and Android.
    `,
  },
  // Add more projects as needed
];

const ProjectDetail = () => {
  const { title, description, imageUrl, challenges, solution, technologies, features, outcome, codeRepository, demoLink, timeline, futureEnhancements } = projectData[0];

  return (
    <Section className="max-w-screen-xl mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1 space-y-4  shadow-border rounded-2xl ">
          <div className=" rounded-lg overflow-hidden">
            <Image src={imageUrl} alt={title} className="object-cover transition-transform transform w-full h-96 hover:scale-105 duration-300 ease-in-out" width={500} height={500} />
          </div>
          <div className=" p-6 rounded-2xl ">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className=" flex gap-4 flex-wrap">
              {features.map((feature, index) => (
                <Badge key={index}>{feature}</Badge>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-1 shadow-border rounded-2xl ">
          <div className=" p-6 rounded-md ">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>

            <p>{description}</p>
          </div>
          <Separator orientation="horizontal" />
          <div className=" p-6 rounded-md ">
            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
            <p>{challenges}</p>
          </div>
          <Separator orientation="horizontal" />
          <div className=" p-6 rounded-md ">
            <h2 className="text-2xl font-bold mb-4">Solution</h2>
            <p>{solution}</p>
          </div>
          <Separator orientation="horizontal" />
          <div className=" p-6 rounded-md ">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex gap-5 flex-wrap">
              {technologies.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-md ">
            <h2 className="text-2xl font-bold mb-4">Timeline</h2>
            <Badge>{timeline}</Badge>
          </div>
        </div>
      </div>

      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className=" col-span-3 md:col-span-1 row-span-full">
          <InfoCard cardTitle="Project Outcome">
            <p>{outcome}</p>
          </InfoCard>
        </div>

        <div className="col-span-3 md:col-span-1">
          <InfoCard cardTitle="Project Details">
            <p className="text-sm">Click the link below to view the project repository on GitHub.</p>
            <a href={codeRepository} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-lg mt-5 hover:underline">
              {codeRepository}
            </a>
          </InfoCard>
        </div>

        <div className=" col-span-3 md:col-span-1 row-span-2 ">
          <InfoCard cardTitle="Project Demo">
            <p className="text-sm">Click the link below to view the project demo.</p>
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-lg mt-5 hover:underline">
              {demoLink}
            </a>
            <div className="mt-10">
              <h4>Demo Account</h4>
              <p>Username : aklshfkasjdlkajsd</p>
              <p>Password : sklfjksjfksdjfklsdj</p>
            </div>
          </InfoCard>
        </div>

        <div className=" md:col-span-2 col-span-3">
          <InfoCard cardTitle="Future Enhancements">
            <p>{futureEnhancements}</p>
          </InfoCard>
        </div>
      </div>
    </Section>
  );
};

export default ProjectDetail;
