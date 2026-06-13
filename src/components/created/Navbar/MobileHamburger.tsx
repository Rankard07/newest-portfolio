import { useState } from "react";
import { Menu, X, Mail, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { FaLinkedinIn } from "react-icons/fa";
// import { type PageConfig } from "./navbar-page.config";
import { ConicBorderWrapper } from "./ConicBorderWrapper";
import { GlowingAnimatedBG } from "./GlowingAnimatedBG";
import {
  DEFAULT_CONTACT_ITEMS,
  type ContactItem,
} from "./navbar-page.config";

// Mapping ID Halaman ke Icon yang sesuai untuk efek floating di Navbar


// Icon mapping by label (easy to extend)
const CONTACT_ICON_MAP: Record<string, React.ReactNode> = {
  Email: <Mail size={18} />,
  LinkedIn: <FaLinkedinIn size={18} />,
  GitHub: <ExternalLink size={18} />,
};

interface MobileHamburgerProps {
  contactItems?: ContactItem[];
}

export function MobileHamburger({
  contactItems = DEFAULT_CONTACT_ITEMS,
}: MobileHamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative flex items-center justify-center p-0"
            onClick={() => setIsOpen(true)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative h-6 w-6">
                <Menu
                  className={`absolute inset-0 size-6 transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 size-6 transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"
                  }`}
                />
              </div>
            </div>
          </Button>
        }
      />

      <SheetContent side="top" className="w-full max-w-md mx-auto rounded-b-3xl border-t-0">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col items-center gap-2 mt-6 w-full">
          <GlowingAnimatedBG>
            <ConicBorderWrapper
              colors={["#10b981", "#14b8a6", "#06b6d4"]}
              darkColors={["#10b981", "#14b8a6", "#06b6d4"]}
            >
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
                    w-fit mx-auto
                    "
                onClick={() => {
                  window.open("/Resume-CV.Haltev.pdf", "_blank");
                }}
              >
                <FileText size={18} />
                Download CV
              </Button>
            </ConicBorderWrapper>
          </GlowingAnimatedBG>
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-xl hover:bg-accent transition-colors w-full justify-center"
            >
              {CONTACT_ICON_MAP[item.label] ?? <ExternalLink size={18} />}
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
