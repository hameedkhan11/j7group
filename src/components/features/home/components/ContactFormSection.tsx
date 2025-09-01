"use client";
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { motion } from 'framer-motion';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedIn: '',
    message: ''
  });

  const propertyOptions = [
    'Residential Properties',
    'Commercial Properties', 
    'Luxury Villas',
    'Apartments',
    'Office Spaces',
    'Investment Properties'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <CldImage
        src="imgi_1_CgO8wLZOHL28igjEbUpCrw8Q_nwt60v"
        alt="Luxury interior background"
        fill
        className="object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Decorative Pattern Overlay - Top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-teal-600/20 to-transparent">
        <div className="h-full w-full opacity-30" 
             style={{
               backgroundImage: `repeating-linear-gradient(
                 45deg,
                 rgba(255,255,255,0.1) 0px,
                 rgba(255,255,255,0.1) 2px,
                 transparent 2px,
                 transparent 8px
               )`
             }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-32 py-2.5">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 max-w-2xl "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-white text-4xl font-light leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Unlock Unparalleled Real Estate Opportunities - Let's Craft Your Next Chapter Together.
          </motion.h1>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div 
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Contact Us Header */}
          <div className="text-center mb-8">
            <motion.h2 
              className="text-white text-3xl font-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Contact us
            </motion.h2>
            <motion.div 
              className="w-8 h-px bg-amber-400 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.6, delay: 1 }}
            />
          </div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Full Name */}
            <motion.input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 font-sans rounded-sm bg-white/90 backdrop-blur-sm border-0  text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              transition={{ duration: 0.2 }}
            />

            {/* Email and Phone Row */}
            <div className="grid grid-cols-2 gap-4">
              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="px-4 py-2.5 font-sans rounded-sm bg-white/90 backdrop-blur-sm border-0  text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                transition={{ duration: 0.2 }}
              />
              <motion.input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="px-4 py-2.5 font-sans rounded-sm bg-white/90 backdrop-blur-sm border-0  text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Interested In Property */}
            <motion.select
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 font-sans rounded-sm bg-white/90 backdrop-blur-sm border-0  text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              transition={{ duration: 0.2 }}
            >
              <option value="">Interested in Property</option>
              {propertyOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </motion.select>

            {/* Message */}
            <motion.textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-2.5 font-sans rounded-sm bg-white/90 backdrop-blur-sm border-0  text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none"
              transition={{ duration: 0.2 }}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full font-sans rounded-sm bg-amber-500 hover:bg-amber-600 text-white py-2.5 px-8 font-medium text-sm uppercase tracking-wider transition-colors"
              whileHover={{ 
                backgroundColor: "#D97706"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              SEND
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-32 right-32 w-3 h-3 rotate-45"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.6, rotate: 45 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-32 right-16 w-3 h-3 rotate-45"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.6, rotate: 45 }}
        transition={{ duration: 1, delay: 1.7 }}
      />
    </div>
  );
};

export default ContactFormSection;