import Image from "next/image";
import React from "react";

interface ValorantCardDataProps {
  title: string;
  gameName: string;
  image: any;
  alt: string;
  width: number;
  height: number;
  overview: string;
  popularity: string;
  popularityText: string;
  release: string;
  releaseText: string;
  playingTime: string;
  playingTimeText: string;
  
}

const ValorantCard1 = {
  title: "gaming",
  gameName: "Valorant",
  image: "/valorant.webp",
  alt: "valorant.webp",
  width: 100,
  height: 100,
  overview:
    "In addition to my professional pursuits, I'm passionate about competitive gaming, particularly Valorant. This tactical first-person shooter not only satisfies my appetite for strategic challenges but also hones my teamwork, decision-making, and adaptability skills. It's my digital playground where I find balance and inspiration, enhancing my ability to tackle real-world challenges with a fresh perspective.",
  popularity: "Diamond 3",
  popularity_text: "Current Rank",
  release: "4sh1sh#0000",
  release_text: "Valo Id",
  playing_time: "Late Night",
  playing_time_text: "Playing Time",
};

const ValorantCard = ({ ValorantCardData }: { ValorantCardData: ValorantCardDataProps }) => {
  const image = process.env.NEXT_PUBLIC_STRAPI_API_URL + ValorantCardData?.image?.data?.attributes?.url;
  return (
    <div className="">
      <div className=" rounded-xl  flex flex-col items-center justify-center  ">
        {/* <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div> */}

        <div className="flex flex-col ">
          <Image className="self-center" src={image} alt="valorant.webp" width={100} height={100} />
          <div className="poster__info  w-full flex flex-col  ">
            <div className="flex flex-col overview">
              <div className="text-md  mb-2 text-center">{ValorantCardData.gameName}</div>
              <p className="text-sm  mb-6">{ValorantCardData.overview} </p>
            </div>
            <div className="space-y-6 detail_info">
              <div className="flex flex-row justify-between text-center flex-wrap gap-2">
                <div className="flex flex-col datos_col">
                  <div className="popularity text-sm">{ValorantCardData.popularity}</div>
                  <div className="text-sm text-gray-400 font-bold">{ValorantCardData.popularityText}</div>
                </div>
                <div className="flex flex-col datos_col ">
                  <div className="release text-sm">{ValorantCardData.release}</div>
                  <div className="text-sm text-gray-400 capitalize font-bold">{ValorantCardData.releaseText}</div>
                </div>
                <div className="flex flex-col datos_col">
                  <div className="release text-sm">{ValorantCardData.playingTime}</div>
                  <div className="text-sm text-gray-400 font-bold">{ValorantCardData.playingTimeText}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Image className="absolute inset-0 transform w-full -translate-y-4" src="/omen.jpg" alt="omen" layout="fill" /> */}
      </div>
    </div>
  );
};

export default ValorantCard;
