// import icons from MaterialUI
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ContactForm from '../Contact';
import Skills from '../Skills/Skills';
import Testimonial from '../Testimonial/Testimonial';
import '../../styles/Home.scss';
import '../../styles/Experience.scss';
import '../../styles/Projects.scss';
import '../../styles/ContactV1.scss';
import '../../styles/Contact.scss';
import 'react-vertical-timeline-component/style.min.css';

import ProjectItem from '../ProjectItem';
import { ProjectList } from '../../data/ProjectList';

function Home() {
  const backgroundColor = '#426691';
  const backgroundColorWork = '#ffa500';
  return (
    <div className="home">
      <div className="about">
        <div className="container">
          <h2> Bonjour,<br /> je m'appelle <span>Henri</span></h2>
          <div className="prompt">
            <p>
              Je suis un <span>développeur Front-end React</span>,
              mais je suis intérressé par tous les aspects d'un projet.
              J'ai une formation fullstack.
            </p>
            <a
              href="https://github.com/HenriTeinturier"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/henri-teinturier/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:henri.teinturier@gmail.com">
              <EmailIcon />
            </a>
            <a
              href="tel:+0616262394"
            >
              <LocalPhoneIcon />
            </a>
          </div>

        </div>
      </div>
      <Skills id="skills" />
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
      <Testimonial />
      {/* <div className="divers">
        Divers
      </div> */}
      <ContactForm id="contact" />
    </div>
  );
}

export default Home;
