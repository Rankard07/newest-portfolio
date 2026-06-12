// import { Link } from "react-router"
import { ChevronDown, Code2, FolderGit2, Home, Mail, Sparkles, FileText } from "lucide-react"

import { AnimatePresence, motion } from "motion/react";

import { PAGES } from "./navbar-page.config"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

import { MobileHamburger } from "./MobileHamburger";
import { AnimatedThemeToggler } from "../animated-theme-toggler";
import { GlowingAnimatedBG } from "./GlowingAnimatedBG";
import { ConicBorderWrapper } from "./ConicBorderWrapper";

// ============================================
// START - INTERFACES
// NAVBAR CONFIGURATION
// ============================================

interface NavbarLogo {
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

interface NavbarProps {
  logo?: NavbarLogo;
  activePage?: string;
  onPageChange?: (page: string) => void;
  className?: string;
}

// ============================================
// END - INTERFACES
// ============================================

//-----------------------------------------------
// START - CONSTANT
// Logo + Icon + Title
//-----------------------------------------------
const DEFAULT_LOGO: NavbarLogo = {
  title: "Zahran",
  icon: <Code2 className="text-primary" size={24} />,
  className: "text-primary",
};

const PAGES_ICONS: Record<string, React.ReactNode> = {
  home: <Home size={14} />,
  project: <FolderGit2 size={14} />,
  contact: <Mail size={14} />,
  other: <Sparkles size={14} />,
};

//-----------------------------------------------
// END - CONSTANT
//-----------------------------------------------

// ============================================
// START - SUB-COMPONENTS
// ============================================

// -----------------------------------------------
// CV Download Button
function CVDownload() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <GlowingAnimatedBG>
        <ConicBorderWrapper>
          <Button
            className="
          border-4 border-double border-muted
          bg-linear-to-r 
          from-emerald-600 via-teal-600 to-cyan-600 
          hover:from-emerald-900 hover:via-teal-900 hover:to-cyan-900 
          dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-900 
          dark:hover:from-emerald-700 dark:hover:via-teal-700 dark:hover:to-cyan-700
          text-white font-semibold text-sm
          px-5 py-2.5 rounded-full gap-2  
          transition-all duration-300
          "
            onClick={() => {
              window.open(
                "/Resume-CV.Haltev.pdf",
                "_blank",
              );
            }}
          >
            <FileText size={18} />
            Download CV
          </Button>
        </ConicBorderWrapper>
      </GlowingAnimatedBG>
    </motion.div>
  );
}

