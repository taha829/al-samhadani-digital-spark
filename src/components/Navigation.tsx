import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface NavigationProps {
  language: "en" | "ar";
  setLanguage: (lang: "en" | "ar") => void;
}

const Navigation = ({ language, setLanguage }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = {
    en: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
    ar: [
      { name: "الرئيسية", path: "/" },
      { name: "من نحن", path: "/about" },
      { name: "الخدمات", path: "/services" },
      { name: "تواصل معنا", path: "/contact" },
    ],
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "ar" : "en";
    setLanguage(next);
    // close mobile menu if open to reflect language change immediately on small screens
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className={`flex items-center gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}
          >
            <img
              src="/og-image.png"
              alt={language === "en" ? "Al-Hassan logo" : "شعار الحسن"}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-bold text-lg hidden sm:block" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en" ? "Al-Hassan" : "الحسن للخدمات المحاسبية والاستشارات الضريبية"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {navItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-primary ${location.pathname === item.path ? "text-primary font-semibold" : "text-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
              aria-label={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
              title={language === "en" ? "ع" : "EN"}
            >
              <Globe className="h-5 w-5" />
              {/* show short language label on small screens for clarity */}
              <span className="sr-only">{language === "en" ? "Switch to Arabic" : "Switch to English"}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {navItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 transition-colors hover:text-primary ${location.pathname === item.path ? "text-primary font-semibold" : "text-foreground"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
