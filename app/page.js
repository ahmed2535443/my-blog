"use client";

import Link from "next/link";
import { stages, getTotalLessons } from "./data/curriculum";
import StageCard from "./components/StageCard";
import { useLanguage } from "./components/LanguageProvider";

export default function Home() {
  const totalLessons = getTotalLessons();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, var(--primary) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--secondary) 0%, transparent 50%)",
          }}
        />

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--primary)20", color: "var(--primary)" }}>
            {t.home.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span style={{ color: "var(--foreground)" }}>{t.home.title1}</span>
            <span style={{ color: "var(--primary)" }}>{t.home.title2}</span>
            <br />
            <span style={{ color: "var(--secondary)" }}>{t.home.title3}</span>
            <span style={{ color: "var(--foreground)" }}>{t.home.title4}</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--muted)" }}>
            {t.home.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/learn/html/01-introduction-to-html"
              className="px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--primary)",
                color: "var(--background)",
              }}
            >
              {t.home.startBtn} ←
            </Link>
            <Link
              href="/learn"
              className="px-8 py-4 rounded-xl text-lg font-bold border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              {t.home.viewCurriculum}
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="text-center">
              <p className="text-3xl font-extrabold" style={{ color: "var(--primary)" }}>
                {stages.length}
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.home.stats.stages}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold" style={{ color: "var(--secondary)" }}>
                {totalLessons}
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.home.stats.lessons}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold" style={{ color: "var(--accent)" }}>
                +10
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.home.stats.projects}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold" style={{ color: "var(--danger)" }}>
                100%
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.home.stats.free}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
              {t.home.roadmapTitle}
            </h2>
            <p className="text-lg" style={{ color: "var(--muted)" }}>
              {t.home.roadmapSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <StageCard key={stage.id} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
              {t.home.whyTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <span className="text-3xl block mb-3">🌍</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>{t.home.features.arabic.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.home.features.arabic.desc}</p>
            </div>

            <div className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <span className="text-3xl block mb-3">🎯</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>{t.home.features.fromZero.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.home.features.fromZero.desc}</p>
            </div>

            <div className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <span className="text-3xl block mb-3">💼</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>{t.home.features.projects.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.home.features.projects.desc}</p>
            </div>

            <div className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <span className="text-3xl block mb-3">✏️</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>{t.home.features.exercises.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.home.features.exercises.desc}</p>
            </div>

            <div className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <span className="text-3xl block mb-3">📊</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>{t.home.features.progress.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.home.features.progress.desc}</p>
            </div>

            <div className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <span className="text-3xl block mb-3">⚖️</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>{t.home.features.comparison.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{t.home.features.comparison.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center p-12 rounded-3xl border-2" style={{ background: "var(--surface)", borderColor: "var(--primary)" }}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
            {t.home.ctaTitle}
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
            {t.home.ctaSubtitle}
          </p>
          <Link
            href="/learn/html/01-introduction-to-html"
            className="inline-block px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--primary)",
              color: "var(--background)",
            }}
          >
            {t.home.ctaBtn} ←
          </Link>
        </div>
      </section>
    </div>
  );
}
