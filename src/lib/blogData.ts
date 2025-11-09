export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime?: string;
  slug: string;
  description: string;
  tags: string[];
  isExternal: boolean;
  isComingSoon?: boolean;
}

export const blogPosts: BlogPost[] = [
// {
//   id: "post-8347",
//   title: "Sample Tutorial Post — Part 1",
//   date: "Mar 14, 2024",
//   readTime: "7 mins read",
//   slug: "https://example.com/posts/post-8347",
//   description: "A short example post used for layout and testing purposes.",
//   tags: ["Tutorial", "Example", "Demo"],
//   isExternal: false
// },

  
  {
    id: "building-first-malware-cpp",
    title: "0x01 — Building Malware in C++: Memory Execution, Shellcode, and AV Evasion Basics",
    date: "May 18, 2025",
    readTime: "4 min read",
    slug: "/blog/building-first-malware-cpp",
    description: "Learn how to build your first malware in C++",
    tags: ["Malware", "C++", "Windows API", "Shellcode", "AV Evasion", "Reverse Engineering"],
    isExternal: false
  },
  {
    id: "APC-Injection",
    title: "APC Injection: The Cool (and Scary) Code Injection Method",
    date: "September 11, 2025",
    readTime: "4 min read",
    slug: "/blog/APC-Injection",
    description: "Learn about APC Injection, a cool (and scary) code injection method",
    tags: ["APC Injection", "Windows Internals", "Malware Development", "Thread Hijacking", "QueueUserAPC", "NtTestAlert"],
    isExternal: false
  }
  
  
];