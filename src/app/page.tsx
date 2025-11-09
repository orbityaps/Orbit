"use client";

import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts as allBlogPosts } from "@/lib/blogData";

const MotionLink = motion(Link);

// Filter out coming soon posts and get latest 2
const latestPosts = allBlogPosts
  .filter(post => !(post as any).isComingSoon)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 2);

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
    },
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <section className="flex flex-col items-center text-center pt-20 pb-16 md:pt-32 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="mb-8"
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
                Orbit
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
              className="text-base md:text-lg text-foreground/65 font-light max-w-3xl mx-auto leading-relaxed tracking-wide"
            >
              Hey, I'm Orbit — I yap about cybersec, malware dev, red teaming, and reverse engineering
            </motion.p>
          </motion.div>
        </section>

        {/* Latest Yaps Section */}
        <section className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-foreground mb-3">
              Recent Yaps
            </h2>
            <p className="text-foreground/50 font-light text-xs tracking-wide">
              Latest noise from me
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {latestPosts.map((post) => (
                <motion.div 
                  variants={item} 
                  className="group h-full" 
                  key={post.id}
                >
                  <MotionLink
                    href={post.slug}
                    target={post.isExternal ? "_blank" : "_self"}
                    className="block h-full p-8 md:p-10 border border-border/50 hover:border-foreground/20 transition-all duration-500 bg-background/40 hover:bg-background/60 backdrop-blur-sm flex flex-col group/card"
                  >
                    <p className="text-sm text-muted-foreground/70 mb-5 font-light uppercase tracking-[0.15em]">
                      {post.date}
                    </p>
                    <h3 className="text-xl md:text-2xl font-extralight mb-5 group-hover/card:text-foreground transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-foreground/75 font-light leading-relaxed text-base flex-grow mb-6">
                      {post.description}
                    </p>
                    <div className="mt-auto pt-5 border-t border-border/30 group-hover/card:border-foreground/20 transition-colors duration-300">
                      <span className="text-xs text-muted-foreground/70 group-hover/card:text-foreground/80 font-light tracking-wide inline-flex items-center gap-1 transition-colors duration-300">
                        Read yap
                        <span className="inline-block group-hover/card:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </div>
                  </MotionLink>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="text-center mt-24">
            <Link 
              href="/blog"
              className="text-foreground/60 hover:text-foreground transition-all duration-300 font-light text-sm inline-flex items-center gap-2 group/link tracking-wide"
            >
              <span>View all yaps</span>
              <span className="inline-block group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
