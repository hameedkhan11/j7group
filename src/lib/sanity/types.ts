// lib/sanity/types.ts
export interface SanityImageAsset {
  _ref: string;
  _type: 'reference';
}

export interface SanityImage {
  asset: SanityImageAsset;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  alt?: string;
  caption?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  color?: {
    hex: string;
  };
}

export interface Author {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image?: SanityImage;
  bio?: any[];
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  contentType: 'blog' | 'news'; // Added content type
  excerpt?: string;
  mainImage?: SanityImage;
  publishedAt: string;
  readingTime?: number;
  body?: any[];
  author?: Author;
  categories?: Category[];
  featured?: boolean;
  // News-specific fields
  pressReleaseDate?: string;
  newsSource?: string;
  externalLink?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    openGraphImage?: SanityImage;
  };
}