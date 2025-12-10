import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface LanguageContextType {
  language: "en" | "ar";
  setLanguage: (lang: "en" | "ar") => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): "en" | "ar" => {
  try {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved === "en" || saved === "ar") return saved;
      const nav = (navigator && navigator.language) ? navigator.language : "ar";
      return nav.startsWith("en") ? "en" : "ar";
    }
  } catch (e) {
    // ignore and fallback
  }
  return "ar";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<"en" | "ar">(getInitialLanguage);

  // helper that updates state, localStorage and document attributes
  const setLanguage = (lang: "en" | "ar") => {
    setLanguageState(lang);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("language", lang);
        document.documentElement.lang = lang === "ar" ? "ar" : "en";
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      }
    } catch (e) {
      // ignore storage errors
    }
  };

  // ensure document attributes are synced on mount (in case initial state came from elsewhere)
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        document.documentElement.lang = language === "ar" ? "ar" : "en";
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        // Also add a class to body for easier CSS handling (optional)
        document.body.classList.remove("ltr", "rtl");
        document.body.classList.add(language === "ar" ? "rtl" : "ltr");
      }
    } catch (e) {
      // noop
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
