// =====================================================
// ملف: Challenge.js
// المكان: app/components/Challenge.js
// الوظيفة: مكون التحديات - يعرض تحدٍّ للمتعلم مع زر إظهار الحل
// =====================================================

"use client";

import { useState } from "react";

export default function Challenge({ title, description, children }) {
  // =====================================================
  // 💡 "showSolution" لتتبع حالة عرض الحل
  //    المستخدم يضغط الزر ليظهر الحل
  // =====================================================
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div
      className="rounded-xl p-6 my-6 border-2"
      style={{
        background: "var(--surface)",
        borderColor: "var(--secondary)",
      }}
    >
      {/* عنوان التحدي */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🎯</span>
        <span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>
          {title || "تحدي"}
        </span>
      </div>

      {/* وصف التحدي */}
      <div className="mb-4" style={{ color: "var(--foreground)" }}>
        {description}
      </div>

      {/* محتوى إضافي (مثل توجيهات إضافية) */}
      {children && <div className="mb-4">{children}</div>}

      {/* زر إظهار الحل */}
      <button
        onClick={() => setShowSolution(!showSolution)}
        className="px-5 py-2 rounded-lg font-bold text-sm transition-all duration-200"
        style={{
          background: showSolution ? "var(--border)" : "var(--secondary)",
          color: showSolution ? "var(--foreground)" : "var(--background)",
          cursor: "pointer",
        }}
      >
        {showSolution ? "إخفاء الحل" : "اعرض الحل"}
      </button>

      {/* عرض الحل */}
      {showSolution && (
        <div
          className="mt-4 p-4 rounded-lg border"
          style={{
            background: "rgba(251, 191, 36, 0.05)",
            borderColor: "var(--secondary)",
          }}
        >
          <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
            الحل:
          </p>
          <div style={{ color: "var(--foreground)" }}>{children}</div>
        </div>
      )}
    </div>
  );
}
