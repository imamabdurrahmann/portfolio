"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-theme",
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read from localStorage on mount
    try {
      const stored = localStorage.getItem(storageKey) as Theme | null;
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
      }
    } catch (e) {
      // localStorage not available
    }
  }, [storageKey]);

  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;

    // Apply theme via data-theme attribute (better for mobile browser protection)
    html.setAttribute("data-theme", theme);
    html.classList.remove("light", "dark");
    html.classList.add(theme);

    // Set color-scheme to prevent browser forced colors
    html.style.colorScheme = theme;

    // Persist to localStorage
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      // localStorage not available
    }
  }, [theme, storageKey, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}