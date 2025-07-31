import React from "react";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold">
          <GradientText gradient="primary">ADmyBRAND</GradientText>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a>
          <a href="#interactive-pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Calculator</a>
          <a href="#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
        </nav>
        <Button size="sm">Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
