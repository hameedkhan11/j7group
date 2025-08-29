"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CldImage } from 'next-cloudinary';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  onViewDetails: (slug: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-[480px] overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background Image */}
      <CldImage
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-500"
      />
      
      {/* Dark Overlay - Only visible when not hovered */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div 
            className="absolute inset-0 bg-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Light Overlay for Hover State */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-[#ECE4D9] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      
      {/* Content Container - Default State */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div 
            className="absolute inset-0 flex flex-col justify-between p-6"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Number Tag - Top Left */}
            <div className="flex justify-start">
              <span className=" text-white text-5xl font-medium">
                {String(post.id).padStart(2, '0')}
              </span>
            </div>

            {/* Title - Bottom */}
            <div>
              <h3 className="text-white text-xl font-medium leading-tight">
                {post.title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Container - Hover State */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >

            {/* Title - Centered */}
            <motion.h3 
              className="text-amber-900 text-xl font-semibold leading-tight mb-8 max-w-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {post.title}
            </motion.h3>

            {/* View Details Button */}
            <motion.button
              onClick={() => onViewDetails(post.slug)}
              className="px-8 py-3 bg-[#7A3110] text-white cursor-pointer font-medium rounded-full transition-colors duration-300 shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Details
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FeaturedBlogPosts: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "3D Printing in Architecture: How It's Revolutionizing Construction",
      category: "3D Printing",
      image: "imgi_3_3kgjP9qDZpTTY29GYKnxPhfglWs_rhkhtw",
      slug: "3d-printing-architecture"
    },
    {
      id: 2,
      title: "The Role of VR/AR in Architectural Design & Client Collaboration",
      category: "VR/AR",
      image: "imgi_40_1743686885-web-2_t6jotj",
      slug: "vr-ar-architectural-design"
    },
    {
      id: 3,
      title: "How Digital Twins Are Transforming Urban Planning & Smart Cities",
      category: "Metaverse",
      image: "imgi_5_1731504856-landmark_uyckmr",
      slug: "digital-twins-urban-planning"
    }
  ];

  const handleViewDetails = (slug: string) => {
    console.log(`Viewing details for: ${slug}`);
    // Add your navigation logic here
  };

  return (
    <div className="w-full bg-[#51301F] py-16">
      <h1 className='text-3xl md:text-4xl lg:text-5xl text-white py-4 px-12 mb-8 font-coconat'>
        Featured Blog Posts
      </h1>
      
      {/* Blog Grid */}
      <div className="px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <BlogCard 
                post={post} 
                onViewDetails={handleViewDetails}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPosts;