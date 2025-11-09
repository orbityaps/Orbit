"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";
import type { ReactNode } from "react";

// ✅ Correctly typed ThemeProvider compatible with next-themes@latest
export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  ...props
}: Omit<ThemeProviderProps, "attribute"> & { children: ReactNode; attribute?: "class" | "data-theme" }) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
