"use client";

import { useLanguage } from "./LanguageProvider";

export default function CheatSheet({ title, children }) {
  const { t } = useLanguage();

  return (
    <div
      className="rounded-xl p-6 my-6 border-2"
      style={{
        background: "var(--surface)",
        borderColor: "var(--accent)",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📋</span>
        <span className="font-bold text-lg" style={{ color: "var(--accent)" }}>
          {title || t.components.cheatSheet.title}
        </span>
      </div>

      <div style={{ color: "var(--foreground)" }}>{children}</div>
    </div>
  );
}
