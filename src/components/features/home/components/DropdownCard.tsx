// components/DropdownCard.tsx
import React from 'react';
import { CldImage } from 'next-cloudinary';
import { DropdownSection } from '@/lib/navbar/types';

interface DropdownCardProps {
  section: DropdownSection;
  showDescription?: boolean;
  height?: string;
  isScrolled: boolean;
}

const DropdownCard: React.FC<DropdownCardProps> = ({ 
  section, 
  showDescription = false,
  height = "h-72",
  isScrolled
}) => {
  return (
    <div className="group cursor-pointer">
      <div className={`relative overflow-hidden ${height} ${showDescription ? 'mb-4' : ''}`}>
        <CldImage
          src={section.image}
          alt={section.title}
          width={400}
          height={300}
          crop="fill"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white/90 text-xs uppercase tracking-wider mb-2">
            {section.category}
          </p>
          <h3 className={`text-white font-light ${showDescription ? 'text-xl mb-3' : 'text-lg'}`}>
            {section.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DropdownCard;