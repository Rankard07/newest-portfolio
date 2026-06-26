/* import { Button } from "@/components/ui/button"

export function App() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}

export default App
 */

import {
  useState,
  // Suspense, lazy
} from "react";
import Navbar from "@/components/created/Navbar/Navbar"
import Footer from "@/components/created/Footer/Footer"
import Home from "@/pages/home/Home"

// Lazy-load Whirlpool so it doesn't bloat the main bundle.
// const Whirlpool = lazy(() => import("@/components/created/Whirlpool/Whirlpool"));

export default function App() {
  const [page, setPage] = useState("home");
  // const [showWhirlpool, setShowWhirlpool] = useState(true);

  const handlePageChange = (newPage: string) => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    setPage(newPage);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        {/* Whirlpool Intro - Lazy loaded and removed after animation */}
        {/* {showWhirlpool && (
          <Suspense fallback={<div className="fixed inset-0 z-50 bg-black" />}>
            <Whirlpool
              duration={3500}
              exitDelay={700}
              onComplete={() => setShowWhirlpool(false)}
            />
          </Suspense>
        )} */}

        {/* Navbar - Hidden on Other page */}
        {/* {page !== "other" && (
          <Navbar
            activePage={page}
            onPageChange={handlePageChange}
            className="w-full"
          />
        )} */}
        <Navbar
            activePage={page}
            onPageChange={handlePageChange}
            className="w-full"
          />
        
        {/* Page Content with Entry Animation */}
        <div className="flex-1 ">
          {page === "home" && <Home />}
          {page === "project" && (
            <div className="flex items-center justify-center min-h-[60vh] text-muted-foreground font-mono text-sm">
              {"// Project page content coming soon..."}
            </div>
          )}
          {page === "contact" && (
            <div className="flex items-center justify-center min-h-[60vh] text-muted-foreground font-mono text-sm">
              {"// Contact page content coming soon..."}
            </div>
          )}
          {page === "other" && (
            <div className="flex items-center justify-center min-h-[60vh] text-muted-foreground font-mono text-sm">
              {"// Other page content coming soon..."}
            </div>
          )}
        </div>
      </div>
      
      {/* Footer - Hidden on Other page */}
      {page !== "other" && <Footer />}
    </div>
  )
}