# Coming Soon Feature Guide

This guide explains how to use the "Coming Soon" feature for blog posts.

## How It Works

When you mark a blog post as "coming soon" in `blogData.ts`, the post will:
1. **Appear on the Yaps page** - But with reduced opacity and "Coming Soon" label
2. **Not be clickable** - The link is disabled
3. **Not appear on the home page** - Filtered out from recent yaps
4. **Redirect if accessed directly** - If someone tries to access the URL directly, they'll be redirected to the blog listing page

## How to Use

### Step 1: Add `isComingSoon: true` to your blog post in `blogData.ts`

```typescript
{
  id: "my-new-post",
  title: "My New Post Title",
  date: "Jan 15, 2025",
  readTime: "10 min read",
  slug: "/blog/my-new-post",
  description: "This is a description of my post.",
  tags: ["Tag1", "Tag2"],
  isExternal: false,
  isComingSoon: true  // ← Add this line
}
```

### Step 2: Create the blog post folder and page

Even if it's coming soon, you should create the folder structure:
```
src/app/blog/my-new-post/page.tsx
```

### Step 3: Add the coming soon check to your blog post page

At the top of your `page.tsx` file, add:

```tsx
"use client";

import { isPostComingSoon } from "@/lib/blogUtils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogPost() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if this post is marked as coming soon
    if (isPostComingSoon("/blog/my-new-post")) {
      router.push("/blog");
    }
  }, [router]);

  // If coming soon, don't render content (will redirect)
  if (isPostComingSoon("/blog/my-new-post")) {
    return null;
  }

  // Your blog post content here...
  return (
    <PageLayout>
      {/* ... */}
    </PageLayout>
  );
}
```

**Important:** Replace `/blog/my-new-post` with your actual slug!

### Step 4: When ready to publish

Simply remove `isComingSoon: true` from `blogData.ts`:

```typescript
{
  id: "my-new-post",
  title: "My New Post Title",
  date: "Jan 15, 2025",
  readTime: "10 min read",
  slug: "/blog/my-new-post",
  description: "This is a description of my post.",
  tags: ["Tag1", "Tag2"],
  isExternal: false
  // isComingSoon removed - post is now live!
}
```

## Example

Here's a complete example:

```typescript
// In blogData.ts
{
  id: "advanced-malware",
  title: "Advanced Malware Development Techniques",
  date: "Dec 20, 2024",
  readTime: "15 min read",
  slug: "/blog/advanced-malware",
  description: "Learn advanced techniques for developing sophisticated malware.",
  tags: ["Malware", "Advanced", "Windows"],
  isExternal: false,
  isComingSoon: true  // Post is not ready yet
}
```

On the Yaps page, this will show:
- ✅ Title and description visible
- ✅ "Coming Soon" label instead of "Read more"
- ✅ Reduced opacity (60%)
- ✅ Not clickable
- ✅ No read time shown

When you remove `isComingSoon: true`, the post becomes fully accessible!

## Notes

- Coming soon posts are **excluded** from the home page's "Recent Yaps" section
- Coming soon posts **are shown** on the Yaps listing page (so people know what's coming)
- Direct URL access will redirect to `/blog`
- The check happens both client-side (redirect) and during render (returns null)

