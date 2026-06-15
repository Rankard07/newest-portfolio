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
  paragraph: "",
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

// 4. Data Core Skills (Dipindahkan dari SkillsSection & dikelompokkan ulang dengan rapi)
export const SKILLS_DATA = [
  {
    category: "Frontend Development",
    skills: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Shadcn/ui", "DaisyUI", "Framer Motion", "HTML5 & CSS3"],
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    category: "Backend & Systems",
    skills: ["PHP", "Laravel", "Inertia.js", "MySQL (Basic CRUD & Queries)"],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    category: "Tools, Design & Creative",
    skills: ["Git & GitHub", "Postman (API)", "Figma & Framer (UI/UX)", "Blender (3D)", "Anime.js", "AI-Assisted Tools"],
    gradient: "from-purple-500 to-pink-500"
  }
] as const;

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