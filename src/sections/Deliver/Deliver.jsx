import React, { useContext } from "react";
import Stats from "./Stats";
import Tag1 from "../../assets/images/Deliver Wave Tag.png";
import Tag2 from "../../assets/images/Deliver Trump Circle.png";
import { motion } from "framer-motion";
import { AnimationContext } from "../../context/animation";

const Deliver = () => {
  const { riseUpVariant, riseUpItem, tagVariant } =
    useContext(AnimationContext);
    
  return (
    <div
      id="about"
      data-scroll-section
      className="h-full text-white pt-[5rem] pb-[2rem] lg:w-[90%] max-w-[1500px] m-auto px-6 md:px-10 md:pt-[15rem] lg:pb-[8rem]"
    >
      <Stats />
      <div>
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          className="flex justify-between items-center mb-8 mt-[4rem]"
        >
          <motion.p
            variants={riseUpItem}
            className="uppercase text-[1.5rem] font-semibold lg:text-[3rem] w-full lg:w-[30%] leading-[3rem]"
          >
            What we deliver
          </motion.p>
          <motion.img
            variants={riseUpItem}
            className="xs:h-[20px] md:h-[40px] lg:h-[80px] lg:block"
            src={Tag1}
            alt="Tag 1"
          />
          <motion.img
            variants={tagVariant}
            className="hidden md:block md:h-[50px] lg:h-[80px]"
            src={Tag2}
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
            Think of us as your personal business tailors. 
            We don’t do one-size-fits-all; we craft strategies that fit your business and attach to it.
            Effective? Try it Yourself!
          </motion.p>
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
            We use Trello and Notion to make sure you recieve the best experience and updates from our team.
          </motion.p>
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
         From landing pages to sophisticated mobile apps, we offer flexible partnership models, single payments or monthly subscriptions adapted to your needs, 
           ensuring dedicated support and solutions for your buisness, Consider us as your IT department.
          </motion.p>
          <motion.img
            variants={tagVariant}
            className="h-[60px] md:hidden"
            src={Tag2}
            alt="Tag 2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Deliver;
