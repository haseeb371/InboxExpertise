import { Zap } from "lucide-react";

const ClientShowcase = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl font-semibold text-foreground text-center mb-16">
          Our Recent Clients and partners
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 max-w-6xl mx-auto">
          {/* Instantly Logo */}
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
            <div className="w-12 h-12 rounded-full bg-[#0099FF] flex items-center justify-center">
              <Zap className="w-7 h-7 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Instantly</span>
          </div>

          {/* Smartlead.ai Logo */}
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
            <div className="w-12 h-12 rounded-lg bg-[#7C3AED] flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-sm rotate-45" />
            </div>
            <span className="text-2xl font-semibold text-[#7C3AED]">Smartlead.ai</span>
          </div>

          {/* MAILREACH Logo */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
            <span className="text-2xl font-bold text-foreground tracking-wider">MAILREACH</span>
          </div>

          {/* Elemlist Logo */}
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
            <div className="w-12 h-12 rounded-xl bg-[#0099FF] flex items-center justify-center">
              <span className="text-3xl font-bold text-white">E</span>
            </div>
            <span className="text-2xl font-semibold text-foreground">lemlist</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
