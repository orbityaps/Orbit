// ./src/components/ThemeProvider.tsx

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";
import { type ReactNode } from "react"; 

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}