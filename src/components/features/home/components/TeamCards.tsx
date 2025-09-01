"use client";
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { motion, AnimatePresence } from 'framer-motion';

const TeamCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Yaseen",
      role: "Chief Executive Officer",
      image: "Yaseen_xyiu5m",
      bio: "As the visionary behind Harper Architects, Muhammad Yaseen has over 25 years of experience in architecture, urban planning, and sustainable design. His expertise in integrating modern aesthetics with environmental consciousness has led the firm to develop award-winning projects across the globe."
    },
    {
      id: 2,
      name: "Ethan Wei Jie",
      role: "Principal Architect", 
      image: "WhatsApp_Image_2025-08-31_at_22.03.04_5ac50f54_uqibtl",
      bio: "With expertise in sustainable design and innovative construction methods, Ethan brings a unique perspective to modern architecture. His work focuses on creating spaces that harmonize with their natural environment while pushing the boundaries of contemporary design."
    },
    {
      id: 3,
      name: "Maqbool Hussain",
      role: "Chairman",
      image: "imgi_22_J7-Group-Chairman-Maqbool-Hussain-780x780_dk2fb3",
      bio: "James specializes in commercial and residential projects that blend functionality with aesthetic excellence. His attention to detail and commitment to client satisfaction has made him a cornerstone of the Harper Architects team."
    },
    {
      id: 4,
      name: "Sophia Clarke",
      role: "Lead Architect",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Sophia's innovative approach to spatial design and her expertise in smart building technologies have revolutionized how we think about modern living spaces. Her projects consistently win awards for their forward-thinking design solutions."
    },
    {
      id: 5,
      name: "Nathan Ellis",
      role: "Interior Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      bio: "Nathan leads our interior design team with a focus on creating spaces that tell stories. His work seamlessly integrates functionality with emotional resonance, creating environments that inspire and comfort."
    },
    {
      id: 6,
      name: "Michael Carter",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      bio: "Michael's expertise in large-scale urban development and his commitment to sustainable practices have shaped some of the most iconic buildings in the city. His vision extends beyond individual projects to entire communities."
    }
  ];

  return (
    <div className="bg-[#51301F] px-12 py-16">
      <div className="grid grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="relative h-[500px] overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard(member.id)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Image - Always Visible */}
            <CldImage
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
            
            {/* Default Overlay */}
            <AnimatePresence>
              {hoveredCard !== member.id && (
                <motion.div
                  className="absolute inset-0 bg-black/10"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>

            {/* Default Content */}
            <AnimatePresence>
              {hoveredCard !== member.id && (
                <motion.div
                  className="absolute bottom-6 left-6 text-white"
                  initial={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-medium mb-2">{member.name}</h3>
                  <div className="border border-white/50 rounded-full px-4 py-1 text-sm">
                    {member.role}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover State - Brown Overlay with Content */}
            <AnimatePresence>
              {hoveredCard === member.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-[#8B6B47] p-6 flex flex-col justify-center"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* Name */}
                  <motion.h3 
                    className="text-white text-2xl font-medium mb-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  {/* Role */}
                  <motion.div 
                    className="border border-white/50 rounded-full px-4 py-2 text-sm text-center mb-4 mx-auto text-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                  >
                    {member.role}
                  </motion.div>

                  {/* Bio */}
                  <motion.p 
                    className="text-white text-sm leading-relaxed mb-6 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    {member.bio}
                  </motion.p>

                  {/* Button */}
                  <motion.button
                    className="bg-white/90 text-[#8B6B47] px-8 py-3 rounded-full text-sm font-medium mx-auto hover:bg-white transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore more
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;