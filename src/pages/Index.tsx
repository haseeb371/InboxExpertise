import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientShowcase from "@/components/ClientShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import DeliverabilitySection from "@/components/DeliverabilitySection";
import DeliverabilityReversedSection from "@/components/DeliverabilityReversedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClientShowcase />
      <FeaturesSection />
      <DeliverabilitySection />
      <DeliverabilityReversedSection />
    </div>
  );
};

export default Index;
