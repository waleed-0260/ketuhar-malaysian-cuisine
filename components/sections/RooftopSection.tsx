"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SimpleDivider } from "@/components/shared/SimpleDivider";

const PLACEHOLDER =
  "https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.webp?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8=";

const ease = [0.16, 1, 0.3, 1] as const;

export function RooftopSection() {
  return (
    <section className="bg-ketuhar-charcoal text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Text panel */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24 order-2 lg:order-1">
          <FadeReveal>
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-ketuhar-clay font-body mb-4">
              The Setting
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-6">
              Rooftop dining
              <br />
              under open sky
            </h2>
            <p className="text-sm md:text-base text-white/55 font-body leading-relaxed mb-6 max-w-md">
              Step onto the rooftop terrace for dining with a view over the Kuala
              Lumpur skyline. The open air, the ambient quiet of the Wellness Hub
              surroundings, and the considered service combine to make each visit
              feel like an occasion, effortlessly.
            </p>
            <SimpleDivider variant="light" className="mb-6 max-w-[4rem]" />
            <p className="text-sm text-white/40 font-body leading-relaxed max-w-sm">
              Set within ZÉLL-V Wellness Hub off Jalan Syed Putra, moments from
              Mid Valley Megamall and KL Sentral. A calm remove from the city's
              pace, yet entirely within reach.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { stat: "12–22:00", label: "Daily Hours" },
                { stat: "Malay / Chinese / Indian", label: "Cuisines" },
                { stat: "Indoor & Rooftop", label: "Seating" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-lg font-medium text-white leading-tight">
                    {item.stat}
                  </p>
                  <p className="text-[0.62rem] tracking-[0.15em] uppercase text-white/35 font-body mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeReveal>
        </div>

        {/* Image panel */}
        <div className="relative h-72 lg:h-auto min-h-[480px] order-1 lg:order-2">
          <motion.div
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease }}
            className="absolute inset-0"
          >
            <Image
              src={PLACEHOLDER}
              alt="Ketuhar rooftop dining terrace"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-ketuhar-charcoal/30 to-transparent lg:bg-none" />
        </div>
      </div>
    </section>
  );
}