// -----------------------------------------------
// Mobile Page Dropdown (Centered)
function MobilePageDropdown({
    activePage,
    onPageChange,
}: {
    activePage?: string;
    onPageChange?: (page: string) => void;
}) {
    const [open, setOpen] = useState(false);
    const activeLabel = PAGES.find((page) => page.key === activePage)?.label ?? "Menu";

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full bg-muted/50 backdrop-blur-md border border-border/50 hover:bg-muted transition-colors">
                {activeLabel}
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-200",
                    open && "rotate-180",
                  )}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent
            align="center"
                className="min-w-35"
            >
                {PAGES.filter(page => page.key !== "contact").map((page) => (
                    <DropdownMenuItem
                        key={page.key}
                        onClick={() => {
                            onPageChange?.(page.key);
                            setOpen(false);
                        }}
                        className={cn(
                            "cursor-pointer",
                            activePage === page.key && "bg-accent",
                        )}
                    >
                        {page.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

// ============================================
// START - MAIN COMPONENTS
// ============================================
export default function Navbar({
    className,
    logo = DEFAULT_LOGO,
    activePage = "home",
    onPageChange,
}: NavbarProps) {
    const [showHint, setShowHint] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // -----------------------------------------------
    // Hint Logic - The logic for automatically displaying hints when the page first loads (for a few seconds)
    // -----------------------------------------------

    useEffect(() => {
    if (activePage !== "other") {
      // Muncul setelah 2 detik
      const showTimer = setTimeout(
        () => setShowHint(true),
        2000,
      );
      // Hilang setelah 5 detik (tampil selama 5 detik)
      const hideTimer = setTimeout(
        () => setShowHint(false),
        5000,
      );

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
    }, [activePage]);
    
    // -----------------------------------------------
    // END - Hint Logic
    // -----------------------------------------------

    return (
        // ============================================
        // START - NAVBAR
        // ============================================
        <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
        visualDuration: 0.4,
        bounce: 0.6,
      }}
      className={cn("sticky top-0 z-50 w-full bg-background/60 backdrop-blur-md border-b border-border/40", className)}
        >
            <div className="w-full px-2 sm:px-4 lg:px-8">
              <div className="flex items-center h-14 sm:h-16">
                
                {/* START - Logo Section - Left */}
                <div
                  className={cn(
                    "flex items-center gap-2 shrink-0 max-w-30",
                    logo.className,
                  )}
                >
                <span className="text-2xl text-primary">
                    &lt;
                  </span>
                  <span className="font-medium text-base sm:text-2xl text-foreground">
                    {logo.title}
                  </span>
                  <span className="text-2xl text-primary">
                    /&gt;
                  </span>
                </div>
                {/* END - Logo Section - Left */}

                {/* ////////////////////////// - DIVIDER - ////////////////////////// */}
                
                {/* START - Tab Section - Center Navigation - Desktop: Pill Toggle, Mobile: Dropdown */}
                {/* DESCRIPTION - Tab Section 
                Animation: Sliding Background Pill + [LIGHT EFFECTS (Only appears when active) + Core Light - Very Bright + Atmospheric Glow (Aura) – Broader + Floating icon below the active button + An icon element that floats within a tab] */}
                <div className="flex-1 flex justify-center items-center">
                  <div className="hidden md:flex items-center gap-0 bg-muted/40 backdrop-blur-md rounded-full p-1 border border-border/50 relative">
                  {/* Desktop: Pill Toggle */}
                    {PAGES.map((page) => (
                      <button
                        key={page.key}
                        onMouseEnter={() => {
                          if (page.key === "other")
                            setIsHovering(true);
                        }}
                        onMouseLeave={() => {
                          if (page.key === "other")
                            setIsHovering(false);
                        }}
                        onClick={() => onPageChange?.(page.key)}
                        className={cn(
                          "relative px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200",
                          activePage === page.key
                            ? "text-background"
                            : "text-foreground hover:text-foreground/80",
                        )}
                        >
                          {/* Sliding Background Pill */}
                          {activePage === page.key && (
                            <motion.div
                                layoutId="activePill"
                                className="absolute inset-0 bg-muted-foreground rounded-full"
                                transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                                bounce: 0,
                            }}
                            />
											)}
											
											{/* LIGHT EFFECTS (Only appears when active) */}
											{activePage === page.key && (
												<>
													{/* Core Light - Very Bright */}
													<motion.span
													layoutId="glowCore"
                              className="absolute animate-pulse top-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-foreground dark:bg-white rounded-full shadow-[0_0_8px_2px_rgba(0,0,0,0.5),0_0_15px_5px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_2px_rgba(255,255,255,0.9),0_0_15px_5px_rgba(255,255,255,0.4)] z-10"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                                bounce: 0,
                              }}
													/>

													{/* Atmospheric Glow (Aura) – Broader */}
													<motion.span
                              layoutId="glowAura"
                              className="absolute animate-pulse top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-foreground/30 dark:bg-white/40 blur-md rounded-full opacity-80"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
													/>
													
													{/* Floating icon below the active button */}
														<motion.div
                              layoutId="activeIconTab"
                              initial={{
                                opacity: 0,
                                y: -5,
                                x: "-50%",
                              }}
                              animate={{
                                opacity: 1,
                                y: 34,
                                x: "-50%",
                              }}
                              transition={{
                                default: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                                },
                              }}
                              className="navbar-active-icon bg-muted/40 text-background animate-pulse"
													>
														{/* An icon element that floats within a tab */}
														<motion.div
                                animate={{ y: [0, 4, 0] }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 2,
                                  ease: "easeInOut",
                                }}
                                className="flex items-center justify-center scale-150"
														>
															
														{PAGES_ICONS[page.key]}
														</motion.div>
														</motion.div>
												</>
											)}
											<span className="relative z-10">
                          {page.label}
                        </span>
                        
											{/* POP-UP Hint */}
                            <AnimatePresence>
                          {page.key === "other" &&
                            activePage !== "other" &&
                            (showHint ||
                              isHovering) && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  y: 10,
                                  scale: 0.8,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                  scale: 1,
                                }}
                                exit={{
                                  opacity: 0,
                                  y: 10,
                                  scale: 0.8,
                                }}
                                transition={{
                                  duration: 0.3,
                                }}
                                className="absolute top-full mt-5 left-1/2 -translate-x-1/2 px-3 py-2 bg-primary rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] border border-primary-foreground/20 whitespace-nowrap pointer-events-none z-50"
                              >
                                <div className="flex flex-col items-center">
                                  <span className="text-[9px] font-black text-primary-foreground/60 uppercase tracking-widest leading-none mb-1">
                                    New Spot!
                                  </span>
                                  <div className="flex items-center gap-1.5">
                                    <div className="bg-primary-foreground/20 p-1 rounded-md">
                                      <Sparkles
                                        size={12}
                                        className="text-primary-foreground animate-pulse"
                                      />
                                    </div>
                                    <span className="text-[11px] text-primary-foreground font-bold tracking-tight">
                                      Certificate is Here
                                    </span>
                                  </div>
                                </div>
                                {/* Tooltip Arrow (Panah ke atas sekarang) */}
                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-primary rotate-45" />
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </button>
                    ))}
    					</div>
    					
    					{/* Mobile Page Dropdown - Center */}
                  <div className="flex flex-1 justify-center items-center md:hidden">
                    <MobilePageDropdown
                      activePage={activePage}
                      onPageChange={onPageChange}
                    />
                  </div>
                </div>
                
                {/* END - Tab Section - Center Navigation - Desktop: Pill Toggle, Mobile: Dropdown */}

                {/* ////////////////////////// - DIVIDER - ////////////////////////// */}
                
                {/* START - Right Section - Desktop: CV Download + Theme Toggle */}
                <div className="hidden md:flex items-center gap-3">
                  <CVDownload />
                  <AnimatedThemeToggler />
                </div>
                {/* END - Right Section - Desktop: CV Download + Theme Toggle */}

                {/* Mobile Controls - Theme Toggle + Hamburger Only */}
                <div className="md:hidden flex items-center gap-1 shrink-0">
                  <AnimatedThemeToggler />
                  <MobileHamburger />
                </div>

              </div>
            </div>

        </motion.nav>
    )
}
