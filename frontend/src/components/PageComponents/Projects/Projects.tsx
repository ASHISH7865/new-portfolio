import FeaturedProject from "./FeaturedProject";
import ProjectList from "./ProjectList";

const Projects = (props : any) => {
  return (
    <section id="projects">
      <FeaturedProject featuredProject={props.data.featuredProject} />
      <ProjectList allProjects = {props.data.allProjects}/>
    </section>
  );
};

export default Projects;
