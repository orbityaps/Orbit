import { blogPosts, type BlogPost } from "./blogData";

/**
 * Check if a blog post is marked as "coming soon"
 * @param slug - The slug of the blog post (e.g., "/blog/tedy")
 * @returns true if the post is coming soon, false otherwise
 */
export function isPostComingSoon(slug: string): boolean {
  const post = blogPosts.find(p => p.slug === slug);
  return post?.isComingSoon === true;
}

/**
 * Get blog post data by slug
 * @param slug - The slug of the blog post
 * @returns The blog post object or undefined if not found
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

