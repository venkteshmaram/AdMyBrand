import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GradientText } from "@/components/ui/gradient-text";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "What is ADmyBRAND AI Suite?",
      answer: "ADmyBRAND AI Suite is a comprehensive AI-powered marketing platform that helps businesses discover, plan, and optimize advertising campaigns. It combines advanced machine learning with real-time analytics to maximize your marketing ROI across all channels."
    },
    {
      id: "item-2",
      question: "How does the AI optimization work?",
      answer: "Our AI algorithms continuously analyze campaign performance, audience behavior, and market trends to automatically adjust bidding strategies, targeting parameters, and creative elements. This ensures your campaigns are always performing at their peak efficiency."
    },
    {
      id: "item-3",
      question: "Can I integrate with my existing marketing tools?",
      answer: "Yes! ADmyBRAND AI Suite offers 50+ integrations with popular marketing platforms including Google Ads, Facebook Ads, LinkedIn, HubSpot, Salesforce, and many more. Our API also allows for custom integrations."
    },
    {
      id: "item-4",
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card is required to start your trial, and you can cancel anytime during the trial period."
    },
    {
      id: "item-5",
      question: "How secure is my data?",
      answer: "We take data security seriously. All data is encrypted in transit and at rest using industry-standard protocols. We're SOC 2 compliant and follow GDPR guidelines. Your data is never shared with third parties without your explicit consent."
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            <GradientText>Frequently Asked Questions</GradientText>
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card/30 backdrop-blur-sm ring-muted w-full rounded-2xl border border-border/50 px-8 py-3 shadow-lg ring-4 dark:ring-0"
          >
            {faqs.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8 text-center">
            Can't find what you're looking for? Contact our{" "}
            <Link
              to="#"
              className="text-primary font-medium hover:underline"
            >
              customer support team
            </Link>
          </p>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 pt-16">
        <div className="p-8 md:p-12 text-center rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Stay updated with 
              <GradientText gradient="primary" className="block">
                marketing insights
              </GradientText>
            </h3>
            <p className="text-muted-foreground text-base">
              Get the latest AI marketing trends, tips, and exclusive offers delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <Button variant="default" className="group font-medium">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
