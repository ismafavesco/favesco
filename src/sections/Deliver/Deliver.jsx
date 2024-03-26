import React, { useContext } from "react";
import Stats from "./Stats";
import multicolorButton from "../../assets/images/multicolorButton.png";
import circleNew from "../../assets/images/circleNew.png";
import { motion } from "framer-motion";
import { AnimationContext } from "../../context/animation";

const Deliver = () => {
  const { riseUpVariant, riseUpItem, tagVariant } =
    useContext(AnimationContext);
    
  return (
    <div
      id="about"
      data-scroll-section
      className=" text-white pb-[2rem]   max-w-[1300px] m-auto px-6 md:px-10  lg:pb-[8rem] lg:mt-[10rem]"
    >
      <Stats />
      <div>
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          className="flex items-center mb-8 mt-[4rem] justify-between"
        >
          <motion.p
            variants={riseUpItem}
            className="uppercase text-[1.5rem] font-semibold lg:text-[3rem] w-full lg:w-[30%] leading-[3rem]"
          >
            What we deliver
          </motion.p>
          <motion.img
            variants={riseUpItem}
            className="xs:h-[23px] md:h-[40px] lg:h-[80px] lg:block   "
            src={multicolorButton}
            alt="Tag 1"
          />
          <motion.img
            variants={tagVariant}
            className="hidden md:block md:h-[50px] lg:h-[80px] "
            src={circleNew}
            alt="Tag 2"
          />
        </motion.div>
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap md:flex-nowrap gap-8"
        >

          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
            Think of us as your personal business tailors. We don't do one-size-fits-all; we craft strategies that fit your business like a custom-made suit. Our goal is to make your digital dreams a reality and help you stand out in the competitive landscape.
          </motion.p>
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
Our team of expert developers and designers work closely with you, keeping you in the loop every step of the way. We believe in transparency, collaboration, and delivering results that exceed your expectations.          </motion.p>
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
         From landing pages to sophisticated mobile apps, we offer flexible partnership models to suit your needs. Whether you prefer a one-time project or an ongoing collaboration, we've got you covered. Our dedicated support  will make you feel like you have your very own IT department.
          </motion.p>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Deliver;
