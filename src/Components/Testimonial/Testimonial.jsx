import '../../styles/Testimonial.scss';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Testimonial() {
  // variants de framer-motion.
  // Certains ne contiennet pas transition afin de pouvoir la régler directement dans l'element.
  const animationFromRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: '100vw' },
  };
  const animationFromBottom = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: { opacity: 0, x: '300px' },
  };
  // control permettra de start ou end l'animation de framer-motion
  const testimonialControl = useAnimation();
  // donne une reference (h1ref) à un element et return un boolen si c'est dans la view (h1InView)
  // useEffect est appelé à chaque changement du inView
  // ce qui permet de faire une action si true or false
  const [testimonialRef, testimonialInView] = useInView();
  useEffect(() => {
    if (testimonialInView) {
      testimonialControl.start('visible');
    }
  }, [testimonialControl, testimonialInView]);
  return (
    <div className="testimonial" ref={testimonialRef}>
      <motion.h2 variants={animationFromRight} initial="hidden" animate={testimonialControl} transition={{ duration: 0.8, type: 'intetia', delay: 0 }}>Testimonial</motion.h2>
      <motion.div variants={animationFromBottom} initial="hidden" animate={testimonialControl} transition={{ duration: 1, type: 'intetia', delay: 0.6 }}>
        <p className="guillemet">&#x201C;</p>
        <p>
          Un très beau projet d’apothéose.
          <span>Tu as su gérer le projet d’une main de maître même.</span>
          Tu peux être fier de ce projet Henri;
          <span> vous avez fourni un sacré travail d’équipe !</span>
        </p>

        <p>Ce fut un plaisir de te suivre pendant cette apothéose –
          même d’un peu plus loin.
          <span> Ta passion du code, ta motivation et ta bienveillance
            feront de toi un développeur très apprécié !
          </span>

        </p>

        <p>Je te souhaite une bonne continuation.
          Je ne m’étends pas plus que cela étant donné que tout semble rouler pour toi !
        </p>
        <p className="guillemet">&#x201D;</p>
        <p>Anaïs O'Clock
        </p>
      </motion.div>

    </div>
  );
}

export default Testimonial;
