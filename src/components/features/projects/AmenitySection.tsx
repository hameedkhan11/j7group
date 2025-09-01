// components/AmenitiesSection.tsx
"use client";
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';

interface Amenity {
  id: string;
  name: string;
  imagePublicId: string;
  title: string;
  description: string;
}

const AmenitiesSection: React.FC = () => {
  const amenities: Amenity[] = [
    {
      id: 'lobby',
      name: 'Sky Lobby',
      imagePublicId: 'Sky_Lobby_aybbhv',
      title: 'Grand Lobby Experience',
      description: 'Welcome to an impressive double-height lobby featuring premium marble finishes, contemporary seating areas, and sophisticated lighting.'
    },
    {
      id: 'fitness',
      name: 'Fitness Centre',
      imagePublicId: 'Yoga_Centre_ajj1vi',
      title: 'State-of-the-Art Fitness Center',
      description: 'A fully equipped fitness center with the latest cardio and strength training equipment, personal training areas, and panoramic views.'
    },
    {
      id: 'rooftop',
      name: 'Rooftop Restaurant',
      imagePublicId: 'Rooftop_Restaurant_so4cas',
      title: 'Rooftop Dining Experience',
      description: 'Enjoy exquisite dining with panoramic city views and premium culinary offerings.'
    },
    {
      id: 'pool',
      name: 'Indoor Swimming Pool',
      imagePublicId: 'Indoor_Swiming_Pool_kmbf0h',
      title: 'Indoor Pool Paradise',
      description: 'Temperature-controlled indoor swimming pool with luxurious amenities and relaxation areas.'
    },
    {
      id: 'spa',
      name: 'Spa & Wellness',
      imagePublicId: 'Sauna_Spa_dmq8rr',
      title: 'Luxury Spa & Wellness Center',
      description: 'Indulge in rejuvenating treatments at our world-class spa facility with massage therapy rooms and relaxation areas.'
    },
    {
      id: 'lounge',
      name: 'Executive Lounge',
      imagePublicId: 'Executive_Lounge_if9xsn',
      title: 'Premium Executive Lounge',
      description: 'Sophisticated lounge space designed for business meetings and exclusive gatherings.'
    },
    {
      id: 'business',
      name: 'Business Lounge',
      imagePublicId: 'Business_Lounge_qgwtal',
      title: 'Professional Business Center',
      description: 'A sophisticated workspace with high-speed internet, private meeting rooms, and premium office amenities.'
    },
    {
      id: 'gym',
      name: 'Gymnasium',
      imagePublicId: 'Gymnesium_jpks5k',
      title: 'Full-Service Gymnasium',
      description: 'Complete gymnasium facilities with professional-grade equipment and personal training services.'
    },
    {
      id: 'coworking',
      name: 'Co-working Space',
      imagePublicId: 'Co-Working_Spaces_x2rz4t',
      title: 'Modern Co-working Space',
      description: 'Flexible co-working environment with modern amenities and collaborative spaces.'
    },
    {
      id: 'banquet',
      name: 'Banquet Hall',
      imagePublicId: 'Banquet_Hall_rk47z6',
      title: 'Elegant Banquet Hall',
      description: 'Spacious banquet facilities perfect for events, celebrations, and corporate functions.'
    },
    {
      id: 'airline',
      name: 'Airline Lounge',
      imagePublicId: 'Airline_Crew_Lounge_mbpkqt',
      title: 'Premium Airline Lounge',
      description: 'Exclusive lounge facilities designed for airline crew and VIP guests.'
    },
    {
      id: 'amenity10',
      name: 'Premium Suite',
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: 'Luxury Premium Suite',
      description: 'Exceptional suite accommodations with premium amenities and stunning views.'
    }
  ];

  const [activeAmenity, setActiveAmenity] = useState<Amenity>(amenities[0]);

  const handleAmenityClick = (amenity: Amenity) => {
    setActiveAmenity(amenity);
  };

  return (
    <section className="bg-[#51301F] min-h-screen ">
      <div className="grid lg:grid-cols-2 min-h-screen px-12 py-20">
        {/* Left Side - Image with proper dimensions */}
        <div className="relative h-[60vh] lg:h-screen">
          <CldImage
            src={activeAmenity.imagePublicId}
            alt={activeAmenity.title}
            width={1400}
            height={822}
            className="w-full h-full object-cover"
            priority
            quality={100}
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 text-white">
          <div className="max-w-xl">
            {/* Amenities Title */}
            <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-wide">
              Premium Amenities
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed mb-12 font-light opacity-90">
              At the heart of J7 Group properties lies an exquisite blend of amenities designed 
              to cater to the most discerning tastes. From opulent facilities and modern conveniences 
              to sophisticated spaces and premium services, every aspect has been meticulously 
              crafted making it a sanctuary of luxury and comfort.
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-3 gap-3">
              {amenities.map((amenity) => (
                <button
                  key={amenity.id}
                  onClick={() => handleAmenityClick(amenity)}
                  className={`
                    px-4 py-3 text-left transition-all duration-300 focus:outline-none border border-white/20
                    ${activeAmenity.id === amenity.id
                      ? 'bg-white text-stone-800' 
                      : 'bg-transparent text-white hover:bg-white/10'
                    }
                  `}
                >
                  <span className="text-sm font-sans">
                    {amenity.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Amenity Details */}
            <div className="mt-8 p-6 border border-white/20 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-medium mb-3">{activeAmenity.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">
                {activeAmenity.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;