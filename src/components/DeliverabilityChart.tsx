import { Badge } from "@/components/ui/badge";
import { Battery, Signal, Wifi, Menu, X } from "lucide-react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DeliverabilityChart = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [isCharging, setIsCharging] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateBattery = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery: any = await (navigator as any).getBattery();
          setBatteryLevel(Math.floor(battery.level * 100));
          setIsCharging(battery.charging);

          battery.addEventListener('levelchange', () => {
            setBatteryLevel(Math.floor(battery.level * 100));
          });

          battery.addEventListener('chargingchange', () => {
            setIsCharging(battery.charging);
          });
        } catch (error) {
          console.log('Battery API not supported');
        }
      }
    };

    updateBattery();
  }, []);

  const menuItems = [
    "Home",
    "Services",
    "Pricing",
    "About Us",
    "Blogs",
    "Contact Us"
  ];

  return (
    <div className="relative w-[340px] h-[680px] bg-black rounded-[48px] p-1 overflow-hidden">
      {/* Screen Content */}
      <div className="w-full h-full bg-gradient-to-b from-primary-light to-primary rounded-[44px] overflow-hidden relative pt-8">
        {/* Interactive Grid Background */}
        <div className="absolute inset-0 w-full h-full">
          <InteractiveGridPattern
            width={30}
            height={30}
            className="opacity-30"
            squaresClassName="fill-white/10 stroke-white/20 hover:fill-white/30"
          />
        </div>

        {/* Navigation Bar */}
        <div className="absolute top-10 left-0 right-0 px-6 flex items-center justify-between z-40">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Logo"
            className="h-5 w-auto"
          />
          {/* Burger Menu */}
          <Menu
            className="w-6 h-6 text-white cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* Hero Content */}
        <div className="absolute top-40 left-0 right-0 px-6 text-center z-30">
          {/* Badge */}
          <div className="flex justify-center mb-3">
            <div className="bg-white/10 backdrop-blur-xl rounded-full pl-1.5 pr-2 py-1 flex items-center gap-1">
              <Badge className="bg-white text-navy hover:bg-white rounded-full px-2 py-0.5 text-[8px] font-semibold">
                New
              </Badge>
              <span className="text-[10px] font-medium text-white">Email deliverability enhanced</span>
            </div>
          </div>

          {/* Heading */}
          <motion.h1
            className="text-[24px] font-bold text-white leading-tight tracking-tight mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {["Ensure Your Email Hits", "the Right Inbox"].map((line, lineIndex) => (
              <motion.span
                key={lineIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: lineIndex === 0 ? 0 : 1.2
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
                        : 1.2 + charIndex * 0.05
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {lineIndex === 0 && <br />}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-[11px] text-white/90 leading-relaxed mb-4 px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {"We help you configure smart authentication, fix deliverability issues, and boost sender reputation for higher open and reply rates.".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.03,
                  delay: 2.3 + index * 0.02
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Get Started Button */}
          <button
            onClick={() => window.open('https://calendly.com/alex-inboxexpertise/30min', '_blank')}
            className="bg-primary text-white px-8 py-2 rounded-full text-xs font-semibold hover:scale-105 transition-all"
          >
            Get Started
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`absolute rounded-l-xl top-7 right-0 bottom-0 w-[50%] bg-white shadow-2xl z-50 transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-navy font-bold text-sm">Menu</span>
            <X
              className="w-5 h-5 text-navy cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block py-3 px-2 text-navy text-sm font-medium hover:bg-primary/5 rounded-lg transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Get Started Button */}
            <button
              onClick={() => window.open('https://calendly.com/alex-inboxexpertise/30min', '_blank')}
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all w-full mt-4"
            >
              Get Started
            </button>
          </nav>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="absolute inset-0 bg-black/30 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Status Bar - on top of screen */}
        <div className="absolute bg-white/40 top-0 left-0 right-0 h-7 px-6 flex items-center justify-between text-black text-[13px] font-bold z-30">
          {/* Left side - Time */}
          <span className="pl-2">{currentTime}</span>

          {/* Right side - Icons */}
          <div className="flex items-center gap-1.5" style={{ paddingRight: '2px' }}>
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <div className="relative flex items-center">
              {/* Battery Body */}
              <div className={`w-7 h-4 border border-black rounded-[3px] relative flex items-center justify-center ${
                batteryLevel <= 20 ? 'border-red-500' : 'border-black'
              }`}>
                {/* Battery Fill */}
                <div
                  className={`absolute inset-0 h-full rounded-[2px] ${
                    batteryLevel > 20 ? 'bg-green-500' : 'bg-red-500'
                  } ${isCharging ? 'animate-pulse' : ''}`}
                  style={{ width: `${batteryLevel}%` }}
                />
                {/* Battery Percentage Text */}
                <span className="relative z-10 text-[8px] font-bold text-white">
                  {batteryLevel}%
                </span>
              </div>
              {/* Battery Tip */}
              <div className={`w-[2px] h-2.5 rounded-r-sm ${
                batteryLevel <= 20 ? 'bg-red-500' : 'bg-black'
              }`} />
            </div>
          </div>
        </div>

        {/* iPhone Notch */}
        <div className="absolute top-0 left-[49%] z-50 -translate-x-1/2 w-36 h-7 bg-black rounded-b-[20px] z-20"></div>
      </div>
    </div>
  );
};

export default DeliverabilityChart;
