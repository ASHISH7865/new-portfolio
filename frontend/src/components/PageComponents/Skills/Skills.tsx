
import React from "react";
import Skill from "./SkillComponent";
import GroupSkill from "./GroupSkill";
import SectionHeader from "@/components/Common/SectionHeader";
import Section from "@/components/Common/Section";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Skills = ({ data }: any) => {
  return (
    <Section id="skills">
      <SectionHeader text={data?.sectionHeader} />
      <div className="flex gap-8 flex-col">
        <div className="flex gap-4 justify-center flex-wrap ">
          <Skill />
        </div>
          <HoverEffect items={data?.skillsArray} />
      </div>
    </Section>
  );
};

export default Skills;
