import DynamicTab from "@/components/Common/DynamicTab";
import MusicPlayer from "@/components/Common/MusicPlayer/MusicPlayer";
import InfoCard from "@/components/Common/card/InfoCard";
import AboutMeCard from "@/components/PageComponents/AboutMe/AboutMeCard";
import ValorantCard from "@/components/PageComponents/AboutMe/ValorantCard";
import { getAboutPageData } from "@/lib/request/getRequest";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashish Portfolio | About",
  description: "Ashish Portfolio",
};



// const AboutMe = [
//   { key: "About Me", value: "Hello there! I'm Ashish, a passionate 24-year-old software engineer based in the vibrant city of Noida, India. I find joy in crafting digital experiences and solving complex problems through code." },
//   {
//     key: "professional Background",
//     value:
//       "I'm a front-end developer who specializes in Next.js and React. My tech journey includes learning about backend technologies like Node.js, Express, MongoDB, and Prisma. This broad skill set helps me work smoothly across the entire software development process.",
//   },
//   {
//     key: "experience",
//     value:
//       "I've been working with React for about 2 years, focusing on getting better and learning more. This experience has not only improved my technical skills but also helped me understand how to build web apps that are both scalable and efficient.",
//   },
//   {
//     key: "current Focus",
//     value:
//       "Currently, my focus centers on React and Next.js for front-end development. I'm actively exploring backend technologies and aiming to skill up in Node.js and Rust. Additionally, I'm eager to learn DevOps practices to enhance deployment and system maintenance. This blend of front-end expertise, backend aspirations, and DevOps interest reflects my commitment to a well-rounded skill set in web development.",
//   },
// ];

// const MusicList = [
//   {
//     name: "Tum hi ho",
//     author: "Arijit Singh",
//     image: "/songs/thumbnail/song4.jpg",
//     audio: "/songs/audio/song4.mp3",
//     duration: 262,
//   },
//   {
//     name: "Apna Bana Le",
//     author: "Arijit Singh",
//     image: "/songs/thumbnail/song1.jpg",
//     audio: "/songs/audio/song1.mp3",
//     duration: 204,
//   },
//   {
//     name: "Mai rang sharbaton ka",
//     author: "Arijit Singh",
//     image: "/songs/thumbnail/song3.jpg",
//     audio: "/songs/audio/song3.mp3",
//     duration: 270,
//   },
//   {
//     name: "Dil ibadat",
//     author: "K.K",
//     image: "/songs/thumbnail/song2.jpg",
//     audio: "/songs/audio/song2.mp3",
//     duration: 329,
//   },
// ];

const DynamicTabData = [
  {
    title: "Education",
    value: "education",
    contentData: [
      {
        name: "B.Tech",
        year: "2018-2021",
        institute: "Lovely Professional University",
      },
      {
        name: "12th",
        year: "2016-2017",
        institute: "Vishal International School",
      },
      {
        name: "10th",
        year: "2014-2015",
        institute: "Vishal International School",
      },
    ],
  },
  {
    title: "Work Experience",
    value: "work",
    contentData: [
      {
        name: "Software Engineer L1",
        year: "Aug 2022-Present",
        institute: "Axeno Consulting Pvt. Ltd.",
      },
      {
        name: "Software Engineer Intern",
        year: "Apr 2022 - Aug 2022",
        institute: "Axeno Consulting Pvt. Ltd.",
      },
      {
        name: "Frontend Developer Intern",
        year: "Aug 2021 - Dec 2021",
        institute: "WorkIndia",
      },
    ],
  },
];

const page = async () => {
  const {data} = await getServerSideProps();
  return (
    <div className="max-w-screen-xl mx-auto mt-10 p-4">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-8">
          {data?.aboutMeInfo?.map((data : any) => (
            <InfoCard className="col-span-1 " key={data.key} cardTitle={data.key}>
              <p className="my-4 ">{data.value}</p>
            </InfoCard>
          ))}
        </div>
        <div className="col-span-1  gap-8">
          <InfoCard cardTitle="Favourite Songs">
            <MusicPlayer musicList={data.musicList} />
          </InfoCard>
        </div>

        <div className="md:col-span-2">
          <InfoCard cardTitle="Education & Work Experience">
            <DynamicTab data={DynamicTabData} />
          </InfoCard>
        </div>
        <div className="md:col-span-1 flex flex-col gap-8">
          <InfoCard cardTitle="Gaming">
            <ValorantCard ValorantCardData={data.ValorantInfo}/>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default page;


async function getServerSideProps() {
  const data = await getAboutPageData();
  return {
    data,
  };
}