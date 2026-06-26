import { motion } from "motion/react";

interface SectionDividerProps {
  label: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  // Framer Motion variants for bracket sliding & text scaling
  const leftBracketVariants = {
    rest: { x: 0 },
    hover: { x: -16 } // Disesuaikan untuk ukuran bracket yang lebih besar
  };

  const rightBracketVariants = {
    rest: { x: 0 },
    hover: { x: 16 } // Disesuaikan untuk ukuran bracket yang lebih besar
  };

  const labelVariants = {
    rest: { scale: 1, letterSpacing: "0.05em" },
    hover: { scale: 1.05, letterSpacing: "0.3em" }
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex items-center justify-center w-full py-8 overflow-hidden select-none group cursor-default"
    >
      {/* Left Line: animates outwards from center to left */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ originX: 1 }}
        className="h-0.5 flex-1 bg-linear-to-r from-transparent via-primary/20 to-primary/50"
      />

      {/* Center Interactive Tag Container */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
        className="mx-10 px-8 py-4 rounded-full border border-border/50 bg-card/60 backdrop-blur-sm flex items-center justify-center gap-4 text-sm md:text-lg font-mono text-foreground/80 shadow-md hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-colors duration-300 relative overflow-hidden shrink-0"
      >
        {/* Glow backdrop on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-emerald-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Left Tag Bracket < */}
        <motion.span
          variants={leftBracketVariants}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
          className="text-primary/70 group-hover:text-primary transition-colors duration-300 font-bold text-2xl" // Menambahkan ukuran teks 2xl
        >
          &lt;&nbsp;
        </motion.span>

        {/* Tag Name / Section Title */}
        <motion.span
          variants={labelVariants}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
          className="relative z-10 font-extrabold uppercase tracking-wider bg-gradient-to-r from-foreground/90 via-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:via-emerald-400 group-hover:to-primary"
        >
          {label}
        </motion.span>

        {/* Right Tag Bracket /> */}
        <motion.span
          variants={rightBracketVariants}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
          className="text-primary/70 group-hover:text-primary transition-colors duration-300 font-bold text-2xl" // Menambahkan ukuran teks 2xl
        >
          &nbsp;/&gt;
        </motion.span>
      </motion.div>

      {/* Right Line: animates outwards from center to right */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ originX: 0 }}
        className="h-[2px] flex-1 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"
      />
    </motion.div>
  );
}
