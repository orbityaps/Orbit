"use client";

import { ThemeProvider } from "@/components/ThemeProvider";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark", "midnight", "sunset", "ocean", "forest"]}
        enableSystem={false}
      >
      {children}
      </ThemeProvider>
    </body>
  );
}
