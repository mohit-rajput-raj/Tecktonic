import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "default" | "secondary" | "outline" | "glow";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-primary/15 text-primary border-primary/25",
  secondary:
    "bg-secondary/15 text-secondary border-secondary/25",
  outline:
    "bg-transparent text-foreground border-border",
  glow:
    "bg-primary/10 text-primary border-primary/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        "transition-colors duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
