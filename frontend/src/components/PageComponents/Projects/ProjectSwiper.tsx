"use client";
import React, { useState } from "react";

import SwiperWrapper from "../../Common/Swiper/Swiper";
import ProjectCard from "@/components/PageComponents/Projects/ProjectCard";
import ProjectSwiperCard from "./ProjectSwiperCard";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectSwiper = ({ featuredProject }: any) => {
  const [currentSlide, setCurrentSlide] = useState(featuredProject[0]);
  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(featuredProject[swiper.realIndex]);
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
        <div
          className=" hidden md:flex  absolute h-[20vh] bottom-0 z-[1]  flex-col items-center 
        p-4  w-full  bg-opacity-60 transition-all duration-500   bg-gradient-to-b  dark:from-transparent dark:via-[#000000] dark:to-[#0b090a] from-transparent via-[#ffffff]  to-[#ffffff]
        "
        ></div>
        <div className="absolute w-full  md:-bottom-20 z-10 flex flex-col md:items-center p-4 rounded-2xl md:w-[90%] md:left-[5%] bg-opacity-60 transition-all duration-500">
          <p className="hidden md:block md:text-4xl lg:text-6xl font-semibold dark:[text-shadow:_4px_3px_5px_rgb(0_0_0_/_90%)] [text-shadow:_4px_3px_5px_rgb(255_255_255_/_90%)]">{currentSlide?.attributes?.title}</p>
          <p className="hidden md:block lg:text-xl font-medium w-[90%]  text-center mt-5">{currentSlide?.attributes?.description}</p>
          <Link href={`/projects/${currentSlide?.attributes?.slug}`}>
            <Button className="mt-5">View Project</Button>
          </Link>
          <div className="flex gap-20 justify-center items-center mt-10">
            <FaCircleArrowLeft className=" cursor-pointer text-3xl button-prev " />
            <FaCircleArrowRight className=" cursor-pointer text-3xl button-next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSwiper;
