import ProjectCard from '@/components/PageComponents/Projects/ProjectCard'
import React from 'react'

const page = () => {
  return (
    <div className="lg:w-[80%] w-full  m-auto">
        <h1 className="text-3xl font-bold text-center my-14">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0  ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex justify-end items-end">
          <a className="text-md font-bold text-center  hover:text-blue-500" href="/projects">
            View All Projects --&gt;
          </a>
        </div>
      </div>
  )
}

export default page