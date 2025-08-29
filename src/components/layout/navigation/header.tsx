// components/RangeNavbar.tsx
"use client"
import React, { useState, useRef, useEffect } from 'react';
import BackgroundOverlay from '@/components/features/home/components/BackgroundOverlay';
import CTAButton from '@/components/features/home/components/CTAButton';
import DropdownContent from '@/components/features/home/components/DropdownContent';
import DropdownNavItem from '@/components/features/home/components/DropdownNavItem';
import Logo from '@/components/features/home/components/Logo';
import NavLink from '@/components/features/home/components/NavLink';
import { aboutSections, developments } from '@/lib/data/navbar';
import { DropdownType } from '@/lib/navbar/types';

const RangeNavbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (dropdownType: DropdownType): void => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdownType);
  };

  const handleDropdownLeave = (): void => {
    // Set a small delay before hiding dropdown
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  return (
    <div className="absolute top-0 left-0 right-0">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#51301F] shadow-lg backdrop-blur-md border-b border-gray-200' 
          :'bg-transparent'
      }`}>
        <div className="mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo isScrolled={isScrolled} />

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-12">
              {/* About Dropdown */}
              <DropdownNavItem
                label="About"
                isActive={activeDropdown === 'about'}
                type="about"
                isScrolled={isScrolled}
                onMouseEnter={() => handleDropdownEnter('about')}
                onMouseLeave={handleDropdownLeave}
              />

              {/* Developments Dropdown */}
              <DropdownNavItem
                label="Developments"
                isActive={activeDropdown === 'developments'}
                type="developments"
                isScrolled={isScrolled}
                onMouseEnter={() => handleDropdownEnter('developments')}
                onMouseLeave={handleDropdownLeave}
              />

              {/* Regular Nav Items */}
              <NavLink href="#" isScrolled={isScrolled}>Luxury Villas</NavLink>
              <NavLink href="#" isScrolled={isScrolled}>Media Centre</NavLink>
            </div>

            {/* CTA Button */}
            <CTAButton isScrolled={isScrolled} />
          </div>
        </div>

        {/* About Dropdown Content */}
        <DropdownContent
          isVisible={activeDropdown === 'about'}
          type="about"
          sections={aboutSections}
          isScrolled={isScrolled}
          onMouseEnter={() => handleDropdownEnter('about')}
          onMouseLeave={handleDropdownLeave}
        />

        {/* Developments Dropdown Content */}
        <DropdownContent
          isVisible={activeDropdown === 'developments'}
          type="developments"
          sections={developments}
          isScrolled={isScrolled}
          onMouseEnter={() => handleDropdownEnter('developments')}
          onMouseLeave={handleDropdownLeave}
        />
      </nav>

      {/* Spacer to prevent content jump */}
      <div className="h-20" />

      {/* Background overlay when dropdown is active */}
      <BackgroundOverlay isVisible={!!activeDropdown} />
    </div>
  );
};

export default RangeNavbar;