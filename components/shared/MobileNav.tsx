"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SimpleDivider } from "./SimpleDivider";
import { useUIStore } from "@/lib/store";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const { mobileNavOpen, setMobileNavOpen } = useUIStore();

  const close = () => setMobileNavOpen(false);

  return (
    <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
      <SheetContent
        side="right"
        className="w-[300px] bg-ketuhar-cream flex flex-col pt-16 border-l border-ketuhar-charcoal/8"
        showCloseButton
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col px-6">
          {navLinks.map((link, i) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="block py-4 font-display text-2xl font-light text-ketuhar-charcoal hover:text-ketuhar-clay transition-colors duration-200"
              >
                {link.label}
              </Link>
              {i < navLinks.length - 1 && (
                <SimpleDivider variant="default" />
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 px-6">
          <Link href="/reservations" onClick={close}>
            <Button className="w-full bg-ketuhar-clay text-white hover:bg-ketuhar-clay/85 font-body tracking-[0.18em] text-xs uppercase rounded-sm h-11">
              Reserve a Table
            </Button>
          </Link>
        </div>

        <div className="mt-auto px-6 pb-8 space-y-1">
          <p className="text-xs text-muted-foreground font-body">
            Daily · 12:00 – 22:00
          </p>
          <p className="text-xs text-muted-foreground font-body">
            Menara Ruyi, off Jalan Syed Putra, KL
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
