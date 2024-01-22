import Button from "../../components/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import CtaBanner from "../../assets/images/Start Project Bg.png";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const CTA = () => {

const [showModal, setShowModal] = useState(false)

  return (
    <section
      id="contact"
      data-scroll-section
      className="text-[#fff] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 mt-[3rem]"
    >
      <div className="relative">
        <motion.img
          initial={{
            opacity: 0,
            y: 150,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.4 },
          }}
          src={CtaBanner}
          alt=""
          className="max-w-full w-full h-[10rem] md:h-auto object-cover rounded-2xl md:rounded-none"
        />
        <div className="absolute top-5 left-5 md:top-10 md:left-10">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.9 },
            }}
            className="text-2xl md:text-5xl lg:text-[4rem] mb-[1rem] md:mb-[2rem] lg:mb-[3rem] font-bold uppercase lg:w-[90%] md:w-[70%]"
          >
            Ready to start a project ?
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 1.3 },
            }}

          >
                  <button 
  onClick={() => setShowModal(true)} 
  className="flex items-center justify-center bg-sky-700 text-white font-semibold py-2 px-4 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-lg md:text-xl lg:text-2xl"
>
  <span className="mr-2">
    Start Now
  </span>
  <FiArrowUpRight size={24} className="md:size-28 lg:size-32" />
</button>

                {showModal && <Modal onClose={() => setShowModal(false)} />}
                        </motion.div>
            </div>
         </div>
       </section>
  );
};

export default CTA;