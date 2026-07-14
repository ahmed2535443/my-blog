"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { getTranslatedLesson, getTranslatedStage } from "@/data/curriculumTranslations";

export default function LessonHeader({ stage, lesson, lessonIndex, totalLessons }) {
  const { t, lang } = useLanguage();
  const translatedLesson = getTranslatedLesson(lesson, stage.id, lang);
  const translatedStage = getTranslatedStage(stage, lang);

  return (
    <header className="mb-10">
      <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">
          {t.breadcrumbs.home}
        </Link>
        <span>/</span>
        <Link href={`/learn/${stage.id}`} className="hover:text-[var(--primary)] transition-colors">
          {stage.icon} {translatedStage.title}
        </Link>
        <span>/</span>
        <span style={{ color: "var(--foreground)" }}>{translatedLesson.title}</span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span
          className="px-3 py-1 rounded-full text-sm font-bold"
          style={{ background: stage.color + "20", color: stage.color }}
        >
          {t.stage.lesson} {lessonIndex + 1} {t.stage.of} {totalLessons}
        </span>
        {lesson.duration && (
          <span
            className="px-3 py-1 rounded-full text-sm"
            style={{ background: "var(--border)", color: "var(--muted)" }}
          >
            ⏱ {lesson.duration}
          </span>
        )}
      </div>

      <h1 className="text-4xl font-extrabold mb-3" style={{ color: "var(--foreground)" }}>
        {translatedLesson.title}
      </h1>

      {translatedLesson.description && (
        <p className="text-lg" style={{ color: "var(--muted)" }}>
          {translatedLesson.description}
        </p>
      )}
    </header>
  );
}
