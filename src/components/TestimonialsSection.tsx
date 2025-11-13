import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import React from "react";
import { gsap } from "gsap";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  review: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp Inc",
    review: "The email deliverability service has been a game-changer for our outreach campaigns. We've seen a 95% improvement in inbox placement rates, and the technical setup was completely hassle-free. Their team handled everything professionally.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    position: "Sales Manager",
    company: "Growth Solutions",
    review: "Outstanding service! Our cold email campaigns now reach the inbox consistently. The pre-warmed accounts and ongoing account management have saved us countless hours. Highly recommend for any serious email marketing operation.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    position: "CEO",
    company: "StartupHub",
    review: "We switched to this service three months ago and haven't looked back. The deliverability scores speak for themselves - consistently above 90%. The support team is incredibly responsive and knowledgeable about email infrastructure.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Thompson",
    position: "Operations Lead",
    company: "Digital Ventures",
    review: "The comprehensive approach to email deliverability is exactly what we needed. From technical setup to ongoing monitoring, everything is handled professionally. Our sender reputation has never been better.",
    rating: 5,
    avatar: "DT"
  },
  {
    name: "Lisa Anderson",
    position: "Growth Hacker",
    company: "ScaleUp Labs",
    review: "Impressive results from day one! The Google Workspace integration works flawlessly, and the analytics dashboard provides all the insights we need to optimize our campaigns. Worth every penny for serious email marketers.",
    rating: 5,
    avatar: "LA"
  },
  {
    name: "James Wilson",
    position: "Business Development",
    company: "Enterprise Co",
    review: "After struggling with email deliverability for months, this service solved all our problems. The team's expertise in SPF, DKIM, and DMARC configuration is evident. Our emails now consistently land in the inbox.",
    rating: 5,
    avatar: "JW"
  }
];

const TestimonialsSection = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Set initial position
    gsap.set(container, { x: 0 });

    // Create smooth infinite scrolling animation
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(container, {
      x: "-50%", // Move by 50% since we duplicate testimonials
      duration: 30, // Slower animation for testimonials
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-base font-semibold rounded-full flex items-center gap-2 w-fit mx-auto mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Testimonials
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>

          <p className="text-base text-muted-foreground max-w-[470px] mx-auto">
            Hear from businesses that have transformed their email deliverability with our services
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="w-full max-w-screen-xl mx-auto overflow-hidden relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div ref={containerRef} className="flex gap-6">
            {/* Render testimonials twice for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-80 sm:w-96 bg-card border-border">
                <CardContent className="p-4 sm:p-6">
                  {/* Review Text */}
                  <div className="mb-6">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-sm text-black leading-relaxed">
                      "{testimonial.review}"
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.avatar}
                      </span>
                    </div>

                    {/* Name and Position */}
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
