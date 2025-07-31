import React from "react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { ArrowRight, Play } from "lucide-react";
import AdvertisingSlider from "./AdvertisingSlider";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ultra Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content - Simplified */}
          <div className="space-y-8">
            {/* Clean Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">AI-Powered Marketing Platform</span>
            </div>
            
            {/* Main Headline - Linear Style */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight">
                Marketing that
                <br />
                <GradientText gradient="primary">
                  actually works
                </GradientText>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Transform your advertising with AI-driven insights, automated optimization, 
                and real-time analytics that deliver measurable results.
              </p>
            </div>
            
            {/* Clean CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="group font-medium">
                Get started for free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              
              <Button variant="ghost" size="lg" className="group font-medium">
                <Play className="w-4 h-4" />
                Watch demo
              </Button>
            </div>
          </div>
          
          {/* Right Content - 3D Scene */}
          <div className="relative h-[500px]">
            <AdvertisingSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
