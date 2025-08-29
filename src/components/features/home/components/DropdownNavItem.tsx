// components/DropdownNavItem.tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { DropdownType } from '@/lib/navbar/types';

interface DropdownNavItemProps {
  label: string;
  isActive: boolean;
  isScrolled: boolean;
  type: DropdownType;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DropdownNavItem: React.FC<DropdownNavItemProps> = ({
  label,
  isActive,
  isScrolled,
  type,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div 
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`text-sm font-light tracking-wide transition-colors duration-500 flex items-center py-6 cursor-pointer ${
        isScrolled 
          ? 'text-white hover:text-gray-600' 
          : 'text-white hover:text-white/80'
      }`}>
        {label}
        <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
      </div>
    </div>
  );
};

export default DropdownNavItem;