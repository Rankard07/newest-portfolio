// src/config/HomeConfig.tsx

import { Atom, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiLaravel } from "react-icons/si";

//-----------------------------------------------
// START - TYPES & INTERFACES
//-----------------------------------------------
export interface SocialLinkItem {
  platform: 'github' | 'linkedin' | 'email' | 'instagram' | 'twitter';
  url: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  category: string;
  gradient: string;
  accentColor: string;
  skills: SkillItem[];
}

//-----------------------------------------------
// END - TYPES & INTERFACES
//-----------------------------------------------

// 1. Peta Ikon Sosial Media (Dipindahkan dari HeroSection)
export const SOCIAL_ICON_MAP: Record<SocialLinkItem['platform'], React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
  instagram: FaInstagram,
  twitter: FaTwitter,
};

// 2. Konten Utama Terkait Biodata Singkat & Kartu Melayang
export const ABOUT_CONTENT = {
  title: "const = Developer ;",
  tagline: "// Full Stack Developer & UI/UX Designer",
  paragraph: "Full-Stack Web Development graduate specialising in Frontend Engineering and UI/UX Design. Skilled in building interfaces with React.js, TypeScript, Tailwind CSS, and integrating with Laravel backends via Inertia.js.\n\nI explore Figma for design, Framer for web experiments, and Blender for 3D basics. I'm committed to learning, adapting to new tech — including AI tools — and balancing functionality with strong visual design.",
  primaryButtonText: "Get In Touch",
  secondaryButtonText: "View Projects",
  
  // Kombinasi kartu teknologi melayang yang diperbarui agar lebih merepresentasikan stack utama Anda
  techItem: [
    { name: "React", description: "SPA, Hooks, Context", iconName: Atom },
    { name: "TypeScript", description: "Strict Typing, Safety", iconName: SiTypescript },
    { name: "Laravel", description: "Backend, MVC, Routing", iconName: SiLaravel },
    { name: "Tailwind CSS", description: "Modern Styling & Grid", iconName: SiTailwindcss }
  ],
} as const; 

// 3. Data Tautan Sosial Media
export const SOCIAL_ITEMS: readonly SocialLinkItem[] = [
  { platform: "github", url: "https://github.com/username" },
  { platform: "linkedin", url: "https://linkedin.com/in/username" },
  { platform: "email", url: "mailto:email@kamu.com" },
  { platform: "instagram", url: "https://instagram.com/username" },
  { platform: "twitter", url: "#"}
] as const;

// 4. Data Core Skills dengan Persentase
// Konversi tingkat keahlian:
// - Intermediate: 45% - 70% (distribusi berdasarkan kedalaman penggunaan)
// - Beginner: 15% - 30% (distribusi berdasarkan tingkat pemula)
export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend",
    gradient: "from-blue-500 to-indigo-500",
    accentColor: "#6366f1",
    skills: [
      { name: "React.js", percentage: 68 },
      { name: "TypeScript", percentage: 55 },
      { name: "JavaScript", percentage: 45 },
      { name: "Tailwind CSS", percentage: 75 },
      { name: "HTML/CSS", percentage: 90 },
      { name: "Shadcn/ui", percentage: 87 },
      { name: "DaisyUI", percentage: 90 },
      { name: "Framer Motion", percentage: 32 },
      { name: "Anime.js", percentage: 11 },
    ]
  },
  {
    category: "Backend",
    gradient: "from-emerald-500 to-teal-500",
    accentColor: "#10b981",
    skills: [
      { name: "PHP", percentage: 35 },
      { name: "Laravel", percentage: 34 },
      { name: "Inertia.js", percentage: 32 },
      { name: "MySQL", percentage: 22 },
    ]
  },
  {
    category: "Tools & Creative",
    gradient: "from-purple-500 to-pink-500",
    accentColor: "#a855f7",
    skills: [
      { name: "Git/GitHub", percentage: 43 },
      { name: "Postman", percentage: 27 },
      { name: "Figma", percentage: 6 },
      { name: "Framer", percentage: 6 },
      { name: "Blender 3D", percentage: 46 },
      { name: "Unity", percentage: 17 },
      { name: "CAD", percentage: 2 },
      { name: "AI Tools", percentage: 95 },
    ]
  }
];

// 5. Data Tech Stack dengan Persentase Tingkat Keahlian (Dipindahkan dari TechstackSection)
export const TECH_STACK_DATA = [
  { name: "React", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Laravel", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "PHP", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "MySQL", level: "Beginner" },
  { name: "Figma", level: "Beginner" },
  { name: "Blender", level: "Beginner" },
] as const;