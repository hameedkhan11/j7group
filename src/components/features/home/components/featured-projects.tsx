"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
}

const PropertySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties: Property[] = [
    {
      id: "1",
      title: "The Beach Residences",
      location: "Marjan Island",
      image: "imgi_46_67ca7509ff7e4587a0a547b3_ellington_1_s5hxyo",
    },
    {
      id: "2",
      title: "The Beaches",
      location: "Marjan Island",
      image: "imgi_129_c09_e2_0x0_a4a_qzlkun",
    },
    {
      id: "3",
      title: "Oceanview Towers",
      location: "Marina District",
      image: "imgi_23_5gNvK7jUAYN7OG5KNhInTDgoCGAw2coEkzDunotV_kmjock",
    },
    {
      id: "4",
      title: "The Beach Residences",
      location: "Marjan Island",
      image: "imgi_130_c34_finale_post_0x0_a4a_c3igyo",
    },
    {
      id: "5",
      title: "The Beaches",
      location: "Marjan Island",
      image: "imgi_128_4_0x0_a4a_nmbdwl",
    },
    {
      id: "6",
      title: "Oceanview Towers",
      location: "Marina District",
      image: "imgi_12_67c7bc857d870bdadf59bf58_4_l9mgri",
    },
  ];

  // Maximum slides we can show (total properties - 3 properties shown at once)
  const maxSlides = properties.length - 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#ECE4D9]">
      <div className="relative z-10 container mx-auto px-4 md:px-16 py-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Featured Properties
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white shadow-lg rounded-full p-3 transition-all duration-200 ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-50'
            }`}
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white shadow-lg rounded-full p-3 transition-all duration-200 ${
              currentIndex >= maxSlides 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-50'
            }`}
            disabled={currentIndex >= maxSlides}
          >
            <ArrowRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / 3)))`,
              }}
            >
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="flex-shrink-0 w-1/3 px-1"
                >
                  <div className="relative group cursor-pointer transition-all duration-500">
                    <div className="relative h-[440px] overflow-hidden shadow-md">
                      <CldImage
                        width={800}
                        height={600}
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Property Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white text-xl font-medium mb-1 text-center">
                          {property.title}
                        </h3>
                        <p className="text-white/80 text-sm text-center">
                          {property.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;