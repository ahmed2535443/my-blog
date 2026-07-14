"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Exercise({ title, description, initialCode, children }) {
  const { t } = useLanguage();
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
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">✏️</span>
        <span className="font-bold text-lg" style={{ color: "var(--primary)" }}>
          {title || t.components.exercise.title}
        </span>
      </div>

      {description && (
        <p className="mb-4" style={{ color: "var(--foreground)" }}>
          {description}
        </p>
      )}

      <textarea
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        dir="ltr"
        className="w-full p-4 rounded-lg border text-sm font-mono resize-y min-h-[120px] focus:outline-none focus:ring-2"
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
          borderColor: "var(--border)",
        }}
        placeholder={t.components.exercise.placeholder}
        spellCheck={false}
      />

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
          {showSolution ? t.components.exercise.hideSolution : t.components.exercise.showSolution}
        </button>
      </div>

      {showSolution && children && (
        <div
          className="mt-4 p-4 rounded-lg border"
          style={{
            background: "rgba(34, 197, 94, 0.05)",
            borderColor: "var(--accent)",
          }}
        >
          <p className="font-bold mb-2" style={{ color: "var(--accent)" }}>
            {t.components.exercise.solution}
          </p>
          {children}
        </div>
      )}
    </div>
  );
}
