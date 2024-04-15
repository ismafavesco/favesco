import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { motion } from "framer-motion";
import ScrollText from "../../components/Texts/ScrollText";

const Stats = () => {
  const riseUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const riseUpItem = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { value: "40k", icon: <BiPlusMedical className="mt-[12px] text-[1.2rem] lg:text-[3rem] text-[#a0d9f7]" />, text: "Hours of Development" },
    { value: "20", icon: <BiPlusMedical className="mt-[12px] text-[1.2rem] lg:text-[3rem] text-[#0888ca]" />, text: "Happy Clients " },
    { value: "8", icon: <BiPlusMedical className="mt-[12px] text-[1.2rem] lg:text-[3rem] text-[#7667ab]" />, text: "Frameworks" },
    { value: "24/7", icon: null, text: "1 on 1 Support" },
  ];

  return (
    <>
      <motion.div
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap justify-center lg:flex-nowrap gap-8 md:justify-between items-center mt-[3rem] pb-[2rem] border-b border-gray-600 text-[#dadada]"
      >
        {stats.map(({ value, icon, text }, index) => (
          <motion.div key={index} variants={riseUpItem}>
            <div className="flex items-start">
              <p className="font-lato text-[3rem] lg:text-[5rem] font-bold">{value}</p>
              {icon}
            </div>
            <p className="lg:mt-[-20px] mt-[-10px] text-[70%] lg:text-[1rem] font-medium text-[#929294]">{text}</p>
          </motion.div>
        ))}
        <motion.div variants={riseUpItem} className="hidden lg:block">
          <p className="text-[1rem] text-[#929294]">
          Businesses must adapt and innovate to stay competitive. Our job is to help you achieve a modern and creative adaptation. 
                   </p>
        </motion.div>
      </motion.div>
      <div className="relative overflow-hidden">
        <ScrollText
          baseVelocity={-5}
          className="flex gap-4 items-center justify-between py-4 border-b border-gray-600"
        >
          WebSite - Landing Page - E-commerce - Mobile App - CRM - AI Automation - SaaS - DataBase - Admin Dashboard -
          Branding -
        </ScrollText>
      </div>
    </>
  );
};

export default Stats;