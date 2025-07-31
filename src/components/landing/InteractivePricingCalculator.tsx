import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';

const InteractivePricingCalculator: React.FC = () => {
  const [users, setUsers] = useState(1000);
  const [features, setFeatures] = useState({
    analytics: true,
    automation: false,
    support: true,
  });

  const handleSliderChange = (value: number[]) => {
    setUsers(value[0]);
  };

  const handleFeatureToggle = (feature: keyof typeof features) => {
    setFeatures((prev) => ({ ...prev, [feature]: !prev[feature] }));
  };

  const calculatePrice = () => {
    let basePrice = 50;
    let userPrice = users * 0.1;
    let featurePrice = 0;
    if (features.analytics) featurePrice += 20;
    if (features.automation) featurePrice += 30;
    if (features.support) featurePrice += 15;
    return basePrice + userPrice + featurePrice;
  };

  const price = calculatePrice();

  return (
    <section id="interactive-pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Calculate Your Price
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Your Custom Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Number of Users</h3>
                <Slider
                  defaultValue={[1000]}
                  max={10000}
                  step={100}
                  onValueChange={handleSliderChange}
                />
                <div className="text-center mt-2 text-2xl font-bold">{users}</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Additional Features</h3>
                <div className="space-y-2">
                  <div
                    className="flex items-center justify-between p-3 rounded-lg border cursor-pointer"
                    onClick={() => handleFeatureToggle('analytics')}
                  >
                    <span>Advanced Analytics</span>
                    {features.analytics && <CheckIcon className="h-5 w-5 text-green-500" />}
                  </div>
                  <div
                    className="flex items-center justify-between p-3 rounded-lg border cursor-pointer"
                    onClick={() => handleFeatureToggle('automation')}
                  >
                    <span>Marketing Automation</span>
                    {features.automation && <CheckIcon className="h-5 w-5 text-green-500" />}
                  </div>
                  <div
                    className="flex items-center justify-between p-3 rounded-lg border cursor-pointer"
                    onClick={() => handleFeatureToggle('support')}
                  >
                    <span>24/7 Support</span>
                    {features.support && <CheckIcon className="h-5 w-5 text-green-500" />}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-lg">Estimated Monthly Cost</p>
              <p className="text-5xl font-bold my-4">${price.toFixed(2)}</p>
              <Button size="lg">Get Started</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InteractivePricingCalculator;
