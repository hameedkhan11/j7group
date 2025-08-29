"use client";
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { 
  MdMeetingRoom, 
  MdPool, 
  MdBeachAccess,
  MdSpa,
  MdRestaurant,
  MdLocalParking,
  MdSecurity,
  MdBusinessCenter,
  MdRoofing,
  MdChildCare,
  MdLocalLaundryService
} from 'react-icons/md';
import { FaDumbbell, FaConciergeBell, FaWifi } from 'react-icons/fa';
import { GiWaves } from 'react-icons/gi';

interface Amenity {
  id: string;
  name: string;
  icon: React.ReactNode;
  imagePublicId: string;
  title: string;
  description: string;
}

interface AmenitiesSectionProps {
  className?: string;
}

const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ 
  className = ''
}) => {
  const amenities: Amenity[] = [
    {
      id: 'lobby',
      name: 'Lobby',
      icon: <MdMeetingRoom className="w-5 h-5" />,
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: 'Grand Lobby Experience',
      description: 'Welcome to an impressive double-height lobby featuring premium marble finishes, contemporary seating areas, and sophisticated lighting.'
    },
    {
      id: 'fitness',
      name: 'Fitness Centre',
      icon: <FaDumbbell className="w-5 h-5" />,
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: 'State-of-the-Art Fitness Center',
      description: 'A fully equipped fitness center with the latest cardio and strength training equipment, personal training areas, and panoramic views.'
    },
    {
      id: 'pool',
      name: 'Pool',
      icon: <MdPool className="w-5 h-5" />,
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: 'Infinity Pool Paradise',
      description: 'Dive into luxury with our spectacular infinity pool that seems to merge with the Arabian Gulf horizon.'
    },
    {
      id: 'beach',
      name: 'Beach Access',
      icon: <GiWaves className="w-5 h-5" />,
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: 'Private Beach Access',
      description: 'Enjoy direct access to pristine sandy beaches with crystal-clear waters and dedicated beach service.'
    },
    {
      id: 'spa',
      name: 'Spa & Wellness',
      icon: <MdSpa className="w-5 h-5" />,
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: 'Luxury Spa & Wellness Center',
      description: 'Indulge in rejuvenating treatments at our world-class spa facility with massage therapy rooms and relaxation areas.'
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      icon: <MdRestaurant className="w-5 h-5" />,
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: 'Fine Dining Restaurant',
      description: 'Experience culinary excellence featuring international cuisine with panoramic views and professional service.'
    },
    {
      id: 'business',
      name: 'Business Centre',
      icon: <MdBusinessCenter className="w-5 h-5" />,
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: 'Executive Business Center',
      description: 'A sophisticated workspace with high-speed internet, private meeting rooms, and premium office amenities.'
    },
    {
      id: 'concierge',
      name: 'Concierge',
      icon: <FaConciergeBell className="w-5 h-5" />,
      imagePublicId: 'imgi_19_67bfeae088cadc030cc65ff8_Beach_Vista_2_p6owd4',
      title: 'Premium Concierge Services',
      description: 'Experience personalized luxury with our dedicated concierge team for all your lifestyle needs.'
    },
    {
      id: 'parking',
      name: 'Parking',
      icon: <MdLocalParking className="w-5 h-5" />,
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: 'Secure Parking Facility',
      description: 'Multi-level secure parking with valet services and electric vehicle charging stations.'
    },
    {
      id: 'security',
      name: 'Security',
      icon: <MdSecurity className="w-5 h-5" />,
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: '24/7 Security Services',
      description: 'Round-the-clock security with trained personnel and advanced surveillance systems.'
    },
    {
      id: 'gym',
      name: 'Gym',
      icon: <FaDumbbell className="w-5 h-5" />,
      imagePublicId: 'imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh',
      title: 'State-of-the-Art Gym',
      description: 'A fully equipped gym with the latest cardio and strength training equipment, personal training areas, and panoramic views.'
    },
  {
    id: "Amenity 10",
    name: "Amenity 10",
    icon: <FaDumbbell className="w-5 h-5" />,
    imagePublicId: "imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh",
    title: "State-of-the-Art Gym",
    description: "A fully equipped gym with the latest cardio and strength training equipment, personal training areas, and panoramic views."
  }
  ];

  const [activeAmenity, setActiveAmenity] = useState<Amenity>(amenities[0]);

  const handleAmenityClick = (amenity: Amenity) => {
    setActiveAmenity(amenity);
  };

  return (
    <section className={`bg-[#F4EFE6] ${className} pt-12`}>
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Fixed Height Image */}
        <div className="relative h-[60vh] lg:h-screen">
          <CldImage
            src={activeAmenity.imagePublicId}
            alt={`${activeAmenity.name}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={90}
          />
        </div>

        {/* Right Side - Clean Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-xl">
            {/* Simple Heading */}
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 tracking-wide">
              Amenities
            </h2>

            {/* Description */}
            <p className=" text-base leading-relaxed mb-6 font-light">
              At the heart of the Beach Residences lies an exquisite blend of amenities designed 
              to cater to the most discerning tastes. From opulent infinity pools and beach access 
              to a state-of-the-art fitness center and spa, elegant communal spaces and a 
              sophisticated clubhouse, every aspect of the Beach Residences at Al Marjan Island 
              has been meticulously crafted making it a sanctuary of luxury and comfort.
            </p>

            {/* Clean Amenities Grid */}
            <div className="grid grid-cols-3 gap-4">
              {amenities.map((amenity) => (
                <button
                  key={amenity.id}
                  onClick={() => handleAmenityClick(amenity)}
                  className={`
                    px-6 py-4 text-left transition-all duration-300 focus:outline-none
                    ${activeAmenity.id === amenity.id
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                    }
                  `}
                  aria-label={`View ${amenity.name} details`}
                >
                  <span className="text-sm lg:text-base font-light">
                    {amenity.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;