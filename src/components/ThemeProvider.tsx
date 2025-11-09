"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// Custom ThemeProviderProps interface to avoid importing from next-themes/dist/types
interface ThemeProviderProps {
  children: ReactNode;
  attribute?: string;
  defaultTheme?: string;
  themes?: string[];
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
  nonce?: string;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

