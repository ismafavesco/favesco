import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Contact from "../Contact/Contact"; 

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="   place-content-left">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold py-2 px-4 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-lg md:text-xl lg:text-2xl"
      >
        Let's Start!
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className=" backdrop-blur p-18 fixed inset-0 z-50 grid place-items-center  cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            {/* Contact Form Component */}
            <Contact />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
