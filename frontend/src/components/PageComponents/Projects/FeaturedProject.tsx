import SectionHeader from '@/components/Common/SectionHeader'
import React from 'react'
import ProjectSwiper from './ProjectSwiper'
import Section from '@/components/Common/Section'

const FeaturedProject = (props : any) => {
  return (
    <Section id="featured-projects"> 
        <SectionHeader text="Featured Projects" />
        <ProjectSwiper featuredProject={props.featuredProject} />
      </Section>
  )
}

export default FeaturedProject