// =====================================================
// ملف: LessonSidebar.js
// المكان: app/components/LessonSidebar.js
// الوظيفة: الشريط الجانبي لصفحة الدرس - يعرض قائمة الدروس في المرحلة
// =====================================================

"use client";

import { useState } from "react";
import Link from "next/link";

function getInitialCompleted(stageId) {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem("codemaster-progress");
  if (saved) {
    const progress = JSON.parse(saved);
    return progress[stageId] || [];
  }
  return [];
}

export default function LessonSidebar({ stage, currentSlug }) {
  const [completedLessons, setCompletedLessons] = useState(() => getInitialCompleted(stage.id));

  // تبديل حالة إتمام الدرس
  function toggleLesson(lessonSlug) {
    const updated = completedLessons.includes(lessonSlug)
      ? completedLessons.filter((s) => s !== lessonSlug)
      : [...completedLessons, lessonSlug];

    setCompletedLessons(updated);

    // حفظ في localStorage
    const saved = localStorage.getItem("codemaster-progress");
    const progress = saved ? JSON.parse(saved) : {};
    progress[stage.id] = updated;
    localStorage.setItem("codemaster-progress", JSON.stringify(progress));
  }

  // حساب نسبة التقدم
  const percentage = Math.round((completedLessons.length / stage.lessons.length) * 100);

  return (
    <nav
      className="w-full lg:w-72 shrink-0 p-4 rounded-xl border self-start sticky top-[90px]"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* عنوان المرحلة */}
      <div className="mb-4">
        <h3 className="font-bold text-lg mb-1" style={{ color: stage.color }}>
          {stage.icon} {stage.title}
        </h3>
        {/* شريط التقدم */}
        <div className="w-full h-2 rounded-full mt-2" style={{ background: "var(--border)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${percentage}%`,
              background: stage.color,
            }}
          />
        </div>
        <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
          {completedLessons.length} / {stage.lessons.length} مكتمل
        </p>
      </div>

      {/* قائمة الدروس */}
      <ul className="space-y-1">
        {stage.lessons.map((lesson, index) => {
          const isActive = lesson.slug === currentSlug;
          const isCompleted = completedLessons.includes(lesson.slug);

          return (
            <li key={lesson.id} className="flex items-center gap-2">
              {/* زر التحقق */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleLesson(lesson.slug);
                }}
                className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-xs transition-all duration-200"
                style={{
                  background: isCompleted ? stage.color : "transparent",
                  border: `2px solid ${isCompleted ? stage.color : "var(--border)"}`,
                  color: isCompleted ? "var(--background)" : "transparent",
                  cursor: "pointer",
                }}
              >
                {isCompleted ? "✓" : ""}
              </button>

              {/* رابط الدرس */}
              <Link
                href={`/learn/${stage.id}/${lesson.slug}`}
                className="flex-1 px-3 py-2 rounded-lg text-sm transition-all duration-200"
                style={{
                  background: isActive ? stage.color + "15" : "transparent",
                  color: isActive ? stage.color : isCompleted ? "var(--muted)" : "var(--foreground)",
                  fontWeight: isActive ? "bold" : "normal",
                }}
              >
                <span className="text-xs opacity-60">{index + 1}.</span> {lesson.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
