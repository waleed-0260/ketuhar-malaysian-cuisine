"use client";

import { Leaf, Sparkles, Heart, Globe } from "lucide-react";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SimpleDivider } from "@/components/shared/SimpleDivider";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Leaf,
    title: "Locally Sourced",
    body: "Every herb, leaf, and root is chosen from trusted local farms and foragers, bringing the freshest flavours to the table.",
  },
  {
    icon: Sparkles,
    title: "Herb-Forward",
    body: "Traditional spices and herbal leaves are not garnish — they are the flavour foundation, chosen for their depth and their benefit.",
  },
  {
    icon: Heart,
    title: "Health-Conscious",
    body: "In alignment with ZÉLL-V's 'Inspiring Better Health' ethos, every dish is conceived with nourishment and vitality in mind.",
  },
  {
    icon: Globe,
    title: "Three Cuisines, One Standard",
    body: "Malay, Chinese, and Indian traditions are held to the same exacting standard of sourcing, technique, and presentation.",
  },
];

export function NourishSection() {
  return (
    <section className="bg-ketuhar-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Heading */}
        <FadeReveal>
          <SectionHeading
            label="Nourish, Naturally"
            heading="Food that honours the body"
            subheading="Our kitchen is guided by a simple conviction: that the finest ingredients, treated with care and restraint, are the most nourishing. Herbal leaves and traditional spices are not embellishments — they are the architecture of flavour."
          />
        </FadeReveal>

        <SimpleDivider variant="gold" className="mt-16 mb-14 max-w-xs mx-auto" />

        {/* Four pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <FadeReveal key={pillar.title} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 flex items-center justify-center rounded-full",
                      "bg-ketuhar-cream border border-ketuhar-gold/40"
                    )}
                  >
                    <Icon className="h-4 w-4 text-ketuhar-clay" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-ketuhar-charcoal">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">
                    {pillar.body}
                  </p>
                </div>
              </FadeReveal>
            );
          })}
        </div>

        {/* Pull quote */}
        <FadeReveal delay={0.3}>
          <blockquote className="mt-20 text-center max-w-2xl mx-auto">
            <SimpleDivider variant="gold" className="mb-8 max-w-[3rem] mx-auto" />
            <p className="font-display text-2xl md:text-3xl font-light text-ketuhar-charcoal leading-relaxed italic">
              "Good food does not announce itself. It settles quietly into the
              body and makes you feel, simply, well."
            </p>
            <p className="mt-5 text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
              Ketuhar Kitchen
            </p>
          </blockquote>
        </FadeReveal>
      </div>
    </section>
  );
}
