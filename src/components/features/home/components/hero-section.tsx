// common/components/Hero.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HeroProps } from '@/lib/hero/types';
import { HeroBackground } from './hero-background';

// Simplified HeroProps interface without Sanity dependencies
interface ExtendedHeroProps extends HeroProps {
  pageSlug?: string;
  showHeroButtons?: boolean;
  isHomePage?: boolean;
  children?: React.ReactNode;
  customHeight?: number; // For custom vh values
  minHeight?: number; // Minimum height in pixels
}

export const Hero: React.FC<ExtendedHeroProps> = ({
  title,
  isHomePage,
  subtitle,
  backgroundType,
  backgroundSrc,
  fallbackImage,
  height = 'screen',
  customHeight,
  minHeight = 400,
  overlay = 'medium',
  contentAlignment = 'center',
  showScrollIndicator = false,
  ariaLabel = "Hero section",
  children
}) => {
  const [showContent, setShowContent] = useState(false);
  const heroRef = useRef(null);

  // Parallax for content elements
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const contentY = useTransform(smoothProgress, [0, 1], [0, -50]);

  useEffect(() => {
    // Show content immediately
    setShowContent(true);
  }, []);

  const getHeightClass = () => {
    switch (height) {
      case 'screen':
        return 'h-screen min-h-screen';
      case 'half':
        return 'h-[50vh] min-h-[400px]';
      case 'three-quarter':
        return 'h-[70vh] min-h-[560px]';
      case 'auto':
        return 'min-h-[60vh]';
      case 'custom':
        return customHeight 
          ? `min-h-[${minHeight}px]` 
          : 'h-screen min-h-screen';
      default:
        return 'h-screen min-h-screen';
    }
  };

  const getCustomHeightStyle = (): React.CSSProperties | undefined => {
    if (height === 'custom' && customHeight) {
      return {
        height: `${customHeight}vh`,
        minHeight: `${minHeight}px`
      };
    }
    return undefined;
  };

  const getContentAlignmentClass = () => {
    switch (contentAlignment) {
      case 'center': 
        return 'items-center justify-center text-center';
      case 'right': 
        return 'items-center justify-end text-right';
      case 'left': 
      default: 
        return 'items-center justify-start text-left';
    }
  };

  return (
    <section
      ref={heroRef}
      className={`relative ${getHeightClass()} overflow-hidden flex flex-col justify-center items-center`}
      style={getCustomHeightStyle()}
      aria-label={ariaLabel}
    >
      <HeroBackground
        type={backgroundType}
        src={backgroundSrc}
        fallbackImage={fallbackImage}
        overlay={overlay}
      />
      <motion.div
        style={{ y: contentY }}
        className={`relative z-10 h-full flex flex-col px-4 sm:px-6 lg:px-8 ${getContentAlignmentClass()}`}
        initial="hidden"
        animate={showContent ? "visible" : "hidden"}
      >
        <div className={`w-full flex flex-col items-center justify-center mx-auto mt-8 ${isHomePage ? 'max-w-2xl' : ''}`}>
          {title && (
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl ${isHomePage ? 'lg:text-6xl' : ''} text-white leading-tight`}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-sm sm:text-lg text-gray-50 max-w-3xl">
              {subtitle}
            </p>
          )}

          {children && <motion.div>{children}</motion.div>}
        </div>
      </motion.div>
    </section>
  );
};