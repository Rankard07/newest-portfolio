import { motion } from "motion/react";
import { Code2, Palette, Layers, Sparkles } from "lucide-react";

// ============================================
// ABOUT SECTION - Modern Split Layout with Framer Motion
// ============================================

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "React.js · TypeScript · Tailwind CSS",
  },
  {
    icon: Layers,
    title: "Full-Stack Integration",
    description: "Laravel · Inertia.js · MySQL",
  },
  {
    icon: Palette,
    title: "Design & Creative",
    description: "Figma · Framer · Blender 3D",
  },
  {
    icon: Sparkles,
    title: "Always Evolving",
    description: "AI Tools · New Frameworks · Adapting",
  },
];

// Stagger children animation container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative py-12 md:py-16"
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
        {/* ─── Left Column: Bio Text ─── */}
        <div className="lg:col-span-3 space-y-6">
          {/* Mono tag header */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-primary/60" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              About Me
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-extrabold font-heading leading-tight tracking-tight"
          >
            Building interfaces that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary">
              feel alive
            </span>
          </motion.h2>

          {/* Bio paragraph with styled first letter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed first-letter:text-2xl first-letter:font-bold first-letter:text-foreground first-letter:mr-0.5">
              Full-Stack Web Development graduate specialising in Frontend Engineering and UI/UX
              Design. Skilled in building interfaces with React.js, TypeScript, Tailwind CSS, and
              integrating with Laravel backends via Inertia.js.
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
              I explore Figma for design, Framer for web experiments, and Blender for 3D basics.
              I'm committed to learning, adapting to new tech&thinsp;—&thinsp;including AI
              tools&thinsp;—&thinsp;and balancing functionality with strong visual design.
            </p>
          </motion.div>

          {/* Decorative quote-style accent */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-2"
          >
            <div className="w-1 h-10 rounded-full bg-gradient-to-b from-primary to-emerald-500" />
            <p className="font-mono text-sm text-muted-foreground/70 italic">
              "Balancing code precision with visual craft."
            </p>
          </motion.div>
        </div>

        {/* ─── Right Column: Highlight Cards Grid ─── */}
        <motion.div
          variants={containerVariants}
          className="lg:col-span-2 grid grid-cols-2 gap-3"
        >
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className={`group relative p-4 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden ${
                  idx === 0 ? "col-span-2" : ""
                }`}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10 space-y-3">
                  <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
