import React, {useRef,  } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { FaLightbulb, FaPencilRuler, FaCode, FaBug, FaRocket, FaTools } from 'react-icons/fa';


const stepIcons = {
  Discovery: <FaLightbulb className="text-6xl md:text-8xl text-orange-500" />,
  Design: <FaPencilRuler className="text-6xl md:text-8xl text-green-500" />,
  Development: <FaCode className="text-6xl md:text-8xl text-red-500" />,
  Testing: <FaBug className="text-6xl md:text-8xl text-yellow-500" />,
  Deployment: <FaRocket className="text-6xl md:text-8xl text-purple-500" />,
  Maintenance: <FaTools className="text-6xl md:text-8xl text-pink-500" />,
};


const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["19%", "-101%"]);

    
    return (
        
      <section ref={targetRef}       
 
      className=" relative h-[300vh] top-[-32rem]">
        <div className="sticky top-0  flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className=" flex gap-12 " >
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };
  
  const Card = ({ card }) => {
    return (
      <motion.div
        key={card.id}
        className=" relative flex flex-col items-center justify-start h-[420px] w-[340px] lg:h-[500px] lg:w-[400px] xl:h-[560px] xl:w-[450px] 2xl:h-[620px] 2xl:w-[500px] rounded-2xl bg-[#29292C] shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Icon */}
        <div className="mt-12">
          {stepIcons[card.title] || <FaLightbulb className="text-6xl md:text-8xl text-orange-500 mb-4" />}
        </div>
  
        {/* Title and Description */}
        <div className="p-4 text-center">
          <h2 className="mb-2 text-3xl lg:text-4xl font-semibold text-[#e5e5e5]">{card.title}</h2>
          <p className=" lg:text-xl text-lg text-[#929294]">{card.description}</p>
        </div>
        
        
      </motion.div>
      
      
    );
  };


  
  const cards = [
    {
      title: 'Discovery',
      description: 'Ensure we fully understand your business goals for maximum impact.',
      id: 1,
    },
    {
      title: 'Design',
      description: ' Transform your vision into compelling user experiences, blending aesthetic appeal with intuitive functionality.',
      id: 2,
    },
    {
      title: 'Feedback',
      description: 'We adapt our designs based on your insights, to meet with your expectations and user needs.',
      id: 2,
    },
    {
      title: 'Development',
      description: 'After getting green-light, we bring the design to life with clean, efficient code, ensuring your application is built perfectly.',
      id: 3,
    },
    {
      title: 'Testing',
      description: 'We ensure your application performs flawlessly across all scenarios, guaranteeing perfect efficiency and user experience.',
      id: 4,
    },
    {
      title: 'Deployment',
      description: 'Plan then execution, ensuring your application makes a smooth and successful entrance into the market or your buisness.',
      id: 5,
    },
    {
      title: 'Maintenance',
      description: 'This phase includes ongoing updates and optimizations for one week free of charge, keeping your application performing flawlessly.',
      id: 6,
    },
  ];

  export default HorizontalScrollCarousel;