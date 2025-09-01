"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { motion, AnimatePresence } from "framer-motion";

const HarperArchitectsGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardData = [
    {
      id: 1,
      defaultImage: "imgi_3_3kgjP9qDZpTTY29GYKnxPhfglWs_rhkhtw",
      hoverImage: "imgi_141_c56_winter_night_0x0_a4a_speisn",
      number: "5",
      title: "YEARS OF EXPERIENCE",
    },
    {
      id: 2,
      defaultImage: "imgi_129_c09_e2_0x0_a4a_qzlkun",
      hoverImage: "imgi_130_c34_finale_post_0x0_a4a_c3igyo",
      number: "64",
      title: "PROJECTS\nCOMPLETED",
    },
    {
      id: 3,
      defaultImage: "imgi_128_4_0x0_a4a_nmbdwl",
      hoverImage: "imgi_93_1748608806-1-111-w-57-t38-living2_ipuvtb",
      number: "12",
      title: "AWARDS",
    },
    {
      id: 4,
      defaultImage: "imgi_70_1730719686-111_w_57_58-nfield-1-copy_xbkxjn",
      hoverImage:
        "imgi_60_1730716138-16-nicole-franzen-111-w57th_bedroom-1_013-copy_iux5dy",
      number: "2",
      title: "OFFICES",
    },
  ];

  return (
    <div className="bg-[#F5F1EB] min-h-screen p-8">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-16">
        <div className="max-w-lg">
          <h1 className="text-5xl text-[#8B6B47] leading-tight font-light">
            At J7 Group, we believe in designing spaces that inspire
          </h1>
        </div>
        <button className="bg-[#8B6B47] text-white px-8 py-3 rounded-full text-sm hover:bg-[#6D5238] transition-colors">
          Know more
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-4 gap-6 h-[480px]">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <div className="relative w-full h-full">
              {/* Default Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: hoveredCard === card.id ? 0 : 1,
                  scale: hoveredCard === card.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <CldImage
                  src={card.defaultImage}
                  alt={`Architecture image ${card.id}`}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Hover Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: hoveredCard === card.id ? 1 : 0,
                  scale: hoveredCard === card.id ? 1 : 0.9,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <CldImage
                  src={card.hoverImage}
                  alt={`Architecture hover image ${card.id}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/20"
              animate={{
                backgroundColor:
                  hoveredCard === card.id
                    ? "rgba(0,0,0,0.4)"
                    : "rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Card Number */}
            <motion.div
              className="absolute top-4 right-4 text-white text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              ({String(card.id).padStart(2, "0")})
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
            >
              <motion.div
                className="text-6xl font-light mb-2"
                animate={{
                  scale: hoveredCard === card.id ? 1.1 : 1,
                  color: hoveredCard === card.id ? "#F5F1EB" : "#FFFFFF",
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              >
                {card.number}
              </motion.div>
              <motion.div
                className="text-sm uppercase tracking-wider whitespace-pre-line"
                animate={{
                  y: hoveredCard === card.id ? -2 : 0,
                  opacity: hoveredCard === card.id ? 0.9 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {card.title}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HarperArchitectsGrid;
