// =====================================================
// ملف: Exercise.js
// المكان: app/components/Exercise.js
// الوظيفة: مكون التمارين التفاعلية - يعرض تمرين مع مساحة للحلول
// =====================================================

"use client";

import { useState } from "react";

export default function Exercise({ title, description, initialCode, children }) {
  // =====================================================
  // 💡 الحالة:
  //    - userCode: الكود الذي يكتبه المستخدم
  //    - showSolution: هل يُظهر الحل أم لا
  // =====================================================
  const [userCode, setUserCode] = useState(initialCode || "");
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div
      className="rounded-xl p-6 my-6 border"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* عنوان التمرين */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">✏️</span>
        <span className="font-bold text-lg" style={{ color: "var(--primary)" }}>
          {title || "تمرين"}
        </span>
      </div>

      {/* وصف التمرين */}
      {description && (
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          {description}
        </p>
      )}

      {/* محرر الكود */}
      <textarea
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        dir="ltr"
        className="w-full p-4 rounded-lg border text-sm font-mono resize-y min-h-[120px] focus:outline-none focus:ring-2"
        style={{
          background: "#0f172a",
          color: "#e2e8f0",
          borderColor: "var(--border)",
          focusRingColor: "var(--primary)",
        }}
        placeholder="اكتب الكود هنا..."
        spellCheck={false}
      />

      {/* أزرار التحكم */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="px-5 py-2 rounded-lg font-bold text-sm transition-all duration-200"
          style={{
            background: showSolution ? "var(--border)" : "var(--accent)",
            color: showSolution ? "var(--foreground)" : "var(--background)",
            cursor: "pointer",
          }}
        >
          {showSolution ? "إخفاء الحل" : "اعرض الحل"}
        </button>
      </div>

      {/* عرض الحل */}
      {showSolution && children && (
        <div
          className="mt-4 p-4 rounded-lg border"
          style={{
            background: "rgba(34, 197, 94, 0.05)",
            borderColor: "var(--accent)",
          }}
        >
          <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
            الحل:
          </p>
          {children}
        </div>
      )}
    </div>
  );
}
