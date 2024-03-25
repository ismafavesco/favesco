import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logoFavesco from "../../assets/images/logoFavesco.png";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [desktopNav, setDesktopNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDesktopNav = () => {
    setDesktopNav(true);
    setTimeout(() => {
      setDesktopNav(false);
    }, 1000);
  };

  const { riseUpVariant, riseUpItem, navVariants, itemVariants, tagVariant } =
    useContext(AnimationContext);

  return (
    <>
      <div className="bg-[#f1f1f1] relative z-10">
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          className="flex flex-row justify-between items-center py-6 px-4 lg:px-20 pb-4 lg:pb-8 border-b border-[#dddddd] max-w-[1200px] m-auto"
        >
          <Link
            to="about"
            onClick={handleDesktopNav}
            className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex"
          >
            <motion.span variants={riseUpItem}>About Us</motion.span>
          </Link>
          <Link
            to="showcase"
            onClick={handleDesktopNav}
            className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex"
            href=""
          >
            <motion.span variants={riseUpItem}>Showcase</motion.span>
          </Link>

          <Link to="home" className="cursor-pointer">
            <motion.img
              variants={riseUpItem}
              src={logoFavesco}
              alt="Logo"
              className="h-[30px]"
            />
          </Link>
          <Link
            to="services"
            onClick={handleDesktopNav}
            className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex"
          >
            <motion.span variants={riseUpItem}>Services</motion.span>
          </Link>
          <Link
            to="contact"
            onClick={handleDesktopNav}
            className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex"
            href=""
          >
            <motion.span variants={riseUpItem}> Contact Us</motion.span>{" "}
          </Link>
          <motion.div
            variants={tagVariant}
            className="md:hidden"
            onClick={handleNav}
          >
            <HiOutlineMenuAlt3 size={25} />
          </motion.div>
        </motion.div>
      </div>

      {/* Black Background Overlay */}
      <AnimatePresence>
        {desktopNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black z-50"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5 }}
              className="h-screen"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navbar */}
      <AnimatePresence>
        <motion.div
          initial={{ left: "100%" }}
          animate={nav ? { left: "0" } : { left: "100%", transition: { delay: 1 } }}
          className="bg-black bg-center bg-[length:900%] h-screen z-50 fixed top-0 w-screen duration-300"
        >
          <motion.div
            initial="hidden"
            whileInView={nav ? "visible" : "hidden"}
            variants={navVariants}
            exit="hidden"
            className="backdrop-blur-[8px] h-screen"
          >
            <div onClick={handleNav} className="flex justify-end p-4 text-white">
              <motion.span variants={tagVariant}>
                <FaTimes size={25} />
              </motion.span>
            </div>
            <div className="flex flex-col items-center text-white">
              <Link
                to="about"
                onClick={handleNav}
                className="p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold"
              >
                <motion.span variants={itemVariants}> About Us</motion.span>
              </Link>
              <Link
                to="showcase"
                onClick={handleNav}
                className="p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold"
              >
                <motion.span variants={itemVariants}>Showcase</motion.span>
              </Link>
              <Link
                to="services"
                onClick={handleNav}
                className="p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold"
              >
                <motion.span variants={itemVariants}>Services</motion.span>
              </Link>

              <Link
                to="contact"
                onClick={handleNav}
                className="p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold"
              >
                <motion.span variants={itemVariants}>Contact Us</motion.span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Navbar;