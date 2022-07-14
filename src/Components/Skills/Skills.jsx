import '../../styles/skills.scss';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
  // variants de framer-motion.
  // Certains ne contiennet pas transition afin de pouvoir la régler directement dans l'element.
  const animationFromLeft = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: 'intetia' } },
    hidden: { opacity: 1, x: '-50vw' },
  };
  const animationFromRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: '100vw' },
  };
  const animationCards = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: { opacity: 0, x: '300px' },
  };
  // control permettra de start ou end l'animation de framer-motion
  const frontControl = useAnimation();
  const backControl = useAnimation();
  const interestControl = useAnimation();
  // donne une reference (h1ref) à un element et return un boolen si c'est dans la view (h1InView)
  // useEffect est appelé à chaque changement du inView
  // ce qui permet de faire une action si true or false
  const [frontRef, frontInView] = useInView();
  useEffect(() => {
    if (frontInView) {
      frontControl.start('visible');
      // console.log('H1 is in view');
    }
    else {
      // frontControl.start('hidden');
      // console.log('H1 not in view');
    }
  }, [frontControl, frontInView]);
  const [backRef, backInView] = useInView();
  useEffect(() => {
    if (backInView) {
      backControl.start('visible');
      // console.log('H1 is in view');
    }
    else {
      // backControl.start('hidden');
      // console.log('H1 not in view');
    }
  }, [backControl, backInView]);
  const [interestRef, interestInView] = useInView();
  useEffect(() => {
    if (interestInView) {
      interestControl.start('visible');
      // console.log('H1 is in view');
    }
    else {
      // interestControl.start('hidden');
      // console.log('H1 not in view');
    }
  }, [interestControl, interestInView]);
  return (
    <div className="skills" id="skills">
      {/* <div className="container"> */}
      <motion.h1
        ref={frontRef}
        variants={animationFromLeft}
        initial="hidden"
        animate={frontControl}
      >
        Skills
      </motion.h1>
      <ol className="list">
        <li className="item">
          <motion.h2 variants={animationFromRight} initial="hidden" animate={frontControl} transition={{ duration: 0.8, type: 'intetia', delay: 0.3 }}> Front-End</motion.h2>
          <motion.span variants={animationFromRight} initial="hidden" animate={frontControl} transition={{ duration: 0.8, type: 'intetia', delay: 0.3 }}>
            ReactJS, Redux, JavaScript,
            HTML, CSS, Bootstrap, Framer-Motion, Tailwind
          </motion.span>
          <motion.div className="cards" variants={animationCards} initial="hidden" animate={frontControl} transition={{ duration: 1, type: 'intetia', delay: 0.8 }}>
            <Card logo={react} background="#61DBFB" label="React" />
            <Card logo={redux} background="#764ABC" label="Redux" />
            <Card logo={javascript} background="#D3B82F" label="JavaScript" />
            <Card logo={html} background="#FF5722" label="Html" />
            <Card logo={css} background="#1572B6" label="Css" />

          </motion.div>
        </li>
        <li className="item" ref={backRef}>
          <motion.h2 variants={animationFromRight} initial="hidden" animate={backControl} transition={{ duration: 0.8, type: 'intetia', delay: 0.3 }}> Back-End</motion.h2>
          <motion.span variants={animationFromRight} initial="hidden" animate={backControl} transition={{ duration: 0.8, type: 'intetia', delay: 0.3 }}>Symfony, PHP, MySQL, Laravel, Python</motion.span>
          <motion.div className="cards" variants={animationCards} initial="hidden" animate={backControl} transition={{ duration: 1, type: 'intetia', delay: 0.8 }}>
            <Card logo={symfony} background="#1A171B" label="Symfony" />
            <Card logo={laravel} background="#FF3122" label="Laravel" />
            <Card logo={php} background="#787CB4" label="php" />
            <Card logo={mysql} background="#E79415" label="MySql" />
            <Card logo={python} background="#3771A2" label="Python" />
          </motion.div>
        </li>
        <li className="item" ref={interestRef}>
          <motion.h2 variants={animationFromRight} initial="hidden" animate={interestControl} transition={{ duration: 0.8, type: 'intetia', delay: 0.3 }}> Intérressé ou en cours d'apprentissage</motion.h2>
          <motion.span variants={animationFromRight} initial="hidden" animate={interestControl} transition={{ duration: 0.8, type: 'intetia', delay: 0.3 }}>
            React Native, Flutter, TypeScript, Docker,
            Firebase, NodeJS, MongoDB, Angular, VueJS, algorithmie
          </motion.span>
          <motion.div className="cards" variants={animationCards} initial="hidden" animate={interestControl} transition={{ duration: 1, type: 'intetia', delay: 0.8 }}>
            <Card logo={typescript} background="#017ACB" label="TypeScript" />
            <Card logo={docker} background="#2496ED" label="docker" />
            <Card logo={node} background="#88BC5B" label="NodeJs" />
            <Card logo={react} background="#61DBFB" label="React Native" />
            <Card logo={flutter} background="#04599C" label="Flutter Native" />
          </motion.div>
        </li>
      </ol>

    </div>
  // </div>
  );
}

export default Skills;
