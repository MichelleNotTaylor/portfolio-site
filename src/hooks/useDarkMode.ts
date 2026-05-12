import { useState, useEffect } from 'react';

export function useDarkMode(): [boolean, () => void] {
  // Read initial state from the class the inline script already applied (no flash)
  const [isDark, setIsDark] = useState<boolean>(
    () => document.documentElement.classList.contains('dark'),
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = () => setIsDark((d) => !d);

  return [isDark, toggle];
}
