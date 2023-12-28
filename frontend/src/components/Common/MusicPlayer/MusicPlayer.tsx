"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import styles from "./MusicPlayer.module.css";
import { FaPause, FaAngleLeft, FaPlay, FaAngleRight } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";

interface Music {
  name: string;
  author: string;
  image: any;
  audio: any;
  duration: number;
}

interface MusicPlayerProps {
  musicList: Music[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ musicList }: MusicPlayerProps) => {
  const [index, setIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const changeCurrentTime = (e: any) => {
    if (timelineRef.current) {
      const percent = e.offsetX / timelineRef.current.offsetWidth;
      const newTime = percent * musicList[index].duration;
      setCurrentTime(newTime);
      if (audioRef.current) {
        audioRef.current.currentTime = newTime;
      }
    }
  };

  const hoverTimeLine = (e: any) => {
    console.log(e);
    if (timelineRef.current) {
      const percent = e.offsetX / timelineRef.current.offsetWidth;
      const time = percent * musicList[index].duration;
      if (timelineRef.current) {
        timelineRef.current.style.setProperty("--time", formatTime(time));
      }
    }
  };

  const resetTimeLine = () => {
    if (timelineRef.current) {
      timelineRef.current.style.removeProperty("--time");
    }
  };

  const timeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  const updatePlayer = () => {
    if (audioRef.current) {
      audioRef.current.src = process.env.NEXT_PUBLIC_STRAPI_API_URL + musicList[index]?.audio?.data?.attributes?.url;
      audioRef.current.load();
    }
  };

  const nextSong = async () => {
    setIndex((prevIndex) => (prevIndex + 1) % musicList.length);
    await updatePlayer();
    if (audioRef.current) {
      audioRef.current.play();
      setPause(true);
    } else {
      setPause(false);
    }
  };

  const prevSong = async () => {
    setIndex((prevIndex) => (prevIndex - 1 + musicList.length) % musicList.length);
    await updatePlayer();
    if (audioRef.current) {
      audioRef.current.play();
      setPause(true);
    } else {
      setPause(false);
    }
  };

  const playOrPause = () => {
    setPause((prevPause) => !prevPause);
    if (audioRef.current) {
      if (!pause) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const clickAudio = async (newIndex: number) => {
    setIndex(newIndex);
    await updatePlayer();
    if (audioRef.current) {
      audioRef.current.play();
      setPause(true);
    }
  };

  useEffect(() => {
    updatePlayer();
    const timeInterval = setInterval(timeUpdate, 1000);
    console.log("timeInterval", timeInterval);
    const currnetAudioRef = audioRef.current;
    const currentTimelineRef = timelineRef.current;

    if (currnetAudioRef) {
      currnetAudioRef.addEventListener("ended", () => {
        currnetAudioRef.pause();
      });
    }

    if (currentTimelineRef) {
      currentTimelineRef.addEventListener("click", changeCurrentTime);
      currentTimelineRef.addEventListener("mousemove", hoverTimeLine);
      currentTimelineRef.addEventListener("mouseleave", resetTimeLine);
    }

    return () => {
      clearInterval(timeInterval);

      if (currnetAudioRef) {
        currnetAudioRef.removeEventListener("ended", nextSong);
      }

      if (currentTimelineRef) {
        currentTimelineRef.removeEventListener("click", changeCurrentTime);
        currentTimelineRef.removeEventListener("mousemove", hoverTimeLine);
        currentTimelineRef.removeEventListener("mouseleave", resetTimeLine);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.currentSong}`}>
        <audio ref={audioRef} />
        <div className={styles.imgWrap}>
          <Image src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${musicList[index]?.image?.data?.attributes?.url}`} alt={musicList[index].name} width={100} height={100} />
        </div>
        <span className={`${styles.songName} font-bold`}>{musicList[index].name}</span>
        <span className={`${styles.songAuthor} font-normal`}>{musicList[index].author}</span>
        <div className={styles.time}>
          <div className={styles.currentTime}>{formatTime(currentTime)}</div>
          {/* <div id="timeline" className="timeline w-full dark:bg-black bg-gray-400  h-1 rounded-md cursor-pointer " ref={timelineRef}>
            <div id="playhead" className="playhead dark:bg-white bg-[#333333]  h-1 rounded-md" style={{ width: `${(currentTime / musicList[index].duration) * 100}% ` }}></div>
          </div> */}
          <Slider
          ref={timelineRef}
            value={[(currentTime / musicList[index].duration) * 100]}
            max={100}
            step={0.1}
            className={`h-1 rounded-md cursor-pointer `}
            
          />
          <div className={styles.endTime}>{formatTime(musicList[index].duration)}</div>
        </div>

        <div className={styles.controls}>
          <button className={`${styles.prev}${styles.prevNext}${styles.currentBtn}`} onClick={prevSong}>
            <FaAngleLeft />
          </button>
          <button onClick={playOrPause} className={`${styles.play}${styles.currentBtn}`}>
            {pause ? <FaPause /> : <FaPlay />}
          </button>
          <button className={`${styles.next}${styles.prevNext}${styles.currentBtn}`} onClick={prevSong}>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <Separator orientation="horizontal" />
      <div className={styles.playList}>
        {musicList.map((music, i) => (
          <div key={i} className={`${styles.track}${i === index && !pause ? ` ${styles.currentAudio}  ` : ""} ${i === index && pause ? ` ${styles.playNow}  shadow-border ` : ""} p-2`} onClick={() => clickAudio(i)}>
            <Image className={styles.trackImg} src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${music?.image?.data?.attributes?.url}`} alt={music.name} width={50} height={50} />
            <div className={styles.trackDiscr}>
              <span className={`${styles.trackName} font-bold`}>{music.name}</span>
              <span className={styles.trackAuthor}>{music.author}</span>
            </div>
            <span className={styles.trackDuration}></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
