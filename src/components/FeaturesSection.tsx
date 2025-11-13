import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-5 relative flex items-center justify-center">
          <img
            src="/google-logo.png"
            alt="Google"
            className="w-16 h-16 object-contain"
          />
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
        <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center">
          <img
            src="/technical-setup-icon.svg"
            alt="Technical Setup"
            className="w-20 h-20 object-contain"
          />
        </div>
      ),
      title: "Technical Setup",
      description: "Our team handles the complete technical configuration, ensuring your emails comply with the latest standards and work again flawlessly."
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center">
          <img
            src="/email-infrastructure-icon.svg"
            alt="Cold Email Infrastructure"
            className="w-20 h-20 object-contain"
          />
        </div>
      ),
      title: "Cold Email Infrastructure",
      description: "Pre-warmed email accounts with established sender reputation, ensuring maximum deliverability for your campaigns."
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center">
          <img
            src="/account-management-icon.svg"
            alt="Account Management"
            className="w-20 h-20 object-contain"
          />
        </div>
      ),
      title: "Account Management",
      description: "Pre-warmed email accounts with established sender reputation, ensuring maximum deliverability for your campaigns."
    },
    {
      icon: (
        <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center">
          <img
            src="/secure-icon.svg"
            alt="Comprehensive and Secure"
            className="w-20 h-20 object-contain"
          />
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
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-base font-semibold rounded-full flex items-center gap-2 w-fit mx-auto">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Features
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            The Future of Reliable Email Communication
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Trust us to deliver cutting-edge innovation, transparency and personalized services designed to maximize your email deliverability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-border transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                {feature.icon}
                <h3 className="text-xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
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
