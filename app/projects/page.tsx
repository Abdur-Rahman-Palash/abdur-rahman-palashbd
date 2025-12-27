import React from 'react';
import ProjectsSection from '../../components/ProjectsSection';
import { Project } from '../../lib/types';

const ProjectsPage = () => {
  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product management, shopping cart, payment integration with Stripe, and admin dashboard. Implemented responsive design and optimized for performance.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: 'web-development',
      status: 'completed',
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      featured: true,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      longDescription: 'Developed a modern task management app with real-time collaboration features using Socket.io, drag-and-drop functionality, and team management. Includes project boards, time tracking, and progress analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Prisma'],
      category: 'web-development',
      status: 'completed',
      liveUrl: 'https://example-tasks.com',
      githubUrl: 'https://github.com/username/task-manager',
      featured: true,
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-02-01'),
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts',
      longDescription: 'Created an interactive weather dashboard that displays current conditions and forecasts. Features location detection, beautiful animations, and detailed weather metrics including air quality and UV index.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Weather API', 'CSS Animations'],
      category: 'web-development',
      status: 'completed',
      liveUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/username/weather-dashboard',
      featured: false,
      createdAt: new Date('2023-12-10'),
      updatedAt: new Date('2023-12-10'),
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills',
      longDescription: 'Designed and developed a responsive portfolio website with smooth animations, dark mode support, and optimized performance. Features include project showcase, blog system, and contact form.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'web-development',
      status: 'completed',
      liveUrl: 'https://example-portfolio.com',
      githubUrl: 'https://github.com/username/portfolio',
      featured: true,
      createdAt: new Date('2024-03-01'),
      updatedAt: new Date('2024-03-01'),
    },
    {
      id: '5',
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication',
      longDescription: 'Developed a mobile banking app with secure authentication, transaction management, and financial insights. Implemented biometric login, push notifications, and offline functionality.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric Auth'],
      category: 'mobile-development',
      status: 'in-progress',
      featured: false,
      createdAt: new Date('2024-02-15'),
      updatedAt: new Date('2024-02-15'),
    },
    {
      id: '6',
      title: 'Data Visualization Tool',
      description: 'An interactive data visualization platform for business analytics',
      longDescription: 'Built a comprehensive data visualization tool that connects to various data sources and provides interactive charts, dashboards, and reports. Features drag-and-drop interface and real-time data updates.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      category: 'data-science',
      status: 'planned',
      featured: false,
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-20'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ProjectsSection
        projects={projects}
        title="My Projects"
        subtitle="A showcase of my recent work and technical expertise across various domains"
        showFilters={true}
      />
    </div>
  );
};

export default ProjectsPage;