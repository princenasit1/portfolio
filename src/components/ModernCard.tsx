import { motion } from "framer-motion";
import { memo, ReactNode } from "react";
import { HoverGlow, TiltCard } from "./Animations/InteractiveElements";
import { cn } from "@/lib/utils";

type Variant = "default" | "glass" | "solid" | "gradient";

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  interactive?: boolean;
  glow?: boolean;
}

export const ModernCard = memo(
  ({
    children,
    className = "",
    variant = "default",
    interactive = true,
    glow = false,
  }: ModernCardProps) => {
    const baseClasses =
      "rounded-2xl border backdrop-blur-sm transition-all duration-300";

    const variants: Record<Variant, string> = {
      default:
        "bg-white/10 dark:bg-gray-900/50 border-gray-200/20 dark:border-gray-700/30",
      glass:
        "bg-white/5 dark:bg-gray-900/20 border-white/10 dark:border-gray-700/20",
      solid:
        "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700",
      gradient:
        "bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200/30 dark:border-blue-700/30",
    };

    const CardWrapper = interactive ? TiltCard : motion.div;
    const GlowWrapper = glow ? HoverGlow : motion.div;

    return (
      <GlowWrapper>
        <CardWrapper
          className={cn(baseClasses, variants[variant], className)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </CardWrapper>
      </GlowWrapper>
    );
  }
);

ModernCard.displayName = "ModernCard";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = memo(({ children, className = "" }: GlassCardProps) => {
  return (
    <ModernCard
      variant="glass"
      className={cn("shadow-xl", className)}
      interactive={true}
      glow={true}
    >
      {children}
    </ModernCard>
  );
});

GlassCard.displayName = "GlassCard";
