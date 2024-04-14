import FeaturedProject from "./FeaturedProject";
import ProjectList from "./ProjectList";

const Projects = (props : any) => {
  return (
      <ProjectList limit={3} allProjects = {props.data.projects}/>
  );
};

export default Projects;
