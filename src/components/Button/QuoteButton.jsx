import React from 'react';
import { motion } from 'framer-motion';

const QuoteButton = () => {
  const handleClick = () => {
    const calendlyLink = 'https://calendly.com/favesco-studio/30min';
    window.open(calendlyLink, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="mt-12 lg:mt-0 rounded-3xl bg-gradient-to-r from-[#0888ca] to-[#7667ab] px-8 py-4 text-white shadow-lg transition-all duration-300 ease-in-out"
    >
      <span className="lg:text-lg font-bold">BOOK A FREE CALL!</span>
    </motion.button>
  );
};

export default QuoteButton;