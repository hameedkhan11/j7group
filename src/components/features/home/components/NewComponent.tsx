"use client";
import { CldImage } from 'next-cloudinary';
import React, { useState } from 'react';


const LuxuryRealEstateComponent = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const themeClasses = isDarkTheme 
    ? "bg-gray-900 text-white" 
    : "bg-white text-gray-900";
  
  const cardBg = isDarkTheme 
    ? "bg-gray-800" 
    : "bg-gray-50";
  
  const textSecondary = isDarkTheme 
    ? "text-gray-300" 
    : "text-gray-600";

  return (
    <div className={`min-h-screen pt-16 transition-colors duration-500 bg-[#51301F]`}>
      {/* Main Content */}
      <div className={` overflow-hidden transition-colors duration-500`}>
        <div className="px-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left Column - ELEVATE EVERYDAY LIVING */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-white">
                ELEVATE
              </h2>
              {/* <p className={`${textSecondary} text-lg font-light leading-relaxed mb-8`}>
                Experience the ultimate elegance where luxury meets architectural excellence. Every detail meticulously designed.
              </p> */}

              {/* Three small images in a row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-[3/4] overflow-hidden">
                  <CldImage
                    src="imgi_33_1730970722-neighbourhood-image_g1omik"
                    alt="Modern interior"
                    width={300}
                    height={375}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="h-[400px] w-[250px] overflow-hidden">
                <h2 className="text-4xl md:text-5xl font-light leading-tight text-white">
                DAILY
              </h2>
                  <CldImage
                    src="imgi_29_1731504856-landmark_ndh3z3"
                    alt="Luxury bathroom"
                    width={300}
                    height={375}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="h-[400px] w-[260px] overflow-hidden mt-12 ml-6">
                <h2 className="text-4xl md:text-5xl font-light leading-tight text-white">
                LIVING
              </h2>
                  <CldImage
                    src="imgi_44_1743686885-web-5_pvrh0q"
                    alt="Modern bedroom"
                    width={300}
                    height={375}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
              </div>

              {/* AT ZAREL text */}
              <div className="text-left">
                <h3 className="text-2xl font-semibold tracking-wide text-white">AT J7GROUP.</h3>
                <p className={`font-light text-white`}>
                  Luxury isn't a feature. It's a philosophy.
                </p>
              </div>
            </div>

            {/* Right Column - Signature Living */}
            <div>
              {/* Large main image */}
              <div className="relative overflow-hidden mb-6">
                <CldImage
                  src="imgi_42_1743686885-web-6_qy5uap"
                  alt="Luxury living room"
                  width={600}
                  height={400}
                  className="w-full h-[560px] object-cover transition-transform duration-700 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryRealEstateComponent;