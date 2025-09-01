// components/SEOHead.tsx - SEO Component for Blog Pages
import Head from 'next/head';
import type { BlogPost } from '@/lib/sanity/types';
import { urlFor } from '@/lib/sanity/image';

interface SEOHeadProps {
  post?: BlogPost;
  title?: string;
  description?: string;
  image?: string;
}

export function SEOHead({ post, title, description, image }: SEOHeadProps) {
  const seoTitle = post?.seo?.metaTitle || post?.title || title || 'Luxury Architecture Blog';
  const seoDescription = post?.seo?.metaDescription || post?.excerpt || description || 'Explore luxury architecture and innovative design insights.';
  const seoImage = post?.seo?.openGraphImage 
    ? urlFor(post.seo.openGraphImage).width(1200).height(630).url()
    : post?.mainImage 
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : image;

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={post ? 'article' : 'website'} />
      {seoImage && <meta property="og:image" content={seoImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      {seoImage && <meta name="twitter:image" content={seoImage} />}
      
      {/* Article specific */}
      {post && (
        <>
          <meta property="article:published_time" content={post.publishedAt} />
          {post.author && <meta property="article:author" content={post.author.name} />}
          {post.categories?.map((category) => (
            <meta key={category._id} property="article:tag" content={category.title} />
          ))}
        </>
      )}
      
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
    </Head>
  );
}