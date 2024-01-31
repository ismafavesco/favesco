import AwardedWork from "../../components/Work/AwardedWork";
import ClassicBlueTag from "../../assets/images/Classic Blue Tag.png";
import Crown from "../../assets/images/Awarded Works Crown.png";
import Tag from "../../components/Tag/Tag";
import OrangyWaveTag from "../../assets/images/Orangy Wave Tag.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";
import Services from "../../components/Cards/Services";
const AwardedWorks = () => {
  const { riseUpVariant, slideInFromRight } = useContext(AnimationContext);
  return (
    <div
      id="services"
      data-scroll-section
      className="text-[#e5e5e5] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 xxl:pt-[3rem]"
    >
      <motion.div
        variants={slideInFromRight}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col lg:flex-row justify-between lg:items-center gap-2 lg:gap-10 mt-[4rem]"
      >
        
        {/*Cards / Services*/}
        <Services />

        </motion.div>
        
    </div>
  );
};

export default AwardedWorks;
