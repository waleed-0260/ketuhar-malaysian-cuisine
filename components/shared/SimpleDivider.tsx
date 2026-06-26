import { cn } from "@/lib/utils";

interface SimpleDividerProps {
  className?: string;
  variant?: "default" | "gold" | "light";
}

export function SimpleDivider({
  className,
  variant = "default",
}: SimpleDividerProps) {
  return (
    <hr
      className={cn(
        "w-full border-0 border-t",
        variant === "gold" && "border-ketuhar-gold/35",
        variant === "light" && "border-white/12",
        variant === "default" && "border-ketuhar-charcoal/10",
        className
      )}
    />
  );
}
