"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/landing-page/Hero';
import NavBar from '@/components/landing-page/NavBar';
import Ourservices from '@/components/landing-page/Ourservices';
import Industries from '@/components/landing-page/Industries';

import WhyChooseUs from '@/components/landing-page/Whywechooseus';
import Team from '@/components/landing-page/Team';
import Footer from '@/components/landing-page/Footer';

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#D1D1D1]">
      <NavBar introFinished={introFinished} />
      
      {/* Hero section */}
      <Hero onAnimationComplete={() => setIntroFinished(true)} />
      
      {/* Lower sections with overlapping animation */}
      <motion.div
        className="bg-white relative z-20 rounded-t-[40px] md:rounded-t-[60px]"
        initial={{ y: "10vh" }} // Start slightly below the viewport edge
        animate={{ 
          y: introFinished ? "-6vh" : "10vh" // Only slide up after intro is finished
        }}
        transition={{ 
          duration: 1.8, 
          ease: [0.16, 1, 0.3, 1],
          delay: 0 // Immediate entrance
        }}
      >
        <Ourservices />
        <Industries />
        {/* <Team /> */}
        <WhyChooseUs />
        <Footer />
      </motion.div>
    </div>
  );
}
