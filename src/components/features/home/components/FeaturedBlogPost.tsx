"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity/image';
import type { BlogPost } from '@/lib/sanity/types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  onViewDetails: (slug: string, contentType: 'blog' | 'news') => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-[480px] overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background Image */}
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(600).height(480).url()}
          alt={post.mainImage.alt || post.title}
          fill
          className="object-cover transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      
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
              <span className="text-white text-5xl font-medium">
                {String(index + 1).padStart(2, '0')}
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
              onClick={() => onViewDetails(post.slug.current, post.contentType)}
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

interface FeaturedBlogPostsProps {
  posts: BlogPost[];
}

const FeaturedBlogPosts: React.FC<FeaturedBlogPostsProps> = ({ posts }) => {
  const handleViewDetails = (slug: string, contentType: 'blog' | 'news') => {
    // Navigate based on content type
    const basePath = contentType === 'news' ? '/news' : '/blog';
    window.location.href = `${basePath}/${slug}`;
  };

  return (
    <div className="w-full bg-[#51301F] py-16">
      <h1 className='text-3xl md:text-4xl lg:text-5xl text-white py-4 px-12 mb-8 font-coconat'>
        Featured Blog Posts
      </h1>
      
      {/* Blog Grid */}
      <div className="px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
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
                index={index}
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