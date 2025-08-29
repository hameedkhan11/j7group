"use client";

import React from 'react';
import { CldImage } from 'next-cloudinary';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Furina Focalors",
      role: "Customer",
      rating: 5,
      text: "We were looking for a profitable investment, and Luxora provided us with great options. Their insights on property value and ROI helped us make a smart decision. Thank you!",
      property: "Greenwood Residence",
      location: "BSD City, Tangerang",
      propertyImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&h=80&fit=crop",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Walther White",
      role: "Customer", 
      rating: 5,
      text: "Moving to a new city was overwhelming, but the team at Luxora found me the perfect house in no time. Their service was excellent, and I felt confident throughout the process.",
      property: "Sakura Residence Jakarta",
      location: "Pondok Indah, South Jakarta",
      propertyImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=100&h=80&fit=crop",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Kaedehara Kazuha", 
      role: "Customer",
      rating: 5,
      text: "As a first-time homebuyer, I was nervous about the process, but Luxora made everything so easy. They listened to my needs and found the perfect apartment within my budget!",
      property: "Grand Harmoni Residence",
      location: "Bekasi, West Java",
      propertyImage: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=100&h=80&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#ECE4D9] py-16 px-16">
      <div className="mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-normal text-[#51301F] mb-6">
            What Our Happy Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Real Stories From Real Customers! See How We've Helped People Find<br />
            Their Dream Homes With Ease And Confidence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#51301F] p-6 shadow-sm rounded-md">
              
              {/* Customer Info and Rating */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-white">{testimonial.name}</h3>
                    <p className="text-sm text-white">{testimonial.role}</p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Property Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white text-sm">{testimonial.property}</h4>
                  <div className="flex items-center space-x-1 mt-1">
                    <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs text-white">{testimonial.location}</p>
                  </div>
                </div>
                <img
                  src={testimonial.propertyImage}
                  alt={testimonial.property}
                  className="w-16 h-12 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4">
          <button className="w-12 h-12 rounded-full flex items-center justify-center transition-colors">
           <FaArrowLeftLong className="w-12 h-12 text-[#51301F]" />
          </button>
          <button className="w-12 h-12 rounded-full flex items-center justify-center transition-colors">
            <FaArrowRightLong className="w-12 h-12 text-[#51301F]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;