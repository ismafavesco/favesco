import { motion } from "framer-motion";
import Gradient from "../../components/Background/Gradient";
import Modal from "../../components/Modal/Modal";

const CTA = () => {
  return (
    <section
      id="contact"
      data-scroll-section
      className="text-[#fff] max-w-[1500px] m-auto lg:pt-[1rem] grid pt-4 px-6 md:px-10"
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }}
      >
        <div className="relative w-full bg-zinc-900 h-[200px] lg:h-[400px] rounded-2xl overflow-hidden mb-[-4.5rem] lg:mb-[-10rem] ">
          <Gradient
            containerClassName="absolute "
            size="80%"
            blendingValue="overlay"
            gradientBackgroundStart="rgba(0, 0, 0, 0.6)"
            gradientBackgroundEnd="rgba(0, 0, 0, 0.6)"
            firstColor="60, 0, 120"
            secondColor="120, 0, 200"
            thirdColor="180, 0, 255"
            fourthColor="120, 60, 255"
            fifthColor="60, 120, 255"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.9 } }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase mb-8"
          >
            Ready to start a project?
            
          </motion.h2>
          
        </div>
       
        </div>
         <div className="flex justify-center lg:mb-[10rem] mb-[4.5rem] ">
            <Modal />
          </div>
          
        
        
      </motion.div>
    </section>
  );
};

export default CTA;