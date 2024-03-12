import React, { useContext } from 'react';
import { motion,  } from 'framer-motion';
import { AnimationContext } from '../../context/animation';
import HorizontalScrollCarousel from "../../components/Background/HorizontalScrollCarousel";

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
        className="text-center sticky  top-20 z-0 pt-5"
      >
        <h2 className="text-2xl md:text-5xl  mb-4 uppercase text-[1.5rem] font-semibold lg:text-[3rem]  ">Our Working Process</h2>
        <p className="md:text-lg text-[#929294] pb-[30rem]">
          These are the steps we take to bring your project from idea to deployment.
        </p>
      </motion.div>
       
      <HorizontalScrollCarousel />


    </div>
    
  );
};

export default SelectedWorks;
