import React from 'react';
import { motion } from 'framer-motion';

const QuoteButton = () => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="mt-12 lg:mt-0 rounded-3xl bg-gradient-to-r from-[#0888ca] to-[#7667ab] px-8 py-4 text-white shadow-lg transition-all duration-300 ease-in-out"
    >
      <span className="lg:text-lg font-bold">QUOTE YOUR PROJECT</span>
       </motion.button>
  );
};

export default QuoteButton;