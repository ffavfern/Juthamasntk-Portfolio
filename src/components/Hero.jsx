import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <header id="home" className="flex items-center justify-between px-20 ">
      <motion.div 
        className="flex flex-col items-start space-y-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="name text-center mb-8">
          <h1 className="text-9xl font-bold leading-tight uppercase">Fern</h1>
          <h1 className="text-6xl font-bold uppercase">
            Juthamas
            <br />
            Naktrakul
          </h1>
        </div>

        <motion.button 
          className="flex items-center px-6 py-4 bg-[#145C9E] text-white rounded-full shadow-md hover:shadow-lg hover:bg-[#104a8a] transition-all duration-300 uppercase"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          projects
          <FontAwesomeIcon icon={faChevronRight} className="ml-2 w-5 h-5" />
        </motion.button>
      </motion.div>
      <motion.img 
        src="/public/profile.jpeg" 
        alt="Profile" 
        className="w-1/2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
    </header>
  );
};

export default Hero;
