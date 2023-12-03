import ProjectCard from '@/components/PageComponents/Projects/ProjectCard'
import React from 'react'

const test = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 w-2/3 m-auto'>
      
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
  )
}

export default test