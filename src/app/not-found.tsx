"use client";

import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-8xl md:text-9xl font-extralight tracking-tighter mb-8 text-foreground relative inline-block"
            >
              <motion.span 
                className="relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                404
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.4, 
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute inset-0 blur-2xl opacity-20"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
                }}
              />
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.5, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-3xl md:text-4xl font-extralight tracking-tight mb-6 text-foreground"
            >
              Page Not Found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.6, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-base md:text-lg text-foreground/65 font-light mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide"
            >
              The page you're looking for doesn't exist or has been moved to another URL.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.7, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-border/50 hover:border-foreground/20 bg-background/40 hover:bg-background/60 backdrop-blur-sm transition-all duration-500 font-light text-foreground/70 hover:text-foreground group"
              >
                <Home className="h-4 w-4" />
                <span>Return Home</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 px-6 py-3 text-foreground/60 hover:text-foreground transition-all duration-300 font-light tracking-wide group"
              >
                <span>View Yaps</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
