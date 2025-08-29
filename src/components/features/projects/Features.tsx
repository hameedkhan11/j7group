import React from "react";

const Features = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
            Each and Every Residence, a<br />
            Panorama of the Sea.
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            At Beach Vista, contemporary luxury meets panoramic coastal beauty.
            Designed for those with a taste for the extraordinary, this exquisite
            waterfront escape offers modern interiors, sweeping sea views, and an
            effortless connection to Al Marjan Island's vibrant lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Quantity */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="12" width="8" height="32" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="16" y="8" width="8" height="36" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="28" y="4" width="8" height="40" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="40" y="10" width="4" height="34" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="5" y="18" width="6" height="2" fill="#6B7280"/>
                <rect x="5" y="22" width="6" height="2" fill="#6B7280"/>
                <rect x="5" y="26" width="6" height="2" fill="#6B7280"/>
                <rect x="17" y="14" width="6" height="2" fill="#6B7280"/>
                <rect x="17" y="18" width="6" height="2" fill="#6B7280"/>
                <rect x="17" y="22" width="6" height="2" fill="#6B7280"/>
                <rect x="29" y="10" width="6" height="2" fill="#6B7280"/>
                <rect x="29" y="14" width="6" height="2" fill="#6B7280"/>
                <rect x="29" y="18" width="6" height="2" fill="#6B7280"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">QUANTITY</h3>
            <p className="text-gray-600">151 apartments</p>
          </div>

          {/* Separator */}
          <div className="hidden md:flex justify-center">
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          {/* Studio Apartments */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="12" width="36" height="24" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="6" y="8" width="36" height="4" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="10" y="16" width="8" height="6" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="22" y="16" width="8" height="6" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="34" y="16" width="4" height="6" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="10" y="26" width="28" height="6" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <circle cx="14" cy="19" r="1" fill="#6B7280"/>
                <circle cx="26" cy="19" r="1" fill="#6B7280"/>
                <line x1="6" y1="40" x2="42" y2="40" stroke="#6B7280" strokeWidth="1.5"/>
                <polygon points="4,40 6,36 6,40" fill="#6B7280"/>
                <polygon points="44,40 42,36 42,40" fill="#6B7280"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">STUDIO APARTMENTS</h3>
            <p className="text-gray-600">14 Apartments</p>
          </div>

          {/* Separator */}
          <div className="hidden md:flex justify-center">
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          {/* 1-Bedroom Apartments */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="32" height="32" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="4" y="4" width="40" height="6" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="4" y="38" width="40" height="6" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="12" y="12" width="10" height="8" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="26" y="12" width="10" height="8" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="12" y="24" width="24" height="12" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <circle cx="16" cy="16" r="1.5" fill="#6B7280"/>
                <circle cx="30" cy="16" r="1.5" fill="#6B7280"/>
                <rect x="14" y="28" width="4" height="6" stroke="#6B7280" strokeWidth="1" fill="none"/>
                <rect x="22" y="28" width="4" height="6" stroke="#6B7280" strokeWidth="1" fill="none"/>
                <rect x="30" y="28" width="4" height="6" stroke="#6B7280" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">1-BEDROOM APARTMENTS</h3>
            <p className="text-gray-600">120 Apartments</p>
          </div>

          {/* Separator */}
          <div className="hidden md:flex justify-center">
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          {/* 2-Bedroom Apartments */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="36" height="36" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="2" y="2" width="44" height="6" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="2" y="40" width="44" height="6" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="10" y="10" width="12" height="10" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="26" y="10" width="12" height="10" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="10" y="24" width="12" height="10" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <rect x="26" y="24" width="12" height="10" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <circle cx="14" cy="14" r="1.5" fill="#6B7280"/>
                <circle cx="30" cy="14" r="1.5" fill="#6B7280"/>
                <circle cx="14" cy="28" r="1.5" fill="#6B7280"/>
                <circle cx="30" cy="28" r="1.5" fill="#6B7280"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">2-BEDROOM APARTMENTS</h3>
            <p className="text-gray-600">17 Apartments</p>
          </div>

          {/* Separator */}
          <div className="hidden md:flex justify-center">
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          {/* Room Sizes */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8 L8 32 L32 32 L32 8 Z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <path d="M32 8 L40 16 L40 40 L16 40 L8 32" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <path d="M8 8 L16 16 L40 16" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <path d="M16 16 L16 40" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <path d="M32 8 L32 32" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
                <circle cx="12" cy="12" r="1" fill="#6B7280"/>
                <circle cx="20" cy="20" r="1" fill="#6B7280"/>
                <circle cx="28" cy="28" r="1" fill="#6B7280"/>
                <circle cx="36" cy="36" r="1" fill="#6B7280"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">ROOM SIZES</h3>
            <p className="text-gray-600">479 sq ft - 1,709 sq ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;