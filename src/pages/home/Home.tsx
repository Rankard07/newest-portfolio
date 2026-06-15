import { motion } from "motion/react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import TechstackSection from "./TechStacksSection";
import SectionDivider from "./SectionDivider";

export default function Home() {
  return (
    <motion.main 
      initial={{
        opacity: 0
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12 space-y-2 max-w-6xl overflow-x-visible bg-amber-700"
    >
      <HeroSection />
      <SectionDivider label="About Me" />
      <AboutSection />
      <SectionDivider label="Skills" />
      <SkillsSection />
      <SectionDivider label="Tech Stack" />
      <TechstackSection />
    </motion.main>
  );
}
