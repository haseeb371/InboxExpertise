import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedNumber = ({ value, highlight }: { value: string; highlight: boolean }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Extract number from string (e.g., "10,000+" -> 10000, "99%" -> 99, "24/7" -> 24)
  const getNumericValue = (val: string) => {
    const match = val.match(/[\d,]+/);
    if (match) {
      return parseInt(match[0].replace(/,/g, ""));
    }
    return 0;
  };

  const targetValue = getNumericValue(value);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = React.useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetValue);
    }
  }, [isInView, targetValue, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      const formatted = Math.floor(latest);

      // Format based on original value pattern
      if (value.includes(",") && formatted >= 1000) {
        const formattedWithComma = formatted.toLocaleString();
        setDisplayValue(formattedWithComma + (value.includes("+") ? "+" : ""));
      } else if (value.includes("%")) {
        setDisplayValue(formatted + "%");
      } else if (value.includes("/")) {
        setDisplayValue(formatted + "/7");
      } else {
        setDisplayValue(formatted.toString());
      }
    });

    return () => unsubscribe();
  }, [springValue, value]);

  return (
    <h3
      ref={ref}
      className={`text-4xl lg:text-5xl font-bold mb-4 ${
        highlight ? "text-white" : "text-black"
      }`}
    >
      {displayValue}
    </h3>
  );
};

const StatsSection = () => {
  const stats = [
    {
      value: "10,000+",
      description: "Supporting multiple accounts for users",
      highlight: false
    },
    {
      value: "500+",
      description: "Supporting multiple projects for clients",
      highlight: true
    },
    {
      value: "99%",
      description: "Supporting optimize deliverability for users",
      highlight: false
    },
    {
      value: "24/7",
      description: "Supporting the all time communication",
      highlight: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  stat.highlight
                    ? "bg-[#3FA9A4] text-white border-[#3FA9A4]"
                    : "bg-card border-border"
                }`}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <AnimatedNumber value={stat.value} highlight={stat.highlight} />
                  <p
                    className={`text-sm lg:text-base leading-relaxed ${
                      stat.highlight ? "text-white/90" : "text-muted-foreground"
                    }`}
                  >
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
