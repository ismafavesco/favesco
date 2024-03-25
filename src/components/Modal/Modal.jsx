import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Contact from "../Contact/Contact";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center bg-gradient-to-r from-[#0888ca] to-[#7667ab] text-white font-semibold py-2 px-4 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3C78FF] focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-lg md:text-xl lg:text-2xl"
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
          className=" fixed inset-0 z-50 grid place-items-center cursor-pointer bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white  text-gray-800 p-6  rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Contact Form Component */}
            <Contact />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;