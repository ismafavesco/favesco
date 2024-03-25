import { Link } from "react-scroll";
import Logo from "../../assets/images/Logo White.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaTwitter, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const { riseUpVariant2, riseUpItem } = useContext(AnimationContext);

  return (
    <div data-scroll-section>
      <footer className="pt-[4rem] lg:pt-[0rem] lg:w-[90%] max-w-[1200px] m-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between border-t border-gray-700 pt-8 sm:pt-8">
          {/* Left */}
          <motion.div
            variants={riseUpVariant2}
            initial="hidden"
            whileInView="visible"
            className="md:w-[40%]  mb-8 md:mb-0"
          >
            <Link to="home" className="cursor-pointer">
              <motion.img
                variants={riseUpItem}
                src={Logo}
                alt="Logo"
                className="h-[30px] sm:h-[40px] md:h-[50px] mb-4 sm:mb-6"
              />
            </Link>
            <motion.p
              variants={riseUpItem}
              className="text-gray-400 font-medium mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base"
            >
              Custom software development company specializing in crafting innovative solutions for businesses worldwide.
            </motion.p>
            <motion.div
              variants={riseUpItem}
              className="flex space-x-4 sm:space-x-6 text-gray-400 mb-4 sm:mb-6"
            >
              <a href="https://www.instagram.com/Favesco.tech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                <FaInstagram size={20} sm={24} />
              </a>
              <a href="https://www.facebook.com/Favesco" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                <FaFacebook size={20} sm={24} />
              </a>
              <a href="https://twitter.com/Favescotech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                <FaTwitter size={20} sm={24} />
              </a>
              
              <a href="https://www.tiktok.com/@Favesco.tech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                <FaTiktok size={20} sm={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={riseUpVariant2}
            initial="hidden"
            whileInView="visible"
            className="md:w-[50%] w-[90%] flex flex-row justify-between"
          >
            <motion.div variants={riseUpItem} className="mb-6 sm:mb-0 sm:w-1/2 sm:pr-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">Contact Us</h3>
              <p className="text-gray-400 flex items-center mb-1 sm:mb-2 text-sm sm:text-base">
                <FaMapMarkerAlt className="mr-1 sm:mr-2" size={16} sm={20} />
                Arizona, United States
              </p>
              <p className="text-gray-400 flex items-center text-sm sm:text-base">
                <FaWhatsapp className="mr-1 sm:mr-2" size={16} sm={20} />
                +1 480-384-0486
              </p>
            </motion.div>
            <motion.div variants={riseUpItem} className="sm:w-1/2 sm:pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">Quick Links</h3>
              <ul className="text-gray-400 text-sm sm:text-base">
                <li className="mb-1 sm:mb-2">
                  <Link to="about" smooth={true} duration={200} className="hover:text-white cursor-pointer transition duration-300">
                    What We Deliver
                  </Link>
                </li>
                <li className="mb-1 sm:mb-2">
                  <Link to="showcase" smooth={true} duration={200} className="hover:text-white cursor-pointer transition duration-300">
                    Showcase
                  </Link>
                </li>
                <li className="mb-1 sm:mb-2">
                  <Link to="services" smooth={true} duration={200} className="hover:text-white cursor-pointer transition duration-300">
                    Services
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </footer>
      <div className="pt-12 py-4 sm:py-6">
        <p className="text-center text-gray-500 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} FAVESCO LLC. All rights reserved.
          <span className="ml-2 inline-block">
            <span  className="bg-gray-800 text-gray-400  rounded-md px-1 sm:px-2 py-0.5 sm:py-1 hover:bg-gray-700 transition duration-300 text-xs sm:text-sm">
              Powered by <a href="https://favesco.tech" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Favesco</a>
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;