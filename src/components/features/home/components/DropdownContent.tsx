// components/DropdownContent.tsx
import React from 'react';
import DropdownCard from './DropdownCard';
import { DropdownSection, DropdownType } from '@/lib/navbar/types';

interface DropdownContentProps {
  isVisible: boolean;
  type: DropdownType;
  sections: DropdownSection[];
  isScrolled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DropdownContent: React.FC<DropdownContentProps> = ({
  isVisible,
  type,
  sections,
  isScrolled,
  onMouseEnter,
  onMouseLeave
}) => {
  if (!isVisible || !type) return null;

  const isAbout = type === 'about';
  const gridCols = isAbout ? 'grid-cols-3' : 'grid-cols-4';
  const cardHeight = isAbout ? 'h-72' : 'h-64';
  const gap = isAbout ? 'gap-8' : 'gap-6';

  return (
    <div 
      className={`absolute top-full left-0 right-0 backdrop-blur-xl shadow-2xl transition-colors duration-500 ${
        isScrolled 
          ? 'bg-[#51301F] border-b border-gray-200' 
          :' border-b border-gray-100'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto px-8 py-12">
        <div className={`grid ${gridCols} ${gap}`}>
          {isAbout ? (
            <>
              {/* First card with description for About */}
              <DropdownCard 
                section={sections[0]} 
                showDescription={true}
                height={cardHeight}
                isScrolled={isScrolled}
              />
              {/* Other cards */}
              {sections.slice(1).map((section) => (
                <DropdownCard 
                  key={section.id} 
                  section={section}
                  height={cardHeight}
                  isScrolled={isScrolled}
                />
              ))}
            </>
          ) : (
            /* All cards for Developments */
            sections.map((section) => (
              <DropdownCard 
                key={section.id} 
                section={section}
                height={cardHeight}
                isScrolled={isScrolled}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownContent;