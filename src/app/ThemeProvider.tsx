"use client";
import { useEffect } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(storedTheme);
  }, []);

  return <>{children}</>;
};
