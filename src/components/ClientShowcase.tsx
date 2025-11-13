import React from "react";
import { gsap } from "gsap";

const ClientShowcase = () => {
  const logos = [
    {
      name: "Instantly",
      logoSrc: "/instantly-logo.svg",
      textColor: "text-foreground",
      height: "h-12 md:h-14",
    },
    {
      name: "Smartlead.ai",
      logoSrc: "/smartlead-logo.svg",
      textColor: "text-foreground",
      height: "h-12 md:h-14",
    },
    {
      name: "MAILREACH",
      logoSrc: "/mailreach-logo.svg",
      textColor: "text-foreground",
      height: "h-8 md:h-10",
    },
    {
      name: "lemlist",
      iconSrc: "/lemlist-icon.svg",
      textColor: "text-foreground",
    },
  ];

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Set initial position
    gsap.set(container, { x: 0 });

    // Create smooth infinite scrolling animation
    // Duration controls speed - lower = faster
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(container, {
      x: "-50%", // Move by 50% since we duplicate logos
      duration: 20, // Increased from 12 to slow down animation
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, [logos.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="w-full max-w-screen-xl mx-auto overflow-hidden relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div ref={containerRef} className="flex">
            {/* Render logos twice for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="min-w-[33%] md:min-w-[25%] flex items-center justify-center px-6 md:px-8 py-4">
                {logo.logoSrc ? (
                  <div className="flex items-center justify-center">
                    <img
                      src={logo.logoSrc}
                      alt={logo.name}
                      className={`${logo.height || 'h-8'} w-auto object-contain`}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <img
                      src={logo.iconSrc}
                      alt={`${logo.name} icon`}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
                    />
                    <span className={`text-xl md:text-2xl font-bold ${logo.textColor}`}>
                      {logo.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
