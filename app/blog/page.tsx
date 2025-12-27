import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getAllPosts } from '../../lib/blog';
import { BlogPost } from '../../lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Abdur Rahman Palash',
  description: 'Thoughts on web development, technology, and software engineering.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-muted text-lg">
              No blog posts available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-surface rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <time
            className="text-sm text-text-muted"
            dateTime={post.date}
          >
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="text-text-muted">•</span>
          <span className="text-sm text-text-muted">{post.author}</span>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <p className="text-text-muted mb-4 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-surface-hover text-foreground rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}