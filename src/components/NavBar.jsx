import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close menu after clicking
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`bg-white p-4 shadow-md sticky top-0 w-full z-10 ${
        showNav ? "block" : "hidden"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex justify-between items-center">
        <div className="md:hidden text-lg font-bold">Portfolio</div>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`mt-4 md:flex md:justify-center md:space-x-16 text-lg ${
          isMobileMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="my-2 md:my-0"
        >
          <a
            href="#home"
            className="text-gray-800"
            onClick={(e) => handleSmoothScroll(e, "home")}
          >
            HOME
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="my-2 md:my-0"
        >
          <a
            href="#about"
            className="text-gray-800"
            onClick={(e) => handleSmoothScroll(e, "about")}
          >
            ABOUT ME
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="my-2 md:my-0"
        >
          <a
            href="#projects"
            className="text-gray-800"
            onClick={(e) => handleSmoothScroll(e, "projects")}
          >
            PROJECTS
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="my-2 md:my-0"
        >
          <a
            href="#contact"
            className="text-gray-800"
            onClick={(e) => handleSmoothScroll(e, "contact")}
          >
            CONTACT
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
