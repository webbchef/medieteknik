'use client';

import { useEffect, useState } from 'react';

// Tailwind breakpoints matching default configuration
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

export function useResponsive() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Set initial width
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isAbove = (breakpoint: Breakpoint) => width >= breakpoints[breakpoint];
  const isBelow = (breakpoint: Breakpoint) => width < breakpoints[breakpoint];

  return {
    width,
    isMobile: isBelow('md'),
    isTablet: isAbove('md') && isBelow('lg'),
    isDesktop: isAbove('lg'),
    isSmall: isBelow('sm'),
    isMedium: isAbove('sm') && isBelow('md'),
    isLarge: isAbove('md') && isBelow('lg'),
    isXLarge: isAbove('lg') && isBelow('xl'),
    is2XLarge: isAbove('xl'),
    isAbove,
    isBelow,
  };
}

// Hook for media query matching (similar to MUI's useMediaQuery)
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
