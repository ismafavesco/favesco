"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { HeroParallax } from "../../components/Background/HeroParallax"; 
import { AnimationContext } from "../../context/animation"; 


export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Gymdex",
    link: "https://gymdex.vercel.app/",
    thumbnail: "https://i.imgur.com/FxB8GR0.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  
 
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Esifi ",
    link: "https://esifi-ai.com",
    thumbnail: "https://i.imgur.com/NVWMYy8.png", 
  },
  
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  
  {
    title: "Quiz AI",
    link: "https://quizai-ten.vercel.app",
    thumbnail: 
     "https://i.imgur.com/Gx1g3si.png", 
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
 
];

const Showcase = () => {
  const { riseUpVariant2, riseUpItem } = useContext(AnimationContext);

  return (
    <div id="showcase" className="flex flex-col lg:justify-between align-top text-[#e5e5e5] pb-[8rem] w-auto mt-8 m-auto   xxl:pt-[3rem]" data-scroll-section>
      <motion.div variants={riseUpVariant2} initial="hidden" whileInView="visible" className="w-full">
        <HeroParallax products={products} />
      </motion.div>
      <motion.div variants={riseUpItem} className="">
        <p className="text-center text-[#686869] font-medium lg:text-base text-[80%]">
         Showcasing our products and collaborations.
        </p>
      </motion.div>
    </div>
  );
};

export default Showcase;
