"use client";

import { useLanguage } from "@/components/LanguageProvider";

const trickIcons = {
  lightbulb: "💡",
  rocket: "🚀",
  zap: "⚡",
  fire: "🔥",
  star: "⭐",
  gem: "💎",
  tool: "🔧",
  brain: "🧠",
};

export default function TrickCard({ tricks = [] }) {
  const { lang } = useLanguage();

  if (!tricks.length) return null;

  const title = {
    ar: "نصائح وحيل",
    en: "Tips & Tricks",
    fr: "Astuces et Conseils",
    de: "Tipps & Tricks",
  };

  return (
    <div className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">✨</span>
        <h2 className="text-xl font-bold" style={{ color: "var(--accent)" }}>
          {title[lang] || title.en}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tricks.map((trick, i) => {
          const icon = trickIcons[trick.icon] || trickIcons.lightbulb;
          return (
            <div
              key={i}
              className="rounded-xl p-4 border transition-all hover:scale-[1.02]"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-0.5">{icon}</span>
                <div>
                  <p className="font-bold mb-1" style={{ color: "var(--foreground)" }}>
                    {trick.title}
                  </p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {trick.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
