import React, { useState, useEffect } from 'react';
import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import "./skills.css";

const Skills = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const frontEndSkills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png' },
    { name: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
    { name: 'TailwindCSS', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png' },
  ];

  const backEndSkills = [
    { name: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
    { name: 'Express', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLA972a1NXwGHTIpgjxpRdu1DD5te1evggDgjNvM_FcbtGxaPYrHbV27RNzJSA_ZhrY28&usqp=CAU' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
  ];

  const toolsSkills = [
    { name: 'Git', icon: 'https://img.icons8.com/color/48/000000/git.png' },
    { name: 'Webpack', icon: 'https://img.icons8.com/color/48/000000/webpack.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/color/48/000000/docker.png' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/48/000000/figma.png' },
    { name: 'VS Code', icon: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png' },
    { name: 'Photoshop', icon: 'https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png' },
    { name: 'Trello', icon: 'https://img.icons8.com/color/48/000000/trello.png' },
  ];

  const [refFrontEnd, inViewFrontEnd] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refBackEnd, inViewBackEnd] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refTools, inViewTools] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const frontEndTrail = useTrail(frontEndSkills.length, {
    opacity: inViewFrontEnd ? 1 : 0,
    transform: inViewFrontEnd ? 'translate3d(0,0,0)' : 'translate3d(0,40px,0)',
    delay: 200,
  });

  const backEndTrail = useTrail(backEndSkills.length, {
    opacity: inViewBackEnd ? 1 : 0,
    transform: inViewBackEnd ? 'translate3d(0,0,0)' : 'translate3d(0,40px,0)',
    delay: 200,
  });

  const toolsTrail = useTrail(toolsSkills.length, {
    opacity: inViewTools ? 1 : 0,
    transform: inViewTools ? 'translate3d(0,0,0)' : 'translate3d(0,40px,0)',
    delay: 200,
  });

  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 py-10 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:text-center">Skills</h2>
      <div className="space-y-8">
        <div ref={refFrontEnd}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Front-End</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {frontEndTrail.map((style, index) => (
              <animated.div
                key={frontEndSkills[index].name}
                style={{
                  ...style,
                  transform: `translate3d(${mousePos.x / 100}px, ${mousePos.y / 100}px, 0)`,
                }}
                className="skill-placeholder"
              >
                <img
                  src={frontEndSkills[index].icon}
                  alt={frontEndSkills[index].name}
                  className="skill-icon"
                />
              </animated.div>
            ))}
          </div>
        </div>
        <div ref={refBackEnd}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Back-End</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {backEndTrail.map((style, index) => (
              <animated.div
                key={backEndSkills[index].name}
                style={{
                  ...style,
                  transform: `translate3d(${mousePos.x / 100}px, ${mousePos.y / 100}px, 0)`,
                }}
                className="skill-placeholder"
              >
                <img
                  src={backEndSkills[index].icon}
                  alt={backEndSkills[index].name}
                  className="skill-icon"
                />
              </animated.div>
            ))}
          </div>
        </div>
        <div ref={refTools}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Tools and Other Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {toolsTrail.map((style, index) => (
              <animated.div
                key={toolsSkills[index].name}
                style={{
                  ...style,
                  transform: `translate3d(${mousePos.x / 100}px, ${mousePos.y / 100}px, 0)`,
                }}
                className="skill-placeholder"
              >
                <img
                  src={toolsSkills[index].icon}
                  alt={toolsSkills[index].name}
                  className="skill-icon"
                />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
