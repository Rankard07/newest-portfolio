import { motion } from "motion/react";
import { SKILLS_DATA, type SkillCategory, type SkillItem } from "@/config/HomeConfig";

// ============================================
// SKILLS SECTION - 3-Column Vertical Capsule Timeline
// ============================================

// ─── Vertical Skill Timeline Column ───
function VerticalSkillTimeline({
  group,
  columnIndex,
}: {
  group: SkillCategory;
  columnIndex: number;
}) {
  // Sort skills by percentage descending so highest is at the top of the capsule
  const sortedSkills = [...group.skills].sort((a, b) => b.percentage - a.percentage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: columnIndex * 0.15, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: columnIndex * 0.15 + 0.1, duration: 0.4 }}
        className="text-center mb-8 space-y-2"
      >
        <div
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${group.gradient} text-white shadow-md`}
        >
          {group.category}
        </div>
      </motion.div>

      {/* Vertical Capsule/Pipe Container */}
      <div className="relative w-full" style={{ height: `${sortedSkills.length * 56 + 40}px` }}>
        {/* The vertical pipe/capsule in the center */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-border/80 via-border/40 to-border/80">
          {/* Top capsule cap */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-card border-2 border-border" />
          {/* Bottom capsule cap */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-card border-2 border-border" />

          {/* Animated fill level based on average percentage */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: columnIndex * 0.2 + 0.3, duration: 1.2, ease: "easeOut" }}
            className={`absolute bottom-0 left-0 right-0 rounded-full bg-gradient-to-t ${group.gradient} opacity-60`}
            style={{
              originY: 1,
              height: `${Math.round(
                sortedSkills.reduce((sum, s) => sum + s.percentage, 0) / sortedSkills.length
              )}%`,
            }}
          />
        </div>

        {/* Skill Items — zig-zag positioned */}
        {sortedSkills.map((skill, idx) => (
          <SkillTimelineItem
            key={skill.name}
            skill={skill}
            index={idx}
            columnDelay={columnIndex * 0.15}
            accentColor={group.accentColor}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Individual Skill Item on Timeline ───
function SkillTimelineItem({
  skill,
  index,
  columnDelay,
  accentColor,
}: {
  skill: SkillItem;
  index: number;
  columnDelay: number;
  accentColor: string;
}) {
  const isEven = index % 2 === 0;
  // Even index: name LEFT, percentage RIGHT
  // Odd index: percentage LEFT, name RIGHT

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isEven ? -20 : 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        delay: columnDelay + index * 0.07 + 0.3,
        duration: 0.4,
        ease: "easeOut",
      }}
      className="absolute left-0 right-0 flex items-center"
      style={{ top: `${index * 56 + 20}px` }}
    >
      {/* Left side */}
      <div className={`flex-1 flex ${isEven ? "justify-end pr-5" : "justify-end pr-5"}`}>
        {isEven ? (
          <span className="text-sm font-semibold text-foreground/90 truncate max-w-[120px] text-right">
            {skill.name}
          </span>
        ) : (
          <span
            className="font-mono text-sm font-bold tabular-nums"
            style={{ color: accentColor }}
          >
            {skill.percentage}%
          </span>
        )}
      </div>

      {/* Center dot on the pipe */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: columnDelay + index * 0.07 + 0.4,
          duration: 0.3,
          type: "spring",
          stiffness: 300,
        }}
        className="relative z-10 shrink-0"
      >
        {/* Horizontal connecting line */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-4 h-px bg-border/60" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-4 h-px bg-border/60" />

        {/* The dot */}
        <div
          className="w-3 h-3 rounded-full border-2 bg-card shadow-sm transition-colors duration-200"
          style={{ borderColor: accentColor }}
        />
      </motion.div>

      {/* Right side */}
      <div className={`flex-1 flex ${isEven ? "justify-start pl-5" : "justify-start pl-5"}`}>
        {isEven ? (
          <span
            className="font-mono text-sm font-bold tabular-nums"
            style={{ color: accentColor }}
          >
            {skill.percentage}%
          </span>
        ) : (
          <span className="text-sm font-semibold text-foreground/90 truncate max-w-[120px]">
            {skill.name}
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main Skills Section ───
export default function SkillsSection() {
  return (
    <section className="py-10 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {SKILLS_DATA.map((group, idx) => (
          <VerticalSkillTimeline key={group.category} group={group} columnIndex={idx} />
        ))}
      </div>

      {/* Bottom legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex items-center justify-center gap-6 pt-4"
      >
        {/* Expert */}
<div className="flex items-center gap-2">
  <div className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
  <span className="text-xs text-muted-foreground font-mono">Expert (81-100%)</span>
</div>

{/* Advanced */}
<div className="flex items-center gap-2">
  <div className="w-2 h-2 rounded-full bg-indigo-500" />
  <span className="text-xs text-muted-foreground font-mono">Advanced (61-80%)</span>
</div>

{/* Intermediate */}
<div className="flex items-center gap-2">
  <div className="w-2 h-2 rounded-full bg-emerald-500" />
  <span className="text-xs text-muted-foreground font-mono">Intermediate (41-60%)</span>
</div>

{/* Beginner */}
<div className="flex items-center gap-2">
  <div className="w-2 h-2 rounded-full bg-sky-500" />
  <span className="text-xs text-muted-foreground font-mono">Beginner (21-40%)</span>
</div>

{/* Just Started */}
<div className="flex items-center gap-2">
  <div className="w-2 h-2 rounded-full bg-slate-400" />
  <span className="text-xs text-muted-foreground font-mono">Just Started (0-20%)</span>
</div>
        
      </motion.div>
    </section>
  );
}
