"use client";

import { useLanguage } from "@/components/LanguageProvider";

const difficultyColors = {
  easy: { bg: "#dcfce7", text: "#166534", border: "#86efac" },
  medium: { bg: "#fef9c3", text: "#854d0e", border: "#fde047" },
  hard: { bg: "#fee2e2", text: "#991b1b", border: "#fca5a5" },
};

const difficultyLabels = {
  ar: { easy: "سهل", medium: "متوسط", hard: "صعب" },
  en: { easy: "Easy", medium: "Medium", hard: "Hard" },
  fr: { easy: "Facile", medium: "Moyen", hard: "Difficile" },
  de: { easy: "Einfach", medium: "Mittel", hard: "Schwer" },
};

export default function InterviewQuestions({ questions = [] }) {
  const { lang } = useLanguage();
  const labels = difficultyLabels[lang] || difficultyLabels.en;

  if (!questions.length) return null;

  return (
    <div className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🎤</span>
        <h2 className="text-xl font-bold" style={{ color: "var(--primary)" }}>
          {lang === "ar" ? "أسئلة الانترفيو" : lang === "fr" ? "Questions d'entrevue" : lang === "de" ? "Interviewfragen" : "Interview Questions"}
        </h2>
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const colors = difficultyColors[q.difficulty] || difficultyColors.medium;
          const diffLabel = labels[q.difficulty] || labels.medium;
          return (
            <div
              key={i}
              className="rounded-xl p-5 border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-start gap-3 mb-3">
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-bold shrink-0"
                  style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
                >
                  {diffLabel}
                </span>
                <p className="font-bold" style={{ color: "var(--foreground)" }}>
                  {q.question}
                </p>
              </div>
              <div
                className="p-3 rounded-lg text-sm"
                style={{ background: "var(--background)", color: "var(--foreground)" }}
              >
                <p className="font-bold mb-1" style={{ color: "var(--secondary)" }}>
                  {lang === "ar" ? "الإجابة:" : lang === "fr" ? "Réponse :" : lang === "de" ? "Antwort:" : "Answer:"}
                </p>
                <p dangerouslySetInnerHTML={{ __html: q.answer }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
