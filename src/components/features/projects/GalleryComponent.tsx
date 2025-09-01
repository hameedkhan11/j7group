"use client";
import React, { useState, useEffect } from 'react';
import { ChevronUp, MapPin, Play, X } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

type ViewType = 'EXTERIOR' | 'INTERIOR' | 'VIDEO';
type UnitType = 'Studio' | '1 Bedroom' | '2 Bedroom';

interface GalleryImage {
  id: string;
  cloudinaryId: string;
  alt: string;
  type: 'exterior' | 'interior';
}

const GalleryComponent = () => {
  const [activeView, setActiveView] = useState<ViewType>('EXTERIOR');
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Update these cloudinaryId values with your actual Cloudinary image public IDs
  const galleryImages: GalleryImage[] = [
    { id: '1', cloudinaryId: 'imgi_60_1730716138-16-nicole-franzen-111-w57th_bedroom-1_013-copy_iux5dy', alt: 'Luxury Beachfront Building', type: 'exterior' },
    { id: '2', cloudinaryId: 'samples/landscapes/beach-boat', alt: 'Beachfront Pool Area', type: 'exterior' },
    { id: '3', cloudinaryId: 'samples/landscapes/architecture-signs', alt: 'Modern Building Exterior', type: 'exterior' },
    { id: '4', cloudinaryId: 'imgi_60_1730716138-16-nicole-franzen-111-w57th_bedroom-1_013-copy_iux5dy', alt: 'Luxury Interior Living Room', type: 'interior' },
    { id: '5', cloudinaryId: 'imgi_42_1743686885-web-6_qy5uap', alt: 'Modern Kitchen Design', type: 'interior' },
    { id: '6', cloudinaryId: 'imgi_43_1743686885-web-4_fcgswq', alt: 'Luxury Bedroom', type: 'interior' }
  ];

  const filteredImages = galleryImages.filter(img => 
    activeView === 'EXTERIOR' ? img.type === 'exterior' : 
    activeView === 'INTERIOR' ? img.type === 'interior' : 
    true
  );

  // Auto-change background functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prev) => (prev + 1) % filteredImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [filteredImages.length, isAutoPlaying]);

  // Reset background index when view changes
  useEffect(() => {
    setCurrentBackgroundIndex(0);
  }, [activeView]);

  const handleThumbnailClick = (index: number) => {
    setCurrentBackgroundIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user manually selects
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 mt-24">
      {/* Main Background Image */}
      <div className="absolute inset-0">
        {filteredImages[currentBackgroundIndex] && (
          <CldImage
            src={filteredImages[currentBackgroundIndex].cloudinaryId}
            alt={filteredImages[currentBackgroundIndex].alt}
            fill
            className="object-cover transition-opacity duration-1000 ease-in-out"
            priority
            quality="auto:best"
            format="auto"
            dpr="auto"
            sizes="100vw"
            crop="fill"
            gravity="auto"
          />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* View Toggle Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex bg-transparent backdrop-blur-md rounded-full p-2 shadow-lg">
          {(['EXTERIOR', 'INTERIOR', 'VIDEO'] as ViewType[]).map((view) => (
            <button
              key={view}
              onClick={() => {
                setActiveView(view);
                setIsAutoPlaying(true); 
                if (view === 'VIDEO') {
                  // Handle video play
                  console.log('Play video');
                }
              }}
              className={`px-6 py-3 rounded-full cursor-pointer text-sm font-medium text-white transition-all duration-300 flex items-center space-x-2 ${
                activeView === view
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-500'
              }`}
            >
              {view === 'VIDEO' && <Play className="w-4 h-4" />}
              <span>{view}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Thumbnails */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 space-y-3 z-30">
        {filteredImages.slice(0, 4).map((image, index) => (
          <div
            key={image.id}
            onClick={() => handleThumbnailClick(index)}
            className={`relative w-32 h-20 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
              currentBackgroundIndex === index 
                ? 'ring-2 ring-white shadow-white/50' 
                : 'ring-1 ring-white/50 hover:ring-white'
            }`}
          >
            <CldImage
              src={image.cloudinaryId}
              alt={image.alt}
              fill
              className="object-cover"
              quality="auto:good"
              format="auto"
              crop="fill"
              gravity="auto"
            />
            
            {/* Active indicator */}
            {currentBackgroundIndex === index && (
              <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;