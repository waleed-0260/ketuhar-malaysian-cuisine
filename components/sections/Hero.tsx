"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PLACEHOLDER =
  "https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.webp?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8=";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Background image */}
      <Image
        src={PLACEHOLDER}
        alt="Ketuhar Malaysian Cuisine — considered flavour, rooted in wellness"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ketuhar-charcoal/85 via-ketuhar-charcoal/30 to-ketuhar-charcoal/10" />
      <div className="absolute inset-0 bg-ketuhar-charcoal/20" />

      {/* Content — anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 md:pb-28 lg:pb-32">
          <div className="max-w-2xl">
            {/* Pre-label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="text-[0.65rem] tracking-[0.28em] uppercase text-white/55 font-body mb-5"
            >
              Fine Dining · ZÉLL-V Wellness Hub, Kuala Lumpur
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.3, ease }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-6"
            >
              The oven is the
              <br />
              <em className="font-medium not-italic" style={{ color: "#C8906F" }}>
                heart of the home.
              </em>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.5, ease }}
              className="text-base md:text-lg text-white/65 font-body leading-relaxed mb-9 max-w-lg"
            >
              Authentic Malay, Chinese and Indian fine dining, built on
              locally-sourced herbal leaves and traditional spices. By the team
              behind award-winning Enak KL.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link href="/reservations">
                <Button
                  size="lg"
                  className="bg-ketuhar-clay text-white hover:bg-ketuhar-clay/85 font-body tracking-[0.15em] text-[0.7rem] uppercase px-8 h-12 rounded-sm"
                >
                  Reserve a Table
                </Button>
              </Link>
              <Link href="/menu">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border border-white/35 hover:bg-white/10 hover:text-white hover:border-white/50 font-body tracking-[0.15em] text-[0.7rem] uppercase px-8 h-12 rounded-sm"
                >
                  View Menu
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[0.55rem] tracking-[0.22em] uppercase text-white/35 font-body rotate-90 origin-center">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
