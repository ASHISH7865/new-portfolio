"use client";
import React, { useState } from "react";

import SwiperWrapper from "../../Common/Swiper/Swiper";
import ProjectCard from "@/components/PageComponents/Projects/ProjectCard";
import ProjectSwiperCard from "./ProjectSwiperCard";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const projectSwiperContent = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.",
    image: "https://images.unsplash.com/photo-1701220293337-c1585aab8372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.",
    image: "https://images.unsplash.com/photo-1701220293337-c1585aab8372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.",
    image: "https://images.unsplash.com/photo-1701220293337-c1585aab8372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.",
    image: "https://images.unsplash.com/photo-1701220293337-c1585aab8372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.",
    image: "https://images.unsplash.com/photo-1701220293337-c1585aab8372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    githubLink: "https://github.com",
    liveLink: "https://github.com",
  },
];

const ProjectSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(projectSwiperContent[0]);
  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(projectSwiperContent[swiper.realIndex]);
  };


  return (
    <div className="relative">
      <div className="w-[95%] m-auto">
        <SwiperWrapper
          swiperScrollProps={{
            breakpoints:{
              0:{
                slidesPerView:"auto",
              },
              768:{
                slidesPerView:2.39,
              },
            },
            navigation: {
              nextEl: ".button-next",
              prevEl: ".button-prev",
            },
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            },
            on: {
              slideChange: handleSlideChange,
            },
          }}
          data={projectSwiperContent}
        >
          {(obj: any, i: number) => {
            return <ProjectSwiperCard key={i} {...obj} />;
          }}
        </SwiperWrapper>
        {/* // when we change the slide, we want to change the content of the slide with fade animation */}
        
        <div
          className=" hidden md:flex  absolute h-[30vh] bottom-0 z-[1]  flex-col items-center 
        p-4  w-full  bg-opacity-60 transition-all duration-500   bg-gradient-to-b  dark:from-transparent dark:via-[#0b090a] dark:to-[#0b090a] from-transparent via-[#ffffff] to-[#ffffff]
        "
        ></div>
        <div
          className="absolute bottom-[50px] z-10 flex flex-col items-center 
       p-4 rounded-2xl w-[90%] left-[5%] bg-opacity-60 transition-all duration-500 
      "
        >
          <p className="md:text-6xl lg:text-8xl font-semibold ">{currentSlide.title}</p>
          <p className="lg:text-xl font-medium w-[90%]  text-center mt-10">{currentSlide.description}</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="flex  gap-20 relative z-50">
          <FaCircleArrowLeft className=" cursor-pointer text-3xl button-prev " />
          <FaCircleArrowRight className=" cursor-pointer text-3xl button-next" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSwiper;
