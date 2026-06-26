import Link from "next/link";
import { Globe, Share2 } from "lucide-react";
import { SimpleDivider } from "./SimpleDivider";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ketuhar-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-display text-2xl tracking-[0.18em] uppercase text-white font-medium">
                Ketuhar
              </p>
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-ketuhar-clay mt-0.5 font-body">
                Malaysian Cuisine
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/55 max-w-xs font-body">
              The oven is the heart of the home. Health-forward Malay, Chinese
              and Indian fine dining at{" "}
              <span className="text-white/75">ZÉLL-V Wellness Hub</span>,
              Kuala Lumpur.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Ketuhar on Instagram"
                className="text-white/40 hover:text-ketuhar-clay transition-colors duration-200"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Ketuhar on social media"
                className="text-white/40 hover:text-ketuhar-clay transition-colors duration-200"
              >
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-[0.6rem] tracking-[0.22em] uppercase text-white/35 font-body mb-5">
              Navigate
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200 font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Visit column */}
          <div>
            <p className="text-[0.6rem] tracking-[0.22em] uppercase text-white/35 font-body mb-5">
              Visit Us
            </p>
            <address className="not-italic flex flex-col gap-2.5 text-sm text-white/55 font-body leading-relaxed">
              <span>
                Menara Ruyi, off Jalan Syed Putra
                <br />
                Kuala Lumpur
              </span>
              <span className="text-white/40 text-xs">
                Inside ZÉLL-V Wellness Hub
                <br />
                Near Mid Valley Megamall &amp; KL Sentral
              </span>
              <a
                href="tel:+60321234567"
                className="hover:text-white transition-colors"
              >
                +60 3-2123 4567
              </a>
              <span>Daily · 12:00 – 22:00</span>
            </address>
          </div>
        </div>

        <SimpleDivider variant="light" className="my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/28 font-body">
          <p>
            &copy; {new Date().getFullYear()} Ketuhar Malaysian Cuisine. All
            rights reserved.
          </p>
          <p>
            A dining destination within{" "}
            <a
              href="#"
              className="hover:text-white/55 transition-colors underline underline-offset-2"
            >
              ZÉLL-V Wellness Hub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
