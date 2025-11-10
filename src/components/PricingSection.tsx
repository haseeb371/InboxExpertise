import { useState } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface PricingTier {
  name: string;
  description: string;
  basePrice: number;
  priceReduction: number; // How much price reduces per additional user
  minUsers: number;
  maxUsers: number;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Google Basic",
    description: "Perfect for small operations with advanced needs",
    basePrice: 2.2,
    priceReduction: 0.02,
    minUsers: 100,
    maxUsers: 500,
    features: [
      "Google Basic",
      "Domain",
      "SPF",
      "DKIM",
      "DMARC",
      "Email using (SPF, DKIM, DMARC etc)",
      "Add More users",
      "US Sending Servers",
      "100% secure as we have no access to your accounts",
      "Enhanced Security"
    ]
  },
  {
    name: "Google Business",
    description: "Perfect for larger organizations with advanced needs",
    basePrice: 1.75,
    priceReduction: 0.015,
    minUsers: 100,
    maxUsers: 500,
    features: [
      "Google Basic",
      "Domain",
      "SPF",
      "DKIM",
      "DMARC",
      "10.2 (per month per domain)",
      "Email using (SPF, DKIM, DMARC etc)",
      "Add More users",
      "US Sending Servers",
      "100% secure as we have no access to your accounts",
      "Enhanced Security"
    ],
    highlighted: true
  },
  {
    name: "MS Business",
    description: "Perfect for small operations with advanced needs",
    basePrice: 99,
    priceReduction: 0.8,
    minUsers: 1,
    maxUsers: 100,
    features: [
      "Google Basic",
      "Domain",
      "SPF",
      "DKIM",
      "DMARC",
      "Email using (SPF, DKIM, DMARC etc)",
      "Add More users",
      "US Sending Servers",
      "100% secure as we have no access to your accounts",
      "Enhanced Security"
    ]
  }
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [userCounts, setUserCounts] = useState<{ [key: string]: number }>({
    "Google Basic": 100,
    "Google Business": 100,
    "MS Business": 1
  });

  const calculatePrice = (tier: PricingTier, userCount: number) => {
    const reduction = (userCount - tier.minUsers) * tier.priceReduction;
    const price = Math.max(tier.basePrice - reduction, tier.basePrice * 0.5); // Minimum 50% of base price
    return price.toFixed(2);
  };

  const handleUserCountChange = (tierName: string, value: number[]) => {
    setUserCounts(prev => ({ ...prev, [tierName]: value[0] }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-base font-semibold rounded-full mb-6">
            Pricing Plan
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Select a Best Plan For Your
            <br />
            Business Growth
          </h2>
          
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            Select from our range of high-quality Google workspace inboxes tailored to your needs
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="inline-flex items-center gap-3 bg-muted rounded-full p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-8 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === "yearly"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => {
            const userCount = userCounts[tier.name] || tier.minUsers;
            const price = calculatePrice(tier, userCount);
            const yearlyPrice = (parseFloat(price) * 12 * 0.85).toFixed(2); // 15% discount for yearly

            return (
              <Card
                key={tier.name}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-card ${
                  tier.highlighted
                    ? "border-2 border-primary bg-primary/5 scale-105"
                    : "border-border bg-card"
                }`}
              >
                <CardContent className="p-8">
                  {/* Plan Name & Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-primary">
                        ${billingCycle === "monthly" ? price : yearlyPrice}
                      </span>
                      <span className="text-muted-foreground">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      per user per {billingCycle === "monthly" ? "month" : "year"}
                    </p>
                  </div>

                  {/* User Count Slider */}
                  <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-foreground">
                        {tier.name === "MS Business" ? "Domain" : "Users"}
                      </span>
                      <span className="text-lg font-bold text-primary">
                        {userCount}
                      </span>
                    </div>
                    <Slider
                      value={[userCount]}
                      onValueChange={(value) => handleUserCountChange(tier.name, value)}
                      min={tier.minUsers}
                      max={tier.maxUsers}
                      step={tier.name === "MS Business" ? 1 : 10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>{tier.minUsers}</span>
                      <span>{tier.maxUsers}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full rounded-lg py-6 font-semibold ${
                      tier.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
