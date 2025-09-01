// pages/properties.tsx
"use client";
import React from 'react';
import { CldImage } from 'next-cloudinary';

interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  type?: string;
  sqft?: string;
  year?: string;
}

const properties: Property[] = [
  {
    id: "1",
    title: "The Beach Residences",
    location: "Marjan Island",
    image: "imgi_46_67ca7509ff7e4587a0a547b3_ellington_1_s5hxyo",
    type: "Residential",
    sqft: "250,000",
    year: "2023"
  },
  {
    id: "2", 
    title: "The Beaches",
    location: "Marjan Island",
    image: "imgi_129_c09_e2_0x0_a4a_qzlkun",
    type: "Commercial",
    sqft: "350,000",
    year: "2024"
  },
  {
    id: "3",
    title: "Oceanview Towers",
    location: "Marina District",
    image: "imgi_23_5gNvK7jUAYN7OG5KNhInTDgoCGAw2coEkzDunotV_kmjock",
    type: "Residential",
    sqft: "180,000",
    year: "2024"
  },
  {
    id: "4",
    title: "The Beach Residences",
    location: "Marjan Island", 
    image: "imgi_130_c34_finale_post_0x0_a4a_c3igyo",
    type: "Residential",
    sqft: "220,000",
    year: "2023"
  },
  {
    id: "5",
    title: "The Beaches",
    location: "Marjan Island",
    image: "imgi_128_4_0x0_a4a_nmbdwl",
    type: "Commercial",
    sqft: "400,000",
    year: "2024"
  },
  {
    id: "6",
    title: "Oceanview Towers", 
    location: "Marina District",
    image: "imgi_12_67c7bc857d870bdadf59bf58_4_l9mgri",
    type: "Mixed Use",
    sqft: "500,000",
    year: "2025"
  }
];

const PropertiesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-12 py-12">
        <h1 className="text-4xl md:text-5xl font-light text-stone-800 leading-relaxed max-w-2xl">
          Explore top real estate projects with key insights and visuals.
        </h1>
        <div className="w-full h-px bg-stone-400 mt-8"></div>
      </header>

      {/* Properties Grid */}
      <main className="px-8 pb-12">
        <div className="grid grid-cols-2 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer relative overflow-hidden">
              {/* Property Image */}
              <div className="aspect-[4/3] relative">
                <CldImage
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Property Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-end mb-4">
                    <div className="flex gap-4 text-sm">
                      <span className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                        {property.type}
                      </span>
                    </div>
                    <div className="text-right text-sm">
                      <span>{property.sqft} sq ft.</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium mb-2">{property.title}</h3>
                  
                  <div className="flex items-center gap-4 text-sm opacity-90">
                    <span>📅 {property.year}</span>
                    <span>📍 {property.location}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-black px-8">
                    <h3 className="text-3xl font-light mb-4 text-[#51301F]">{property.title}</h3>
                    <p className="text-lg text-[#51301F] mb-8 leading-relaxed">
                      A stylish living experience with green spaces, wellness facilities, and a vibrant neighborhood.
                    </p>
                    <button className="px-8 py-3 bg-[#51301F] cursor-pointer text-white rounded-full hover:bg-transparent hover:text-[#51301F] border border-[#51301F] transition-all ease-in duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PropertiesPage;