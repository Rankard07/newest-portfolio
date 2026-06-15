// src/constants/aboutData.ts

import { Atom, FileCode2 } from "lucide-react";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export interface SocialLinkItem {
  platform: 'github' | 'linkedin' | 'email' | 'instagram' | 'twitter';
  url: string;
}

export const ABOUT_CONTENT = {
  title: "const = Developer ;",
  tagline: "// Full Stack Developer & UI/UX Designer",
  paragraph: "Passionate developer creating exceptional digital experiences with modern technologies.",
  primaryButtonText: "Get In Touch",
  secondaryButtonText: "View Projects",
  
  // Data kartu teknologi melayang (mengisi properti techItem)
  techItem: [
    { name: "React", description: "Redux, Router, Hooks", iconName: Atom },
    { name: "TypeScript", description: "Advanced Typing", iconName: SiTypescript },
    { name: "HTML", description: "Semantic, Accessibility", iconName: FileCode2 },
    { name: "Tailwind", description: "Modern Styling", iconName: SiTailwindcss }
  ],
 } as const; 
// "as const" memastikan data di atas bersifat read-only (tidak bisa diubah tidak sengaja saat runtime)

export const SOCIAL_ITEMS: readonly SocialLinkItem[] = [
  { platform: "github", url: "https://github.com/username" },
  { platform: "linkedin", url: "https://linkedin.com/in/username" },
  { platform: "email", url: "mailto:email@kamu.com" },
  { platform: "instagram", url: "https://instagram.com/username" },
] as const;