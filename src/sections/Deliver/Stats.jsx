import React, { useContext } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { motion } from "framer-motion";
import { AnimationContext } from "../../context/animation";


const Stats = () => {
	
	const { riseUpVariant, riseUpItem } = useContext(AnimationContext);

	return (
		<>
			<motion.div
				variants={riseUpVariant}
				initial='hidden'
				whileInView='visible'
				className='flex flex-wrap justify-center lg:flex-nowrap gap-8 md:justify-between items-center mt-[3rem] pb-[2rem] border-b border-gray-600 text-[#dadada]'>
				<motion.div variants={riseUpItem}>
					<div className='flex items-start'>
						<p className='font-lato text-[3rem] lg:text-[5rem] font-bold'>
							500
						</p>
						<BiPlusMedical className='mt-[12px] text-[1.2rem] lg:text-[3rem] text-[#0476b5]' />
					</div>
					<p className='lg:mt-[-20px] mt-[-10px] text-[70%] lg:text-[1rem] font-medium text-[#929294]'>
						Hours of Development
					</p>
				</motion.div>
				<motion.div variants={riseUpItem}>
					<div className='flex items-start'>
						<p className='font-lato text-[3rem] lg:text-[5rem] font-bold'>
							20
						</p>
						<BiPlusMedical className='mt-[12px] text-[1.2rem] lg:text-[3rem] text-[#f53627]' />
					</div>
					<p className='lg:mt-[-20px] mt-[-10px] text-[70%] lg:text-[1rem] font-medium text-[#929294]'>
						Software Solutions
					</p>
				</motion.div>
				<motion.div variants={riseUpItem}>
					<div className='flex items-start'>
						<p className='font-lato text-[3rem] lg:text-[5rem] font-bold'>
							10
						</p>
						<BiPlusMedical className='mt-[12px] text-[1.2rem] lg:text-[3rem] text-[#ea8113]' />
					</div>
					<p className='lg:mt-[-20px] mt-[-10px] text-[70%] lg:text-[1rem] font-medium text-[#929294]'>
					Happy Clients 	
					</p>
				</motion.div>
				<motion.div variants={riseUpItem} className='hidden lg:block'>
					<p className='text-[1rem] text-[#929294]'>
					Embark on your tech journey with us. We tailor software solutions to bring your innovative ideas to life. Let's create something amazing together.

					</p>
				</motion.div>
				
			</motion.div>
			
			<div className="relative overflow-hidden whitespace-nowrap">
  <div className="flex gap-4 items-center justify-between py-4 border-b border-gray-600">
    <div className="animate-slide">
      <span className="text-[1.2rem] lg:text-[3rem] uppercase inline-block">Web pages - Mobile Apps - CRM - AI Implementation - SaaS</span>
    </div>
   
  </div>
</div>
		</>
	);
};

export default Stats;
