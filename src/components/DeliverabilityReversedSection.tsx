import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const DeliverabilityReversedSection = () => {

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Integration Image */}
          <div className="lg:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="bg-card border-border overflow-visible">
                <CardContent className="pt-8 px-0 pb-0">
                  <img
                    src="/group.svg"
                    alt="Integration Tools"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-base font-semibold rounded-full flex items-center gap-2 w-fit">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Smart Integration
            </Badge>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-black leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Integration with Advanced Tool's
            </motion.h2>

            <motion.p
              className="text-base lg:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Its easy setup ensures businesses can start using it effortlessly, making financial management more straightforward and reliable.
            </motion.p>

            {/* Checklist */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => window.open('https://calendly.com/alex-inboxexpertise/30min', '_blank')}
                className="rounded-full px-10 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started Now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverabilityReversedSection;
