// lib/sanity/queries.ts
import { client } from "./client";
import { BlogPost, Category } from "./types";

// Base query fields for posts
const POST_FIELDS = `
  _id,
  title,
  slug,
  contentType,
  excerpt,
  mainImage,
  publishedAt,
  readingTime,
  pressReleaseDate,
  newsSource,
  externalLink,
  author->{
    name,
    image,
    bio,
    social
  },
  categories[]->{
    title,
    slug,
    color
  },
  seo
`;

// All posts query
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  ${POST_FIELDS}
}`;

// Blog posts only
export const BLOG_POSTS_QUERY = `*[_type == "post" && contentType == "blog"] | order(publishedAt desc) {
  ${POST_FIELDS}
}`;

// News posts only
export const NEWS_POSTS_QUERY = `*[_type == "post" && contentType == "news"] | order(publishedAt desc) {
  ${POST_FIELDS}
}`;

// Featured posts (can be from both types)
export const FEATURED_POSTS_QUERY = `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
  ${POST_FIELDS}
}`;

// Featured blog posts only
export const FEATURED_BLOG_POSTS_QUERY = `*[_type == "post" && featured == true && contentType == "blog"] | order(publishedAt desc)[0...3] {
  ${POST_FIELDS}
}`;

// Featured news posts only
export const FEATURED_NEWS_POSTS_QUERY = `*[_type == "post" && featured == true && contentType == "news"] | order(publishedAt desc)[0...3] {
  ${POST_FIELDS}
}`;

// Single post query (works for both types)
export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  ${POST_FIELDS},
  body
}`;

// Categories query
export const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  color
}`;

// Posts by category (for both types)
export const POSTS_BY_CATEGORY_QUERY = `*[_type == "post" && $categorySlug in categories[]->slug.current && contentType == $contentType] | order(publishedAt desc) {
  ${POST_FIELDS}
}`;

// Sitemap query
export const POSTS_SITEMAP_QUERY = `*[_type == "post"] {
  slug,
  publishedAt,
  contentType
}`;

// Function to fetch blog posts
export async function getBlogPosts() {
  try {
    const posts = await client.fetch<BlogPost[]>(BLOG_POSTS_QUERY);
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Function to fetch news posts
export async function getNewsPosts() {
  try {
    const posts = await client.fetch<BlogPost[]>(NEWS_POSTS_QUERY);
    return posts;
  } catch (error) {
    console.error('Error fetching news posts:', error);
    return [];
  }
}

// Function to fetch featured posts by type
export async function getFeaturedPosts(contentType?: 'blog' | 'news') {
  try {
    let query = FEATURED_POSTS_QUERY;
    if (contentType === 'blog') {
      query = FEATURED_BLOG_POSTS_QUERY;
    } else if (contentType === 'news') {
      query = FEATURED_NEWS_POSTS_QUERY;
    }
    
    const posts = await client.fetch<BlogPost[]>(query);
    return posts;
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

// Function to fetch all posts
export async function getAllPosts() {
  try {
    const posts = await client.fetch<BlogPost[]>(POSTS_QUERY);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Function to fetch single post
export async function getPostBySlug(slug: string) {
  try {
    const post = await client.fetch<BlogPost | null>(POST_QUERY, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Function to get related posts (same content type)
export async function getRelatedPosts(currentPostId: string, categories: string[], contentType: 'blog' | 'news'): Promise<BlogPost[]> {
  if (!categories.length) {
    // If no categories, just get latest posts of the same type
    const query = `*[_type == "post" && _id != $currentPostId && contentType == $contentType] | order(publishedAt desc)[0...3] {
      ${POST_FIELDS}
    }`;
    return client.fetch<BlogPost[]>(query, { currentPostId, contentType });
  }
    
  const query = `*[_type == "post" && _id != $currentPostId && contentType == $contentType && count((categories[]._ref)[@ in $categoryRefs]) > 0] | order(publishedAt desc)[0...3] {
    ${POST_FIELDS}
  }`;
    
  const categoryRefs = categories.map(cat => cat);
  return client.fetch<BlogPost[]>(query, { currentPostId, categoryRefs, contentType });
}

// Function to fetch categories
export async function getCategories() {
  try {
    const categories = await client.fetch<Category[]>(CATEGORIES_QUERY);
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}