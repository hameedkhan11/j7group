"use client";
import React from 'react';
import { CldImage } from 'next-cloudinary';

const services = [
  {
    id: 1,
    title: "Urban Planning & Landscape",
    description: "Designing sustainable urban spaces and landscapes that enhance community living.",
    number: "(1)"
  },
  {
    id: 2,
    title: "Interior Design", 
    description: "Creating beautiful and functional interior spaces that reflect your style.",
    number: "(2)"
  },
  {
    id: 3,
    title: "Sustainable & Green Architecture",
    description: "Eco-friendly architectural solutions for a sustainable future.",
    number: "(3)"
  },
  {
    id: 4,
    title: "Restoration & Heritage Conservation",
    description: "Preserving historical buildings while meeting modern standards.",
    number: "(4)"
  },
  {
    id: 5,
    title: "Construction & Project Management",
    description: "Managing the entire process from design to construction for a seamless experience.",
    number: "(5)",
    hasButton: true
  },
  {
    id: 6,
    title: "3D Printing Architecture",
    description: "Creating detailed architectural models quickly for design validation.",
    number: "(6)",
    hasButton: true
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <CldImage
          src="imgi_60_NxCqGwbJAP6xDCDb55NnOw7rUoQ_v1no4o"
          alt="Architecture background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Header */}
        <header className="px-8 py-6">
          <nav className="flex justify-end">
            <button className="px-6 py-2 cursor-pointer bg-orange-100 text-slate-800 rounded-full text-sm">
              Know more
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="px-8">
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-5xl font-light leading-tight">
              Unveiling Design<br />
              Excellence—See What<br />
              We Offer
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-3 h-[600px]">
            {services.map((service) => (
              <div key={service.id} className="group cursor-pointer border border-white/20">
                <div className={`h-full p-6 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#7A3110] relative ${service.id === 3 ? 'row-span-2' : ''}`}>
                  <div className="flex justify-between items-start">
                      <span className="text-sm opacity-70">{service.number}</span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="px-4 py-1 bg-white/20 rounded-full text-xs">
                          Services
                        </button>
                      </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg mb-3">{service.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-90 transition-opacity duration-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Services;