# Project Structure

This document outlines the organized structure of the Orbit website codebase.

## 📁 Directory Structure

```
orbityaps/
├── public/                    # Static assets
│   ├── favicon.ico
│   ├── favicon.svg
│   └── image.png             # Profile image
│
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── about/
│   │   │   └── page.tsx      # About page
│   │   ├── blog/
│   │   │   ├── page.tsx      # Blog listing page (Yaps)
│   │   │   └── programming-for-infosec/
│   │   │       └── page.tsx  # Individual blog post
│   │   ├── ClientBody.tsx     # Client-side body wrapper with ThemeProvider
│   │   ├── globals.css        # Global styles and theme variables
│   │   ├── layout.tsx        # Root layout
│   │   ├── not-found.tsx     # 404 error page
│   │   └── page.tsx          # Home page
│   │
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── button.tsx    # Button component
│   │   │   ├── card.tsx      # Card component
│   │   │   └── separator.tsx # Separator component
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── PageLayout.tsx     # Page layout wrapper
│   │   ├── ThemeProvider.tsx  # Theme context provider
│   │   └── ThemeSwitcher.tsx  # Theme switcher component
│   │
│   └── lib/                   # Utility libraries
│       ├── blogData.ts        # Blog posts data
│       └── utils.ts           # Utility functions (cn helper)
│
├── BLOG_TEMPLATE.md           # Template for creating new blog posts
├── PROJECT_STRUCTURE.md       # This file
├── components.json            # shadcn/ui configuration
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 📄 File Descriptions

### Core App Files

- **`src/app/page.tsx`** - Home page with hero section and recent yaps
- **`src/app/about/page.tsx`** - About page with profile and contact info
- **`src/app/blog/page.tsx`** - Blog listing page (shows all yaps)
- **`src/app/blog/programming-for-infosec/page.tsx`** - Example blog post template
- **`src/app/layout.tsx`** - Root layout with fonts and metadata
- **`src/app/ClientBody.tsx`** - Client-side wrapper with theme provider
- **`src/app/globals.css`** - Global styles, theme variables, and animations
- **`src/app/not-found.tsx`** - 404 error page

### Components

- **`src/components/Navbar.tsx`** - Navigation bar with theme switcher
- **`src/components/Footer.tsx`** - Site footer with social links
- **`src/components/PageLayout.tsx`** - Layout wrapper (Navbar + Footer)
- **`src/components/ThemeProvider.tsx`** - Theme context provider
- **`src/components/ThemeSwitcher.tsx`** - Theme switching button (Light/Dark/Midnight)
- **`src/components/ui/button.tsx`** - Reusable button component
- **`src/components/ui/card.tsx`** - Card component for content containers
- **`src/components/ui/separator.tsx`** - Visual separator component

### Data & Utilities

- **`src/lib/blogData.ts`** - Blog posts data array
- **`src/lib/utils.ts`** - Utility functions (cn helper for classnames)

### Static Assets

- **`public/image.png`** - Profile image used on about page
- **`public/favicon.ico`** - Site favicon
- **`public/favicon.svg`** - SVG favicon

## 🎨 Theme System

The site supports three themes:
- **Light** - Light background, dark text
- **Dark** - Dark background, light text (default)
- **Midnight** - Dark background with colorful text variations

Theme variables are defined in `src/app/globals.css` and managed by `next-themes`.

## 📝 Creating New Blog Posts

1. Create a new folder in `src/app/blog/` with your slug
2. Create `page.tsx` inside that folder
3. Use the template from `BLOG_TEMPLATE.md`
4. Add entry to `src/lib/blogData.ts`

See `BLOG_TEMPLATE.md` for detailed instructions.

## 🗑️ Removed Files

The following files were removed as they were unused:
- `src/app/projects/page.tsx` - Projects page (not needed for blog-only site)
- `src/app/blog/programming-for-infosec/page1.tsx` - Duplicate/old version
- `src/components/GitHubStars.tsx` - Only used by projects page
- `src/lib/github.ts` - Only used by GitHubStars
- `src/components/ui/aspect-ratio.tsx` - Unused UI component
- `src/components/ui/dialog.tsx` - Unused UI component
- `src/components/ui/hover-card.tsx` - Unused UI component
- `src/components/ui/sheet.tsx` - Unused UI component
- `firebase-debug.log` - Debug log file

## 🚀 Navigation Structure

- **Home** (`/`) - Landing page with recent yaps
- **Yaps** (`/blog`) - All blog posts listing
- **About** (`/about`) - About page with profile and contact

## 📦 Dependencies

Key dependencies:
- **Next.js** - React framework
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **next-themes** - Theme management
- **lucide-react** - Icons
- **shadcn/ui** - UI component library

## 🎯 Design Principles

- **Minimalist** - Clean, simple design
- **Light fonts** - `font-extralight` and `font-light` throughout
- **Consistent spacing** - Standardized margins and padding
- **Subtle borders** - `border-border` for visual separation
- **Smooth animations** - Framer Motion for transitions
- **Theme-aware** - All colors use theme variables

