# Blog Post Template (Yap Template)

This is a template for creating new blog posts (yaps) on the Orbit website. Follow these steps to create a new yap.

## Step 1: Create the Blog Post File

1. Navigate to `src/app/blog/`
2. Create a new folder with your blog post slug (e.g., `my-new-yap`)
3. Inside that folder, create a `page.tsx` file

**Example structure:**
```
src/app/blog/
  └── my-new-yap/
      └── page.tsx
```

## Step 2: Use This Template

Copy the template below and replace the content with your own:

```tsx
"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { ArrowLeft, /* Add your icons here */ } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Optional: Table of Contents component (remove if not needed)
const TableOfContents = () => (
  <div className="p-6 bg-background/50 border border-border rounded-lg sticky top-24">
    <h2 className="text-lg font-light mb-4 text-foreground">Table of Contents</h2>
    <ul className="space-y-2 text-foreground/70 font-light text-sm">
      <li><a href="#section1" className="hover:text-foreground transition-colors">1. Section One</a></li>
      <li><a href="#section2" className="hover:text-foreground transition-colors">2. Section Two</a></li>
      {/* Add more sections as needed */}
    </ul>
  </div>
);

// Section component for consistent styling
const Section = ({ id, title, children, icon: Icon }: { id: string, title: string, children: React.ReactNode, icon: React.ElementType }) => (
  <motion.section 
    id={id} 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center mb-4">
      <Icon className="h-5 w-5 mr-3 text-foreground/60" />
      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">{title}</h2>
    </div>
    <div className="text-foreground/80 font-light leading-relaxed">
      {children}
    </div>
  </motion.section>
);

export default function BlogPost() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors font-light text-sm mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to yaps
          </Link>

          {/* Header */}
          <header className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-foreground relative inline-block"
            >
              <motion.span 
                className="relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                Your Blog Post Title Here
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.3, 
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute inset-0 blur-2xl opacity-20"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
                }}
              />
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-foreground/60 font-light"
            >
              <span>Month Day, Year</span>
              <span className="mx-2">•</span>
              <span>X min read</span>
            </motion.div>
          </header>

          {/* Optional: Featured Image */}
          <div className="relative w-full aspect-[16/8] rounded-lg overflow-hidden my-12 border border-border">
            <Image
              src="/your-image.jpg"
              alt="Image description"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              {/* Your sections here */}
              <Section id="introduction" title="Introduction" icon={ArrowLeft}>
                <p>
                  Your introduction text here. This is where you introduce your topic.
                </p>
              </Section>

              <Section id="section1" title="1. First Section" icon={ArrowLeft}>
                <p>
                  Your content here. Use paragraphs, lists, and other HTML elements as needed.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong className="font-normal text-foreground">Point 1</strong>: Description</li>
                  <li><strong className="font-normal text-foreground">Point 2</strong>: Description</li>
                </ul>
              </Section>

              {/* Add more sections as needed */}
            </div>
            
            {/* Optional: Sidebar with Table of Contents */}
            <aside className="lg:col-span-1">
              <TableOfContents />
            </aside>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {['Tag1', 'Tag2', 'Tag3'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-background/50 border border-border rounded-full text-xs font-light text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>

            {/* Legal Disclaimer */}
            <div className="bg-background/50 border border-border p-6 rounded-lg my-8 max-w-2xl mx-auto">
              <h3 className="font-light mb-2 text-foreground">Legal Disclaimer</h3>
              <p className="text-sm text-foreground/70 font-light leading-relaxed">
                This content is for educational purposes only. Techniques, code, and information here are not endorsed for malicious use.
              </p>
            </div>

            {/* Back to yaps link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors font-light text-sm border border-border px-4 py-2 rounded hover:border-foreground/30"
            >
              More Yaps
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
```

## Step 3: Add to blogData.ts

1. Open `src/lib/blogData.ts`
2. Add your new blog post to the `blogPosts` array:

```typescript
{
  id: "your-blog-slug",
  title: "Your Blog Post Title",
  date: "Month Day, Year", // e.g., "Jan 15, 2025"
  readTime: "X min read", // e.g., "10 min read"
  slug: "/blog/your-blog-slug", // Must match the folder name
  description: "A brief description of your blog post that appears on the listing page.",
  tags: ["Tag1", "Tag2", "Tag3"],
  isExternal: false // Set to true if linking to external URL
}
```

## Step 4: Styling Guidelines

Follow these guidelines to maintain the minimalist theme:

### Typography
- **Headings**: Use `font-extralight` or `font-light` with `tracking-tight`
- **Body text**: Use `font-light` with `text-foreground/80` for main content
- **Muted text**: Use `text-foreground/60` or `text-foreground/70`

### Colors
- **Primary text**: `text-foreground`
- **Secondary text**: `text-foreground/80`
- **Muted text**: `text-foreground/60` or `text-foreground/70`
- **Borders**: `border-border`
- **Backgrounds**: `bg-background/50` for subtle backgrounds

### Spacing
- Use consistent spacing: `mb-12` for sections, `mb-4` for headings
- Padding: `p-6` or `p-8` for cards/containers

### Components
- **Borders**: Always use `border border-border`
- **Hover effects**: Use `hover:border-foreground/30` and `hover:text-foreground`
- **Transitions**: Use `transition-colors` or `transition-all duration-300`

## Step 5: Icons

Import icons from `lucide-react` as needed. Common icons:
- `ArrowLeft` - Back button
- `Code` - Programming topics
- `ShieldCheck` - Security topics
- `BrainCircuit` - Learning/thinking
- `TerminalSquare` - Terminal/CLI
- `FileText` - Documentation
- `GitGraph` - Development
- `Bot` - Automation/AI
- `Scale` - Legal/ethics

## Step 6: Testing

1. Start your development server: `npm run dev`
2. Navigate to `/blog` to see your new yap in the listing
3. Click on it to view the full post
4. Check that all links work and styling is consistent

## Quick Checklist

- [ ] Created folder in `src/app/blog/`
- [ ] Created `page.tsx` file
- [ ] Updated title, date, and read time
- [ ] Added content sections
- [ ] Added to `blogData.ts`
- [ ] Tested on local server
- [ ] Verified styling matches theme
- [ ] Checked all links work

## Notes

- Keep the structure consistent with the existing blog post
- Use the `Section` component for all major sections
- Maintain the minimalist aesthetic
- Replace "blog" references with "yap" where appropriate
- The slug in `blogData.ts` must match your folder name

