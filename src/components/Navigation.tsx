import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const navItems = ["Home", "Services", "Pricing", "About Us", "Blogs", "Contact Us"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <div className={`max-w-6xl w-full mx-6 transition-all duration-300 rounded-full ${
        isScrolled ? "bg-white/20 backdrop-blur-xl" : "bg-white/20 backdrop-blur-xl"
      }`}>
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Inboxexpertise Logo"
              className="h-7 w-auto"
            />
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left text-navy hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center">
            <Button className="rounded-full px-8 font-semibold hover:scale-105 transition-all bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
