import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project, ProjectsSectionProps } from '@/lib/types';
import ProjectFilters from './ProjectFilters';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  title = "My Projects",
  subtitle = "A showcase of my recent work and technical expertise",
  showFilters = true,
  maxItems,
  featuredOnly = false,
}) => {
  const displayProjects = featuredOnly
    ? projects.filter(project => project.featured)
    : projects;

  const limitedProjects = maxItems ? displayProjects.slice(0, maxItems) : displayProjects;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Filters */}
        {showFilters && <ProjectFilters />}

        {/* Projects Grid */}
        {limitedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {limitedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-muted text-lg">
              No projects available at the moment. Check back soon!
            </p>
          </div>
        )}

        {/* View All Link */}
        {maxItems && displayProjects.length > maxItems && (
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              View All Projects
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
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;