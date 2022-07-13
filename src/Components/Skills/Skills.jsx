import '../../styles/skills.scss';

import Card from './Card';

import react from '../../logos/react.png';
import javascript from '../../logos/javascript.png';
import redux from '../../logos/redux.svg';
import html from '../../logos/html.png';
import css from '../../logos/css.svg';
import symfony from '../../logos/symfony.png';
import laravel from '../../logos/laravel.png';
import php from '../../logos/php.png';
import mysql from '../../logos/mysql.png';
import python from '../../logos/python.png';
import flutter from '../../logos/flutter.png';
import typescript from '../../logos/typescript.png';
import docker from '../../logos/docker.png';
import node from '../../logos/node.png';

function Skills() {
  return (
    <div className="skills" id="skills">
      {/* <div className="container"> */}
      <h1> Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> Front-End</h2>
          <span>
            ReactJS, Redux, JavaScript,
            HTML, CSS, Bootstrap, Framer-Motion, Tailwind
          </span>
          <div className="cards">
            <Card logo={react} background="#61DBFB" label="React" />
            <Card logo={redux} background="#764ABC" label="Redux" />
            <Card logo={javascript} background="#D3B82F" label="JavaScript" />
            <Card logo={html} background="#FF5722" label="Html" />
            <Card logo={css} background="#1572B6" label="Css" />

          </div>
        </li>
        <li className="item">
          <h2> Back-End</h2>
          <span>Symfony, PHP, MySQL, Laravel, Python</span>
          <div className="cards">
            <Card logo={symfony} background="#1A171B" label="Symfony" />
            <Card logo={laravel} background="#FF3122" label="Laravel" />
            <Card logo={php} background="#787CB4" label="php" />
            <Card logo={mysql} background="#E79415" label="MySql" />
            <Card logo={python} background="#3771A2" label="Python" />
          </div>
        </li>
        <li className="item">
          <h2> Intérressé ou en cours d'apprentissage</h2>
          <span>
            React Native, Flutter, TypeScript, Docker,
            Firebase, NodeJS, MongoDB, Angular, VueJS, algorithmie
          </span>
          <div className="cards">
            <Card logo={typescript} background="#017ACB" label="TypeScript" />
            <Card logo={docker} background="#2496ED" label="docker" />
            <Card logo={node} background="#88BC5B" label="NodeJs" />
            <Card logo={react} background="#61DBFB" label="React Native" />
            <Card logo={flutter} background="#04599C" label="Flutter Native" />
          </div>
        </li>
      </ol>

    </div>
  // </div>
  );
}

export default Skills;
