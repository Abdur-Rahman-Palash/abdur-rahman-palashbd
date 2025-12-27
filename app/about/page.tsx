'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Design', level: 80 },
  ];

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Developing modern web applications using React, Next.js, and Node.js. Leading frontend architecture and implementing best practices.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2022 - 2023',
      description: 'Built responsive websites and web applications. Collaborated with designers to create pixel-perfect implementations.',
    },
    {
      title: 'Junior Developer',
      company: 'Startup',
      period: '2021 - 2022',
      description: 'Learned modern web development technologies and contributed to various projects using React and Node.js.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-surface to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              About Me
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences through code and design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full bg-surface rounded-full flex items-center justify-center">
                  <div className="text-8xl font-bold text-primary">
                    AP
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">Hello, I'm Abdur Rahman Palash</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                I'm a passionate Full-Stack Developer and UI/UX Designer with over 3 years of experience
                creating digital solutions that make a difference. I specialize in modern web technologies
                and love bringing creative ideas to life through clean, efficient code.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                My journey in tech started with a curiosity about how things work behind the scenes.
                Today, I focus on building scalable applications, crafting beautiful user interfaces,
                and solving complex problems with elegant solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-surface transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="bg-primary h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  className="bg-surface p-6 rounded-lg border border-border"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-primary font-medium">{exp.period}</span>
                  </div>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-text-muted leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;