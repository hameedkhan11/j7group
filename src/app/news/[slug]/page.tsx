// app/news/[slug]/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts } from '@/lib/sanity/queries';
import type { BlogPost } from '@/lib/sanity/types';
import { urlFor } from '@/lib/sanity/image';
import NewsDetailClient from '@/components/features/news/components/NewsDetailClient';

interface NewsPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post || post.contentType !== 'news') {
    return {
      title: 'News Not Found',
      description: 'The requested news article could not be found.',
    };
  }

  const metaTitle = post.seo?.metaTitle || `${post.title} - News & Press`;
  const metaDescription = post.seo?.metaDescription || post.excerpt || 'Latest news and press release from our architecture firm.';
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
      publishedTime: post.pressReleaseDate || post.publishedAt,
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

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const post = await getPostBySlug(params.slug);

  // Ensure this is actually a news post
  if (!post || post.contentType !== 'news') {
    notFound();
  }

  // Get related news posts
  const categoryRefs = post.categories?.map(cat => cat._id) || [];
  const relatedPosts = await getRelatedPosts(post._id, categoryRefs, 'news');

  return <NewsDetailClient post={post} relatedPosts={relatedPosts} />;
}