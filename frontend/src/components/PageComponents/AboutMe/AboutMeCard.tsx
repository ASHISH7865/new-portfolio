import SocialLinks from "@/components/Common/SocialLinks";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Contact from "../Contact/Contact";
import InfoCard from "@/components/Common/card/InfoCard";

const AboutMeCard = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
      <InfoCard cardTitle="About Me">
      <div  className=" ">{data.info}</div>
      </InfoCard>
      <div className="  rounded-md ">
        <InfoCard cardTitle="Professional Background">
          <p className="my-4">{data.professionalBackground}</p>
        </InfoCard>
      </div>
      <div className="rounded-md ">
        <InfoCard cardTitle="Experience">
          <p className="my-4">{data.experience}</p>
        </InfoCard>
      </div>
    </div>
  );
};

export default AboutMeCard;
