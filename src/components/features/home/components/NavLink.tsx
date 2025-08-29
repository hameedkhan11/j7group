// components/NavLink.tsx
import React from 'react';

interface NavLinkProps {
  href: string;
  isScrolled: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, isScrolled, children }) => {
  return (
    <a 
      href={href} 
      className={`text-sm font-light tracking-wide transition-colors duration-500 py-6 ${
        isScrolled 
          ? 'text-white' 
          : 'text-white hover:text-white/80'
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;