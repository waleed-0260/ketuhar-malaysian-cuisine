"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { FadeReveal } from "./FadeReveal";
import type { PhilosophyBlockProps } from "@/types";

export function PhilosophyBlock({
  label,
  heading,
  body,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  textBg = "white",
  className,
}: PhilosophyBlockProps) {
  const imgOrder =
    imagePosition === "right" ? "lg:order-2" : "lg:order-1";
  const txtOrder =
    imagePosition === "right" ? "lg:order-1" : "lg:order-2";

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2", className)}>
      {/* Image panel */}
      <div
        className={cn(
          "relative h-72 lg:h-auto min-h-[420px] order-1",
          imgOrder
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text panel */}
      <div
        className={cn(
          "flex flex-col justify-center px-8 py-14 lg:px-16 lg:py-20 order-2",
          imgOrder,
          txtOrder,
          textBg === "cream" ? "bg-ketuhar-cream" : "bg-white"
        )}
      >
        <FadeReveal>
          {label && (
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-ketuhar-clay font-body mb-4">
              {label}
            </p>
          )}
          <h2 className="font-display text-3xl md:text-4xl font-light text-ketuhar-charcoal leading-snug mb-6">
            {heading}
          </h2>
          <div className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed font-body space-y-4">
            {typeof body === "string" ? <p>{body}</p> : body}
          </div>
        </FadeReveal>
      </div>
    </div>
  );
}
