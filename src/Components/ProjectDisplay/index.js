// import { useParams } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectList } from '../../data/ProjectList';
import '../../styles/ProjectDisplay.scss';

function ProjectDisplay() {
  // const { id } = useParams();
  const id = 0;
  const project = ProjectList[id];

  return (
    <div className="project">
      {/* <h1>
        {project.name}
      </h1> */}
      <a href="http://www.meetdev.henriteinturier.fr" target="_blank" rel="noreferrer">
        <img src={project.image} alt="Projet MeetDev" />
      </a>
      <p>
        <span>Skills</span><br /> {project.skills}
      </p>
      <a href="https://github.com/HenriTeinturier/MeetDev-front" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
