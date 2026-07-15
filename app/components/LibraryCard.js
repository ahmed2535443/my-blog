"use client";

import { useLanguage } from "@/components/LanguageProvider";

const categoryColors = {
  styling: { bg: "#ede9fe", text: "#5b21b6", border: "#c4b5fd" },
  state: { bg: "#dbeafe", text: "#1e40af", border: "#93c5fd" },
  forms: { bg: "#d1fae5", text: "#065f46", border: "#6ee7b7" },
  testing: { bg: "#fef3c7", text: "#92400e", border: "#fcd34d" },
  performance: { bg: "#fce7f3", text: "#9d174d", border: "#f9a8d4" },
  tools: { bg: "#e0e7ff", text: "#3730a3", border: "#a5b4fc" },
  animation: { bg: "#fff1f2", text: "#9f1239", border: "#fda4af" },
  default: { bg: "#f3f4f6", text: "#374151", border: "#d1d5db" },
};

const categoryLabels = {
  ar: { styling: "تنسيق", state: "إدارة الحالة", forms: "النماذج", testing: "الاختبار", performance: "الأداء", tools: "أدوات", animation: "رسوم متحركة" },
  en: { styling: "Styling", state: "State Management", forms: "Forms", testing: "Testing", performance: "Performance", tools: "Tools", animation: "Animation" },
  fr: { styling: "Style", state: "Gestion d'état", forms: "Formulaires", testing: "Tests", performance: "Performance", tools: "Outils", animation: "Animation" },
  de: { styling: "Styling", state: "Zustandsverwaltung", forms: "Formulare", testing: "Tests", performance: "Leistung", tools: "Tools", animation: "Animation" },
};

export default function LibraryCard({ libraries = [] }) {
  const { lang } = useLanguage();
  const labels = categoryLabels[lang] || categoryLabels.en;

  if (!libraries.length) return null;

  const title = {
    ar: "مكتبات مقترحة",
    en: "Recommended Libraries",
    fr: "Bibliothèques Recommandées",
    de: "Empfohlene Bibliotheken",
  };

  return (
    <div className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📦</span>
        <h2 className="text-xl font-bold" style={{ color: "var(--secondary)" }}>
          {title[lang] || title.en}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {libraries.map((lib, i) => {
          const colors = categoryColors[lib.category] || categoryColors.default;
          const catLabel = labels[lib.category] || lib.category;
          return (
            <div
              key={i}
              className="rounded-xl p-4 border transition-all hover:scale-[1.02]"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <p className="font-bold" style={{ color: "var(--foreground)" }}>
                  {lib.name}
                </p>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-bold shrink-0"
                  style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
                >
                  {catLabel}
                </span>
              </div>
              <p className="text-sm mb-2" style={{ color: "var(--muted)" }}>
                {lib.description}
              </p>
              {lib.url && (
                <a
                  href={lib.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold hover:underline"
                  style={{ color: "var(--primary)" }}
                >
                  {lang === "ar" ? "الرابط" : lang === "fr" ? "Lien" : lang === "de" ? "Link" : "Link"} →
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
