import { Monitor, Mail, Settings, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-5 relative">
          <svg viewBox="0 0 48 48" className="w-full h-full">
            <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
            <path fill="#34A853" d="M6.3 14.7l7.4 5.4C15.1 16.7 19.2 14 24 14c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 7.1 29.6 5 24 5c-7.7 0-14.5 4.4-17.7 10.7z"/>
            <path fill="#FBBC05" d="M24 44c5.2 0 9.9-1.7 13.7-4.6l-6.9-5.8c-2 1.3-4.5 2.1-6.8 2.1-5.8 0-10.7-3.9-12.5-9.2l-7.3 5.7C7.5 39.1 15.1 44 24 44z"/>
            <path fill="#EA4335" d="M46.2 20H24v9h12.6c-1.2 3.2-3.5 5.8-6.5 7.5l6.9 5.8c5-4.6 7.5-11.4 7.5-18.8 0-1.4-.1-2.8-.3-4.5z"/>
          </svg>
        </div>
      ),
      title: "Google Workspace",
      description: "Premium Google Workspace accounts with full features, perfect for cold email campaigns and business communications."
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-5 grid grid-cols-2 gap-1">
          <div className="bg-[#F25022] rounded-sm"></div>
          <div className="bg-[#7FBA00] rounded-sm"></div>
          <div className="bg-[#00A4EF] rounded-sm"></div>
          <div className="bg-[#FFB900] rounded-sm"></div>
        </div>
      ),
      title: "Microsoft 365",
      description: "Reliable Microsoft 365 accounts with excellent deliverability rates for your outreach campaigns and business needs."
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-5">
          <Monitor className="w-full h-full text-primary" strokeWidth={1.5} />
        </div>
      ),
      title: "Technical Setup",
      description: "Our team handles the complete technical configuration, ensuring your emails comply with the latest standards and work again flawlessly."
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
          <Mail className="w-10 h-10 text-primary" strokeWidth={1.5} />
        </div>
      ),
      title: "Cold Email Infrastructure",
      description: "Pre-warmed email accounts with established sender reputation, ensuring maximum deliverability for your campaigns."
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-5 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
          <Settings className="w-10 h-10 text-primary" strokeWidth={1.5} />
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">24/7</span>
        </div>
      ),
      title: "Account Management",
      description: "Pre-warmed email accounts with established sender reputation, ensuring maximum deliverability for your campaigns."
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-primary" strokeWidth={1.5} />
        </div>
      ),
      title: "Comprehensive and Secure",
      description: "We provide a thorough analysis of your current setup and identify any issues that might be affecting your email deliverability."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-sm font-medium rounded-full">
            Features
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            The Future of Reliable Email Communication
          </h2>
          
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Trust us to deliver cutting-edge innovation, transparency and personalized services, all designed to help you achieve financial freedom
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-10 text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
