import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../../styles/Home.scss';

import ProjectItem from '../ProjectItem';
import '../../styles/Projects.scss';
import { ProjectList } from '../../data/ProjectList';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Bonjour, je m'appelle Henri</h2>
        <div className="prompt">
          <p>
            Je suis développeur Front-end (React, Redux),
            mais je suis intérressé par tous les aspects d'un projet. J'ai une formation fullstack.
          </p>
          <GitHubIcon />
          <LinkedInIcon />
          <EmailIcon />
          <LocalPhoneIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, JavaScript, HTML, CSS, Yarn, Bootstrap, MaterialUI, Framer-Motion
            </span>
          </li>
          <li className="item">
            <h2> Back-End et Divers</h2>
            <span>PHP, Python, MySQL, MVC, PDO, GIT, Lumen(Laravel), Apache </span>
          </li>
          <li className="item">
            <h2> Intérressé ou en cours d'apprentissage</h2>
            <span>
              React Native, TypeScript, Firebase,
              Docker, ExpressJS, NodeJS, MongoDB, Angular, VueJS, Symfony, algorithmie
            </span>
          </li>
        </ol>
      </div>
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
    </div>
  );
}

export default Home;
