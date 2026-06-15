// Motion
import { motion } from "motion/react";
// Shadcn
import { Button } from "@/components/ui/button";
// Icon
import { Terminal, Atom, Database, Cpu, Mail, ChevronsRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// Created - Configuration
import { ABOUT_CONTENT, SOCIAL_ITEMS, type SocialLinkItem } from "@/config/HomeConfig";

interface FloatingCardProps {
  title: string;
  subtext: string;
  icon: React.ReactNode;
  className: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const SOCIAL_ICON_MAP: Record<SocialLinkItem['platform'], React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
  instagram: FaInstagram,
  twitter: FaTwitter,
};

function FloatingCard({ title, subtext, icon, className, delay = 1.3, duration = 3.5, yOffset = 8 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0, scale: 0.4 }}
      animate={{ 
        y: [-yOffset, yOffset, -yOffset],
        opacity: 1,
        scale: 1
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: duration,
          ease: "easeInOut",
          delay: delay,
        },
        opacity: { duration: 1, delay: delay * 0.2 },
        scale: { duration: 1, delay: delay * 0.2 }
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className={`absolute p-3 rounded-xl bg-background/80 dark:bg-card/90 backdrop-blur-lg border border-border/60 shadow-lg flex items-center gap-3 z-20 hover:border-primary/40 transition-colors pointer-events-auto select-none ${className}`}
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
        {icon}
      </div>
      <div className="flex flex-col min-w-[110px]">
        <span className="font-bold text-xs text-foreground leading-tight">{title}</span>
        <span className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{subtext}</span>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-4 py-12 md:py-20 gap-12 min-h-[60vh] bg-purple-600">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -z-10" />

      {/* Left Section */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex-1 space-y-6 bg-blue-400"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
          <Terminal size={14} />
          <span>Ready to build amazing things</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight">
          Hi, I am{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
            Zahran
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-lg font-mono">
          {ABOUT_CONTENT.tagline}
        </p>
        
        <p className="text-base text-muted-foreground/80 max-w-xl">
          {ABOUT_CONTENT.paragraph}
        </p>

        {/* Get In Touch Button */}
        <div className="flex flex-wrap gap-4 pt-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              className="relative overflow-hidden rounded-full px-8 py-6 bg-linear-to-r from-primary to-emerald-600 hover:from-primary/95 hover:to-emerald-600/95 text-white font-bold shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-4">
                {ABOUT_CONTENT.primaryButtonText}
              </span>
              
              {/* Speed Up Arrow Animation */}
              <div 
                className="absolute inset-y-0 -left-12 w-full flex items-center justify-end pr-4 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-500 ease-out pointer-events-none"
              >
                <ChevronsRight className="h-full w-auto text-white/30" strokeWidth={3} />
              </div>
            </Button>
          </motion.div>
          <Button 
            variant="outline" 
            className="rounded-full px-6 py-5 border-border/80 hover:bg-muted/40 transition-colors gap-2"
          >
            {ABOUT_CONTENT.secondaryButtonText}
          </Button>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-5 pt-2">
          {SOCIAL_ITEMS.map((item) => {
            const Icon = SOCIAL_ICON_MAP[item.platform as SocialLinkItem['platform']];
            return (
              <motion.a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -10,
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)", // Efek bersinar emerald
                  borderColor: "rgba(16, 185, 129, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 bg-muted p-4 border-2 border-transparent rounded-lg cursor-pointer"
                title={item.platform}
              >
                {Icon && <Icon size={25} />}
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Right Section - Terminal and Floating Cards */}
      <div className="flex-1 w-full max-w-md relative py-6 bg-red-400">
        {/* Floating Card 1: Frontend (JavaScript) */}
        <FloatingCard
          title="JavaScript"
          subtext="React, TypeScript"
          icon={
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              <Atom size={16} />
            </motion.div>
          }
          className="-top-4 -left-4 md:-left-8"
          delay={0.2}
          duration={3.6}
        />

        {/* Floating Card 2: CSS */}
        <FloatingCard
          title="CSS"
          subtext="Tailwind, Shadcn, DaisyUI"
          icon={<Database size={16} />}
          className="-bottom-4 -right-2 md:-right-6"
          delay={1.2}
          duration={4.2}
        />

        {/* Floating Card 3: Backend */}
        <FloatingCard
          title="Laravel"
          subtext="PHP, MySQL, Inertia"
          icon={<Cpu size={16} />}
          className="-top-6 -right-4 md:-right-8"
          delay={0.7}
          duration={3}
        />

        {/* Floating Coding Terminal */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6 relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-muted-foreground/75">developer.ts</span>
          </div>
          <pre className="font-mono text-sm leading-relaxed text-foreground/90 overflow-x-auto">
            <code>
              <span className="text-pink-500">const</span> developer = &#123;<br />
              &nbsp;&nbsp;name: <span className="text-emerald-400">"Zahran"</span>,<br />
              &nbsp;&nbsp;role: <span className="text-emerald-400">"Full Stack Developer"</span>,<br />
              &nbsp;&nbsp;skills: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"TypeScript"</span>, <span className="text-amber-300">"Tailwind"</span>],<br />
              &nbsp;&nbsp;passionate: <span className="text-sky-400">true</span>,<br />
              &nbsp;&nbsp;code: () =&gt; <span className="text-purple-400">"creates_value"</span><br />
              &#125;;
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
