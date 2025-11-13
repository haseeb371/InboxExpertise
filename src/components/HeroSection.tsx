import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TrustedUsersCard from "./TrustedUsersCard";
import DeliverabilityChart from "./DeliverabilityChart";
import HealthScoreCard from "./HealthScoreCard";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-primary-light to-primary overflow-hidden flex items-center">
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 w-full h-full">
        <InteractiveGridPattern
          width={50}
          height={50}
          className="opacity-30"
          squaresClassName="fill-white/10 stroke-white/20 hover:fill-white/30"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-16 py-8 w-full relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-xl rounded-full pl-2 pr-3 py-1.5 flex items-center gap-1.5">
            <Badge className="bg-white text-navy hover:bg-white rounded-full px-2.5 py-0.5 text-xs font-semibold">
              New
            </Badge>
            <span className="text-sm font-medium text-white">Email deliverability enhanced</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Ensure Your Email Hits
            <br />
            the Right Inbox
          </h1>
          
          <p className="text-base lg:text-lg text-white/90 max-w-xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: "0.2s" }}>
            We help you configure smart authentication, fix deliverability issues,
            and boost sender reputation for higher open and reply rates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => window.open('https://calendly.com/alex-inboxexpertise/30min', '_blank')}
              className="rounded-full px-12 py-6 text-base font-semibold hover:scale-105 transition-all bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Visual Elements - Desktop */}
        <div className="hidden md:block relative h-[280px] w-full">
          <div className="relative h-full w-full flex items-end justify-center overflow-visible">
            {/* Trusted Users Card - Left */}
            <div className="absolute left-[2%] lg:left-[8%] top-[60%] z-10 animate-float animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <TrustedUsersCard />
            </div>

            {/* Center - Deliverability Chart */}
            <div className="z-20 animate-fade-in-up absolute top-0" style={{ animationDelay: "0.4s" }}>
              <DeliverabilityChart />
            </div>

            {/* Health Score Card - Right */}
            <div className="absolute right-0 top-[35%] z-10 animate-float hidden lg:block" style={{ animationDelay: "0.6s", animationDuration: "5s" }}>
              <HealthScoreCard />
            </div>
          </div>
        </div>

        {/* Visual Elements - Mobile */}
        <div className="md:hidden flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
          {/* Trusted Users Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <TrustedUsersCard />
          </div>

          {/* Health Score Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <HealthScoreCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
