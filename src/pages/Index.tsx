import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientShowcase from "@/components/ClientShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import DeliverabilitySection from "@/components/DeliverabilitySection";
import DeliverabilityReversedSection from "@/components/DeliverabilityReversedSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClientShowcase />
      <FeaturesSection />
      <DeliverabilitySection />
      <DeliverabilityReversedSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
