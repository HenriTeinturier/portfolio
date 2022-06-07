import { useParams } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectList } from '../../data/ProjectList';
import '../../styles/ProjectDisplay.scss';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>
        {project.name}
      </h1>
      <img src={project.image} alt="" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
