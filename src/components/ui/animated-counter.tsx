import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  startOnView?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className,
  startOnView = true,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnView);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);
      
      const currentCount = Math.floor(startValue + (end - startValue) * easedProgress);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isVisible]);

  useEffect(() => {
    if (!startOnView) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [end, startOnView]);

  return (
    <span
      id={`counter-${end}`}
      className={cn("font-bold tabular-nums", className)}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export { AnimatedCounter };