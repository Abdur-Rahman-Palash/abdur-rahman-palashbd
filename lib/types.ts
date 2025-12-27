export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectCategory =
  | 'web-development'
  | 'mobile-development'
  | 'ui-ux-design'
  | 'data-science'
  | 'machine-learning'
  | 'blockchain'
  | 'other';

export type ProjectStatus =
  | 'completed'
  | 'in-progress'
  | 'planned'
  | 'archived';

export interface ProjectFilters {
  category?: ProjectCategory;
  status?: ProjectStatus;
  technology?: string;
  featured?: boolean;
}

export interface ProjectsSectionProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  maxItems?: number;
  featuredOnly?: boolean;
}