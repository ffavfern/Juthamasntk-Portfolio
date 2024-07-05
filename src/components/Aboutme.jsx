import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,

  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="flex flex-col items-center justify-center text-center py-60 bg-gray-50">
      <motion.h2 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-3xl font-bold mb-4"
      >
        Hello! I'm Juthamas Naktrakul
      </motion.h2>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-lg mb-2"
      >
        a dedicated and enthusiastic Junior Web Developer with a passion for creating dynamic and responsive websites.
      </motion.p>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-lg"
      >
        I specialize in front-end development and have a growing proficiency in back-end technologies.
      </motion.p>
    </section>
  );
}

export default AboutMe;
