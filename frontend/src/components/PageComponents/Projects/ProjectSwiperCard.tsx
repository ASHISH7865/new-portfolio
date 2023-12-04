import Image from "next/image";
import React from "react";

const ProjectSwiperCard = (props: any) => {
  return (
    <div className="shadow-border  rounded-2xl ">
      <div className="relative">
        <div className=" rounded-2xl w-full h-full absolute top-0 left-0 z-10 bg-black bg-opacity-0 transition-all duration-500"></div>
        <Image className="rounded-2xl " quality={100} src={props.image} alt={"img"} width={1000} height={1000} />
      </div>
    </div>
  );
};

export default ProjectSwiperCard;
