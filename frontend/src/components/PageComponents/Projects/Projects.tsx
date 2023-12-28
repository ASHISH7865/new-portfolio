import FeaturedProject from "./FeaturedProject";
import ProjectList from "./ProjectList";

const Projects = (props : any) => {
  return (
    <>
      <FeaturedProject featuredProject={props.data.featuredProject} />
      <ProjectList limit={3} allProjects = {props.data.allProjects}/>
    </>
  );
};

export default Projects;
