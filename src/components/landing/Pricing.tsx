import React from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for small businesses and startups",
      icon: Zap,
      popular: false,
      features: [
        "Up to 5 campaigns",
        "Basic AI insights",
        "Email support",
        "Standard integrations",
        "Monthly reports",
        "Campaign templates"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      description: "Ideal for growing businesses and agencies",
      icon: Star,
      popular: true,
      features: [
        "Unlimited campaigns",
        "Advanced AI optimization",
        "Priority support",
        "Premium integrations",
        "Real-time analytics",
        "Custom reporting",
        "Team collaboration",
        "A/B testing tools"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "hero" as const
    },
    {
      name: "Enterprise",
      price: 299,
      period: "month",
      description: "For large organizations with complex needs",
      icon: Crown,
      popular: false,
      features: [
        "Everything in Professional",
        "White-label solution",
        "Dedicated account manager",
        "Custom AI models",
        "API access",
        "SLA guarantee",
        "Advanced security",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "gradient" as const
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Simple, Transparent
            <br />
            <GradientText gradient="accent">Pricing</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your business. Start with a 14-day free trial, no credit card required.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <GlassCard 
              key={index}
              className={`p-8 relative transition-all duration-300 ${
                plan.popular 
                  ? 'scale-105 border-primary/50 shadow-2xl shadow-primary/20' 
                  : 'hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                {/* Plan Header */}
                <div className="text-center space-y-2">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${
                    plan.popular 
                      ? 'from-primary/20 to-secondary/20' 
                      : 'from-muted/50 to-muted/20'
                  } flex items-center justify-center`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.popular ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                {/* Price */}
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full" 
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
        
        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 24/7 customer support and a 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;