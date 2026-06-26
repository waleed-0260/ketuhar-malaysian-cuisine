"use client";

import { DishCard } from "@/components/shared/DishCard";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const dishes = [
  {
    name: "Ayam Kampung Panggang",
    description:
      "Heritage free-range chicken marinated in pandan leaf, turmeric and toasted coconut, slow-roasted over charcoal. Placeholder — client to confirm final dish names.",
    price: "RM 68",
    isRecommended: true,
  },
  {
    name: "Ikan Kukus Halia",
    description:
      "Steamed whole sea bass with fresh ginger, spring onion and a light soy dressing — a study in restraint and clarity of flavour. Placeholder — client to confirm.",
    price: "RM 72",
    isRecommended: false,
  },
  {
    name: "Kambing Korma Lambat",
    description:
      "Slow-braised lamb shoulder in a cardamom, rose petal and caramelised onion sauce, served with hand-rolled roti. Placeholder — client to confirm.",
    price: "RM 88",
    isRecommended: true,
  },
  {
    name: "Sup Ulam",
    description:
      "A clear herbal broth of seasonal ulam greens, silken tofu and lemongrass — light, restorative, quietly complex. Placeholder — client to confirm.",
    price: "RM 32",
    isRecommended: false,
  },
  {
    name: "Rendang Daging Wagyu",
    description:
      "Wagyu beef slow-cooked in a kerisik coconut and spice paste until the sauce dries and clings — an act of patience on the plate. Placeholder — client to confirm.",
    price: "RM 98",
    isRecommended: true,
  },
  {
    name: "Sotong Goreng Mentega",
    description:
      "Wok-tossed squid with salted egg butter, curry leaf and chilli — a golden, aromatic dish that speaks of coastal abundance. Placeholder — client to confirm.",
    price: "RM 65",
    isRecommended: false,
  },
];

export function SignatureDishes() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <FadeReveal>
          <SectionHeading
            label="Signature Dishes"
            heading="A curated selection"
            subheading="These are the dishes that speak most clearly to our philosophy — each one a conversation between heritage technique and the finest local ingredients. Dish names are placeholder and will be confirmed by the kitchen team."
          />
        </FadeReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <FadeReveal key={dish.name} delay={i * 0.07}>
              <DishCard {...dish} />
            </FadeReveal>
          ))}
        </div>

        <FadeReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link href="/menu">
              <Button
                variant="outline"
                className="border-ketuhar-clay/40 text-ketuhar-clay hover:bg-ketuhar-clay hover:text-white font-body tracking-[0.15em] text-[0.7rem] uppercase px-8 h-11 rounded-sm transition-all duration-300"
              >
                View Full Menu
              </Button>
            </Link>
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}
