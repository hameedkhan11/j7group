// components/features/News/components/NewsListingClient.tsx
"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { urlFor } from '@/lib/sanity/image';
import type { BlogPost, Category } from '@/lib/sanity/types';

interface NewsListingClientProps {
  posts: BlogPost[];
  categories: Category[];
}

// News Card Component
const NewsListingCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = (slug: string) => {
    if (post.externalLink) {
      window.open(post.externalLink, '_blank');
    } else {
      window.location.href = `/news/${slug}`;
    }
  };

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
            <div className="flex justify-between items-start">
              <span className="text-white text-5xl font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
              {/* External Link Indicator */}
              {post.externalLink && (
                <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </div>

            {/* Title and Source - Bottom */}
            <div>
              {post.newsSource && (
                <p className="text-white/80 text-sm mb-2 uppercase tracking-wider font-medium">
                  {post.newsSource}
                </p>
              )}
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
              onClick={() => handleViewDetails(post.slug.current)}
              className="px-8 py-3 bg-[#7A3110] text-white cursor-pointer font-medium rounded-full transition-colors duration-300 shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {post.externalLink ? 'Read Article' : 'View Details'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const NewsListingClient: React.FC<NewsListingClientProps> = ({ posts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.categories?.some(cat => cat.slug.current === selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        post.newsSource?.toLowerCase().includes(query) ||
        post.categories?.some(cat => cat.title.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#51301F]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#51301F] via-[#7A3110] to-[#51301F]"></div>
        <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-coconat text-white mb-8">
              News & <span className="text-[#ECE4D9]">Press</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, press releases, and announcements from the world of 
              luxury architecture and real estate development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-16 px-4 bg-[#ECE4D9]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50"
          >
            {/* Search Bar */}
            <div className="mb-12">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search news and press releases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-8 py-6 text-lg rounded-full border-2 border-[#51301F]/20 focus:border-[#7A3110] focus:outline-none bg-white text-[#51301F] placeholder:text-[#51301F]/50 transition-all duration-300 shadow-lg"
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                  <svg 
                    className="w-6 h-6 text-[#51301F]/50" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-[#7A3110] text-white shadow-2xl scale-105'
                    : 'bg-white text-[#51301F] hover:bg-[#7A3110]/10 border-2 border-[#51301F]/20 hover:border-[#7A3110] hover:scale-105'
                }`}
              >
                All News ({posts.length})
              </button>
              
              {categories.map((category) => {
                const categoryPosts = posts.filter(post =>
                  post.categories?.some(cat => cat.slug.current === category.slug.current)
                );
                
                return (
                  <button
                    key={category._id}
                    onClick={() => setSelectedCategory(category.slug.current)}
                    className={`px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.slug.current
                        ? 'text-white shadow-2xl scale-105'
                        : 'bg-white text-[#51301F] hover:bg-[#7A3110]/10 border-2 border-[#51301F]/20 hover:border-[#7A3110]'
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category.slug.current 
                        ? category.color?.hex || '#7A3110' 
                        : undefined
                    }}
                  >
                    {category.title} ({categoryPosts.length})
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Posts Grid */}
      <section className="py-20 px-12 bg-[#51301F]">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <NewsListingCard post={post} index={index} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16 max-w-2xl mx-auto">
                    <svg className="w-24 h-24 text-white/30 mx-auto mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <h3 className="text-3xl font-coconat text-white mb-4">No news found</h3>
                    <p className="text-white/60 text-lg">
                      Try adjusting your search terms or selecting a different category to discover our latest news and press releases.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                      className="mt-8 px-8 py-4 bg-[#7A3110] text-white rounded-full hover:bg-[#ECE4D9] hover:text-[#51301F] transition-all duration-300 font-medium"
                    >
                      View All News
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default NewsListingClient;
