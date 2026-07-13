"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Quiz({ question, options, correctAnswer, explanation }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = selected === correctAnswer;

  function handleSubmit() {
    if (selected === null) return;
    setSubmitted(true);
  }

  function handleReset() {
    setSelected(null);
    setSubmitted(false);
  }

  return (
    <div
      className="rounded-xl p-6 my-6 border"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">❓</span>
        <span className="font-bold text-lg" style={{ color: "var(--secondary)" }}>
          {t.components.quiz.title}
        </span>
      </div>

      <p className="text-lg font-medium mb-4" style={{ color: "var(--foreground)" }}>
        {question}
      </p>

      <div className="space-y-3 mb-6">
        {options.map((option, index) => {
          let borderColor = "var(--border)";
          let bgColor = "transparent";

          if (submitted) {
            if (index === correctAnswer) {
              borderColor = "var(--accent)";
              bgColor = "rgba(34, 197, 94, 0.1)";
            } else if (index === selected && !isCorrect) {
              borderColor = "var(--danger)";
              bgColor = "rgba(239, 68, 68, 0.1)";
            }
          } else if (index === selected) {
            borderColor = "var(--primary)";
            bgColor = "rgba(56, 189, 248, 0.1)";
          }

          return (
            <button
              key={index}
              onClick={() => !submitted && setSelected(index)}
              disabled={submitted}
              className="w-full text-right p-4 rounded-lg border-2 transition-all duration-200 flex items-center gap-3"
              style={{
                borderColor,
                background: bgColor,
                color: "var(--foreground)",
                cursor: submitted ? "default" : "pointer",
              }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  background: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                {index + 1}
              </span>
              <span>{option}</span>

              {submitted && index === correctAnswer && (
                <span className="mr-auto text-green-400">✓</span>
              )}
              {submitted && index === selected && !isCorrect && index !== correctAnswer && (
                <span className="mr-auto text-red-400">✗</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="px-6 py-2 rounded-lg font-bold transition-all duration-200"
            style={{
              background: selected !== null ? "var(--primary)" : "var(--border)",
              color: selected !== null ? "var(--background)" : "var(--muted)",
              cursor: selected !== null ? "pointer" : "not-allowed",
            }}
          >
            {t.components.quiz.checkAnswer}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-2 rounded-lg font-bold transition-all duration-200"
            style={{
              background: "var(--border)",
              color: "var(--foreground)",
              cursor: "pointer",
            }}
          >
            {t.components.quiz.tryAgain}
          </button>
        )}
      </div>

      {submitted && explanation && (
        <div
          className="mt-4 p-4 rounded-lg border"
          style={{
            background: isCorrect
              ? "rgba(34, 197, 94, 0.1)"
              : "rgba(239, 68, 68, 0.1)",
            borderColor: isCorrect ? "var(--accent)" : "var(--danger)",
          }}
        >
          <p className="font-bold mb-1" style={{ color: isCorrect ? "var(--accent)" : "var(--danger)" }}>
            {isCorrect ? t.components.quiz.correct : t.components.quiz.wrong}
          </p>
          <p style={{ color: "var(--foreground)" }}>{explanation}</p>
        </div>
      )}
    </div>
  );
}
