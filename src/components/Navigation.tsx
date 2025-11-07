import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Navigation = () => {
  const navItems = ["Home", "Services", "Pricing", "About Us", "Blogs", "Contact Us"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-semibold text-navy">Inboxexpertise</span>
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-teal-text font-medium hover:text-navy transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary/10 px-8"
            >
              Sign in
            </Button>
            <Button className="rounded-full px-8 hover:scale-105">
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
