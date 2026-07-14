"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

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
  const [completedCount] = useState(() => getInitialProgress(stageId));
  const { t } = useLanguage();

  const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm" style={{ color: "var(--muted)" }}>
          {t.progress.completedOf.replace("{count}", completedCount).replace("{total}", totalLessons)}
        </span>
        <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>
          {percentage}%
        </span>
      </div>

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
