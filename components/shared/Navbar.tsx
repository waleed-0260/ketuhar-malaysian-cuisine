"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { useUIStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { setMobileNavOpen, setCartOpen, cartOpen } = useUIStore();
  console.log("cart is opening or not", cartOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-ketuhar-cream/96 backdrop-blur-sm shadow-sm border-b border-ketuhar-charcoal/8"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Wordmark */}
            <Link href="/" className="flex flex-col items-start group">
              <span
                className={cn(
                  "font-display text-lg tracking-[0.18em] uppercase font-medium transition-colors duration-400",
                  scrolled ? "text-ketuhar-charcoal" : "text-black"
                )}
              >
                Ketuhar
              </span>
              <span
                className={cn(
                  "text-[0.52rem] tracking-[0.28em] uppercase font-body transition-colors duration-400",
                  scrolled ? "text-ketuhar-clay" : "text-black"
                )}
              >
                Malaysian Cuisine
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[0.8rem] tracking-wide font-body transition-opacity duration-200 hover:opacity-55",
                    scrolled ? "text-ketuhar-charcoal" : "text-black"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button  onClick={() => setCartOpen(true)}>
                <ShoppingCart/>
              </button>
              <Link href="/reservations" className="hidden lg:block">
                <Button
                  size="sm"
                  className={cn(
                    "font-body tracking-[0.15em] text-[0.7rem] uppercase rounded-sm h-9 px-5 transition-all duration-300",
                    scrolled
                      ? "bg-ketuhar-clay text-white hover:bg-ketuhar-clay/85"
                      : "bg-white/12 text-white border border-white/35 hover:bg-white/20 backdrop-blur-sm"
                  )}
                >
                  Reserve a Table
                </Button>
              </Link>

              {/* Mobile hamburger */}
              <button
                className={cn(
                  "lg:hidden p-2 rounded-sm transition-colors duration-200",
                  scrolled ? "text-ketuhar-charcoal" : "text-white"
                )}
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open navigation menu"
              >
                <MenuIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav />
    </>
  );
}
