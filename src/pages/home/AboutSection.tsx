
import { ABOUT_CONTENT, SOCIAL_ITEMS, type SocialLinkItem } from "@/config/HomeConfig";
import React from "react";

// ============================================
// START - ABOUT SECTION PROPS
// ============================================

//-----------------------------------------------
// START - INTERFACES
//-----------------------------------------------
// 1. Interface untuk item kartu teknologi yang melayang di sebelah kanan
interface TechCardItem {
  name: string;
  description: string;
  iconName?: React.ElementType; // Menyimpan referensi komponen ikon (Lucide, React Icons, atau Custom)
}


// 3. Interface utama untuk komponen About / Hero Section
export interface AboutSectionProps {
  title?: string;         // Contoh: "const = Developer ;"
  tagline?: string;       // Contoh: "// Full Stack Developer & UI/UX Designer"
  paragraph?: string;     // Deskripsi singkat bio profesional Anda
  className?: string;     // Untuk kustomisasi utilitas Tailwind dari luar komponen
  
  // Properti untuk tombol aksi utama (Primary Call to Action)
  primaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  
  // Properti untuk tombol aksi kedua (Secondary Call to Action)
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
  
  // Properti bertipe array yang mengambil struktur dari interface di atas
  techItem?: readonly TechCardItem[];
  socialItem?: readonly SocialLinkItem[];
}

//-----------------------------------------------
// END - INTERFACES
//-----------------------------------------------


// ============================================
// END - ABOUT SECTION PROPS
// ============================================

export default function AboutSection({
  className,
  title = ABOUT_CONTENT.title,
  tagline = ABOUT_CONTENT.tagline,
  paragraph = ABOUT_CONTENT.paragraph,
  techItem = ABOUT_CONTENT.techItem,
  socialItem = SOCIAL_ITEMS
}: AboutSectionProps) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{tagline}</p>
      <p>{paragraph}</p>
      {techItem?.map(({ name, description, iconName: Icon }) => (
        <div key={name}>
          {Icon && <Icon size={20} />}
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      ))}
      {socialItem?.map((item) => (
        <div key={item.platform}>
          <a href={item.url}>{item.platform}</a>
        </div>
      ))}
    </div>
  );
}
