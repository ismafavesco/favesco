import React, { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import TagCloud from '../../assets/images/TagCloud.png';
import { AnimationContext } from '../../context/animation';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import QuoteButton  from '../../components/Button/QuoteButton'
import Spline from '@splinetool/react-spline';

const Home = () => {
  const { fade, slideInFromLeft } = useContext(AnimationContext);

  return (
    <div id="home" data-scroll-section>
      <Navbar />
      <div className="bg-[#f1f1f1] rounded-bl-[2rem] lg:rounded-bl-[4rem] lg:pb-[11rem] rounded-br-[2rem] lg:rounded-br-[4rem] relative">
        <div className="h-[85vh] sl:h-[60vh] max-w-[1200px] m-auto  relative">
          <div className="py-[5rem] lg:pb-[0rem]  flex flex-col items-center lg:flex-row lg:gap-8 lg:px-[2rem] px-[1rem]">
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              className="lg:w-[60%] text-center lg:text-left mb-8 lg:mb-0"
            >
              <div className="md:flex items-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={fade}
                  className="uppercase text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-[-2px] lg:tracking-[-6px] leading-[4rem] lg:leading-[5rem] font-bold"
                >
                  you dream it,
                </motion.h1>
                
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={fade}
                className="uppercase text-[2.5rem] md:text-[4rem] lg:text-[5rem] tracking-[-2px] lg:tracking-[-6px] leading-[4rem] lg:leading-[5rem] font-bold"
              >
                we &nbsp;
                <TypeAnimation
                  sequence={['do it', 3000, 'program it', 3000, 'solve it', 3000]}
                  speed={50}
                  className="uppercase"
                  repeat={Infinity}
                  wrapper="span"
                />
              </motion.h1>
            </motion.div>
            <div className="lg:w-[40%] text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={fade}
                className="lg:mb-8  mb-4 text-sm lg:text-lg md:w-[80%] lg:w-full m-auto font-semibold text-gray-700"
              >
               We're all about solving digital problems and creating software that makes businesses run easier and more efficiently. Let's turn your big ideas into modern, user-friendly software that stands out.
              </motion.p>
              <div className="flex flex-col items-center md:flex-row md:justify-center lg:justify-start">
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={fade}>

              <QuoteButton  /> 
              </motion.span>
              </div>
            </div>
          </div >
          <motion.div className="hidden md:block " 
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible">

            <Spline scene="https://prod.spline.design/ib20v65gF9lv9YUA/scene.splinecode" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;