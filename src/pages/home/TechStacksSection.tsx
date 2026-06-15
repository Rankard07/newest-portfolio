import { motion } from "motion/react";

import { TECH_STACK_DATA } from "@/config/HomeConfig";

export default function TechstackSection() {
  return (
    <section className="py-6 space-y-8">
      <div className="text-center space-y-2">
        {/* <h2 className="text-3xl font-bold font-heading">Tech Stack</h2> */}
        <p className="text-muted-foreground max-w-md mx-auto">
          A preview of my primary stack and expertise level for projects.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
        {TECH_STACK_DATA.map((tech) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={tech.name}
            className="px-6 py-4 rounded-lg bg-card border border-border/50 shadow-sm flex flex-col items-center justify-center min-w-36 text-center gap-1 hover:border-primary/30 transition-all duration-300"
          >
            <span className="font-bold text-sm text-foreground">{tech.name}</span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-primary font-semibold">
              {tech.level}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
