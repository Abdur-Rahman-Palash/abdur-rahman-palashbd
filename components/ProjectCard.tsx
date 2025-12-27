'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';
// import { useFadeIn } from '../animations';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // const cardRef = useFadeIn({ duration: 0.8, delay: 0.2 });

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-success';
      case 'in-progress':
        return 'bg-warning';
      case 'planned':
        return 'bg-neutral';
      case 'archived':
        return 'bg-error';
      default:
        return 'bg-neutral';
    }
  };

  const getCategoryLabel = (category: Project['category']) => {
    return category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <article
      // ref={cardRef}
      className="group bg-surface rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          itemProp="image"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-2 py-1 text-xs font-semibold text-background rounded-full ${getStatusColor(project.status)}`}
          >
            {project.status.replace('-', ' ')}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 text-xs font-semibold bg-accent text-background rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-text-muted font-medium">
            {getCategoryLabel(project.category)}
          </span>
          <time
            className="text-sm text-text-muted"
            dateTime={project.createdAt.toISOString()}
            itemProp="dateCreated"
          >
            {project.createdAt.getFullYear()}
          </time>
        </div>

        <h3
          className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
          itemProp="name"
        >
          {project.title}
        </h3>

        <p
          className="text-text-muted mb-4 line-clamp-3"
          itemProp="description"
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-surface-hover text-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs text-text-muted">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              className="flex-1 text-center px-4 py-2 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="url"
            >
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              className="flex-1 text-center px-4 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-background transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;