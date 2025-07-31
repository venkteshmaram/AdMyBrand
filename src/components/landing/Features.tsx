import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { 
  Brain, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  Smartphone 
} from "lucide-react";
import geometricCubes from "@/assets/geometric-cubes.jpg";
import networkNodes from "@/assets/network-nodes.jpg";
import dataStreams from "@/assets/data-streams.jpg";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze market trends and consumer behavior to optimize your campaigns in real-time.",
      image: geometricCubes,
      color: "text-white"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboard with live metrics, conversion tracking, and performance insights that drive better decisions.",
      image: networkNodes,
      color: "text-white"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach the right audience at the right time with AI-driven demographic and behavioral targeting capabilities.",
      image: null,
      color: "text-muted-foreground"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Streamline your workflow with intelligent automation that manages campaigns, bids, and optimizations 24/7.",
      image: dataStreams,
      color: "text-white"
    },
    {
      icon: Shield,
      title: "Brand Safety",
      description: "Advanced fraud detection and brand safety measures ensure your ads appear in appropriate, high-quality environments.",
      image: null,
      color: "text-muted-foreground"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access premium ad inventory across 190+ countries with localized targeting and currency support.",
      image: null,
      color: "text-muted-foreground"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user access with role-based permissions, shared workspaces, and collaborative campaign management.",
      image: null,
      color: "text-muted-foreground"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Optimized for mobile advertising with dedicated app campaign tools and mobile-specific targeting options.",
      image: null,
      color: "text-muted-foreground"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Powerful Features for
            <br />
            <GradientText gradient="primary">Modern Marketers</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to create, manage, and optimize high-performing advertising campaigns with the power of artificial intelligence.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <GlassCard 
              key={index}
              className="p-6 hover:scale-105 transition-all duration-300 feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                {/* Icon/Image */}
                <div className="relative">
                  {feature.image ? (
                    <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <GlassCard className="inline-flex items-center gap-2 px-6 py-3">
            <Zap className="w-5 h-5 text-white" />
            <span className="font-semibold">Over 50+ integrations available</span>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Features;