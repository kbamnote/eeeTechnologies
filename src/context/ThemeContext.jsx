import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({ isDark: false, toggle: () => {} });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  // Initialize from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const next = saved ? saved === "dark" : prefersDark;
    setIsDark(next);
  }, []);

  // Apply class to <html> for Tailwind dark variants
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const value = useMemo(() => ({
    isDark,
    toggle: () => setIsDark((v) => !v),
    setDark: () => setIsDark(true),
    setLight: () => setIsDark(false),
  }), [isDark]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;