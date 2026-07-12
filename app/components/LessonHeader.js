// =====================================================
// ملف: LessonHeader.js
// المكان: app/components/LessonHeader.js
// الوظيفة: مكون رأس صفحة الدرس - العنوان والوصف ومدة الدرس
// =====================================================

import Link from "next/link";

export default function LessonHeader({ stage, lesson, lessonIndex, totalLessons }) {
  return (
    <header className="mb-10">
      {/* مسار التعلم (Breadcrumb) */}
      <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">
          الرئيسية
        </Link>
        <span>/</span>
        <Link href={`/learn/${stage.id}`} className="hover:text-[var(--primary)] transition-colors">
          {stage.icon} {stage.title}
        </Link>
        <span>/</span>
        <span style={{ color: "var(--foreground)" }}>{lesson.title}</span>
      </div>

      {/* رقم الدرس */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="px-3 py-1 rounded-full text-sm font-bold"
          style={{ background: stage.color + "20", color: stage.color }}
        >
          الدرس {lessonIndex + 1} / {totalLessons}
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

      {/* العنوان */}
      <h1 className="text-4xl font-extrabold mb-3" style={{ color: "var(--foreground)" }}>
        {lesson.title}
      </h1>

      {/* الوصف */}
      {lesson.description && (
        <p className="text-lg" style={{ color: "var(--muted)" }}>
          {lesson.description}
        </p>
      )}
    </header>
  );
}
