import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const FormComponent = () => {
  const hoverAnimation = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  return (
    <form className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.input 
          type="text" 
          placeholder="Full-name" 
          className="input input-bordered w-full" 
          whileHover={hoverAnimation}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.input 
          type="email" 
          placeholder="Email" 
          className="input input-bordered w-full" 
          whileHover={hoverAnimation}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.input 
          type="tel" 
          placeholder="Phone" 
          className="input input-bordered w-full" 
          whileHover={hoverAnimation}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.textarea 
          placeholder="Your message" 
          className="textarea textarea-bordered w-full" 
          rows="4"
          whileHover={hoverAnimation}
        ></motion.textarea>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.button 
          className="btn btn-white text-[#145C9E] w-full"
          whileHover={hoverAnimation}
        >
          SUBMIT
        </motion.button>
      </motion.div>
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row w-full items-center">
        <h2 className="text-3xl font-bold mb-8 lg:w-1/3 w-full text-center lg:text-left">Get In Touch</h2>
        <div className="bg-[#145C9E] p-10 rounded-lg shadow-md flex flex-col lg:flex-row justify-between w-full">
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Send Message</h3>
            <FormComponent />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10">
            <h3 className="text-lg font-semibold text-white mb-4">Info</h3>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-white bg-[#145C9E] rounded-full p-2 mr-3" />
              <p className="text-white">097 951 6659</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-white bg-[#145C9E] rounded-full p-2 mr-3" />
              <p className="text-white">Juthamas.ntk@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
