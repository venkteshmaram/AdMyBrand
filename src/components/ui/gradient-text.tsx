import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary' | 'accent' | 'rainbow';
  animated?: boolean;
}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, children, gradient = 'primary', animated = false, ...props }, ref) => {
const gradientClasses = {
      primary: 'bg-gradient-to-r from-primary to-primary/70',
      secondary: 'bg-gradient-to-r from-secondary to-secondary/70', 
      accent: 'bg-gradient-to-r from-primary via-secondary to-muted-foreground',
      rainbow: 'bg-gradient-to-r from-foreground via-secondary to-muted-foreground'
    };

    return (
      <span
        className={cn(
          "bg-clip-text text-transparent font-bold",
          gradientClasses[gradient],
          animated && "bg-[length:200%_auto] animate-gradient",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = "GradientText";

export { GradientText };
