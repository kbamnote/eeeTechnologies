import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function useDarkMode() {
  const { isDark, toggle } = useTheme();

  // Optional: smooth transition when toggling theme
  useEffect(() => {
    const root = document.documentElement;
    root.style.transition = "background-color 300ms ease, color 300ms ease";
    const timer = setTimeout(() => {
      root.style.transition = "";
    }, 350);
    return () => clearTimeout(timer);
  }, [isDark]);

  return { isDark, toggle };
}