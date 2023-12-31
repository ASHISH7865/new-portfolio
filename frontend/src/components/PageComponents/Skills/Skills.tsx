import React from "react";
import Skill from "./SkillComponent";
import GroupSkill from "./GroupSkill";
import SectionHeader from "@/components/Common/SectionHeader";
import Section from "@/components/Common/Section";

const Skills = (props: any) => {
  return (
    <Section id="skills">
      <SectionHeader text={props?.sectionHeader} />
      <div className="flex gap-8 flex-col">
        <div className="flex gap-4 justify-center flex-wrap ">
          <Skill />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 ">
          {props?.skillsArray?.map((skillGroup: any) => (
            <GroupSkill key={skillGroup.id} title={skillGroup.title} skillArray={skillGroup.skills} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
