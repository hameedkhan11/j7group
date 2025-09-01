// Updated app/blog/[slug]/page.tsx (with contentType check)
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts } from '@/lib/sanity/queries';
import type { BlogPost } from '@/lib/sanity/types';
import { urlFor } from '@/lib/sanity/image';
import BlogDetailClient from '@/components/features/Blogs/components/BlogDetailClient';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post || post.contentType !== 'blog') {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const metaTitle = post.seo?.metaTitle || `${post.title} - Architecture Blog`;
  const metaDescription = post.seo?.metaDescription || post.excerpt || 'Luxury architecture insights and design innovation.';
  const ogImage = post.seo?.openGraphImage 
    ? urlFor(post.seo.openGraphImage).width(1200).height(630).url()
    : post.mainImage 
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  // Ensure this is actually a blog post
  if (!post || post.contentType !== 'blog') {
    notFound();
  }

  // Get related blog posts
  const categoryRefs = post.categories?.map(cat => cat._id) || [];
  const relatedPosts = await getRelatedPosts(post._id, categoryRefs, 'blog');

  return <BlogDetailClient post={post} relatedPosts={relatedPosts} />;
}