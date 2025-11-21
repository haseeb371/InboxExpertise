import { useState } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

interface PricingTier {
  name: string;
  description: string;
  basePrice: number;
  priceReduction: number; // How much price reduces per additional user
  minUsers: number;
  maxUsers: number;
  features: string[];
  highlighted?: boolean;
  isDomainBased?: boolean; // For flat-rate domain pricing instead of per-user
  customDomainPrice?: number; // Additional price for custom domain option
}

const pricingTiers: PricingTier[] = [
  {
    name: "Google Reseller",
    description: "Perfect for larger organizations with advanced needs",
    basePrice: 3.5,
    priceReduction: 0,
    minUsers: 5,
    maxUsers: 1000,
    features: [
      "Domain & Email Setup",
      "SPF, DKIM, DMARC",
      "US Sending Servers",
      "100% Secure Access",
      "Enhanced Security"
    ]
  },
  {
    name: "Microsoft Partner",
    description: "50 accounts per domain with fast automated setup",
    basePrice: 3,
    priceReduction: 0,
    minUsers: 1,
    maxUsers: 50,
    isDomainBased: true,
    customDomainPrice: 12,
    features: [
      "50 Microsoft Partner accounts per domain",
      "200 emails per day per account",
      "Partial Automated Setup",
      "24 Hour Turnaround",
      "SPF / DKIM / Strict DMARC",
      "Premium 1-on-1 Support"
    ]
  },
  {
    name: "MS Business",
    description: "Perfect for small operations with advanced needs",
    basePrice: 3,
    priceReduction: 0,
    minUsers: 5,
    maxUsers: 1000,
    features: [
      "Domain & Email Setup",
      "SPF, DKIM, DMARC",
      "US Sending Servers",
      "100% Secure Access"
    ]
  }
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [userCounts, setUserCounts] = useState<{ [key: string]: number }>({
    "Google Reseller": 5,
    "Microsoft Partner": 1,
    "MS Business": 5
  });

  const calculatePrice = (tier: PricingTier, userCount: number) => {
    // Google Reseller pricing tiers
    if (tier.name === "Google Reseller") {
      if (userCount <= 400) {
        return "3.50";
      } else if (userCount < 1000) {
        return "2.90";
      } else {
        return "2.75";
      }
    }

    // Microsoft Partner flat rate per domain
    if (tier.name === "Microsoft Partner") {
      return "10.00";
    }

    // MS Business flat rate
    if (tier.name === "MS Business") {
      return "3.00";
    }

    return tier.basePrice.toFixed(2);
  };

  const handleUserCountChange = (tierName: string, value: number[]) => {
    setUserCounts(prev => ({ ...prev, [tierName]: value[0] }));
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-primary-light to-primary overflow-hidden">
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 w-full h-full">
        <InteractiveGridPattern
          width={50}
          height={50}
          className="opacity-30"
          squaresClassName="fill-white/10 stroke-white/20 hover:fill-white/30"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary text-white hover:bg-primary px-5 py-2 text-base font-semibold rounded-full flex items-center gap-2 w-fit mx-auto mb-6">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Pricing Plan
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Select a Best Plan For Your
            <br />
            Business Growth
          </h2>

          <p className="text-base text-white/90 max-w-2xl mx-auto mb-8">
            Select from our range of high-quality Google workspace inboxes tailored to your needs
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-primary shadow-sm"
                  : "text-white hover:text-white/80"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === "yearly"
                  ? "bg-white text-primary shadow-sm"
                  : "text-white hover:text-white/80"
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
                className="relative overflow-hidden transition-all duration-300 border-border bg-card"
              >
                <CardContent className="p-8">
                  {/* Plan Name & Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-black">
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
                        /{billingCycle === "monthly" ? "month" : "year"}{tier.isDomainBased ? "/domain" : "/user"}
                      </span>
                    </div>
                    {tier.isDomainBased && tier.customDomainPrice && (
                      <p className="text-xs mt-1 text-primary font-semibold">
                        +${tier.customDomainPrice} for custom domain
                      </p>
                    )}
                  </div>

                  {/* User Count Slider */}
                  <div className="mb-6 p-4 rounded-lg bg-muted/50">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-foreground">
                        {tier.isDomainBased ? "Domains" : "Users"}
                      </span>
                      <span className="text-lg font-bold text-primary">
                        {userCount >= tier.maxUsers && !tier.isDomainBased ? `${userCount}+` : userCount}
                      </span>
                    </div>
                    <Slider
                      value={[userCount]}
                      onValueChange={(value) => handleUserCountChange(tier.name, value)}
                      min={tier.minUsers}
                      max={tier.maxUsers}
                      step={userCount <= 100 ? 5 : 10}
                      className="w-full cursor-pointer"
                    />
                    <div className="flex justify-between text-xs mt-3 text-muted-foreground">
                      <span>{tier.minUsers}</span>
                      <span className="hidden sm:inline">{tier.minUsers + Math.floor((tier.maxUsers - tier.minUsers) / 4)}</span>
                      <span className="hidden md:inline">{tier.minUsers + Math.floor((tier.maxUsers - tier.minUsers) / 2)}</span>
                      <span className="hidden sm:inline">{tier.minUsers + Math.floor((tier.maxUsers - tier.minUsers) * 3 / 4)}</span>
                      <span>{tier.maxUsers}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-primary/10">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm leading-relaxed text-black">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => window.open('https://calendly.com/alex-inboxexpertise/30min', '_blank')}
                    className="w-full rounded-lg py-6 font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Get Started
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
