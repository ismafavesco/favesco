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
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div
      id="services"
      className="bg-[#1e1e20] text-white pb-8 lg:w-9/10 max-w-6xl mt-20 mx-auto px-6 md:px-10 rounded-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      data-scroll-section 
    >
      <div className="text-center lg:text-left mb-12">
        <motion.h2
          className="pt-10 uppercase text-[1.5rem] font-semibold lg:text-[3rem] w-full lg:w-[30%] leading-[3rem]"
          variants={itemVariants}
        >
          Services
        </motion.h2>
      </div>
      <motion.div className="flex-grow" variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard imgSrc={img} title="Web Development" />
          <ServiceCard imgSrc={img2} title="Mobile App Development" />
          <ServiceCard imgSrc={img3} title="Domain and Hosting" />
          <ServiceCard imgSrc={img4} title="IT Consultations" />
        </div>
      </motion.div>
      <CollaborationSection />
    </motion.div>
  );
};

const ServiceCard = ({ imgSrc, title }) => (
  <motion.div
    className="bg-[#29292C] text-gray-300 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg p-4 group"
    whileHover={{ scale: 1.05 }}
  >
    <img
      alt={title}
      src={imgSrc}
      className="mx-auto h-32 w-32 object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
    />
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
  </motion.div>
);

const CollaborationSection = () => (
  <div className="w-full px-2 md:px-12 py-8 bg-[#29292C] mt-8 rounded-lg">
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="lg:w-1/2">
        <h3 className="text-3xl font-bold mb-4">
          Let's <TypeAnimation sequence={['Collaborate', 3000, 'Create', 3000]} wrapper="span" cursor={true} repeat={Infinity} className="ml-2 text-blue-500" />
        </h3>
        <p className="text-md mb-4">
          Partner with us to scale your existing applications or to build new solutions tailored to your needs.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  </div>
);

export default Services;
