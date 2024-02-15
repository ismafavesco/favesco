import React, { useContext } from 'react';
import { motion,  } from 'framer-motion';
import { AnimationContext } from '../../context/animation';
import HorizontalScrollCarousel from "../HorizontalScrollCarousel/HorizontalScrollCarousel";
import { FaArrowDown } from 'react-icons/fa';

const SelectedWorks = () => {
  const { fade } = useContext(AnimationContext);

  
  

  return (

    <div
      id="project"
      data-scroll-section
      className="text-white  mt-[8rem] lg:mt-[11rem] m-auto px-6 md:px-10 xxl:pt-[3rem] mb-[-12] pb-[5]" 
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }} whileInView={fade}
        className="text-center sticky top-20 z-0 pt-5"
      >
        <h2 className="text-2xl md:text-5xl  mb-4 uppercase text-[1.5rem] font-semibold lg:text-[3rem]   ">Our Development Process</h2>
        <p className="md:text-lg text-[#929294]">
          These are the steps we take to bring your project from idea to deployment.
        </p>
      </motion.div>
       {/* Scroll Indicator */}
       <div  className="flex justify-center items-center md:hidden ">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-xl flex flex-col items-center ">
          <span className="text-sm">Scroll</span>
          <FaArrowDown />
        </motion.div>
      </div>
      <HorizontalScrollCarousel />


    </div>
    
  );
};

export default SelectedWorks;
