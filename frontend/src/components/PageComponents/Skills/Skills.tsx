import React from 'react'
import Skill from './SkillComponent'
import GroupSkill from './GroupSkill'
import SectionHeader from '@/components/Common/SectionHeader'

const GroupSkillData = [
  {
    title:'Frontend',
    skillArray:['React','React Native','NextJS','TailwindCSS','MaterialUI','Bootstrap',"Shadcn"]
  },
  {
    title:'Backend',
    skillArray:['NodeJS','ExpressJS','MongoDB','RestApi','Prisma']
  },
  {
    title:'Others',
    skillArray:['TypeScript','JavaScript','Git','Github','VSCode','Linux','Docker','Heroku','Netlify','Vercel']
  }
]

const Skills = () => {
  return (
    <section id="skills">
        <SectionHeader text="What I Know" />
        <div className='flex gap-8 flex-col'>
        <div className='flex gap-4 justify-center flex-wrap '>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
        
        <div className='flex gap-4 justify-center flex-col flex-wrap md:flex-row '>
         {GroupSkillData.map((skillGroup) => (
            <GroupSkill key={skillGroup.title} title={skillGroup.title} skillArray={skillGroup.skillArray} />
         )
         )} 
        </div>
        </div>
    </section>
  )
}

export default Skills