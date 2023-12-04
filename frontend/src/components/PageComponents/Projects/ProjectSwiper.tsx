"use client";
import React, { useState } from "react";

import SwiperWrapper from "../../Common/Swiper/Swiper";
import ProjectCard from "@/components/PageComponents/Projects/ProjectCard";
import ProjectSwiperCard from "./ProjectSwiperCard";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const projectSwiperContent = [
  {
    title: "Full Stack Todo App",
    description: "simple todo app using react and nodejs",
    image: "https://images.unsplash.com/photo-1682687981603-ae874bf432f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    techStack: {
      name: "Tech Stack",
      stack: ["React", "Nodejs", "Express", "MongoDB"],
    },
    links: [
      {
        name: "Github",
        url: " https://github.com",
      },
      {
        name: "Live",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Full Stack Todo App",
    description: "simple todo app using react and nodejs",
    image: "https://images.unsplash.com/photo-1682687981603-ae874bf432f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    techStack: {
      name: "Tech Stack",
      stack: ["React", "Nodejs", "Express", "MongoDB"],
    },
    links: [
      {
        name: "Github",
        url: " https://github.com",
      },
      {
        name: "Live",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Full Stack Todo App",
    description: "simple todo app using react and nodejs",
    image: "https://images.unsplash.com/photo-1682687981603-ae874bf432f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    techStack: {
      name: "Tech Stack",
      stack: ["React", "Nodejs", "Express", "MongoDB"],
    },
    links: [
      {
        name: "Github",
        url: " https://github.com",
      },
      {
        name: "Live",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Full Stack Todo App",
    description: "simple todo app using react and nodejs",
    image: "https://images.unsplash.com/photo-1682687981603-ae874bf432f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    techStack: {
      name: "Tech Stack",
      stack: ["React", "Nodejs", "Express", "MongoDB"],
    },
    links: [
      {
        name: "Github",
        url: " https://github.com",
      },
      {
        name: "Live",
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Full Stack Todo App",
    description: "simple todo app using react and nodejs",
    image: "https://images.unsplash.com/photo-1682687981603-ae874bf432f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    techStack: {
      name: "Tech Stack",
      stack: ["React", "Nodejs", "Express", "MongoDB"],
    },
    links: [
      {
        name: "Github",
        url: " https://github.com",
      },
      {
        name: "Live",
        url: "https://github.com",
      },
    ],
  },
];

const ProjectSwiper = ({featuredProject}:any) => {
  const [currentSlide, setCurrentSlide] = useState(projectSwiperContent[0]);
  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(projectSwiperContent[swiper.realIndex]);
  };
  
  return (
    <div className="relative">
      <div className=" m-auto">
        <SwiperWrapper
          swiperScrollProps={{
            breakpoints: {
              0: {
                slidesPerView: "auto",
              },
              768: {
                slidesPerView: 2.39,
              },
            },
            navigation: {
              nextEl: ".button-next",
              prevEl: ".button-prev",
            },
            effect: "coverflow",
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            },
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            on: {
              slideChange: handleSlideChange,
            },
          }}
          data={featuredProject}
        >
          {(obj: any, i: number) => {
            return <ProjectSwiperCard key={i} {...obj} />;
          }}
        </SwiperWrapper>
        {/* // when we change the slide, we want to change the content of the slide with fade animation */}

        <div
          className=" hidden md:flex  absolute h-[20vh] bottom-0 z-[1]  flex-col items-center 
        p-4  w-full  bg-opacity-60 transition-all duration-500   bg-gradient-to-b  dark:from-transparent dark:via-[#0b090a] dark:to-[#0b090a] from-transparent via-[#ffffffb9] to-[#ffffff]
        "
        ></div>
        <div className="absolute -bottom-20 z-10 flex flex-col items-center p-4 rounded-2xl w-[90%] left-[5%] bg-opacity-60 transition-all duration-500">
          <p className="hidden md:block md:text-4xl lg:text-6xl font-semibold ">{currentSlide.title}</p>
          <p className="hidden md:block lg:text-xl font-medium w-[90%]  text-center mt-5">{currentSlide.description}</p>
          <div className="flex  gap-20 justify-center items-center mt-10">
            <FaCircleArrowLeft className=" cursor-pointer text-3xl button-prev " />
            <FaCircleArrowRight className=" cursor-pointer text-3xl button-next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSwiper;
