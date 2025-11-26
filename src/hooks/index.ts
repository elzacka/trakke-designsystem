/**
 * TRÅKKE DESIGN SYSTEM
 * React Hooks
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { breakpoints } from '../tokens';

/**
 * Hook for responsive design - detects current breakpoint
 */
export function useBreakpoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<keyof typeof breakpoints>('xs');
  
  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= parseInt(breakpoints['2xl'])) {
        setCurrentBreakpoint('2xl');
      } else if (width >= parseInt(breakpoints.xl)) {
        setCurrentBreakpoint('xl');
      } else if (width >= parseInt(breakpoints.lg)) {
        setCurrentBreakpoint('lg');
      } else if (width >= parseInt(breakpoints.md)) {
        setCurrentBreakpoint('md');
      } else if (width >= parseInt(breakpoints.sm)) {
        setCurrentBreakpoint('sm');
      } else {
        setCurrentBreakpoint('xs');
      }
    };
    
    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);
  
  return currentBreakpoint;
}

/**
 * Hook for detecting mobile devices
 */
export function useIsMobile() {
  const breakpoint = useBreakpoint();
  return breakpoint === 'xs' || breakpoint === 'sm';
}

/**
 * Hook for detecting touch devices
 */
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  
  return isTouch;
}

/**
 * Hook for reduced motion preference
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
}

/**
 * Hook for dark mode preference
 */
export function useDarkMode() {
  const [prefersDark, setPrefersDark] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setPrefersDark(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersDark;
}

/**
 * Hook for click outside detection
 */
export function useClickOutside<T extends HTMLElement>(
  callback: () => void
) {
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [callback]);
  
  return ref;
}

/**
 * Hook for keyboard shortcuts
 */
export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options: { ctrl?: boolean; shift?: boolean; alt?: boolean; meta?: boolean } = {}
) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        (!options.ctrl || event.ctrlKey) &&
        (!options.shift || event.shiftKey) &&
        (!options.alt || event.altKey) &&
        (!options.meta || event.metaKey)
      ) {
        event.preventDefault();
        callback();
      }
    };
    
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [key, callback, options]);
}

/**
 * Hook for debounced values
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
}

/**
 * Hook for local storage
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });
  
  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setValue] as const;
}

/**
 * Hook for focus trap
 */
export function useFocusTrap<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };
    
    element.addEventListener('keydown', handleTab);
    firstElement?.focus();
    
    return () => element.removeEventListener('keydown', handleTab);
  }, []);
  
  return ref;
}
