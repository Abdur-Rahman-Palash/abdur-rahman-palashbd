'use client';

import React, { useState } from 'react';
import { ProjectCategory, ProjectStatus } from '@/lib/types';

const categories: { value: ProjectCategory; label: string }[] = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'mobile-development', label: 'Mobile Development' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'machine-learning', label: 'Machine Learning' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'other', label: 'Other' },
];

const statuses: { value: ProjectStatus; label: string }[] = [
  { value: 'completed', label: 'Completed' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'planned', label: 'Planned' },
  { value: 'archived', label: 'Archived' },
];

const ProjectFilters: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category: ProjectCategory | 'all') => {
    setSelectedCategory(category);
    // TODO: Implement filtering logic
  };

  const handleStatusChange = (status: ProjectStatus | 'all') => {
    setSelectedStatus(status);
    // TODO: Implement filtering logic
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    // TODO: Implement search logic
  };

  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="max-w-md">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        {/* Category Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value as ProjectCategory | 'all')}
            className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground mb-2">
            Status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => handleStatusChange(e.target.value as ProjectStatus | 'all')}
            className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">All Statuses</option>
            {statuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;