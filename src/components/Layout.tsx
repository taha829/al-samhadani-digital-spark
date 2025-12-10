import { ReactNode } from "react";
import Navigation from "./Navigation";
import FloatingButtons from "./FloatingButtons";
import { ThemeProvider } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className={language === "ar" ? "rtl" : "ltr"}>
        <Navigation language={language} setLanguage={setLanguage} />
        <main className="pt-16">{children}</main>
        <FloatingButtons />

        <footer className="bg-card border-t border-border mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                  {language === "en" ? "Al-Hassan" : "الحسن للخدمات المحاسبية والاستشارات الضريبية"}
                </h3>
                <p className="text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                  {language === "en"
                    ? "Your trusted partner for accounting, tax, and digital solutions."
                    : "شريكك الموثوق للمحاسبة والضرائب والحلول الرقمية"}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                  {language === "en" ? "Contact" : "تواصل معنا"}
                </h3>
                <div className="space-y-2 text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                  <p>📍 {language === "en" ? "Shmeisani, Amman, Jordan" : "الشميساني، عمان، الأردن"}</p>
                  <p className="text-primary font-semibold">📞 0798239913</p>
                  <p>💬 <a href={`https://wa.me/962798239913`} className="hover:text-primary transition-colors">WhatsApp Chat</a></p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                  {language === "en" ? "Business Hours" : "ساعات العمل"}
                </h3>
                <p className="text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
                  {language === "en"
                    ? "Sunday - Thursday: 9:00 AM - 6:00 PM"
                    : "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً"}
                </p>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
              <p>&copy; {new Date().getFullYear()} {language === "en" ? "Al-Hassan. All rights reserved." : "الحسن. جميع الحقوق محفوظة."}</p>
              <div className="mt-2 text-sm text-muted-foreground">
                {language === "en" ? (
                  <p>Built &amp; maintained by Al-Khatib Software</p>
                ) : (
                  <p>تصميم وبرمجة: الخطيب للبرمجيات</p>
                )}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
