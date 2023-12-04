import Image from "next/image";
import React from "react";

const ProjectSwiperCard = (props: any) => {
  return (
    <div className="shadow-border  rounded-2xl  ">
      <div className="relative  ">
      <div
          className=" flex md:hidden  absolute h-[20vh] bottom-0 z-[1]  flex-col items-center 
        p-4  w-full  bg-opacity-60 transition-all duration-500   bg-gradient-to-b  dark:from-transparent dark:via-[#0b090a96] dark:to-[#0b090a] from-transparent via-[#ffffffb9] to-[#ffffff]
        "
        ></div>
        <Image className="rounded-2xl object-cover md:min-h-[500px] " quality={100} src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL }${props?.attributes?.image?.data?.attributes?.url}`} alt={"img"} width={props?.attributes?.image?.data?.attributes?.width} height={props?.attributes?.image?.data?.attributes?.height} />
        <div className="absolute z-10 bottom-5 left-5 w-full text-white ">
          <p className=" md:hidden text-xl md:text-4xl lg:text-6xl font-semibold  ">{props?.attributes?.title}</p>
          {/* <p className=" md:hidden text-md lg:text-xl font-medium w-[90%]  mt-2">{props?.attributes?.description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectSwiperCard;
