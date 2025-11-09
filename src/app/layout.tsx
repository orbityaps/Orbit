import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "orbityaps",
  description: "Portfolio of orbit - Malware Developer, Red Teamer, and Software Engineer specializing in cybersecurity.",
  keywords: ["orbit", "cybersecurity", "red teaming", "malware development", "software engineer", "security", "hacking", "rust", "powershell"],
  authors: [{ name: "orbit", url: "https://x.com/orbityaps" }],
  creator: "orbit",
  publisher: "orbit",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orbit.site",
    title: "orbityaps",
    description: "Portfolio of orbit - Malware Developer, Red Teamer, and Software Engineer specializing in cybersecurity.",
    siteName: "orbit Portfolio",
    images: [
      {
        url: "https://ext.same-assets.com/1319243742/1259024389.jpeg",
        width: 1200,
        height: 630,
        alt: "orbit Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "orbityaps",
    description: "Portfolio of orbit - Malware Developer, Red Teamer, and Software Engineer specializing in cybersecurity.",
    creator: "@orbityaps",
    images: ["https://ext.same-assets.com/1319243742/1259024389.jpeg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
          <head>
            <link rel="icon" href="/favicon.png" sizes="any" />
          </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
