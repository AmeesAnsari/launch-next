'use client';

import { useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('system');
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize on mount
  useEffect(() => {
    setMounted(true);

    // Get stored theme or default to system
    const stored = localStorage.getItem('theme') as Theme | null;
    const initialTheme = stored || 'system';
    setThemeState(initialTheme);

    // Set initial dark state
    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initialDark =
      initialTheme === 'system' ? systemDark : initialTheme === 'dark';
    setIsDark(initialDark);

    // Apply initial theme to HTML
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    let darkMode: boolean;

    if (theme === 'system') {
      darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      darkMode = theme === 'dark';
    }

    setIsDark(darkMode);
    root.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', theme);

    // Listen to system preference changes
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = (e: MediaQueryListEvent) => {
        const systemDark = e.matches;
        setIsDark(systemDark);
        root.classList.toggle('dark', systemDark);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, mounted]);

  // Setter function
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  return { theme, setTheme, isDark, mounted };
}
