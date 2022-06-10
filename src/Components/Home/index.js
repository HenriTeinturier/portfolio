// import icons from MaterialUI
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ContactForm from '../Contact';
import '../../styles/Home.scss';
import '../../styles/Experience.scss';
import '../../styles/Projects.scss';
import '../../styles/ContactV1.scss';
import '../../styles/Contact.scss';
import '../../styles/Testimonial.scss';
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
        <div className="container">
          <h2> Bonjour,<br /> je m'appelle <span>Henri</span></h2>
          <div className="prompt">
            <p>
              Je suis un <span>développeur Front-end React</span>,
              mais je suis intérressé par tous les aspects d'un projet.
              J'ai une formation fullstack.
            </p>
            <GitHubIcon />
            <LinkedInIcon />
            <EmailIcon />
            <LocalPhoneIcon />
          </div>

        </div>
      </div>
      <div className="skills" id="skills">
        <div className="container">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>
                ReactJS, Redux, JavaScript,
                HTML, CSS, npm, Yarn, Bootstrap, MaterialUI, Framer-Motion
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
      <div className="testimonial">
        Testimonial
      </div>
      <div className="divers">
        Divers
      </div>
      <ContactForm id="contact" />
      {/* <div className="contactV1">
        <h1 className="contactV1Title"> ContactV1</h1>
        <section className="contactV1-box">
          <div className="contactV1-links">
            <h2>CONTACTV1</h2>
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
          <div className="contactV1-form-wrapper">
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
      </div> */}
    </div>
  );
}

export default Home;
