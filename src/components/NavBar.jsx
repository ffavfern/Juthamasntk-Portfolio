import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDownThreshold = window.innerHeight * 0.1; // 10% of viewport height
      const scrollUpThreshold = window.innerHeight * 0.01; // 1% of viewport height

      if (currentScrollY > lastScrollY + scrollDownThreshold) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY - scrollUpThreshold) {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`bg-white p-4 shadow-md sticky top-0 w-full z-10 ${showNav ? 'block' : 'hidden'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <ul className="flex justify-center space-x-16 text-lg">
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#home" className="text-gray-800" onClick={(e) => handleSmoothScroll(e, 'home')}>HOME</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#about" className="text-gray-800" onClick={(e) => handleSmoothScroll(e, 'about')}>ABOUT ME</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#projects" className="text-gray-800" onClick={(e) => handleSmoothScroll(e, 'projects')}>PROJECTS</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#contact" className="text-gray-800" onClick={(e) => handleSmoothScroll(e, 'contact')}>CONTACT</a>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default NavBar;
