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

// import ProjectItem from '../ProjectItem';
// import { ProjectList } from '../../data/ProjectList';
import ProjectDisplay from '../ProjectDisplay';

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
        <ProjectDisplay />
        {/* <div className="projectList">
          {ProjectList.map((project, idx) => (
            <ProjectItem
              key={`project-${project.name}`}
              idx={idx}
              name={project.name}
              image={project.image}
            />
          ))}
        </div> */}
      </div>
      <div className="experience" id="experience">
        <h1> Experience</h1>
        <VerticalTimeline
          lineColor={backgroundColor}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="07 2022"
            iconStyle={{ background: backgroundColor, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#8860f8' }}>
              Titre Professionnel Développeur Web et Web
              Mobile
            </h3>
            <p className="vertical-timeline-element-subtitle" style={{ color: '#21325e' }}>
              &rarr; niveau V
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="12 2021 - 05 2022"
            iconStyle={{ background: backgroundColor, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#8860f8' }}>
              Ecole O’Clock - Labellisée Grande Ecole du numérique
            </h3>
            <p className="vertical-timeline-element-subtitle" style={{ color: '#21325e' }}>
              &rarr; Formation développeur web 700 heures
              <br />
              &rarr; 4 mois de Socle: HTML/CSS/JavaScript/PHP/MySQL
              <br />
              &rarr; 1 Mois spécialisation ReactJs
              <br />
              &rarr; 1 mois de projet: <a target="_blank" href="http://www.meetdev.henriteinturier.fr" rel="noreferrer">www.meetdev.henriteinturier.fr</a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="09 2021 - 11 2021"
            iconStyle={{ background: backgroundColor, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#8860f8' }}>
              Udemy / OpenClassRoom
            </h3>
            <p className="vertical-timeline-element-subtitle" style={{ color: '#21325e' }}>
              &rarr; développeur web Python + POO: plus de 120 heures
              de formation + nombreux exercices complémentaires
              <br />
              &rarr; BootStrap 5: 8 heures de formation
              <br />
              &rarr; PHP/MySQL: 15 heures de cours + exercices
              <br />
              &rarr;  HTML/CSS/JavaScript: Nombreuses heures
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2009 - 2021"
            iconStyle={{ background: backgroundColorWork, color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#ffa500' }}>
              Gérant La Boîte à Pizza (Caen)
            </h3>
            <p className="vertical-timeline-element-subtitle" style={{ color: '#21325e' }}>
              &rarr; Gestion d’équipe jusqu’à 20
              équivalents temps plein
              <br />
              &rarr;  Gestion C.A 1M€

            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2000 - 2012 & 2020 - en cours"
            iconStyle={{ background: backgroundColorWork, color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#ffa500' }}>
              Encadrement sportif (Basket)
            </h3>
            <p className="vertical-timeline-element-subtitle" style={{ color: '#21325e' }}>
              &rarr; Encadrement sportif d’adultes et
              d’enfants niveau championnat de
              France (Jusque Nationale 2)
              <br />
              &rarr; Reims, Dijon, Caen
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2000 - 2010"
            iconStyle={{ background: backgroundColor, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#8860f8' }}>
              UFR STAPS Reims
            </h3>
            <p className="vertical-timeline-element-subtitle" style={{ color: '#21325e' }}>
              &rarr; Master Stress et Performance (Bac +5)
              <br />
              &rarr; Brevet d’état Basket 1er degré
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2009 - 2010"
            iconStyle={{ background: backgroundColor, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#8860f8' }}>
              Université Reims Champagne-Ardenne
            </h3>
            <p className="vertical-timeline-element-subtitle" style={{ color: '#21325e' }}>
              &rarr; DAEU mention Bien (équivalent Bac)
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
