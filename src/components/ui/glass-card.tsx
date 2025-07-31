import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: 'low' | 'medium' | 'high';
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, blur = 'xl', opacity = 'medium', ...props }, ref) => {
    const blurClasses = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md', 
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl'
    };

    const opacityClasses = {
      low: 'bg-card/30 dark:bg-card/20',
      medium: 'bg-card/50 dark:bg-card/40', 
      high: 'bg-card/70 dark:bg-card/60'
    };

    return (
      <div
        className={cn(
          "rounded-lg border border-border/50 shadow-lg",
          blurClasses[blur],
          opacityClasses[opacity],
          "transition-all duration-200 hover:bg-card/60 dark:hover:bg-card/50",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };