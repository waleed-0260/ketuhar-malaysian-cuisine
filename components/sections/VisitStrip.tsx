"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, Globe, Share2 } from "lucide-react";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { Button } from "@/components/ui/button";
import { SimpleDivider } from "@/components/shared/SimpleDivider";

export function VisitStrip() {
  return (
    <section className="bg-ketuhar-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <FadeReveal>
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-ketuhar-clay font-body text-center mb-10">
            Visit Us
          </p>
        </FadeReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 text-center md:text-left">
          {/* Address */}
          <FadeReveal delay={0.05}>
            <div className="flex flex-col items-center md:items-start gap-3">
              <MapPin className="h-4 w-4 text-ketuhar-clay" strokeWidth={1.5} />
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground font-body mb-2">
                  Location
                </p>
                <address className="not-italic text-sm text-ketuhar-charcoal font-body leading-relaxed">
                  Menara Ruyi, off Jalan Syed Putra
                  <br />
                  Kuala Lumpur
                  <br />
                  <span className="text-muted-foreground text-xs">
                    Inside ZÉLL-V Wellness Hub
                  </span>
                </address>
              </div>
            </div>
          </FadeReveal>

          {/* Hours */}
          <FadeReveal delay={0.1}>
            <div className="flex flex-col items-center md:items-start gap-3">
              <Clock className="h-4 w-4 text-ketuhar-clay" strokeWidth={1.5} />
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground font-body mb-2">
                  Hours
                </p>
                <p className="text-sm text-ketuhar-charcoal font-body">
                  Daily
                </p>
                <p className="text-sm text-ketuhar-charcoal font-body">
                  12:00 – 22:00
                </p>
                <p className="text-xs text-muted-foreground font-body mt-1">
                  Last seating 21:30
                </p>
              </div>
            </div>
          </FadeReveal>

          {/* Contact */}
          <FadeReveal delay={0.15}>
            <div className="flex flex-col items-center md:items-start gap-3">
              <Phone className="h-4 w-4 text-ketuhar-clay" strokeWidth={1.5} />
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground font-body mb-2">
                  Contact
                </p>
                <a
                  href="tel:+60321234567"
                  className="text-sm text-ketuhar-charcoal font-body hover:text-ketuhar-clay transition-colors"
                >
                  +60 3-2123 4567
                </a>
                <br />
                <a
                  href="mailto:hello@ketuhar.com.my"
                  className="text-sm text-ketuhar-charcoal font-body hover:text-ketuhar-clay transition-colors"
                >
                  hello@ketuhar.com.my
                </a>
                <div className="flex gap-3 mt-3 justify-center md:justify-start">
                  <a
                    href="#"
                    aria-label="Ketuhar on Instagram"
                    className="text-muted-foreground hover:text-ketuhar-clay transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Ketuhar social media"
                    className="text-muted-foreground hover:text-ketuhar-clay transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </FadeReveal>
        </div>

        {/* Map placeholder */}
        <FadeReveal delay={0.2}>
          <div className="mt-14 w-full h-56 md:h-72 bg-ketuhar-sage/15 border border-ketuhar-charcoal/8 rounded-sm flex flex-col items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-ketuhar-clay/50" strokeWidth={1.5} />
            <p className="text-xs text-muted-foreground font-body tracking-wide">
              Menara Ruyi, off Jalan Syed Putra, Kuala Lumpur
            </p>
            <p className="text-[0.6rem] text-muted-foreground/60 font-body">
              Map embed — replace with Google Maps iframe
            </p>
          </div>
        </FadeReveal>

        <SimpleDivider className="mt-14 mb-10" />

        {/* CTA */}
        <FadeReveal>
          <div className="text-center">
            <Link href="/reservations">
              <Button className="bg-ketuhar-clay text-white hover:bg-ketuhar-clay/85 font-body tracking-[0.15em] text-[0.7rem] uppercase px-8 h-11 rounded-sm">
                Reserve a Table
              </Button>
            </Link>
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}
