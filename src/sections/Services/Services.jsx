import React from 'react';
import img from '../../assets/images/web.svg';
import img2 from '../../assets/images/app.svg';
import img3 from '../../assets/images/hosting.svg';
import img4 from '../../assets/images/consultation.svg';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Services = () => {

  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.5, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div
      id="services"
      className=" text-white max-w-[1400px] lg:mt-0  mt-20 mx-auto px-6 md:px-10 rounded-lg"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      data-scroll-section 
    >
      <div className="text-center lg:text-left lg:mb-12 mb-6">
        <motion.h2
          className="pt-10 lg:pt-[3rem] uppercase text-[1.5rem] font-semibold lg:text-[3rem] w-full leading-[3rem]"
          variants={itemVariants}
        >
          Services
        </motion.h2>
       
      </div>
      <motion.div className="flex-grow" variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      >
        <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard imgSrc={img} title="Web Development" />
          <ServiceCard imgSrc={img2} title="Mobile App Development" />
          <ServiceCard imgSrc={img3} title="Custom Software" />
          <ServiceCard imgSrc={img4} title="SEO Implementation " />
        </div>
      </motion.div>
      <CollaborationSection  />
    </motion.div>
  );
};

const ServiceCard = ({ imgSrc, title }) => (
  <motion.div
    className="bg-zinc-900 text-gray-300 hover:bg-[#0888ca] hover:text-white transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg p-4 group"
    whileHover={{ scale: 1.05 }}
  >
    <img
      alt={title}
      src={imgSrc}
      className="mx-auto h-32 w-32 lg:h-52 lg:w-52 object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
    />
    <h3 className="mt-1  lg:text-2xl text-xl font-bold">{title}</h3>
  </motion.div>
);

const CollaborationSection = () => (
  <div className="flex justify-center items-center w-full px-2 md:px-12 py-8 bg-zinc-900 mt-12 rounded-lg">
    <div className="text-center  lg:w-1/2 ">
      <h3 className="text-3xl lg:text-5xl font-bold mb-4">
        Let's <TypeAnimation sequence={['Collaborate', 3000, 'Create', 3000]} wrapper="span" cursor={true} repeat={Infinity} className="ml-2 text-[#0888ca] " />
      </h3>
      <p className="text-[#929294] font-medium text-[90%] lg:text-base mb-6">
        Partner with us to scale your existing applications or build new solutions based on your needs.
      </p>
      <Link
        to="contact"
        smooth={true}
        duration={100}
        className="bg-[#0888ca] lg:text-xl cursor-pointer text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#1d3c73] transition duration-300 ease-in-out"
      >
        Get in Touch
      </Link>
    </div>
  </div>
);

export default Services;
