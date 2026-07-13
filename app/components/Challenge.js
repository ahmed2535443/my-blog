"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Challenge({ title, description, children }) {
  const { t } = useLanguage();
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div
      className="rounded-xl p-6 my-6 border-2"
      style={{
        background: "var(--surface)",
        borderColor: "var(--secondary)",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🎯</span>
        <span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>
          {title || t.components.challenge.title}
        </span>
      </div>

      <div className="mb-4" style={{ color: "var(--foreground)" }}>
        {description}
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="px-5 py-2 rounded-lg font-bold text-sm transition-all duration-200"
        style={{
          background: showSolution ? "var(--border)" : "var(--secondary)",
          color: showSolution ? "var(--foreground)" : "var(--background)",
          cursor: "pointer",
        }}
      >
        {showSolution ? t.components.challenge.hideSolution : t.components.challenge.showSolution}
      </button>

      {showSolution && children && (
        <div
          className="mt-4 p-4 rounded-lg border"
          style={{
            background: "rgba(251, 191, 36, 0.05)",
            borderColor: "var(--secondary)",
          }}
        >
          <p className="font-bold mb-2" style={{ color: "var(--secondary)" }}>
            {t.components.challenge.solution}
          </p>
          <div style={{ color: "var(--foreground)" }}>{children}</div>
        </div>
      )}
    </div>
  );
}
