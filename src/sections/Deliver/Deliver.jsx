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
            className="text-[#929294] font-medium lg:text-base text-[90%]"
          >
        We build digital tools that work for your business. No templates, no fluff – just solid code and smart design that fits your needs.
          </motion.p>
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[90%]"
          >
          Our team keeps things simple: we talk to you, understand what you need, and build it. We've helped new businesses get online and old ones update their tech.
           </motion.p>
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[90%]"
          >
What makes us different? We speak plain English or Spanish, not tech jargon. With our 1-on-1 support whenever you need it, you'll feel like you have your own IT department.
</motion.p>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Deliver;
