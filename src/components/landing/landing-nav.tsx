import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import WScubeLogo from "../../assets/wscube-logo.svg?url"
export function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <img className="object-contain w-[8vw]"
              src={WScubeLogo} width={32} height={32} alt="WSCube" />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#howitwork" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            {/* <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a> */}
            <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
              Courses
            </a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <a href="/login">Log in</a>
            </Button>
            <Button asChild>
              <a href="/signup">Sign up</a>
            </Button>
          </div>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-6">
                <a
                  href="/features"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="/pricing"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="/courses"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Courses
                </a>
                <a
                  href="/about"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" asChild>
                    <a href="/login" onClick={() => setIsMenuOpen(false)}>
                      Log in
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="/signup" onClick={() => setIsMenuOpen(false)}>
                      Sign up
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

