// =====================================================
// ملف: ProgressBar.js (مُحدَّث)
// المكان: app/components/ProgressBar.js
// الوظيفة: مكون شريط التقدم - يعرض نسبة إتمام الدروس
// =====================================================

"use client";

import { useState } from "react";

// =====================================================
// 💡 نقرأ القيمة الأولية من localStorage مباشرة
//    بدلاً من استخدام useEffect لقراءتها
//    هذا هو النمط المُوصى به في React 19
// =====================================================
function getInitialProgress(stageId) {
  if (typeof window === "undefined") return 0;

  const saved = localStorage.getItem("codemaster-progress");
  if (saved) {
    const progress = JSON.parse(saved);
    return (progress[stageId] || []).length;
  }
  return 0;
}

export default function ProgressBar({ stageId, totalLessons }) {
  // نمرر دالة للـ useState لتقرأ القيمة الأولية مرة واحدة فقط
  const [completedCount] = useState(() => getInitialProgress(stageId));

  // حساب النسبة المئوية
  const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="w-full">
      {/* نص التقدم */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm" style={{ color: "var(--muted)" }}>
          {completedCount} من {totalLessons} درس مكتمل
        </span>
        <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>
          {percentage}%
        </span>
      </div>

      {/* شريط التقدم */}
      <div
        className="w-full h-3 rounded-full overflow-hidden"
        style={{ background: "var(--border)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(90deg, var(--accent), var(--primary))`,
          }}
        />
      </div>
    </div>
  );
}
