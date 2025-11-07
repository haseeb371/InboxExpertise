import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientShowcase from "@/components/ClientShowcase";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClientShowcase />
      <FeaturesSection />
    </div>
  );
};

export default Index;
