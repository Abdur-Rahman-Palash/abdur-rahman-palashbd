import { useEffect, useRef } from 'react';
import { useGSAP, useReducedMotion } from './hooks';

export const useFadeIn = (options: {
  duration?: number;
  delay?: number;
  trigger?: boolean;
} = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const { GSAP, isLoaded } = useGSAP();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isLoaded || !GSAP || !elementRef.current || prefersReducedMotion) return;

    const { duration = 1, delay = 0, trigger = true } = options;

    if (trigger) {
      GSAP.fromTo(
        elementRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
        }
      );
    }
  }, [GSAP, isLoaded, prefersReducedMotion, options]);

  return elementRef;
};

export const useSlideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'up', options: {
  duration?: number;
  delay?: number;
  trigger?: boolean;
} = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const { GSAP, isLoaded } = useGSAP();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isLoaded || !GSAP || !elementRef.current || prefersReducedMotion) return;

    const { duration = 1, delay = 0, trigger = true } = options;

    const fromVars: any = { opacity: 0 };
    switch (direction) {
      case 'left':
        fromVars.x = -50;
        break;
      case 'right':
        fromVars.x = 50;
        break;
      case 'up':
        fromVars.y = 50;
        break;
      case 'down':
        fromVars.y = -50;
        break;
    }

    if (trigger) {
      GSAP.fromTo(
        elementRef.current,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
        }
      );
    }
  }, [GSAP, isLoaded, prefersReducedMotion, direction, options]);

  return elementRef;
};

export const useStagger = (options: {
  duration?: number;
  delay?: number;
  stagger?: number;
  trigger?: boolean;
} = {}) => {
  const containerRef = useRef<HTMLElement>(null);
  const { GSAP, isLoaded } = useGSAP();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isLoaded || !GSAP || !containerRef.current || prefersReducedMotion) return;

    const { duration = 0.8, delay = 0, stagger = 0.1, trigger = true } = options;

    if (trigger) {
      GSAP.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power2.out',
        }
      );
    }
  }, [GSAP, isLoaded, prefersReducedMotion, options]);

  return containerRef;
};

export const useScrollTrigger = (options: {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
} = {}) => {
  const { GSAP, isLoaded } = useGSAP();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isLoaded || !GSAP || prefersReducedMotion) return;

    const ScrollTrigger = (GSAP as any).ScrollTrigger;

    if (ScrollTrigger) {
      const {
        trigger,
        start = 'top 80%',
        end = 'bottom 20%',
        scrub = false,
        pin = false,
        onEnter,
        onLeave,
        onEnterBack,
        onLeaveBack,
      } = options;

      ScrollTrigger.create({
        trigger,
        start,
        end,
        scrub,
        pin,
        onEnter,
        onLeave,
        onEnterBack,
        onLeaveBack,
      });
    }
  }, [GSAP, isLoaded, prefersReducedMotion, options]);
};