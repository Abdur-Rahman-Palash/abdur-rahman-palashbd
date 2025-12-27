'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground mb-4">Something went wrong</h1>
        <p className="text-text-muted mb-8">
          We apologize for the inconvenience. Please try refreshing the page.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}