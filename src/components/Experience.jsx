import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: "Freelance Web Developer",
    period: "2023 - Present",
    details: [
      "Developed and maintained responsive websites using HTML, CSS, JavaScript, and various front-end frameworks.",
      "Collaborated with clients to understand their requirements and deliver customized solutions.",
      "Integrated APIs and third-party services to enhance website functionality."
    ]
  },
  {
    title: "Graphic Designer & UX/UI at Pongchotana.Co.LTD.",
    period: "2023 - 2023",
    details: [
      "Designed marketing materials including brochures, flyers, and social media graphics.",
      "Worked closely with the marketing team to ensure brand consistency.",
      "Utilized Adobe Creative Suite for design projects."
    ]
  },
  {
    title: "Full-Stack Developer (Internship) at Browseware Solution Co., Ltd.",
    period: "2022 - 2022",
    details: [
      "Provided exceptional customer service through phone, email, and chat support.",
      "Resolved customer issues and complaints promptly and effectively.",
      "Maintained customer records and managed the CRM system."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className=" bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-start">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
              title={exp.title}
              period={exp.period}
              details={exp.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ index, title, period, details }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.3 } },
    hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className=" p-6 "
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{period}</p>
      <ul className="list-disc pl-5 space-y-2">
        {details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Experience;
