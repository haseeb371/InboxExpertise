import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Layout, Smartphone, ArrowRight } from "lucide-react";

const WelcomeOverlay = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = document.cookie
      .split("; ")
      .find((row) => row.startsWith("hasVisited="));

    if (!hasVisited) {
      // Show welcome screen for first-time visitors
      setShowWelcome(true);
    }
  }, []);

  const handleContinue = () => {
    // Set cookie that expires in 1 year
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie = `hasVisited=true; expires=${expiryDate.toUTCString()}; path=/`;

    setShowWelcome(false);
  };

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
          onClick={handleContinue}
        >
          {/* Ambient background effects - Simplified */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/15 rounded-full blur-[100px]" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/15 rounded-full blur-[100px]" />
          </div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0, rotateX: 10 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.85, opacity: 0, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            style={{ perspective: "1000px" }}
          >
            <div className="relative bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Header Section */}
              <div className="relative bg-gradient-to-b from-[#2a8c87] to-primary px-8 sm:px-12 py-16 sm:py-20 text-center overflow-hidden">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:30px_30px]" />

                {/* Floating Particles - Reduced for performance */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}

                {/* Gradient Orbs - Static for performance */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="inline-block mb-6"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl pointer-events-none" />
                      <div className="relative w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center">
                        <img src="/logo.png" alt="InboxExpertise Logo" className="w-full h-full object-contain drop-shadow-2xl scale-[2]" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white mb-6 drop-shadow-2xl tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                      Welcomeback to InboxExpertise!
                    </h1>
                    <p className="text-xl sm:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-light">
                      We've completely reimagined our platform with a stunning new design, enhanced features, and powerful analytics to deliver the ultimate email deliverability experience.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-6 sm:px-12 py-16 bg-white">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14"
                >
                  {[
                    {
                      icon: <Layout className="w-8 h-8" />,
                      title: "Intuitive Dashboard",
                      desc: "Monitor your email health at a glance"
                    },
                    {
                      icon: <Zap className="w-8 h-8" />,
                      title: "Real-Time Analytics",
                      desc: "Track deliverability metrics instantly"
                    },
                    {
                      icon: <Smartphone className="w-8 h-8" />,
                      title: "Access Anywhere",
                      desc: "Manage emails on any device"
                    },
                    {
                      icon: <Sparkles className="w-8 h-8" />,
                      title: "Expert Support",
                      desc: "Dedicated team to help you succeed"
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="group relative text-center"
                    >
                      <div className="flex flex-col items-center">
                        <div className="mb-5 text-primary/40">
                          {feature.icon}
                        </div>
                        <h3 className="font-semibold text-[#333333] mb-2 text-lg" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>{feature.title}</h3>
                        <p className="text-base text-[#666666] leading-relaxed">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                >
                  <Button
                    onClick={handleContinue}
                    size="lg"
                    className="group relative overflow-hidden rounded-xl px-12 py-7 text-lg font-semibold bg-primary text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Let's Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-center text-sm text-[#999999] mt-10"
                >
                  Click anywhere outside or press ESC to explore our platform
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeOverlay;
