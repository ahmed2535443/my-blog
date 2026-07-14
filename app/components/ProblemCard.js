"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function ProblemCard({
  id,
  title,
  difficulty = "easy",
  category,
  description,
  examples = [],
  hints = [],
  solution,
  solutionApproach,
}) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const { t } = useLanguage();

  const difficultyConfig = {
    easy: { label: t.problem.easy, color: "#22c55e", bg: "rgba(34, 197, 94, 0.1)" },
    medium: { label: t.problem.medium, color: "#fbbf24", bg: "rgba(251, 191, 36, 0.1)" },
    hard: { label: t.problem.hard, color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" },
  };
  const diff = difficultyConfig[difficulty] || difficultyConfig.easy;

  return (
    <div
      className="problem-card rounded-xl my-6 border-2 overflow-hidden"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-mono font-bold px-2 py-1 rounded"
            style={{
              background: "var(--background)",
              color: "var(--muted)",
            }}
          >
            #{id}
          </span>
          <span className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {category && (
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(56, 189, 248, 0.1)",
                color: "var(--primary)",
              }}
            >
              {category}
            </span>
          )}
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{
              background: diff.bg,
              color: diff.color,
            }}
          >
            {diff.label}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="px-5 py-4" style={{ color: "var(--foreground)" }}>
        <p className="leading-relaxed">{description}</p>
      </div>

      {/* Examples */}
      {examples.length > 0 && (
        <div className="px-5 pb-4">
          <p className="font-bold text-sm mb-2" style={{ color: "var(--secondary)" }}>
            📋 {t.problem.examples}
          </p>
          <div className="space-y-2">
            {examples.map((ex, i) => (
              <div
                key={i}
                className="rounded-lg p-3 text-sm"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <span className="font-bold text-xs" style={{ color: "var(--muted)" }}>
                      Input:
                    </span>
                    <pre
                      className="mt-1 text-xs font-mono"
                      style={{ color: "var(--foreground)", direction: "ltr", textAlign: "left" }}
                    >
                      {ex.input}
                    </pre>
                  </div>
                  <div>
                    <span className="font-bold text-xs" style={{ color: "var(--muted)" }}>
                      Output:
                    </span>
                    <pre
                      className="mt-1 text-xs font-mono"
                      style={{ color: "var(--accent)", direction: "ltr", textAlign: "left" }}
                    >
                      {ex.output}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="px-5 pb-4 flex gap-2 flex-wrap">
        {hints.length > 0 && (
          <button
            onClick={() => { setShowHint(!showHint); setShowSolution(false); }}
            className="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200"
            style={{
              background: showHint ? "var(--border)" : "rgba(251, 191, 36, 0.15)",
              color: showHint ? "var(--foreground)" : "var(--secondary)",
              cursor: "pointer",
              border: `1px solid ${showHint ? "var(--border)" : "rgba(251, 191, 36, 0.3)"}`,
            }}
          >
            💡 {showHint ? t.problem.hideHint : t.problem.showHint}
          </button>
        )}
        {solution && (
          <button
            onClick={() => { setShowSolution(!showSolution); setShowHint(false); }}
            className="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200"
            style={{
              background: showSolution ? "var(--border)" : "rgba(34, 197, 94, 0.15)",
              color: showSolution ? "var(--foreground)" : "var(--accent)",
              cursor: "pointer",
              border: `1px solid ${showSolution ? "var(--border)" : "rgba(34, 197, 94, 0.3)"}`,
            }}
          >
            ✅ {showSolution ? t.problem.hideSolution : t.problem.showSolution}
          </button>
        )}
      </div>

      {/* Hint */}
      {showHint && hints.length > 0 && (
        <div
          className="mx-5 mb-4 p-4 rounded-lg border"
          style={{
            background: "rgba(251, 191, 36, 0.05)",
            borderColor: "var(--secondary)",
          }}
        >
          <p className="font-bold text-sm mb-2" style={{ color: "var(--secondary)" }}>
            💡 {t.problem.hint}
          </p>
          <ul className="space-y-1">
            {hints.map((hint, i) => (
              <li
                key={i}
                className="text-sm"
                style={{ color: "var(--foreground)" }}
              >
                • {hint}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Solution */}
      {showSolution && solution && (
        <div
          className="mx-5 mb-4 rounded-lg overflow-hidden border"
          style={{
            background: "rgba(34, 197, 94, 0.05)",
            borderColor: "var(--accent)",
          }}
        >
          {solutionApproach && (
            <div
              className="px-4 py-2 border-b text-sm font-bold"
              style={{
                borderColor: "rgba(34, 197, 94, 0.2)",
                color: "var(--accent)",
              }}
            >
              🎯 {solutionApproach}
            </div>
          )}
          <pre
            className="p-4 text-sm font-mono overflow-x-auto"
            style={{
              color: "var(--foreground)",
              direction: "ltr",
              textAlign: "left",
              lineHeight: "1.7",
              margin: 0,
              background: "transparent",
            }}
          >
            {solution}
          </pre>
        </div>
      )}
    </div>
  );
}
