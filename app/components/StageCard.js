// =====================================================
// ملف: StageCard.js
// المكان: app/components/StageCard.js
// الوظيفة: مكون بطاقة مرحلة - يعرض معلومات المرحلة في الصفحة الرئيسية
// =====================================================

"use client";

import { useState } from "react";
import Link from "next/link";

function getInitialCompletedCount(stageId) {
  if (typeof window === "undefined") return 0;
  const saved = localStorage.getItem("codemaster-progress");
  if (saved) {
    const progress = JSON.parse(saved);
    return (progress[stageId] || []).length;
  }
  return 0;
}

export default function StageCard({ stage, index }) {
  const [completedCount] = useState(() => getInitialCompletedCount(stage.id));

  const percentage = Math.round((completedCount / stage.lessons.length) * 100);
  const isCompleted = percentage === 100;
  const isStarted = completedCount > 0;

  return (
    <Link
      href={`/learn/${stage.id}`}
      className="block p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
      style={{
        background: "var(--surface)",
        borderColor: isCompleted ? "var(--accent)" : "var(--border)",
      }}
    >
      {/* رأس البطاقة */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* رقم المرحلة */}
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
            style={{
              background: stage.color + "20",
              color: stage.color,
            }}
          >
            {index + 1}
          </span>
          {/* أيقونة المرحلة */}
          <span className="text-3xl">{stage.icon}</span>
        </div>

        {/* حالة الإتمام */}
        {isCompleted && (
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: "var(--accent)", color: "var(--background)" }}
          >
            مكتمل ✓
          </span>
        )}
        {isStarted && !isCompleted && (
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: "var(--primary)", color: "var(--background)" }}
          >
            قيد التقدم
          </span>
        )}
      </div>

      {/* عنوان المرحلة */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors" style={{ color: "var(--foreground)" }}>
        {stage.title}
      </h3>

      {/* وصف المرحلة */}
      <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
        {stage.description}
      </p>

      {/* عدد الدروس */}
      <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
        {stage.lessons.length} درس
      </p>

      {/* شريط التقدم */}
      <div className="w-full h-2 rounded-full" style={{ background: "var(--border)" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            background: isCompleted ? "var(--accent)" : stage.color,
          }}
        />
      </div>
    </Link>
  );
}
