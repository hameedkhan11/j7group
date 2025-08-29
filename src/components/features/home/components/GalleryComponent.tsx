"use client"
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Types
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

interface CarouselGalleryProps {
  images?: GalleryImage[];
}

const CarouselGallery: React.FC<CarouselGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [direction, setDirection] = useState<number>(0);

  // Default luxury interior images
  const defaultImages: GalleryImage[] = [
    {
      id: 1,
      src: "imgi_77_1730719832-111_w_57_58-nfield-7-copy_cpmm4c",
      alt: "Luxury Living Room with Green Velvet Seating"
    },
    {
      id: 2,
      src: "imgi_1_CgO8wLZOHL28igjEbUpCrw8Q_nwt60v", 
      alt: "Modern Living Room with Yellow Sofas"
    },
    {
      id: 3,
      src: "imgi_73_1730719796-111_w_57_58-nfield-5-copy_disypn",
      alt: "Elegant Bedroom with Arched Windows"
    },
    {
      id: 4,
      src: "imgi_57_1730715895-screenshot-2024-11-04-at-10-24-36-copy_n9hflx",
      alt: "Contemporary Living Space"
    },
    {
      id: 5,
      src: "imgi_49_1730716625-4-nicole-franzen-111-w57th_living-room_028-copy_jp26ry",
      alt: "Designer Interior"
    }
  ];

  const galleryImages = images || defaultImages;

  const nextImage = (): void => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (): void => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index: number): void => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getVisibleImages = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    
    return {
      prev: galleryImages[prevIndex],
      current: galleryImages[currentIndex],
      next: galleryImages[nextIndex],
      prevIndex,
      nextIndex
    };
  };

  const { prev, current, next, prevIndex, nextIndex } = getVisibleImages();

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  };

  const sideImageVariants = {
    initial: { scale: 0.9, opacity: 0.7 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.02, opacity: 0.9 }
  };

  return (
    <div className="relative w-full h-[500px]">
      <div className="flex h-full items-center justify-center gap-2">
        {/* Left Image */}
        <motion.div 
          className="w-1/4 h-full cursor-pointer group relative overflow-hidden"
          onClick={() => goToImage(prevIndex)}
          variants={sideImageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <CldImage
            src={prev.src}
            alt={prev.alt}
            width={600}
            height={450}
            crop="fill"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 transition-all duration-300"></div>
        </motion.div>

        {/* Center Image (Larger) */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants as Variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full absolute inset-0"
            >
              <CldImage
                src={current.src}
                alt={current.alt}
                width={1000}
                height={500}
                crop="fill"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Right Image */}
        <motion.div 
          className="w-1/4 h-full cursor-pointer group relative overflow-hidden"
          onClick={() => goToImage(nextIndex)}
          variants={sideImageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <CldImage
            src={next.src}
            alt={next.alt}
            width={600}
            height={450}
            crop="fill"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 transition-all duration-300"></div>
        </motion.div>
      </div>

      {/* Global Navigation Arrows */}
      <motion.button
        onClick={prevImage}
        className="absolute left-16 top-1/2 transform -translate-y-1/2 border-1 scale-150 text-white p-4 rounded-full transition-all duration-300 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FaArrowLeftLong className="w-6 h-6" />
      </motion.button>
      
      <motion.button
        onClick={nextImage}
        className="absolute right-16 top-1/2 transform -translate-y-1/2 border-1 scale-150 text-white p-4 rounded-full transition-all duration-300 z-30"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FaArrowRightLong className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default CarouselGallery;