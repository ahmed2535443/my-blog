"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getTranslation, supportedLanguages } from "@/i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("lang");
    if (saved && supportedLanguages.includes(saved)) {
      setLang(saved);
    }
  }, []);

  function changeLanguage(newLang) {
    if (!supportedLanguages.includes(newLang)) return;
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  }

  const t = getTranslation(lang);

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ lang, t, changeLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
