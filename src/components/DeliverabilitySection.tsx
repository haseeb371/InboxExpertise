import { CheckCircle2, Send, Inbox, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const DeliverabilitySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-sm font-medium rounded-full">
              Deliverability OPtimization
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Struggling With<br />E-mail Deliverability
            </h2>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Our platforms allows you to send, receive and convert currencies seamlessly in real-time, all while saving on fees.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {[
                "Convert between currencies instantly",
                "Simple and intuitive platform for managing",
                "Manage your currencies anytime, anywhere"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get started Now
            </Button>
          </div>

          {/* Right Column - Statistics Card */}
          <div className="lg:pl-8">
            <Card className="bg-card shadow-card-lg border-border">
              <CardContent className="p-8 lg:p-10">
                {/* Deliverability Score */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-8">
                    Deliverability Score
                  </h3>
                  
                  {/* Circular Progress */}
                  <div className="relative w-48 h-48 mx-auto mb-8">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                      {/* Background circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="hsl(var(--muted))"
                        strokeWidth="16"
                        fill="none"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="hsl(var(--primary))"
                        strokeWidth="16"
                        fill="none"
                        strokeDasharray={`${88 * 5.026} ${100 * 5.026}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">88%</span>
                    </div>
                    
                    {/* Decorative annotations */}
                    <div className="absolute -top-4 right-8 text-xs text-muted-foreground bg-background border border-border rounded px-2 py-1 whitespace-nowrap">
                      Healthy email setup with<br />excellent deliverability
                    </div>
                    <div className="absolute top-1/2 -right-8 flex items-center gap-2">
                      <div className="w-16 border-t-2 border-dashed border-muted-foreground/30"></div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Email Sent */}
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Send className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">1,380</div>
                    <div className="text-xs text-muted-foreground">Email sent</div>
                  </div>

                  {/* Email Received */}
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Inbox className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">1,287</div>
                    <div className="text-xs text-muted-foreground">Email Received</div>
                  </div>

                  {/* Spam Ratio */}
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <ShieldAlert className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">1.1</div>
                    <div className="text-xs text-muted-foreground">Spam Ratio</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverabilitySection;
