"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps as NextThemeProviderProps } from "next-themes";
import type { ReactNode } from "react";

// Extend the original props from next-themes so it's always compatible
interface ThemeProviderProps extends NextThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
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
