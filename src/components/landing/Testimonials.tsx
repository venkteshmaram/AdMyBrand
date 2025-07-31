import React from "react";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      author: {
        name: "Sarah Johnson",
        handle: "@sarahj",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      },
      text: "ADmyBRAND AI Suite completely transformed our marketing ROI. We saw a 340% increase in conversions within the first month. The AI insights are incredibly accurate.",
      href: "https://twitter.com/sarahj",
    },
    {
      author: {
        name: "Michael Chen",
        handle: "@michaelc",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      text: "The automation features saved us 20+ hours per week. The platform's ability to optimize campaigns in real-time is simply outstanding. Highly recommended!",
      href: "https://twitter.com/michaelc",
    },
    {
      author: {
        name: "Emily Rodriguez",
        handle: "@emilyr",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      },
      text: "The real-time analytics and reporting features are game-changers. We can now make data-driven decisions instantly and see immediate results in our campaigns.",
    },
  ];

  return (
    <TestimonialsSection
      title="Loved by marketers at world-class companies"
      description="Join thousands of marketers who are already building the future with our AI platform"
      testimonials={testimonials}
    />
  );
};

export default Testimonials;
