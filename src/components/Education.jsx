

import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Sukhothai Thammathirat Open University",
    location: "Nonthaburi, Thailand",
    duration: "2023 - 2026 (Expected)",
    gpa: "3.65",
    
  },
  {
    title: "Higher Vocational Certificate in Information Technology and Communication ",
    institution: "Chiang Mai Technical College",
    location: "Chiang Mai, Thailand",
    duration: "2020 - 2022",
    
  }
];

const EducationItem = ({ item }) => {
  return (
    <motion.div
      className="education-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p>Institution: {item.institution}</p>
      <p>Location: {item.location}</p>
      <p>Duration: {item.duration}</p>
      {item.gpa && <p>GPA: {item.gpa}</p>}
      
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="px-20 py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-start">Education</h2>
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Education;
