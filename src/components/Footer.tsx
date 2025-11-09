import Link from "next/link";
import { Github, Twitter, BookText } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-10 bg-background/40 backdrop-blur-sm border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xs text-foreground/60 font-light tracking-wide">
              © {new Date().getFullYear()} Orbit. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-5">
            <Link
              href="https://github.com/orbityaps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://x.com/orbityaps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="https://medium.com/@orbityaps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="Medium"
            >
              <BookText className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
