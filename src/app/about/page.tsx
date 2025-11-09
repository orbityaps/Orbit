'use client';

import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, BookText, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      href: 'https://x.com/orbityaps',
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/orbityaps',
    },
    {
      name: 'Medium',
      icon: <BookText className="h-5 w-5" />,
      href: 'https://medium.com/@orbityaps',
    },
  ];

  const contactDetails = [
    {
      name: 'Twitter / DM',
      value: '@orbityaps',
      href: 'https://x.com/orbityaps',
      icon: <Twitter className="h-5 w-5 text-muted-foreground" />,
    },
    {
      name: 'Mail',
      value: 'orbityaps@proton.me',
      href: 'mailto:orbityaps@proton.me',
      icon: <Mail className="h-5 w-5 text-muted-foreground" />,
    },
  ];


  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="flex flex-col items-center text-center mb-16"
          >
            <motion.div 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 border border-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <Image
                src="/image.png"
                alt="Orbit profile"
                fill
                className="object-cover object-center"
                style={{ objectPosition: 'center center' }}
                sizes="(max-width: 768px) 128px, 160px"
              />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter mb-6 text-foreground relative inline-block">
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
                Orbit
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
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.5, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-lg text-foreground/70 font-light leading-relaxed"
            >
              Malware Researcher 
            </motion.p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className="bg-secondary/20 hover:bg-secondary/50 border-border"
                >
                  <Link href={link.href} target="_blank">
                    {link.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="space-y-16"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">About Me</h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Hey, I'm Orbit, just a nerd exploring tech and cybersec, chasing the jack-of-all-trades life! Learning, breaking stereotypes, building for the community, and always ready to yap around..
              </p>
            </div>

            <div className="border-t border-border pt-16">
              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-12 text-center">Contact Details</h3>
              <div className="max-w-md mx-auto space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.name} className="flex items-start p-6 border-b border-border hover:border-foreground/20 transition-colors">
                  <div className="mt-1 text-muted-foreground">
                    {detail.icon}
                  </div>
                  <div className="ml-6 flex-1 overflow-hidden">
                    <p className="text-xs text-muted-foreground/80 font-light uppercase tracking-wider mb-2">{detail.name}</p>
                    <div className="flex items-center justify-between gap-2">
                        {detail.href ? (
                            <Link href={detail.href} target={detail.href.startsWith('mailto:') ? '_self' : '_blank'} className="text-base text-foreground font-light break-all hover:text-foreground/80 transition-colors leading-relaxed">{detail.value}</Link>
                        ) : (
                            <p className="text-base text-foreground font-light break-all leading-relaxed">{detail.value}</p>
                        )}
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
