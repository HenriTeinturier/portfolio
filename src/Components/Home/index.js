// import icons from MaterialUI
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../../styles/Home.scss';
import '../../styles/Experience.scss';
import '../../styles/Projects.scss';
import '../../styles/Contact.scss';
import 'react-vertical-timeline-component/style.min.css';

import ProjectItem from '../ProjectItem';
import { ProjectList } from '../../data/ProjectList';

function Home() {
  const backgroundColor = '#426691';
  const backgroundColorWork = '#ffa500';
  return (
    <div className="home">
      <div
        className="about"
      >
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
      <div className="skills" id="skills">
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
      <div className="projects" id="projets">
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
      <div className="experience" id="experience">
        <h1> Experience</h1>
        <VerticalTimeline
          lineColor={backgroundColor}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2014"
            iconStyle={{ background: backgroundColor, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              My Random High School, Random Place, Random State
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Master STAPS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2014"
            iconStyle={{ background: backgroundColor, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              My Random High School, Random Place, Random State
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Master STAPS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
            iconStyle={{ background: backgroundColorWork, color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              My Random High School, Random Place, Random State
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Master STAPS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
            iconStyle={{ background: backgroundColorWork, color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              My Random High School, Random Place, Random State
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Master STAPS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2014"
            iconStyle={{ background: backgroundColor, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              My Random High School, Random Place, Random State
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Master STAPS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2014"
            iconStyle={{ background: backgroundColor, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              My Random High School, Random Place, Random State
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Master STAPS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2014"
            iconStyle={{ background: backgroundColor, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              My Random High School, Random Place, Random State
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Master STAPS
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="contact" id="contact">
        <h1 className="contactTitle"> Contact</h1>
        <section className="contact-box">
          <div className="contact-links">
            <h2>CONTACT</h2>
            <div className="links">
              <div className="link">
                <a><LinkedInIcon /></a>
              </div>
              <div className="link">
                <div><GitHubIcon /></div>
              </div>
              <div className="link">
                <a><LocalPhoneIcon /></a>
              </div>
              <div className="link">
                <a><EmailIcon /></a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form action="">
              <div className="form-item">
                <input type="text" className="form-input" placeholder="Nom:" />
              </div>
              <div className="form-item">
                <input type="text" className="form-input" placeholder="Email:" />
              </div>
              <div className="form-item">

                <textarea
                  className="form-textarea"
                  placeholder="Message:"
                />
              </div>
              <button
                className="submit-btn"
                type="submit"
              >
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
