"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { supportedLanguages } from "@/i18n";

const langFlags = {
  ar: "🇸🇦",
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
};

export default function LanguageSwitcher() {
  const { lang, t, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 text-lg"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          cursor: "pointer",
        }}
        aria-label="Change language"
        title={t.languages[lang]}
      >
        {langFlags[lang]}
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 rounded-xl border shadow-xl overflow-hidden z-50 min-w-[140px]"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {supportedLanguages.map((l) => (
            <button
              key={l}
              onClick={() => {
                changeLanguage(l);
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors"
              style={{
                color: l === lang ? "var(--primary)" : "var(--foreground)",
                background: l === lang ? "rgba(56, 189, 248, 0.1)" : "transparent",
                cursor: "pointer",
                textAlign: "start",
              }}
            >
              <span className="text-lg">{langFlags[l]}</span>
              <span>{t.languages[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
