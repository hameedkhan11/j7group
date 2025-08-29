"use client";

import React from 'react';
import { CldImage } from 'next-cloudinary';

const LuxuryRealEstateComponent = () => {
  return (
    <div className="bg-[#ECE4D9] p-4  px-12 py-16">
      
      {/* Header Section with Right Image */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Left: Header Text */}
        <div className="col-span-6">
          <h1 className="text-5xl font-medium mb-6 leading-tight text-[#51301F]">
            Redefining Wellness,<br />
            Redefining You
          </h1>
        </div>

        {/* Right: Top Image next to heading */}
        <div className="col-span-6">
          <div className="w-full h-96 overflow-hidden">
            <CldImage
              src="imgi_55_1730715665-11-nicole-franzen-111-w57th_second-floor_008-copy_l67tcg"
              alt="Modern living room interior"
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column - Large Image */}
        <div className="col-span-6">
          <div className="w-full h-96 overflow-hidden -mt-52">
            <CldImage
              src="imgi_38_1743686775-web-1_vzqqhr"
              alt="Modern luxury house at twilight"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="col-span-5 space-y-4 mt-8">
          <p className="text-base text-neutral-900 leading-relaxed">
            At J7Group one can experience the pinnacle of rejuvenating, offering more luxurious 
            amenities. We pride ourselves on our flexibility for our homes emphasize 
            comfort, and thoughtfully-designed common areas that foster connection.
          </p>
          
          {/* Bottom Action */}
          <div className="flex items-center space-x-2">
            <span className="text-base text-gray-500">Come to</span>
            <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
              <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryRealEstateComponent;