'use client';

import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme, isDark, mounted } = useTheme();

  if (!mounted) return null; // Prevent hydration mismatch

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(isDark ? 'light' : 'dark');
    } else {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg bg-neutral-100 p-2 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      aria-label="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
