import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/">
                <img src="/logo.png" alt="Company Logo" className="h-10 mb-4 cursor-pointer" />
              </Link>
              <p className="text-sm text-navy-foreground/80 leading-relaxed">
                Providing premium email deliverability solutions to help businesses reach their audience effectively and reliably.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('features')}
                  className="text-sm text-navy-foreground/80 hover:text-primary transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('pricing')}
                  className="text-sm text-navy-foreground/80 hover:text-primary transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleScrollToSection('features')}
                  className="text-sm text-navy-foreground/80 hover:text-primary transition-colors text-left"
                >
                  Google Workspace
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('features')}
                  className="text-sm text-navy-foreground/80 hover:text-primary transition-colors text-left"
                >
                  Microsoft 365
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('features')}
                  className="text-sm text-navy-foreground/80 hover:text-primary transition-colors text-left"
                >
                  Technical Setup
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('features')}
                  className="text-sm text-navy-foreground/80 hover:text-primary transition-colors text-left"
                >
                  Account Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('features')}
                  className="text-sm text-navy-foreground/80 hover:text-primary transition-colors text-left"
                >
                  Deliverability Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-navy-foreground/80">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:support@inboxexpertise.com" className="hover:text-primary transition-colors">
                  support@inboxexpertise.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-foreground/80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>4517 Washington Ave.<br />Manchester, Kentucky 39495</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-navy-foreground/10 border-navy-foreground/20 text-navy-foreground placeholder:text-navy-foreground/50"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-navy-foreground/60">
              © {new Date().getFullYear()} InboxExpertise. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-navy-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-navy-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
