import { useEffect, useState } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

export const useGSAP = () => {
  const [GSAP, setGSAP] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsap = (await import('gsap')).default;
        setGSAP(gsap);
        setIsLoaded(true);
      } catch (error) {
        console.warn('Failed to load GSAP:', error);
      }
    };

    loadGSAP();
  }, []);

  return { GSAP, isLoaded };
};