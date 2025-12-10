import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, Code, Megaphone, CheckCircle, Users, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTypewriter } from "@/hooks/useTypewriter";
import heroImage from "@/assets/hero-accounting.jpg";

const Home = () => {
  const { language } = useLanguage();

  const heroTitle = {
    en: "Accounting, Tax, and Digital Solutions",
    ar: "المحاسبة والضرائب والحلول الرقمية"
  };

  const typedText = useTypewriter(heroTitle[language], 80);

  const services = [
    { icon: Calculator, title: "Accounting", titleAr: "المحاسبة", color: "text-primary" },
    { icon: FileText, title: "Tax Services", titleAr: "الضرائب", color: "text-primary" },
    { icon: Code, title: "Software", titleAr: "البرمجة", color: "text-primary" },
    { icon: Megaphone, title: "Marketing", titleAr: "التسويق", color: "text-primary" },
  ];

  const features = [
    { icon: Users, title: "Professional Team", titleAr: "فريق محترف" },
    { icon: TrendingUp, title: "Fast & Reliable", titleAr: "سريع وموثوق" },
    { icon: CheckCircle, title: "Accurate Reporting", titleAr: "تقارير دقيقة" },
    { icon: Shield, title: "Client-Focused", titleAr: "تركيز على العميل" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {language === "en" ? "Your Trusted Partner for" : "شريكك الموثوق في"}<br />
            <span className="text-primary min-h-[1.2em] inline-block">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {language === "en"
              ? "We simplify financial management, tax compliance, and digital growth for your business success."
              : "نبسط الإدارة المالية والامتثال الضريبي والنمو الرقمي لنجاح أعمالك"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8"
              asChild
            >
              <a href="tel:+962798239913">
                📞 {language === "en" ? "Call Us" : "اتصل بنا"}
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white text-lg px-8"
              asChild
            >
              <a href="https://wa.me/962798239913" target="_blank" rel="noopener noreferrer">
                💬 {language === "en" ? "Chat on WhatsApp" : "محادثة واتساب"}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-xl">
            <span className="text-primary font-bold">📞 0798239913</span>
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en" ? "Comprehensive Business Solutions" : "حلول أعمال شاملة"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en"
                ? "Al-Hassan combines expertise in accounting, taxation, software development, and digital marketing to empower your business growth."
                : "يجمع الحسن الخبرة في المحاسبة والضرائب وتطوير البرمجيات والتسويق الرقمي لتمكين نمو أعمالك"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <service.icon className={`h-12 w-12 mx-auto mb-4 ${service.color}`} />
                  <h3 className="font-semibold text-lg" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                    {language === "en" ? service.title : service.titleAr}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              {language === "en" ? "Why Choose Al-Hassan?" : "لماذا تختار الحسن؟"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <feature.icon className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                  {language === "en" ? feature.title : feature.titleAr}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {language === "en"
              ? "Let's Handle Your Accounting and Digital Growth"
              : "دعنا نتولى محاسبتك ونموك الرقمي"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
            {language === "en"
              ? "While you focus on your business, we'll take care of your finances and online presence."
              : "بينما تركز على عملك، سنهتم بأموالك وحضورك الرقمي"}
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8"
            asChild
          >
            <a href="/contact">
              {language === "en" ? "Get a Free Consultation" : "احصل على استشارة مجانية"}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
