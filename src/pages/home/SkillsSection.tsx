import { motion } from "motion/react";
import { SKILLS_DATA } from "@/config/HomeConfig";

export default function SkillsSection() {
  return (
    <section className="py-6 space-y-8">
      <div className="text-center space-y-2">
        {/* <h2 className="text-3xl font-bold font-heading">Core Skills</h2> */}
        <p className="text-muted-foreground max-w-md mx-auto">
          Here are some of the technologies and practices I specialize in to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS_DATA.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl bg-card border border-border/50 space-y-4 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top decorative gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${group.gradient}`} />
            
            <h3 className="font-bold text-lg text-foreground font-heading">{group.category}</h3>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {group.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-3 py-1.5 rounded-full bg-secondary/60 hover:bg-secondary border border-border/60 hover:border-primary/20 text-xs text-foreground/80 hover:text-foreground transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
