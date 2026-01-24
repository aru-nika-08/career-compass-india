import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  userRole?: "student" | "alumni" | "admin" | null;
}

export function Header({ userRole }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg hidden sm:inline-block">CareerPath</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {!userRole && (
            <>
              <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </Link>
            </>
          )}
        </nav>

        {/* Auth buttons or Dashboard link */}
        <div className="hidden md:flex items-center gap-3">
          {userRole ? (
            <Button asChild>
              <Link to={`/${userRole}/dashboard`}>Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Get Started</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t bg-card overflow-hidden transition-all duration-200",
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="container py-4 space-y-3">
          {!userRole && (
            <>
              <Link
                to="/about"
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                to="/how-it-works"
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                How It Works
              </Link>
            </>
          )}
          <div className="pt-3 border-t space-y-2">
            {userRole ? (
              <Button asChild className="w-full">
                <Link to={`/${userRole}/dashboard`}>Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link to="/register">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
