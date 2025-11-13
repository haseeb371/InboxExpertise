import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", scrollTo: "features" },
    { label: "Pricing", scrollTo: "pricing" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Check if navbar is over a white/light section
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section, div[id]');
      let isOverWhite = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + rect.height;
        const navPosition = scrollY + 80; // Approximate navbar center position

        // Check if navbar is within this section
        if (navPosition >= sectionTop && navPosition <= sectionBottom) {
          const bgColor = window.getComputedStyle(section).backgroundColor;
          const classList = section.className;

          // Check for white/light backgrounds by class names or computed styles
          if (
            classList.includes('bg-background') ||
            classList.includes('bg-card') ||
            classList.includes('bg-white') ||
            classList.includes('bg-muted/30') ||
            bgColor === 'rgb(255, 255, 255)' ||
            bgColor === 'rgba(255, 255, 255, 1)' ||
            bgColor.includes('hsl(0, 0%, 100%)')
          ) {
            isOverWhite = true;
          }
        }
      });

      setIsOverWhiteSection(isOverWhite);

      // Detect active section on home page
      if (location.pathname === '/') {
        const featuresSection = document.getElementById('features');
        const pricingSection = document.getElementById('pricing');

        if (pricingSection) {
          const rect = pricingSection.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection('pricing');
            return;
          }
        }

        if (featuresSection) {
          const rect = featuresSection.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection('features');
            return;
          }
        }

        setActiveSection('');
      } else {
        setActiveSection('');
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (item: any) => {
    setIsMobileMenuOpen(false); // Close mobile menu on click

    if (item.scrollTo) {
      // If not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.getElementById(item.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(item.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const isActive = (item: any) => {
    // For scroll-to items (Services, Pricing), check if their section is active
    if (item.scrollTo) {
      return activeSection === item.scrollTo;
    }
    // For Home page, only active if on home path AND no section is active
    if (item.path === '/') {
      return location.pathname === '/' && !activeSection;
    }
    // For other path items, check if current path matches
    return location.pathname === item.path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <div className="max-w-6xl w-full mx-6 transition-all duration-300 rounded-full bg-white/95 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Inboxexpertise Logo"
              className="h-7 w-auto"
            />
          </Link>

          {/* Navigation Menu - Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-transform after:origin-left ${
                  isActive(item)
                    ? "text-primary after:scale-x-100"
                    : "text-navy hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => window.open('https://calendly.com/alex-inboxexpertise/30min', '_blank')}
              className="hidden sm:flex rounded-full px-8 font-semibold hover:scale-105 transition-all bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-navy hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-6 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`px-6 py-3 text-left font-medium transition-colors ${
                    isActive(item)
                      ? "text-primary bg-primary/5"
                      : "text-navy hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 py-3">
                <Button
                  onClick={() => {
                    window.open('https://calendly.com/alex-inboxexpertise/30min', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
