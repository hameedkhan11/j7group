'use client';

import React, { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import { FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const CostaMareHero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'imgi_54_67c7bc857d870bdadf59c016_Rectangle_201347-p-1080_hktomw',
    'imgi_48_67ca7509dff64ea1d506ac84_ellington_2_zo0moy',
    'imgi_46_67ca7509ff7e4587a0a547b3_ellington_1_s5hxyo',
    'imgi_57_67c7bc857d870bdadf59c017_Rectangle_201348-p-1080_bfq3am'
  ];

  const propertyTitles = [
    'J7 Emporium',
    'J7 Mall',
    'J7 Global',
    'Top City'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Previous Image */}
        <div className="absolute inset-0">
          <CldImage
            src={heroImages[currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1]}
            alt={`Costa Mare Previous`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* Current Image with Progressive Reveal */}
        <motion.div
          key={currentImageIndex}
          initial={{ 
            clipPath: 'polygon(50% 100%, 50% 100%, 50% 100%, 50% 100%)'
          }}
          animate={{ 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
          transition={{ 
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="absolute inset-0"
        >
          <CldImage
            src={heroImages[currentImageIndex]}
            alt={`Costa Mare ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority={currentImageIndex === 0}
          />
        </motion.div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        {/* Logo */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-1 bg-white mb-1"></div>
            <div className="w-8 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white mb-4"></div>
            <h1 className="text-2xl font-light tracking-widest">J7 GROUP</h1>
          </div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl  font-light leading-tight">
            Experience Living at {propertyTitles[currentImageIndex]}
          </h2>
        </motion.div>
        
        {/* CTA Button */}
        <motion.button 
          className="px-8 py-3 border-2 cursor-pointer border-white rounded-full text-white bg-transparent flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: '#000000'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FiPhone className="w-4 h-4" />
          Enquire Now
        </motion.button>
      </div>
    </div>
  );
};

export default CostaMareHero;