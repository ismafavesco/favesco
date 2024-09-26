import React from 'react';
import img from '../../assets/images/web.svg';
import img2 from '../../assets/images/app.svg';
import img3 from '../../assets/images/hosting.svg';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { CanvasRevealEffect } from '../../components/Background/canvas-reveal-efect';
import { 
  FaDatabase,
  FaEnvelope,
  FaChartBar,
  FaCog,
  FaRobot ,
  FaEye
} from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';


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
    className="text-white max-w-[1400px] lg:mt-0 mt-20 mx-auto px-6 md:px-10 rounded-lg"
    initial="hidden"
    whileInView="visible"
    variants={containerVariants}
    data-scroll-section
    >
      <div className="text-center lg:text-left lg:mb-12 mb-6">
        <motion.h2
          className="pt-10 lg:pt-[3rem] uppercase text-[2rem] font-semibold lg:text-[3rem] w-full leading-[3rem]"
          variants={itemVariants}
        >
          SERVICES
        </motion.h2>
      </div>
      <motion.div
        className="flex-grow"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ServiceCard
            imgSrc={img}
            title="Professional Websites "
            description="We create custom landing pages and websites for businesses. Elegant and modern designs with efficient performance. You will be different than the rest."
            link="More details →"
          />
          <ServiceCard
            imgSrc={img3}
            title="Digital Solutions for Businesses"
            description="We offer a wide range of custom digital and software services, from process automation to optimize time and resources, database system administration, to cloud solutions."
            link="Give us a call →"
          />
          <ServiceCard
            imgSrc={img2}
            title="Branding & Creative Solutions"
            description="Our talented creative team crafts compelling brand identities, captivating designs, and engaging content to elevate your business's image and connect with your audience."
            link="More information →"
          />
        </div>
      </motion.div>
      <OtherServices />
      <CollaborationSection />
    </motion.div>
  );
};
const ServiceCard = ({ imgSrc, title, description, link }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Adjust the breakpoint as needed
  const [hovered, setIsHovered] = React.useState(false);

  const cardVariants = {
    initial: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
    },
    hovered: {
      scale: 1.05,
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
    },
  };

  const imageVariants = {
    initial: {
      scale: 1,
    },
    hovered: {
      scale: 1.1,
    
    },
  };


 

  return (
    <motion.div
    onTouchStart={() => setIsHovered(true)}
    onTouchEnd={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-zinc-900 text-gray-300 rounded-lg shadow-lg p-4 group relative"
      variants={cardVariants}
      initial="initial"
      animate={hovered ? 'hovered' : 'initial'}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64">
        <motion.img
          alt={title}
          src={imgSrc}
          className="mx-auto h-60 w-60 object-contain group-hover:scale-110"
          variants={imageVariants}

        />
        {isDesktop && hovered && (
          <div className="absolute inset-0 -z-10">
            <CanvasRevealEffect
              animationSpeed={1}
              containerClassName="bg-transparent"
              colors={[[59, 130, 246], [139, 92, 246]]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={4}
            />
          </div>
        )}
      </div>
      
      <h3 className="mt-1 lg:text-2xl text-xl font-bold group-hover:text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-400 group-hover:text-white">{description}</p>
      <a href="#" className="mt-4 inline-block text-[#0888ca] hover:text-[#1d3c73]">
        {link}
      </a>
    </motion.div>
  );
};


  
const OtherServices = () => (
  <div className="mt-12">
    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Other Services We Offer</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-zinc-900 text-gray-300 rounded-lg shadow-lg p-4 flex items-center">
        <FaDatabase className="h-8 w-8 mr-4 text-blue-500" />
        <div>
          <h4 className="text-xl font-bold mb-2">Databases</h4>
          <p className="text-sm">Leave behind heavy or slow spreadsheets.</p>
        </div>
      </div>
      <div className="bg-zinc-900 text-gray-300 rounded-lg shadow-lg p-4 flex items-center">
        <FaEnvelope className="h-8 w-8 mr-4 text-green-500" />
        <div>
          <h4 className="text-xl font-bold mb-2">Corporate Emails</h4>
          <p className="text-sm">Implementation of <strong>info@yourcompany.com</strong> emails.</p>
        </div>
      </div>
      <div className="bg-zinc-900 text-gray-300 rounded-lg shadow-lg p-4 flex items-center">
        <FaChartBar className="h-8 w-8 mr-4 text-yellow-500" />
        <div>
          <h4 className="text-xl font-bold mb-2">Data Analysis</h4>
          <p className="text-sm">Analyze your data for better decision making.</p>
        </div>
      </div>
      <div className="bg-zinc-900 text-gray-300 rounded-lg shadow-lg p-4 flex items-center">
        <FaCog className="h-8 w-8 mr-4 text-red-500" />
        <div>
          <h4 className="text-xl font-bold mb-2">Automation</h4>
          <p className="text-sm">Automate repetitive processes in your company.</p>
        </div>
      </div>
      <div className="bg-zinc-900 text-gray-300 rounded-lg shadow-lg p-4 flex items-center">
        <FaRobot  className="h-8 w-12 mr-4 text-purple-500" />
        <div>
          <h4 className="text-xl font-bold mb-2">Artificial Intelligence</h4>
          <p className="text-sm">Upgrade your company and automate your buisness managment with AI.</p>
        </div>
      </div>
      <div className="bg-zinc-900 text-gray-300 rounded-lg shadow-lg p-4 flex items-center">
        <FaEye className="h-8 w-8 mr-4 text-orange-500" />
        <div>
          <h4 className="text-xl font-bold mb-2">Digital Marketing</h4>
          <p className="text-sm">Boost your online presence and attract more clients.</p>
        </div>
      </div>
    </div>
  </div>
);

const CollaborationSection = () => (
  <div className="flex justify-center items-center w-full px-2 md:px-12 py-8 bg-zinc-900 mt-12 rounded-lg">
    <div className="text-center lg:w-1/2">
      <h3 className="text-3xl lg:text-5xl font-bold mb-4">
        Let's{' '}
        <TypeAnimation
          sequence={['Collaborate', 3000, 'Create', 3000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="ml-2 text-[#0888ca]"
        />
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