// not yet utilised for this time. Transfert in homepage for the moment.

import ProjectItem from '../../ProjectItem';
import '../../styles/Projects.scss';
import { ProjectList } from '../../../data/ProjectList';

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle"> My Personnal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
          <ProjectItem
            key={`project-${project.name}`}
            idx={idx}
            name={project.name}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
