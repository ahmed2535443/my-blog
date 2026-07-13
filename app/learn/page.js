"use client";

import Link from "next/link";
import { stages, getTotalLessons } from "../data/curriculum";
import { useLanguage } from "../components/LanguageProvider";

export default function LearnPage() {
  const totalLessons = getTotalLessons();
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
          {t.learn.title}
        </h1>
        <p className="text-lg" style={{ color: "var(--muted)" }}>
          {t.learn.subtitle.replace("{stages}", stages.length).replace("{lessons}", totalLessons)}
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        {stages.map((stage, index) => (
          <div key={stage.id} className="relative">
            {index < stages.length - 1 && (
              <div
                className="absolute right-6 top-[60px] w-0.5 h-[calc(100%-20px)]"
                style={{ background: "var(--border)" }}
              />
            )}

            <Link
              href={`/learn/${stage.id}`}
              className="flex items-start gap-6 p-6 rounded-2xl border-2 mb-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg group relative z-10"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 z-10"
                style={{
                  background: stage.color + "20",
                  color: stage.color,
                  border: `2px solid ${stage.color}`,
                }}
              >
                {index + 1}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{stage.icon}</span>
                  <h2 className="text-xl font-bold group-hover:text-[var(--primary)] transition-colors" style={{ color: "var(--foreground)" }}>
                    {stage.title}
                  </h2>
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>
                  {stage.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {stage.lessons.map((lesson) => (
                    <span
                      key={lesson.id}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        background: "var(--border)",
                        color: "var(--muted)",
                      }}
                    >
                      {lesson.title}
                    </span>
                  ))}
                </div>

                <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
                  📚 {stage.lessons.length} {t.learn.lessons}
                </p>
              </div>

              <span
                className="text-xl mt-4 transition-transform duration-300 group-hover:-translate-x-2"
                style={{ color: "var(--muted)" }}
              >
                ←
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
