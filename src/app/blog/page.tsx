// Updated app/blog/page.tsx (with contentType filter)
import React from 'react';
import { Metadata } from 'next';
import { getBlogPosts, getCategories } from '@/lib/sanity/queries';
import BlogListingClient from '@/components/features/Blogs/components/BlogListingClient';

export const metadata: Metadata = {
  title: 'Architecture Blog - Luxury Design & Innovation Insights',
  description: 'Explore our collection of articles on luxury architecture, innovative design, cutting-edge technology, and sustainable construction practices.',
  openGraph: {
    title: 'Architecture Blog - Luxury Design & Innovation Insights',
    description: 'Explore our collection of articles on luxury architecture, innovative design, cutting-edge technology, and sustainable construction practices.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(), // Only fetch blog posts (contentType === 'blog')
    getCategories(),
  ]);

  return <BlogListingClient posts={posts} categories={categories} />;
}
