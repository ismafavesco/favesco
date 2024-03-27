import React, { useRef } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { FaLightbulb, FaComments, FaPencilRuler, FaCode, FaBug, FaRocket, FaTools } from 'react-icons/fa';
import { Meteors } from '../Background/meteors';

const stepIcons = {
  Discovery: <FaLightbulb className="text-4xl md:text-6xl text-[#1D3C73]" />,
  Design: <FaPencilRuler className="text-4xl md:text-6xl text-[#A0D9F7]" />,
  Feedback: <FaComments className="text-4xl md:text-6xl text-[#0888CA]" />,
  Development: <FaCode className="text-4xl md:text-6xl text-[#5963AA]" />,
  Testing: <FaBug className="text-4xl md:text-6xl text-[#7667AB]" />,
  Deployment: <FaRocket className="text-4xl md:text-6xl text-[#1D3C73]" />,
  Maintenance: <FaTools className="text-4xl md:text-6xl text-[#A0D9F7]" />,
};

const Card = React.memo(({ card }) => (
  <motion.div
    key={card.id}
    className="relative flex flex-col items-center justify-start h-[420px] w-[340px] lg:h-[450px] lg:w-[450px] sl:h-[500px] sl:w-[450px] rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 ease-in-out lg:hover:shadow-xl bg-zinc-900"
  >
    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full rounded-2xl p-8 overflow-hidden">
      <div className="mt-8">{stepIcons[card.title] || <FaLightbulb className="text-6xl md:text-8xl mb-4" />}</div>
      <div className="text-center">
        <h2 className="mb-2 text-3xl lg:text-4xl font-semibold text-white">{card.title}</h2>
        <p className="lg:text-xl text-lg text-gray-300">{card.description}</p>
      </div>
      <Meteors number={10} />
    </div>
  </motion.div>
));

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const springScrollYProgress = useSpring(scrollYProgress, {
    mass: .1,
    stiffness: 200,
    damping: 20,
    restDelta: 0.001,
  });
  const x = useTransform(springScrollYProgress, [0, 1], ["1%", "-101%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-12 lg:bottom-1 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
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
    description: 'Transform your vision into compelling user experiences, blending aesthetic appeal with intuitive functionality.',
    id: 2,
  },
  {
    title: 'Feedback',
    description: 'We adapt our designs based on your insights, to meet with your expectations and user needs.',
    id: 3,
  },
  {
    title: 'Development',
    description: 'After getting green-light, we bring the design to life with clean, efficient code, ensuring your application is built perfectly.',
    id: 4,
  },
  {
    title: 'Testing',
    description: 'We ensure your application performs flawlessly across all scenarios, guaranteeing perfect efficiency and user experience.',
    id: 5,
  },
  {
    title: 'Deployment',
    description: 'Plan then execution, ensuring your application makes a smooth and successful entrance into the market or your buisness.',
    id: 6,
  },
  {
    title: 'Maintenance',
    description: 'This phase includes ongoing updates and optimizations for one week free of charge, keeping your application performing flawlessly.',
    id: 7,
  },
];

export default HorizontalScrollCarousel;