"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Sparkles, Sunset, Waves, Trees } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-md border border-border bg-background/50" />
    );
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "midnight", icon: Sparkles, label: "Midnight" },
    { name: "sunset", icon: Sunset, label: "Sunset" },
    { name: "ocean", icon: Waves, label: "Ocean" },
    { name: "forest", icon: Trees, label: "Forest" },
  ];

  const currentThemeIndex = themes.findIndex((t) => t.name === theme) || 0;
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length];

  const CurrentIcon = themes[currentThemeIndex]?.icon || Sun;

  return (
    <button
      onClick={() => setTheme(nextTheme.name)}
      className={cn(
        "inline-flex items-center justify-center p-2 rounded-md",
        "text-muted-foreground hover:text-foreground",
        "hover:bg-secondary transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-foreground/20"
      )}
      aria-label={`Switch to ${nextTheme.label} theme`}
      title={`Current: ${themes[currentThemeIndex]?.label || "Light"} - Click for ${nextTheme.label}`}
    >
      <CurrentIcon className="h-5 w-5" />
    </button>
  );
}

