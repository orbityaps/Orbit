"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { blogPosts as allBlogPosts } from "@/lib/blogData";

// Sort all posts by date (newest first)
// Coming soon posts are shown but not clickable
const blogPosts = allBlogPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const MotionLink = motion(Link);

export default function BlogPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="text-center pt-12 pb-16"
          >
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter mb-8 text-foreground relative inline-block">
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
                Yaps
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
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.5, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-base text-foreground/60 font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
            >
              Sharing my knowledge and insights on cybersecurity, red teaming, malware development, and more.
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {blogPosts.map((post) => {
              const isComingSoon = (post as any).isComingSoon === true;
              const content = (
                <div className={`flex flex-col h-full bg-background/40 hover:bg-background/60 backdrop-blur-sm p-6 md:p-8 border border-border/50 transition-all duration-500 group/card ${isComingSoon ? 'opacity-50 cursor-not-allowed' : 'hover:border-foreground/20'}`}>
                  <p className="text-sm text-muted-foreground/70 mb-5 font-light uppercase tracking-[0.15em]">
                    {post.date} {!isComingSoon && `• ${post.readTime}`}
                  </p>
                  
                  <h2 className="text-xl md:text-2xl font-extralight mb-4 flex-grow leading-tight group-hover/card:text-foreground transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-foreground/75 mb-5 text-base flex-grow font-light leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground/60 font-light px-2 py-0.5 border border-border/30 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex justify-between items-center pt-5 border-t border-border/30 group-hover/card:border-foreground/20 transition-colors duration-300">
                    <span className="text-xs text-muted-foreground/70 group-hover/card:text-foreground/80 font-light tracking-wide">
                      {isComingSoon ? 'Coming Soon' : (post.isExternal ? 'External' : 'Read more')}
                    </span>
                    {!isComingSoon && post.isExternal && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/60 group-hover/card:text-foreground/60 transition-colors duration-300"/>}
                    {!isComingSoon && !post.isExternal && <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/60 group-hover/card:text-foreground/60 group-hover/card:translate-x-0.5 transition-all duration-300"/>}
                  </div>
                </div>
              );

              if (isComingSoon) {
                return (
                  <motion.div key={post.id} variants={item}>
                    {content}
                  </motion.div>
                );
              }

              return (
                <motion.div key={post.id} variants={item}>
                  <MotionLink
                    href={post.isExternal ? post.slug : post.slug}
                    target={post.isExternal ? "_blank" : "_self"}
                  >
                    {content}
                  </MotionLink>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-24 pt-10 border-t border-border/30">
            <p className="text-xs text-muted-foreground/60 font-light text-center max-w-2xl mx-auto leading-relaxed tracking-wide">
            This site’s content is for learning purposes only. I do not support or take responsibility for any misuse of the information provided.
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
