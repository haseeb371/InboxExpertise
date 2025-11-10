import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

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
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-base font-semibold rounded-full mb-6">
            Testimonials
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that have transformed their email deliverability with our services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Review Text */}
                <div className="mb-6">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-sm text-foreground leading-relaxed">
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
    </section>
  );
};

export default TestimonialsSection;
