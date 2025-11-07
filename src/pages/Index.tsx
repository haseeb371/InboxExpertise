import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientShowcase from "@/components/ClientShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import DeliverabilitySection from "@/components/DeliverabilitySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClientShowcase />
      <FeaturesSection />
      <DeliverabilitySection />
    </div>
  );
};

export default Index;
