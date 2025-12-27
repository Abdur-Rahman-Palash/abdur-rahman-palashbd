'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
            }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground"
          >
            Abdur Rahman Palash
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
            }}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-text-muted"
          >
            Full-Stack Developer & UI/UX Designer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
            }}
            className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences with modern technologies.
            Specialized in React, Next.js, and scalable web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
            >
              View My Work
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-background transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 bg-text-muted rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;