"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const PLACEHOLDER =
  "https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.webp?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8=";

const ease = [0.16, 1, 0.3, 1] as const;

const galleryItems = [
  { alt: "Signature herb-roasted kampung chicken", caption: "Ayam Kampung Panggang" },
  { alt: "Rooftop dining terrace at dusk", caption: "The Rooftop" },
  { alt: "Steamed sea bass with ginger and spring onion", caption: "Ikan Kukus Halia" },
  { alt: "Indoor dining room at Ketuhar", caption: "Indoor Setting" },
  { alt: "Slow-braised lamb korma", caption: "Kambing Korma Lambat" },
  { alt: "Fresh herbs and spices from local farms", caption: "Local Ingredients" },
  { alt: "Cendol dessert with gula melaka", caption: "Cendol Sutera" },
  { alt: "Ketuhar kitchen team at work", caption: "The Kitchen" },
  { alt: "Rendang daging wagyu", caption: "Rendang Daging Wagyu" },
  { alt: "Wellness herb beverages", caption: "Jus Ulam Hijau" },
  { alt: "Table setting at Ketuhar", caption: "The Table" },
  { alt: "Herbal broth sup ulam", caption: "Sup Ulam" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const openLightbox = (i: number) => setSelected(i);
  const closeLightbox = () => setSelected(null);
  const prev = () =>
    setSelected((s) => (s !== null ? (s - 1 + galleryItems.length) % galleryItems.length : null));
  const next = () =>
    setSelected((s) => (s !== null ? (s + 1) % galleryItems.length : null));

  return (
    <div className="min-h-screen bg-ketuhar-cream">
      {/* Header */}
      <div className="pt-32 pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeReveal>
          <SectionHeading
            label="Gallery"
            heading="A glimpse inside"
            subheading="Placeholder images throughout. The client team will replace these with professional food and interior photography."
          />
        </FadeReveal>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryItems.map((item, i) => (
            <FadeReveal key={i} delay={(i % 4) * 0.06}>
              <motion.button
                whileHover={{ opacity: 0.88 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(i)}
                className="relative w-full aspect-square overflow-hidden rounded-sm focus:outline-none focus:ring-2 focus:ring-ketuhar-clay focus:ring-offset-2"
                aria-label={`View ${item.caption}`}
              >
                <Image
                  src={PLACEHOLDER}
                  alt={item.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-ketuhar-charcoal/0 hover:bg-ketuhar-charcoal/20 transition-colors duration-300 flex items-end p-3 opacity-0 hover:opacity-100">
                  <p className="text-[0.6rem] tracking-[0.15em] uppercase text-white font-body">
                    {item.caption}
                  </p>
                </div>
              </motion.button>
            </FadeReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-ketuhar-charcoal/94 flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-2"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease }}
              className="relative w-full max-w-3xl aspect-video rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PLACEHOLDER}
                alt={galleryItems[selected].alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 75vw"
                priority
              />
            </motion.div>

            {/* Caption + navigation */}
            <div
              className="mt-5 flex items-center gap-8 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prev}
                className="text-white/50 hover:text-white transition-colors font-body text-sm tracking-wide"
                aria-label="Previous image"
              >
                ← Prev
              </button>
              <div className="text-center">
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/50 font-body">
                  {galleryItems[selected].caption}
                </p>
                <p className="text-[0.58rem] text-white/25 font-body mt-0.5">
                  {selected + 1} / {galleryItems.length}
                </p>
              </div>
              <button
                onClick={next}
                className="text-white/50 hover:text-white transition-colors font-body text-sm tracking-wide"
                aria-label="Next image"
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
