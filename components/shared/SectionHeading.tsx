import { cn } from "@/lib/utils";
import type { SectionHeadingProps } from "@/types";

export function SectionHeading({
  label,
  heading,
  subheading,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "text-[0.65rem] tracking-[0.22em] uppercase font-body",
            light ? "text-white/50" : "text-ketuhar-clay"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl font-light leading-tight",
          light ? "text-white" : "text-ketuhar-charcoal"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            "text-base leading-relaxed max-w-xl font-body",
            light ? "text-white/60" : "text-muted-foreground"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
