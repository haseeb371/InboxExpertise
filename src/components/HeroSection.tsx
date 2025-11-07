import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TrustedUsersCard from "./TrustedUsersCard";
import DeliverabilityChart from "./DeliverabilityChart";
import HealthScoreCard from "./HealthScoreCard";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary-light to-primary overflow-hidden pt-20">
      <div className="container mx-auto px-6 lg:px-16 py-20">
        {/* Badge */}
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <div className="bg-white rounded-full px-5 py-2 shadow-md flex items-center gap-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 rounded-xl px-3 py-1 text-xs font-bold">
              New
            </Badge>
            <span className="text-sm font-medium text-teal-text">Payment cards upgraded</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center space-y-6 mb-16">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Ensure Your Email Hits
            <br />
            the Right Inbox
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            We help you configure smart authentication, fix deliverability issues,
            and boost sender reputation for higher open and reply rates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="hero"
              size="lg"
              className="rounded-full text-lg px-10 py-6"
            >
              Create account
            </Button>
            <Button 
              variant="hero-white"
              size="lg"
              className="rounded-full text-lg px-10 py-6"
            >
              Watch Tutorial
            </Button>
          </div>
        </div>

        {/* Visual Elements */}
        <div className="relative h-[600px] max-w-7xl mx-auto">
          {/* Trusted Users Card - Left */}
          <div className="absolute left-0 lg:left-[5%] top-[15%] z-10 animate-float animate-fade-in-up hidden md:block" style={{ animationDelay: "0.5s" }}>
            <TrustedUsersCard />
          </div>

          {/* Center - Deliverability Chart */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <DeliverabilityChart />
          </div>

          {/* Health Score Card - Right */}
          <div className="absolute right-0 lg:right-[5%] top-[20%] z-10 animate-float hidden lg:block" style={{ animationDelay: "0.6s", animationDuration: "5s" }}>
            <HealthScoreCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
