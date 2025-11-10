import { CheckCircle2, Send, Inbox, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { useRef, useState, useEffect } from "react";

const DeliverabilityReversedSection = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Animate from 0 to 88
      const duration = 1500; // 1.5 seconds
      const steps = 60;
      const increment = 88 / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setAnimatedValue(Math.min(Math.round(increment * currentStep), 88));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const chartData = [
    {
      name: "Deliverability",
      value: animatedValue,
      fill: "hsl(var(--primary))",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Statistics Card */}
          <div className="lg:pr-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8 lg:p-10">
                {/* Deliverability Score */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-8">
                    Deliverability Score
                  </h3>
                  
                  {/* Circular Progress Chart */}
                  <div ref={chartRef} className="relative w-64 h-64 mx-auto mb-6">
                    <RadialBarChart
                      width={256}
                      height={256}
                      cx={128}
                      cy={128}
                      innerRadius={80}
                      outerRadius={120}
                      barSize={20}
                      data={chartData}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                      />
                      <RadialBar
                        background={{ fill: "hsl(var(--muted))" }}
                        dataKey="value"
                        cornerRadius={10}
                        isAnimationActive={true}
                        animationDuration={1500}
                      />
                    </RadialBarChart>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">{animatedValue}%</span>
                    </div>

                    {/* Decorative annotations */}
                    <div className="absolute -top-4 right-8 text-xs text-muted-foreground bg-background border border-border rounded px-2 py-1 whitespace-nowrap">
                      Healthy email setup with<br />excellent deliverability
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

          {/* Right Column - Content */}
          <div className="space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-base font-semibold rounded-full flex items-center gap-2 w-fit">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Deliverability Optimization
            </Badge>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {["Struggling With", "Email Deliverability?"].map((line, lineIndex) => (
                <motion.span
                  key={lineIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.05,
                    delay: lineIndex === 0 ? 0 : 0.9
                  }}
                >
                  {line.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${lineIndex}-${charIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.05,
                        delay: lineIndex === 0
                          ? charIndex * 0.05
                          : 0.9 + charIndex * 0.05
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {lineIndex === 0 && <br />}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              className="text-base lg:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {"Our platform helps you optimize email authentication, monitor deliverability metrics, and improve sender reputation to ensure your emails reach the inbox.".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.03,
                    delay: 2.1 + index * 0.02
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>

            {/* Checklist */}
            <div className="space-y-4">
              {[
                "Real-time deliverability monitoring and alerts",
                "Simple and intuitive platform for managing email health",
                "Comprehensive analytics accessible anytime, anywhere"
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
              className="rounded-full px-10 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverabilityReversedSection;
