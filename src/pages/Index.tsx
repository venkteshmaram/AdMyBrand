import React, { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import InteractivePricingCalculator from "@/components/landing/InteractivePricingCalculator";
import Testimonials from "@/components/landing/Testimonials";
import Blog from "@/components/landing/Blog";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <InteractivePricingCalculator />
      <Testimonials />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
