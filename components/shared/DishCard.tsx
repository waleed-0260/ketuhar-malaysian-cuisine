"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { DishCardProps } from "@/types";

const PLACEHOLDER =
  "https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.webp?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8=";

const ease = [0.16, 1, 0.3, 1] as const;

export function DishCard({
  name,
  description,
  price,
  isRecommended,
  imageSrc,
  className,
}: DishCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease }}
      className={cn(
        "group flex flex-col bg-white rounded-sm overflow-hidden shadow-sm",
        className
      )}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={imageSrc ?? PLACEHOLDER}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isRecommended && (
          <div className="absolute top-3 left-3">
            <Badge
              className="bg-ketuhar-gold text-white text-[0.6rem] tracking-[0.15em] uppercase border-0 rounded-none px-2.5"
            >
              Chef's Recommendation
            </Badge>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5 gap-2.5">
        <h3 className="font-display text-xl font-medium text-ketuhar-charcoal leading-snug">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 font-body">
          {description}
        </p>
        <div className="pt-2 flex items-center justify-between">
          <p className="font-display text-lg text-ketuhar-clay font-medium">
            {price}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
